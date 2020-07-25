describe('Vistors can see Articles by Categories', () => {
  before(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: "fixture:articles_index.json",
    });
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles/lifestyle',
      response: "fixture:articles_categorized_index.json",
    });
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles/lifestyle/1',
      response: "fixture:article_show.json",
    });

    cy.visit("/");

  });

  it("Visitors can see different categories", () => {
    cy.get('button').should('contain', "economy").click()
    cy.get('button').should('contain', "sports").click()
    cy.get('button').should('contain', "lifestyle").click()

  });
  it("Visitors can see list of articles in specific category", () => {
    cy.get('#article-1').within(() => {
      cy.get('#title').should('contain', "Scrum Lord")
      cy.get('#lead').should('contain', "Lord of all coharts")
      cy.get('button').should('contain', "Read more").click()
    })
    cy.get('#article-2').within(() => {
      cy.get('#title').should('contain', "Happy Campers")
      cy.get('#lead').should('contain', "Happy campers is always a winner")
      cy.get('button').should('contain', "Read more").click()
    })

  });
  it('displays the content of the article in specific category', () => {
    cy.get('#article-1').within(() => {
      cy.get('#title').should('contain', "Scrum Lord")
      cy.get('#lead').should('contain', "Lord of all coharts")
      cy.get('#content').should('contain', "A Scrum Lord punishes his coharts and rule the day with terror.")
    })
    cy.get('#article-2').should("not.exist")
    cy.get('#article-3').should("not.exist")
  })
})