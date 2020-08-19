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
    cy.get('[href="/articles/culture"]').should("contain", "Kultur")
    cy.get('[href="/articles/economy"]').should("contain", "Ekonomi")
    cy.get('[href="/articles/lifestyle"]').should("contain", "Livsstil")
    cy.get("#header-login").should("contain", "Logga in")
    cy.get("#change-language").should("contain", "Språk")
  })
});