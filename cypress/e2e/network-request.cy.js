/// <reference types="cypress"/>
describe("network requests", () => {
  const comment = "Unable to find comment!";
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });
  it("GET request", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/comments/*",
      },
      {
        body: {
          postId: 1,
          id: 1,
          name: "test name 123",
          email: "test_123@email.com",
          body: "testing a xhr request",
        },
      }
    ).as("getComment");
    cy.get(".network-btn").click();
    cy.wait("@getComment").its("response.statusCode").should("eq", 200);
  });
  it("POST request", () => {
    cy.intercept("POST", "/comments").as("postComments");
    cy.get(".network-post").click();
    cy.wait("@postComments").should(({ request, response }) => {
      expect(request.body).to.include("email");
      expect(request.headers).to.have.property(
        "content-type",
        "application/x-www-form-urlencoded; charset=UTF-8"
      );
      expect(response.body).to.have.property(
        "name",
        "Using POST in cy.intercept()"
      );
    });
  });
  it("PUT request", () => {
    cy.intercept(
      {
        method: "PUT",
        url: "**/comments/*",
      },
      {
        statusCode: 404,
        body: {
          error: comment,
        },
        delay: 500,
      }
    ).as("putComment");
    cy.get(".network-put").click();
    cy.wait("@putComment");
    cy.get(".network-put-comment").should("contain", comment);
  });
  it("should ", () => {});
});
