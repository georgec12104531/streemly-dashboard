describe("It tests table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Navigates to home page by default", () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/home");
    });
  });

  it("Make sure that the number of rows is 5", () => {
    cy.get(
      "#my-approvals div.MuiPaper-root.MuiTableContainer-root.MuiPaper-elevation1.MuiPaper-rounded table tbody"
    )
      .children()
      .should("have.length", 5);
  });
});
