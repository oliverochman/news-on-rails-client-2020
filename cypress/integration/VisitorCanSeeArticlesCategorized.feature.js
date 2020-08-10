describe('Vistors can see Articles by Categories', () => {
  before(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
  });

  it("Visitors can see different categories", () => {
    cy.get("#category-header");
    cy.get("#economy").click();
    cy.get("#article-list").should("contain", "Bright Future");
    cy.get("#article-list").should("contain", "Management economy");
    cy.get("#article-list").should("contain", "Bankruptcy during Corona");
    cy.get("#article-list").should("not.contain", "Scrum Lord");
    cy.get("#article-list").should("not.contain", "Happy Campers");
  });


})