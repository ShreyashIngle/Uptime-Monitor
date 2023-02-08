import { fireEvent, render, screen } from "@testing-library/react";
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
});

it("title should be visible", () => {
  const title = screen.queryByText(
    /Enter your credentials to access your account/
  );
  expect(title).toBeVisible();
});

it("email input filed should be empty on render", () => {
  const emailInput = screen.getByPlaceholderText("name@company.com");
  expect(emailInput.value).toBe("john@gmail.com");
});

it("email input should change", () => {
  const emailInput = screen.getByPlaceholderText("name@company.com");
  const testValue = "someone@gmail.com";

  fireEvent.change(emailInput, { target: { value: testValue } });
  expect(emailInput.value).toBe(testValue);
});

it("password input should change", () => {
  const emailInput = screen.getByPlaceholderText("name@company.com");
  const testValue = "someone@gmail.com";

  fireEvent.change(emailInput, { target: { value: testValue } });
  expect(emailInput.value).toBe(testValue);
});
