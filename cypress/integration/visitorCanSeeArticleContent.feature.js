describe("Vistors can see Article content", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/2",
      response: "fixture:free_article_show.json",
    });
    cy.visit("/");
    cy.get("#article-2").within(() => {
      cy.get("button").should("contain", "Read more").click();
    });
  });
  it("displays the content of the article", () => {
    cy.get("#article-2").within(() => {
      cy.get("#title").should("contain", "Happy Campers");
      cy.get("#lead").should("contain", "Happy campers is always a winner");
      cy.get("#content").should(
        "contain",
        "Happy campers sounds awesome and this is the content"
      );
    });
    cy.get("#article-1").should("not.exist");
    cy.get("#article-3").should("not.exist");
  });
});