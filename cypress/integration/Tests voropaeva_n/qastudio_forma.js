describe('Автотесты для формы логина и пароля qastudio', function () {
   it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type("mail@mail.ru");
        cy.get("#restoreEmailButton").click();
        cy.contains("Успешно отправили пароль на e-mail");
        cy.get("#exitMessageButton > .exitIcon");
        })
})
 it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains("Авторизация прошла успешно");
        cy.get("#exitMessageButton > .exitIcon");
        })

 it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('Qa1studio');
        cy.get('#loginButton').click();
        cy.contains("Такого логина или пароля нет");
        cy.get("#exitMessageButton > .exitIcon");
        })
 it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german1@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains("Такого логина или пароля нет");
        cy.get("#exitMessageButton > .exitIcon");
        })