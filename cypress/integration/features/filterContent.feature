Feature: Filter content

  Scenario: User can filter content
    Given I am in the home page
    When I select series
    And I filter them by title
    Then I see the content I was looking for