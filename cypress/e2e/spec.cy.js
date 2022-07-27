import { leafCarousel } from '../support/page-object/leaf-grow-example'
  
  describe('leaf-grow integration tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })


    // note carousel.js has laziLoad = true

    it('Making sure the first 4 images on the carousel are visible & images on the back of the carousel are not visible to end user', () => 
    {
      cy.get('[alt="Beats  Headphones"]').should('not.be.visible')
      cy.get('[alt="Rubix cube"]').should('not.be.visible')
      cy.get('[alt="Camera"]').should('be.visible')
      cy.get('[alt="Lighter"]').should('be.visible')
      cy.get('[alt="Sunglasses"]').should('be.visible')
      cy.get('[alt="Google Assistant"]').should('be.visible')
    })

    it('clicks on left arrow of the carousel and check correct images are displayed', () =>
    {
      // click on left arrow
      cy.get('[class="InfiniteCarouselArrowIcon InfiniteCarouselArrowPrevIcon"]').click()

      cy.get('[alt="Lighter"]').should('not.be.visible')
      cy.get('[alt="Camera"]').should('not.be.visible')
      cy.get('[alt="Sunglasses"]').should('not.be.visible')
      cy.get('[alt="Beats  Headphones"]').should('be.visible')
      cy.get('[alt="Smart watch"]').should('be.visible')
      cy.get('[alt="Rubix cube"]').should('be.visible')
      cy.get('[alt="Google Assistant"]').should('be.visible')
    })

    it('clicks on right arrow of the carousel and check correct images are displayed', () =>
    {
      // click on right arrow
      cy.get('[class="InfiniteCarouselArrowIcon InfiniteCarouselArrowNextIcon"]').click()

      cy.get('[alt="Lighter"]').should('not.be.visible')
      cy.get('[alt="Camera"]').should('not.be.visible')
      cy.get('[alt="Sunglasses"]').should('not.be.visible')
      cy.get('[alt="Beats  Headphones"]').should('be.visible')
      cy.get('[alt="Smart watch"]').should('be.visible')
      cy.get('[alt="Rubix cube"]').should('be.visible')
      cy.get('[alt="Google Assistant"]').should('be.visible')
    })

    it('click on both possible dots of the carouse and verify images', () =>
    {
      // click on second dot
      cy.get('[name="infinite-carousel-dots-1"]').click()

      cy.get('[alt="Lighter"]').should('not.be.visible')
      cy.get('[alt="Camera"]').should('not.be.visible')
      cy.get('[alt="Sunglasses"]').should('not.be.visible')
      cy.get('[alt="Beats  Headphones"]').should('be.visible')
      cy.get('[alt="Smart watch"]').should('be.visible')
      cy.get('[alt="Rubix cube"]').should('be.visible')
      cy.get('[alt="Google Assistant"]').should('be.visible')

      // click back on first dot
      cy.get('[name="infinite-carousel-dots-0"]').click()

      cy.get('[alt="Beats  Headphones"]').should('not.be.visible')
      cy.get('[alt="Smart watch"]').should('not.be.visible')
      cy.get('[alt="Rubix cube"]').should('not.be.visible')
      cy.get('[alt="Camera"]').should('be.visible')
      cy.get('[alt="Lighter"]').should('be.visible')
      cy.get('[alt="Sunglasses"]').should('be.visible')
      cy.get('[alt="Google Assistant"]').should('be.visible')
    })

})

