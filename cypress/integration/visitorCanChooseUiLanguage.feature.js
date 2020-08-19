describe("Vistors can choose UI language", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
  });
  it("by choosing language to swedish", () => {
    cy.get("#change-language").click();
    cy.get("div[role='option']").contains("Svenska").click();
    // cy.get('[href="/articles/home"]').contains("Hem")
    cy.get('[href="/articles/culture"]').should("contain", "Kultur")
    cy.get("#category-header").should("contain", "Ekonomi")
    cy.get("#category-header").should("contain", "Internationellt")
    cy.get("#category-header").should("contain", "Livsstil")
    cy.get("#category-header").should("contain", "Lokala")
    cy.get("#category-header").should("contain", "Sport")
    cy.get("#header-login").should("contain", "Logga in")
    cy.get("#change-language").should("contain", "Språk")
  })
});