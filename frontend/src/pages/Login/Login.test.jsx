import { render, screen } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import Login from ".";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../app/store";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
})

it("title should be visible", () => {
  const title = screen.queryByText(/Enter your credentials to access your account/);
  expect(title).toBeVisible();
});

it("email input filed should be empty on render",() => {
  const emailInput = screen.getByPlaceholderText("name@company.com");
  expect(emailInput.value).toBe("john@gmail.com");
})
