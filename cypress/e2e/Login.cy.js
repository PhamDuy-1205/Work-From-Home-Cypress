//*     ---- Import Start ---- 
/// <reference types="cypress"/>
const general = require('../Variables/general_data')
const data = require('../Variables/login')
require("cypress-plugin-tab");
const login = require('../Data/Login.json')
const urls = require('../Data/Login_url.json')
//*     ---- Import End ---- 


//*     ---- Code Start ---- 
describe("Update Excel List", function(){
    it('Updating Excel', function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })
})


describe.only("URL", () => {

    urls.forEach(val => {
        it(Object.values(val)[0], function(){
            cy.visit(Object.values(val)[1])
            cy.url().should('eq', general.url.login)
        })
    });

    it("Đã Login vào lại trang login", function(){
        cy.visit(general.url.main)
        cy.login(general.user.username_right, general.user.userpass_right)
        cy.wait(500)
        cy.url().should('eq',general.url.login)
    })
})


describe('MH - Login', () => {

    beforeEach(function(){
        cy.visit(general.url.main)
    });


    login.forEach(val => {
        const test_case_name = Object.values(val)[0]
        const username = Object.values(val)[1]
        const password = Object.values(val)[2]
        const notifi = Object.values(val)[3]
        it(test_case_name, function(){
            cy.login(username, password)
            cy.wait(2000)
            if(username != 'null' && password != 'null')
            {
                if((username).length <= 3)
                {
                    cy.get(data.selector.notify_warning)
                        .should("be.visible")
                        .should("eq","username_min_3_characters")
                }
                else if((username).length > 10)
                {
                    cy.get(data.selector.notify_error_username)
                        .should("be.visible")
                        .should("contain", "Nội dung vượt quá giới hạng cho phép")
                }
    
                else
                {
                    cy.url().then(U => {
                        cy.wait(2000)
                        const url = U.toString();
                        if(url != 'https://wfh.csvdemo.com/login')
                        {
                            cy.url().should(`eq`,general.url.main)
                        }
                        else{
                            cy.get(data.selector.notify_warning).invoke('text').should(`eq`, notifi)
                        }
                      })
                      
                }

            }
            else
            {
                if(username == 'null')
                {
                    cy.get(data.selector.notify_error_username).invoke('text')
                        .should(`be.visible`)
                        .should(`eq`,notifi)
                }
                if(password == 'null')
                {
                    cy.get(data.selector.notify_error_password).invoke('text')
                        .should(`be.visible`)
                        .should(`eq`,notifi)
                }
            }
        })
    });
    


    it("Kiểm tra nút ẩn/hiện mật khẩu", function(){
        cy.get(data.selector.password_input)
            .should('have.attr', 'type', 'password')
        cy.get(data.selector.btn_hide_password)
            .click()
        cy.get(data.selector.password_input)
            .should('have.attr', 'type', 'text')
    })


    it("Kiểm tra nút logout", function(){
        cy.login(general.user.username_right, general.user.userpass_right)
        cy.get(general.selector.btn_logout)
        .should('be.enabled')
        .should('be.visible')
        .click().then(()=>{
            cy.url().should('eq', general.url.login)
        })
    })
    
    
    it("Reload sau khi đăng nhập/ đăng xuất", function(){
        cy.login(general.user.username_right, general.user.userpass_right)
        cy.url()
            .should('eq',general.url.main)
            .should('not.eq',general.url.login)
            .then(()=>{
                cy.visit(general.url.main)
                    .wait(2000)
                cy.url()
                    .should('eq',general.url.main)
                    .should('not.eq',general.url.login)
            })

        cy.logout().wait(4000)
        cy.url()
            .should('not.eq',general.url.main)
            .should('eq',general.url.login)
            .then(()=>{
                cy.visit(general.url.main)
                    .wait(2000)
                cy.url()
                    .should('not.eq',general.url.main)
                    .should('eq',general.url.login)
            })
    })


    it("Clear input value sau reload", function(){
        cy.get(data.selector.username_input).type("asdasddasdsa")
        cy.get(data.selector.password_input).type("asdasddasdsa")
        cy.url().then(() => {
            cy.url()
                .should('eq',general.url.login)
            cy.get(data.selector.username_input)
                .should('be.empty')
            cy.get(data.selector.password_input)
                .should('be.empty')
        })
    })



});




//*     ---- Code End ---- 
