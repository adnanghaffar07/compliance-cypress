Feature: Test End To End
    Scenario: Register as an Organization
        Given I Access the site
        Then I click on login screen signup button
        When I click on secure pro signup button
        Then I click on popup no button
        Then I enter organization name "DELETE ME"
        Then I click on agree and continue button
        Then I click on email signup button
        Then I enter email "upworktesting@securecompliance.us"
        Then I enter name "Tim Test"
        Then I enter password "Testing_12345"
        Then I click on agree and signup button
        Then I see verify your email page
        # Then logout user

    Scenario: Sign In and Pay
        Given I Access the site
        Then I enter login email "upworktesting@securecompliance.us"
        Then I enter login password "Testing_12345"
        Then I click on login button
        Then I click on next button
        Then I click on proceed to payment button
        Then I enter card number "4242424242424242"
        Then I enter card expiry "05/26"
        Then I enter card cvc "213"
        Then I enter billing name "Tim"
        Then I enter billing postal code "M4B 0A3"
        Then I click on pay button
        # Then logout user    