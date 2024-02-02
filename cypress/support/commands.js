// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('addData', (randomData) => {
    cy.fixture("data.json").then((data) => {
        data.name = randomData;
        data.email = `${randomData}@gmail.com`;
    }).as("data");
});

Cypress.Commands.add('createUser', (data) => {
    cy.request({
        url: "/",
        method: "POST",
        body: data,
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `${Cypress.env("Token")}` 
        }
    });
});

Cypress.Commands.add('getUser', (id) => {
    cy.request({
        url: `/${id}`,
        method: "GET",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `${Cypress.env("Token")}` 
        }
    });
});

Cypress.Commands.add('deleteUser', (id) => {
    cy.request({
        url: `/${id}`,
        method: "DELETE",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `${Cypress.env("Token")}` 
        }
    });
});