describe('Sports News', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4b47e5b6e75244ce97ed0fc9e88548e4', {
      statusCode: 200,
      fixture: 'articleData.json'
    })
    cy.visit('http://localhost:3000/')
  })
  it('Should see a homepage with articles', () => {
    cy.get('h1').contains('Sports News')
    cy.get('.article-cards').should('have.length', 5)
    cy.get('.article-cards').first().contains('Connor McDavid')
    cy.get('.article-cards').last().contains('Scottie Scheffler')
  })
  it('Should be able to click on a article and see detail about it', () => {
    cy.get('.article-cards').first().contains('Connor McDavid').click()
    cy.get('.article-detail').contains('Connor McDavid wins Conn Smythe as playoff MVP despite Oilers losing Stanley Cup Final to Panthers - The Associated Press')
    cy.get('button').contains('Home').click()
    cy.get('h1').contains('Sports News')
  })
  it('Shoulde be able to search for articles by a keyword', () => {
    cy.get('.input').type('lakers')
    cy.get('.article-cards').should('have.length', 1)
    cy.get('.article-cards').first().contains('Lakers Looking to Trade First Round Pick, Per Report - Sports Illustrated').click()
    cy.get('.article-detail').contains('The Lakers plans might include trading No. 17.')
    cy.get('button').contains('Home').click()
    cy.get('.article-cards').should('have.length', 5)
  })
})