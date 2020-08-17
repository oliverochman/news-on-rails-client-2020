describe("subscriber can read", () => {
  context("article successfully", () => {
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
        response: "fixture:premium_article_show.json",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/2",
        response: "fixture:free_article_show.json",
      });

      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:subscriber_response.json",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:subscriber_reponse.json",
      });

      cy.visit("/");
    });
    it("without being logged in for none premium article", () => {
      cy.get("#article-2").within(() => {
        cy.get("button").should("contain", "Read more").click();
      });

      cy.get('#content').should(
        "contain",
        "Happy campers sounds awesome and this is the content"
      );
      cy.get("button#login").should("not.exist");
    });

    it("by being logged in to read premium article", () => {
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
        cy.get('#content').should(
          "contain",
          "A Scrum Lord punishes his coharts and rule the day with terror."
        );
    
        cy.get("button").should("contain", "Close article").click();
      });
    });
  });
});
describe("registered user can", () => {
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
        response: "fixture:premium_article_show.json",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/2",
        response: "fixture:free_article_show.json",
      });

      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:registered_response.json",
      });

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:registered_reponse.json",
      });

      cy.visit("/");
  })

  it("read none premium article", () => {
    cy.get("#article-2").within(() => {
      cy.get("button").should("contain", "Read more").click();
    });

    cy.get('#content').should(
      "contain",
      "Happy campers sounds awesome and this is the content"
    );
    cy.get("button#login").should("not.exist");
  });

  it("see message about becoming subscriber", () => {
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
      cy.get("p").should("contain", "You need to become a subscriber to read this article.")
      cy.get("button").should("contain", "Close article").click();
    });
  });
}); 
