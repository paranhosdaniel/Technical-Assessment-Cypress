class SearchPage {
  /**
   * Navigate to the DuckDuckGo homepage.
   */
  visit() {
    cy.visit("https://duckduckgo.com/"); // Open DuckDuckGo website
  }

  searchFor(term) {
    cy.get("#searchbox_input").type(term); // Enter search term into the search box
    cy.get('button[aria-label="Search"]').click(); // Click the search button
  }

  verifySearchResultsContain(term) {
    cy.get('[data-testid="result-title-a"]') // Select all search result titles
      .should("have.length.greaterThan", 0) // Ensure there is at least one search result
      .each(($el) => {
        // Iterate over each search result title
        cy.wrap($el)
          .invoke("text") // Extract the text content of the title
          .then((text) => {
            // Convert both the extracted text and the expected term to lowercase
            // to ensure a case-insensitive comparison.
            if (!text.toLowerCase().includes(term.toLowerCase())) {
              // Throw an error and fail the test immediately if the term is missing
              throw new Error(`Title does not contain '${term}': ${text}`);
            }
          });
      });
  }

  /**
   * Count and validate the number of regions in the "All Regions" field.
   * Ensures that the total count is greater than 10.
   */
  countRegions() {
    cy.get(
      "div.BDI1KtNF8HUPBZ4Cw_nK .XDlY0TtgvNNpAZYGOLff .M0ujmOhCHtsN1oLaSQki span.fdosLIuRgrWo7SyeqSUb"
    )
      .should("have.length.greaterThan", 10) // Ensure at least 10 regions exist
      .then(($elements) => {
        console.log(`Total regions found: ${$elements.length}`); // Log the total count
      });
  }
}

// Export a singleton instance of the SearchPage class for easy reuse in test cases.
export default new SearchPage();
