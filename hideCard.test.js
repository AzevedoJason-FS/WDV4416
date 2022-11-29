// Requirements
// TDD - create test for a module that will:
// obscure credit card number except the last 4 digits
// Test make sure they function obscures credit card numbers that are between the Length of 12 and 16 digits
// input: 123456789012
// output: XXXXXXXX9012

const hideCard = require("./hideCard")

// create a module that takes in prices in array and returns total

describe("Total Module Test", () => {
    test("As a user I want to be able to get last 4digits of card obscured", () => {
        expect(hideCard("1111111111334344")).toEqual('************4344')
    });
    test("As a user I expect an error for invalid credit card number (19chars)", () => {
        expect(hideCard("1234567891012121212")).toEqual('Invalid Credit Card')
    });
    test("As a user I expect an error for invalid credit card number (10chars)", () => {
        expect(hideCard("1234567899")).toEqual('Invalid Credit Card')
    });
})