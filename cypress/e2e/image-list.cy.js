describe("image list test", () => {
  beforeEach(() => {
    // Navigate to the image search page
    cy.visit("/");
  });

  it.only("Verifies Tags in Image Modals After Searching for 'Food'", () => {
    // Type "Food" into the search field
    cy.getData("search-field-input").type("food").wait(600);

    // Iterate through each image in the search results
    cy.getData("image-list-container")
      .find("[data-test^='image-']")
      .should("have.length", 20)
      .each(($image) => {
        // Click on each image to open its modal view
        cy.wrap($image).click();

        const imageTestAttr = $image.attr("data-test");
        const index = imageTestAttr.replace("image-", "");

        const modalSelector = `[data-test="modal-${index}"]`;

        cy.get(modalSelector).should("be.visible");

        // Validate the presence of tags associated with each image
        cy.get(modalSelector)
          .find('[data-test="tags"]')
          .should("have.length.greaterThan", 0);

        cy.get(modalSelector).within(() => {
          cy.get("button").click();
        });

        cy.get(modalSelector).should("not.exist");
      });
  });
});
