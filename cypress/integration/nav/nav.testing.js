describe("It tests the navigation bar to properly navigate to differnt URLs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('Navigates to home page when the home button is clicked', () => {
    cy.location('host')
  })
  
});
