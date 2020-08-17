describe("subscriber can login", () => {
  context("successfully", () => {
    before(() => {
      cy.server();

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles",
        response: "fixture:articles_index.json",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/1",
        response: "fixture:article_show.json",
      });

      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:login_response.json",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:login_response.json",
      })

      cy.visit("/");
    });
    it("subscriber can not see article content before login", () => {
      cy.get("#article-1").within(() => {
        cy.get("button").should("contain", "Read more").click();
      });
      cy.get("button#login").should("be.visible");
    });

    it("subscriber can login", () => {
      cy.get("button#login").click();
      cy.get("#login-form").within(() => {
        cy.get("#email").type("subscriber@mail.com");
        cy.get("#password").type("password");
        cy.get("#login-submit").click();
      });
      cy.get("#article-1").within(() => {
        cy.get("#title").should("contain", "Scrum Lord");
        cy.get("#lead").should("contain", "Lord of all coharts");
        cy.get("button").should("contain", "Read more").click();
      });
      cy.get("#content")
        .contains(
          "A Scrum Lord punishes his coharts and rule the day with terror."
        )
        .should("be.visible");
    });
  });
});
