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
    cy.get("#article-1").within(() => {
      cy.get("button").should("contain", "Read more").click();
    });
  });
  it("displays the content of the article", () => {
    cy.get("#article-1").within(() => {
      cy.get("#title").should("contain", "Scrum Lord");
      cy.get("#lead").should("contain", "Lord of all coharts");
      cy.get("#content").should(
        "contain",
        "A Scrum Lord punishes his coharts and rule the day with terror."
      );
    });
    cy.get("#article-2").should("not.exist");
    cy.get("#article-3").should("not.exist");
  });
});