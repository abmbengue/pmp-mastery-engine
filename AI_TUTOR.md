# AI Tutor

## Architecture

```
UI (AiTutorPanel)
    ↓ HTTP
/api/ai-tutor  (session + Zod validation + context loader)
    ↓
AiTutorService
    ↓
AiTutorPort
    ├── NoopAiTutor      (default when no key)
    ├── MockAiTutor      (tests / local demos)
    └── OpenAiCompatibleAiTutor  (optional real provider via fetch)
```

React components never import a provider. They only call `/api/ai-tutor`.

Recommendation engine (`recommendNextLearning`) is **deterministic** and separate from the AI Tutor. The AI does not choose the next lesson.

## Configuration

Server-only environment variables (see `.env.example`):

| Variable | Purpose | Default |
|---|---|---|
| `AI_PROVIDER` | `noop` \| `mock` \| `openai` | `noop` |
| `AI_MODEL` | Model id for OpenAI-compatible API | `gpt-4o-mini` |
| `AI_API_KEY` | Provider secret | unset → falls back to noop |
| `AI_BASE_URL` | Chat completions base URL | `https://api.openai.com/v1` |
| `AI_TIMEOUT_MS` | Request timeout | `20000` |

Never put `AI_API_KEY` in client code, Git commits, or browser bundles.

## Security

- Session required on `/api/ai-tutor`
- Inputs validated with Zod
- Context loader sends only educational fields (academy/course/module/lesson/skill/question)
- Never sends password, passwordHash, or other users' data
- HINT mode omits correct answers from the provider prompt
- User free-text truncated; technical logs omit secrets and full private content
- Safety rules forbid personalized financial/legal/tax advice and PMBOK reproduction

## Provider

- **noop**: app works without any AI key (CI, demo, offline)
- **mock**: deterministic pedagogical replies for tests/E2E
- **openai**: OpenAI-compatible Chat Completions via native `fetch` (no SDK lock-in)

Future providers (Anthropic, etc.) implement `AiTutorPort` and register in `createAiTutorProvider`.

## Modes

| Mode | Intent |
|---|---|
| `HINT` | Clue only — do not reveal answer |
| `EXPLAIN` | Simple concept explanation |
| `TEACH` | Explain + example + check question |
| `EXPLAIN_MISTAKE` | Help after a wrong quiz answer |

## Testing

- Unit: Noop, Mock, prompts (HINT redaction), service error wrapping
- API: unauthorized, invalid body, success (mock), provider failure → 503
- E2E uses `AI_PROVIDER=mock` (see `playwright.config.ts`)

## Fallback

If the provider is unavailable, times out, rate-limits, or returns invalid content:

- API responds with `ai_tutor_unavailable`
- UI shows localized “AI Tutor is temporarily unavailable.”
- Learning flow continues without AI

## Recommendations

`src/modules/learning-engine/recommendation-service.ts`

Priority:

1. WEAK skills → linked incomplete lesson  
2. LEARNING skills → linked incomplete lesson  
3. IN_PROGRESS lesson  
4. Next incomplete lesson  
5. None  

Displayed on Dashboard as **Recommended for you** with an explicit reason string.

## Future providers

1. Implement `AiTutorPort`
2. Add a branch in `createAiTutorProvider`
3. Document env vars in this file
4. Keep Noop as the safe default
