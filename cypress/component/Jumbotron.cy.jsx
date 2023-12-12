import JumboTron from "../../src/components/jumbotron-component";
import "./style.css";

describe("Jumbotron.cy.jsx", () => {
  it("should not make an API call if input text is cleared before the debounce delay", () => {
    cy.intercept(
      "GET",
      "https://api.unsplash.com/search/photos?per_page=20&query=food&client_id=t5oy6hYlHQFOIcccOedFa4lzR8qBD04cZW2ZeffF6ew"
    ).as("apiCall");

    cy.mount(<JumboTron />);

    // Type 'food' into the search field
    cy.getData("search-field-input").type("food");

    // Wait for a portion of the debounce delay (e.g., 300ms) before clearing the input
    cy.wait(300);

    // Clear the search field before the debounce delay completes
    cy.getData("search-field-input").clear();

    // Ensure no API call was initiated after clearing the field within the debounce timeframe
    cy.get("@apiCall").should("not.exist");
  });
});
