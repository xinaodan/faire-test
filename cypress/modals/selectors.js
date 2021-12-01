export const selectors = {
    common: {
        searchBar: 'input[aria-label="Search for products or brands"]',
        searchSuggestedTerms: 'ul[data-test-id=suggested-terms] > li'
    },

    searchResultsPage: {
        productPhotos: 'span[data-test-id=handler-visible-container-product-tile] img',
        productNames: 'span[data-test-id=handler-visible-container-product-tile] label > span'
    },

    signUpModal: {
        createAccountButton: 'button[data-test-id=createAccountButton]'
    }
}