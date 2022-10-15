
describe('Тестирование формы авторизации staya', function () {
    
    it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('natalia.voropaeva@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('8Qy-VvV+');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains("Мои заказы");
        })
})
it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('natalia.voropaeva@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('1Qy-VvV+');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains("Невозможно войти с предоставленными учетными данными");
        })
