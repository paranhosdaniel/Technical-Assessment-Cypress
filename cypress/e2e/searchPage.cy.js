// Import the SearchPage class to use its methods in the test
import SearchPage from "../pageObjects/SearchPage";

describe("DuckDuckGo Search Tests", () => {
  /**
   * Runs before each test case.
   * - Opens the DuckDuckGo search page.
   * - Performs a search for the term "android".
   */
  beforeEach(() => {
    SearchPage.visit(); // Navigate to the DuckDuckGo homepage
    SearchPage.searchFor("android"); // Enter "android" as the search term and submit
  });

  /**
   * Test: Verify that search results contain the term "android".
   * This test checks whether each result includes "android" (case-insensitive).
   */
  it('Test case 1 - should search for "android" and verify results', () => {
    SearchPage.verifySearchResultsContain("android"); // Validate search results contain "android"
  });

  /**
   * Test: Count and validate the number of regions in the "All Regions" field.
   * Ensures that the total number of available regions is greater than 10.
   */
  it("Test case 2 - should count and validate the number of regions in All Regions field", () => {
    SearchPage.countRegions(); // Check if at least 10 regions exist
  });
});
