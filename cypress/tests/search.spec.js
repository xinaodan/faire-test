import { selectors } from '../modals/selectors'

describe('Search with logged out user', () => {
  describe('Search dropdown', () => {
    // Ideally, before is preferred here
    // However, beforeEach is used so the alias refinedSearchTerms can be reused in each test
    // Open issue: https://github.com/cypress-io/cypress/issues/665
    beforeEach(() => {
      cy.visit('')
      cy.get(selectors.common.searchBar).type('Cand')
      cy.get(selectors.common.searchSuggestedTerms).as('refinedSearchTerms')
    })

    it('should show the refined search terms', () => {
      cy.get('@refinedSearchTerms')
        .should('be.visible')
    })

    it('should allow user to search by clicking the refined search term', () => {
      cy.get('@refinedSearchTerms').first().as('firstRefinedSearchTerm')
      cy.get('@firstRefinedSearchTerm').invoke('text').then((refinedTermText) => {
        cy.get('@firstRefinedSearchTerm').first().click()
        cy.url({decode: true}).should('include', `search?q=${refinedTermText}`)
      })
    })
  })
    
  describe('Search results', () => {
    before(() => {
      cy.visit('/search?q=candles')
    })

    it('should display product photo', () => {
      cy.get(selectors.searchResultsPage.productPhotos).each(($el, index, $list) => {
        cy.wrap($el).should('be.visible')
      })
    })

    it('should display product name', () => {
      cy.get(selectors.searchResultsPage.productNames).each(($el, index, $list) => {
        cy.wrap($el).should('be.visible')
      })
    })

    it('should ask user to sign in when any product is clicked', () => {
      cy.get(selectors.searchResultsPage.productPhotos).first().click({force: true})
      cy.get(selectors.signUpModal.createAccountButton).should('be.visible')
    })
  })
})