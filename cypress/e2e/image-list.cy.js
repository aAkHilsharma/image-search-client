describe("image list test", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.unsplash.com/search/photos?per_page=20&query=peace&client_id=t5oy6hYlHQFOIcccOedFa4lzR8qBD04cZW2ZeffF6ew"
    ).as("fetchImagesInitially");
    // Navigate to the image search page
    cy.visit("/");
    cy.wait("@fetchImagesInitially")
      .its("response.statusCode")
      .should("eq", 200);
  });

  it.only("Verifies Tags in Image Modals After Searching for 'Food'", () => {
    const url =
      "https://api.unsplash.com/search/photos?per_page=20&query=food&client_id=t5oy6hYlHQFOIcccOedFa4lzR8qBD04cZW2ZeffF6ew";

    cy.intercept("GET", url).as("fetchImagesAfterQuery");

    // Type "Food" into the search field
    cy.getData("search-field-input").type("food");

    cy.wait("@fetchImagesAfterQuery")
      .its("response.statusCode")
      .should("eq", 200);

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
