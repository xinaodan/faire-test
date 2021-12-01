export const selectors = {
    common: {
        searchBar: 'input[aria-label="Search for products or brands"]',
        searchSuggestedTerms: 'ul[data-test-id=suggested-terms] > li'
    },

    frontPage: {
        brands: 'div[aria-hidden=false] a[class^= BrandTileForCarousel__TrackedLinkWrapper]'
    },

    brandPage: {
        readStroyLink: 'div.BrandInfo__StyledColumn-okpchy-1 > button',
        productTiles: 'div[class^=BrandInfo__TabletAndAbove] a[class^=ProductTile__ProductLink]',
        storyModal: 'div[class^=StoryModal__ModalContentContainer]',
        location: 'div.StoryModal__MakerFactsSection-vqfals-4 > p:nth-of-type(2)',
        establishedYear: 'div.StoryModal__MakerFactsSection-vqfals-4 > p:nth-of-type(4)',
        story: 'p.StoryModal__StoryContainer-vqfals-6'
    },

    searchResultsPage: {
        productPhotos: 'span[data-test-id=handler-visible-container-product-tile] img',
        productNames: 'span[data-test-id=handler-visible-container-product-tile] label > span'
    },

    signUpModal: {
        createAccountButton: 'button[data-test-id=createAccountButton]'
    }
}