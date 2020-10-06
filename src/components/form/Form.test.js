import React from "react";
import Form from "./Form";
import { render, screen } from "../test-utils";

describe("form component", () => {
  it("should display a FormItem for each object on its item list", () => {
    const testItems = [...Array(3).keys()].map((i) => ({
      label: `Item${i}`,
      type: "string",
      stateSetter: null,
    }));

    render(<Form items={testItems}></Form>);

    testItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });
});
