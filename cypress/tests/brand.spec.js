import { selectors } from '../modals/selectors'

describe('Brand with logged out user', () => {
  describe('Front page', () => {
    // Ideally, before is preferred here
    // However, beforeEach is used so the alias topSellingBrands can be reused in each test
    // Open issue: https://github.com/cypress-io/cypress/issues/665
    beforeEach(() => {
      cy.visit('')

      // This is a workaround to find the top selling brands elements
      // as the elements are only loaded while scrolling to their position
      cy.scrollTo('0%', '70%')
      cy.get(selectors.frontPage.brands).as('topSellingBrands')
    })

    it('should display top selling brands', () => {
      cy.get('@topSellingBrands').should('be.visible')
    })

    it('should navigate user to the brand page when user clicks on a brand', () => {
      cy.get('@topSellingBrands').first().click()
      cy.url().should('include', 'brand/b')
    })
  })

  describe('Brand page', () => {
      beforeEach(() => {
        // Ideally should use a more reliable way to get the brand url instead of hardcode 
        cy.visit('/brand/b_5g5bvol3h2')
      })

      describe('Brand story modal', () => {
        beforeEach(() => {   
          cy.get(selectors.brandPage.readStroyLink).click()
        })

        it('should be displayed when user clicks on read their story link', () => {
          cy.get(selectors.brandPage.storyModal).should('be.visible')
        })

        it('should display brand location', () => {
          cy.get(selectors.brandPage.location).should('be.visible')
        })

        it('should display brand established year', () => {
          cy.get(selectors.brandPage.establishedYear).should('be.visible')
        })

        it('should display brand story', () => {
          cy.get(selectors.brandPage.story).should('be.visible')
        })
      })

      it('should be filterable by product category', () => {
        // Sorry I was unable to identity the filter on Brand page
        // Will need more clarification on this requirement 
      })

      it('should ask user to sign in when any product is clicked', () => {
          cy.get(selectors.brandPage.productTiles).first().click()
          cy.get(selectors.signUpModal.createAccountButton).should('be.visible')
      })
  })
})