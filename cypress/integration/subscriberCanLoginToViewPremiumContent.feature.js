describe("subscriber can login", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles",
        response: "fixture:articles_index.json",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/1",
        response: "fixture:first_article_show.json",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/2",
        response: "fixture:second_article_show.json",
      });

      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:login_response.json",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:login_response.json",
      });

      cy.visit("/");
    });
    it("but can see content of none premium article", () => {
      cy.get("#article-2").within(() => {
        cy.get("button").should("contain", "Read more").click();
      });

      cy.get('#content').should(
        "contain",
        "Happy campers sounds awesome and this is the content"
      );
      cy.get("button#login").should("not.exist");
    });

    it("to see content of premium article", () => {
      cy.get("#article-1").within(() => {
        cy.get("button").should("contain", "Read more").click();
      });
      cy.get("button#login").should("be.visible");
      cy.get('#content').should('not.exist')
      cy.get("button#login").click();
      cy.get("#login-form").within(() => {
        cy.get("#email").type("subscriber@mail.com");
        cy.get("#password").type("password");
        cy.get("#login-submit").click();
      });
      cy.get("#article-1").within(() => {
        cy.get("#title").should("contain", "Scrum Lord");
        cy.get("#lead").should("contain", "Lord of all coharts");
        cy.get("button").should("contain", "Close article").click();
      });
      // cy.get("#content")
      //   .contains(
      //     "A Scrum Lord punishes his coharts and rule the day with terror."
      //   )
      //   .should("be.visible");
    });
  });
});
