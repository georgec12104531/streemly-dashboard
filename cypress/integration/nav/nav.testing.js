describe("It tests the navigation bar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Navigates to home page by default", () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/home");
    });
  });

  it("Navigates to new request page when the new request button is clicked", () => {
    cy.get("#2_new-request").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/new-request");
    });
  });

  it("Navigates to recent request page when the recent request button is clicked", () => {
    cy.get("#3_recent-request").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/recent-request");
    });
  });

  it("Navigates to all request page when the all request button is clicked", () => {
    cy.get("#4_all-request").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/all-request");
    });
  });

  it("Navigates to workflow page when the workflow button is clicked", () => {
    cy.get("#5_workflow").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/workflow");
    });
  });

  it("Navigates to home page when the home button is clicked", () => {
    cy.get("#1_home").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/home");
    });
  });

  it("Renders the corresponding component when the nav item is clicked", () => {
    cy.get("#2_new-request").click();
    cy.get("#1_home").click();

    cy.get(".home-main-container").should("be.visible");
  });

  it("Highlights the selected navigation item, and unselected the remainder nav items", () => {
    cy.get("#2_new-request").click();
    cy.get("#2_new-request").should("have.class", "selected");
    cy.get("#1_home").should("have.class", "unselected");

    cy.get("#4_all-request").click();
    cy.get("#4_all-request").should("have.class", "selected");
    cy.get("#2_new-request").should("have.class", "unselected");
  });
});
