import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

beforeEach(() => {
  window.localStorage.clear();
});

describe("pmp-local flow", () => {
  it("shows home and start action", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("PMP MASTERY")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "COMMENCER" })).toBeInTheDocument();
  });

  it("navigates lesson to question and validates answer", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/learn/what-is-project-management"]}>
        <App />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: "J'AI COMPRIS" }));

    const validateButton = await screen.findByRole("button", { name: "VALIDER" });
    const options = await screen.findAllByRole("button");
    const answerOptions = options.filter((button) =>
      button.className.includes("option")
    );

    await user.click(answerOptions[0]!);
    await user.click(validateButton);

    expect(await screen.findByText(/Bonne réponse :/)).toBeInTheDocument();
  });
});
