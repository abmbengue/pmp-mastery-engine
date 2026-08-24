/**
 * Minimal PDF 1.4 text writer (Latin-1 / WinAnsi-friendly escapes).
 * No external PDF dependency — educational report export only.
 */

function escapePdfString(input: string): string {
  // Map common Latin-1 / French chars to PDF octal where needed; strip unsupported.
  let out = "";
  for (const ch of input) {
    const code = ch.charCodeAt(0);
    if (ch === "\\" || ch === "(" || ch === ")") {
      out += `\\${ch}`;
    } else if (code >= 32 && code <= 126) {
      out += ch;
    } else if (code >= 160 && code <= 255) {
      out += `\\${code.toString(8).padStart(3, "0")}`;
    } else {
      // Approximate common Unicode punctuation
      if (ch === "—" || ch === "–") out += "-";
      else if (ch === "“" || ch === "”" || ch === "„") out += '"';
      else if (ch === "‘" || ch === "’") out += "'";
      else if (ch === "…") out += "...";
      else out += "?";
    }
  }
  return out;
}

function wrapLines(text: string, maxLen: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    const next = current ? `${current} ${w}` : w;
    if (next.length > maxLen && current) {
      lines.push(current);
      current = w;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

export function buildSimplePdf(lines: string[], title: string): Uint8Array {
  const contentLines: string[] = [];
  let y = 800;
  contentLines.push("BT");
  contentLines.push("/F1 14 Tf");
  contentLines.push(`50 ${y} Td`);
  contentLines.push(`(${escapePdfString(title)}) Tj`);
  y -= 28;
  contentLines.push("/F1 10 Tf");

  for (const raw of lines) {
    for (const line of wrapLines(raw, 90)) {
      if (y < 50) break;
      contentLines.push(`0 -14 Td`);
      contentLines.push(`(${escapePdfString(line)}) Tj`);
      y -= 14;
    }
  }
  contentLines.push("ET");
  const stream = contentLines.join("\n");
  const streamLen = Buffer.byteLength(stream, "latin1");

  const objects: string[] = [];
  objects.push("1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj\n");
  objects.push("2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj\n");
  objects.push(
    "3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources<< /Font<< /F1 5 0 R >> >> >>endobj\n"
  );
  objects.push(
    `4 0 obj<< /Length ${streamLen} >>stream\n${stream}\nendstream\nendobj\n`
  );
  objects.push(
    "5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>endobj\n"
  );

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];
  for (const obj of objects) {
    offsets.push(Buffer.byteLength(pdf, "latin1"));
    pdf += obj;
  }
  const xrefPos = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefPos}\n%%EOF`;

  return new Uint8Array(Buffer.from(pdf, "latin1"));
}
