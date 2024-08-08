const searchAttraction = (query: string) => {
  cy.get("[data-cy=search-input]").type(query);
  cy.get("[data-cy=search-button]").click();
};

const selectAttraction = () => {
  cy.get("[data-cy=select-attraction-button]").click();
};

const selectYoutubeVideo = () => {
  cy.get("[data-cy=view-youtube-thumb-1]").click();
};

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the home page", () => {
    cy.get("[data-cy=search-input]").should("exist");
    cy.get("[data-cy=search-button]").should("exist");
  });

  it("should search input and button works", () => {
    searchAttraction("Jota Quest");

    cy.get("[data-cy=select-attraction-content]").should("exist");
    cy.get("[data-cy=select-attraction-button]").should("exist");
  });

  it("should render error message", () => {
    searchAttraction("error-mock");

    cy.get("[data-cy=error-frame]").should("exist");
  });

  it("should select attraction button works", () => {
    searchAttraction("Jota Quest");
    selectAttraction();

    cy.get("[data-cy=show-attraction-info]").should("exist");
    cy.get("[data-cy=show-attraction-badges]").should("exist");
  });

  it("should render youtube card", () => {
    searchAttraction("Jota Quest");
    selectAttraction();

    cy.get("[data-cy=view-youtube-card]").should("exist");
    cy.get("[data-cy=view-youtube-thumb-1]").should("exist");
  });

  it("should select youtube card", () => {
    searchAttraction("Jota Quest");
    selectAttraction();
    selectYoutubeVideo();

    cy.get("[data-cy=youtube-player]").should("exist");
  });

  it("should close youtube modal", () => {
    searchAttraction("Jota Quest");
    selectAttraction();
    selectYoutubeVideo();

    cy.get("[data-cy=close-youtube-modal]").click();
    cy.get("[data-cy=youtube-player]").should("not.exist");
  });
});
