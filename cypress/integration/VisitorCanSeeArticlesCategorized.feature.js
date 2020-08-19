describe("Vistors can see Articles by Categories", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
  });

  it("Visitors can see economy categories", () => {
    cy.get(".category-header").within(() => {
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles**",
        response: "fixture:economy_index.json",
      });
      cy.get('[href="/articles/economy"]').click();
    });

    cy.get(".article-list").should("contain", "Bright Future");
    cy.get(".article-list").should("contain", "Management economy");
    cy.get(".article-list").should("contain", "Bankruptcy during Corona");
    cy.get(".article-list").should("not.contain", "Scrum Lord");
  });

  it("Visitors can see lifestyle categories", () => {
    cy.get(".category-header").within(() => {
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles**",
        response: "fixture:lifestyle_index.json",
      });
      cy.get('[href="/articles/lifestyle"]').click();
    });

    cy.get(".article-list").should("contain", "Scrum Lord");
    cy.get(".article-list").should("not.contain", "Bankruptcy during Corona");
  });

  it("Visitors can see sports categories", () => {
    cy.get(".category-header").within(() => {
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles**",
        response: "fixture:sports_index.json",
      });
      cy.get('[href="/articles/sports"]').click();
    });

    cy.get(".article-list").should("contain", "Happy Campers");
    cy.get(".article-list").should("not.contain", "Bankruptcy during Corona");
  });
});