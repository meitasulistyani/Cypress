/// <reference types="cypress" />

describe ('visit saucedemo web',function () {
 this.beforeEach(()=>{
    cy.visit('https://www.saucedemo.com')
 
    });
    it('Login with standard user', ()=>{
    cy.get('#user-name.input').clear()
    cy.get('#user-name.input').type('standard_user')
    cy.get('#password.input').clear()
    cy.get('#password.input').type('secret_sauce')
    cy.get('#login-button.submit').click()

});

it('Login with locked_out_user', ()=>{
    cy.get('#user-name.input').clear()
    cy.get('#user-name.input').type('locked_out_user')
    cy.get('#password.input').clear()
    cy.get('#password.input').type('secret_sauce')
    cy.get('#login-button.submit').click()
    cy.get('h3').should('contain.text','Epic sadface: Sorry, this user has been locked out')
  
});

it('Login with problem_user', ()=>{
    cy.get('#user-name.input').clear()
    cy.get('#user-name.input').type('problem_user')
    cy.get('#password.input').clear()
    cy.get('#password.input').type('secret_sauce')
    cy.get('#login-button.submit').click()
});