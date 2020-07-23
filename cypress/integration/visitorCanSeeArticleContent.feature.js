describe('Vistors can see Article content', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
    cy.get('#article-1').within(() => {
      cy.get('#title').should('contain', "Scrum Lord")
      cy.get('#lead').should('contain', "Lord of all coharts")
      cy.get('button').click()
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles/1',
      response: "fixture:article_show.json", 
    })
  })
  it('displays the content of the article', () => {
    cy.get('#article-1').within(() => {
      cy.get('#title').should('contain', "Scrum Lord")
      cy.get('#lead').should('contain', "Lord of all coharts")
      cy.get('#content').should('contain', "There are fishy rumers about a guy taken the responsibility of leading all coharts due to his outstanding management skills!")
    })
  })
})