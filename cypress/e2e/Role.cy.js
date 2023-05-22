//*     ---- Import Start ---- 
/// <reference types="cypress"/>
require("cypress-plugin-tab");
const general = require('../Variables/general_data')
const data = require('../Variables/Role')
const addNew = require('../Data/Role/addNew.json')
const edit = require('../Data/Role/edit.json')
const copy = require('../Data/Role/copy.json')
//*     ---- Import End ---- 

describe("addNew", function(){
    before(function(){
        cy.task('xlsx_reader_role').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("100%")})
    })
    
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.role)
        cy.viewport(1920,1080).wait(2000)
    })

    addNew.forEach((excel)=>{
        it(Object.values(excel)[0], function(){
            var Time_From_model = Object.values(excel)[7]
            var Time_To_model = Object.values(excel)[8]

            const language = Object.values(excel)[1]
            let authority_department = Object.values(excel)[2]
            let authority_group = Object.values(excel)[3]
            let authority_position = Object.values(excel)[4]
            let authority_employee = Object.values(excel)[5]
            let Role = Object.values(excel)[6]
            const Time_From = `${Time_From_model[6]}${Time_From_model[7]}${Time_From_model[8]}${Time_From_model[9]}-${Time_From_model[3]}${Time_From_model[4]}-${Time_From_model[0]}${Time_From_model[1]}`
            const Time_To = `${Time_To_model[6]}${Time_To_model[7]}${Time_To_model[8]}${Time_To_model[9]}-${Time_To_model[3]}${Time_To_model[4]}-${Time_To_model[0]}${Time_To_model[1]}`
            const goal_department = Object.values(excel)[9]
            const goal_group = Object.values(excel)[10]
            const goal_position = Object.values(excel)[11]
            const goal_employee = Object.values(excel)[12]
            const in_charge = Object.values(excel)[13]
            const Notification = Object.values(excel)[14]

            let notifi_success = ['Xác nhận thành công', 'Successful confirmation','成功を確認']
            let notifi_empty = ['Vui lòng không được để trống','Please enter in the blank','空欄に入力してください']

            if(language == 'Tiếng Việt')
            {
                cy.get(general.selector.language_name).click().wait(250)
                cy.get(general.selector.language_name_Vn).click()
                if(Role == 'Chỉ xem'){ Role = 'Chỉ xem' }
                if(Role == 'Báo cáo'){ Role = 'Báo cáo' }
                notifi_success = notifi_success[0]
                notifi_empty = notifi_empty[0]
            }
            if(language == 'English')
            {
                cy.get(general.selector.language_name).click().wait(250)
                cy.get(general.selector.language_name_En).click()
                if(Role == 'Chỉ xem'){ Role = 'View Only' }
                if(Role == 'Báo cáo'){ Role = 'Report' }
                notifi_success = notifi_success[1]
                notifi_empty = notifi_empty[1]
            }
            if(language == '日本語')
            {
                cy.get(general.selector.language_name).click().wait(250)
                cy.get(general.selector.language_name_Jp).click()
                if(Role == 'Chỉ xem'){ Role = '閲覧のみ' }
                if(Role == 'Báo cáo'){ Role = '報告' }
                notifi_success = notifi_success[2]
                notifi_empty = notifi_empty[2]
            }


            cy.get(data.selector.total_count).invoke(`text`).then((str)=>
            {
                var A = str.match(/\d+/g);
                // Tổng số rows dữ liệu trước khi thực hiện thao tác
                var old_row = parseInt(A[2]) 
                // Nhấn nút addNew
                cy.get(data.selector.btn_addNew).click().wait(500)
    
    
                // Authority Department
                if(authority_department != 'null')
                {
                    // Nhấn mở list Department của phần Authority
                    cy.get(data.selector.authority_department).click()
                    cy.get(data.selector.authority_department_listName).its(`length`).then((count)=>{
                        //Clear các selected item có sẵn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_department_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                                if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.authority_department_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_department_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == authority_department) { cy.get(`${data.selector.authority_department_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        cy.get(data.selector.authority_department).click()
                    })
                }
    
    
                // Authority Group
                if(authority_group != 'null')
                {
                    // Nhấn mở list Group của phần Authority
                    cy.get(data.selector.authority_group).click()
                    cy.get(data.selector.authority_group_listName).its(`length`).then((count)=>{
                        //Clear các selected item có sẵn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_group_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                                if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.authority_group_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_group_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == authority_group) { cy.get(`${data.selector.authority_group_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        cy.get(data.selector.authority_group).click()
                    })
                }
    
    
                // Authority Position
                if(authority_position != 'null')
                {
                    // Nhấn mở list Position của phần Authority
                    cy.get(data.selector.authority_position).click()
                    cy.get(data.selector.authority_position_listName).its(`length`).then((count)=>{
                        //Clear các selected item có sẵn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_position_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                                if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.authority_position_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_position_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == authority_position) { cy.get(`${data.selector.authority_position_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        cy.get(data.selector.authority_position).click()
                    })
                }
    
    
                // Authority Employee
                if(authority_employee != 'null')
                {
                    // Nhấn mở list Employee của phần Authority
                    cy.get(data.selector.authority_employee).click()
                    cy.get(data.selector.authority_employee_listName).its(`length`).then((count)=>{
                        //Clear các selected item có sẵn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_employee_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                                if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.authority_employee_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_employee_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == authority_employee) { cy.get(`${data.selector.authority_employee_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        cy.get(data.selector.authority_employee).click()
                    })
                }
    
    
                // Role
                if(Role != 'null')
                {
                    // Nhấn mở list Role
                    cy.get(data.selector.Role).click()
                    cy.get(data.selector.Role_listName).its(`length`).then((count)=>{
                        //Clear các selected item có sẵn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.Role_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                cy.get(`${data.selector.Role_listName}:eq(${I}) > label`).invoke('attr','class','d-flex flex-row align-center label-text')
                            })
                        }
                        // Select item mong muốn
                        if(Role == 'Chỉ xem' || Role == 'View Only' || Role == '閲覧のみ') { cy.get(`${data.selector.Role_listName}:eq(0)`).click() }
                        if(Role == 'Báo cáo' || Role == 'Report' || Role == '報告') { cy.get(`${data.selector.Role_listName}:eq(1)`).click() }
                    })
                }
    
    
                // Time
                if(Time_From != 'null')
                {
                    // Input thời gian bắt đầu
                    cy.get(data.selector.Time_From).type(Time_From)
                }
                if(Time_To != 'null')
                {
                    // Input thời gian kết thúc
                    cy.get(data.selector.Time_To).type(Time_To)
                }
    
    
                // Goal Department
                if(goal_department != 'null')
                {
                    // Nhấn mở list Department của phần Goal
                    cy.get(data.selector.goal_department).click()
                    cy.get(data.selector.goal_department_listName).its(`length`).then((count)=>{
                        //Clear các selected item có sẵn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_department_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                                if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.goal_department_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_department_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == goal_department) { cy.get(`${data.selector.goal_department_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        cy.get(data.selector.goal_department).click()
                    })
                }
    
    
                // Goal Group
                if(goal_group != 'null')
                {
                    // Nhấn mở list Group của phần Goal
                    cy.get(data.selector.goal_group).click()
                    cy.get(data.selector.goal_group_listName).its(`length`).then((count)=>{
                        //Clear các selected item có sẵn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_group_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                                if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.goal_group_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_group_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == goal_group) { cy.get(`${data.selector.goal_group_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        cy.get(data.selector.goal_group).click()
                    })
                }
    
    
                // Goal Position
                if(goal_position != 'null')
                {
                    // Nhấn mở list Position của phần Goal
                    cy.get(data.selector.goal_position).click()
                    cy.get(data.selector.goal_position_listName).its(`length`).then((count)=>{
                        //Clear các selected item có sẵn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_position_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                                if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.goal_position_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_position_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == goal_position) { cy.get(`${data.selector.goal_position_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        cy.get(data.selector.goal_position).click()
                    })
                }
    
    
                // Goal Employee
                if(goal_employee != 'null')
                {
                    // Nhấn mở list Employee của phần Goal
                    cy.get(data.selector.goal_employee).click()
                    cy.get(data.selector.goal_employee_listName).its(`length`).then((count)=>{
                        //Clear các selected item có sẵn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_employee_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                                if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.goal_employee_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_employee_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == goal_employee) { cy.get(`${data.selector.goal_employee_listName}:eq(${I}) > label`).click() }
                            })
                        }
                        cy.get(data.selector.goal_employee).click()
                    })
                }
    
    
                // Click Submit
                cy.get(data.selector.btn_submit).click().wait(150)
                if(in_charge == 'Đã có') {cy.get(data.selector.btn_confirm_submit).click().wait(150)}
    
                
                // Đặt điều kiện nếu tất cả input bắt buộc không bỏ trống
                if
                (
                    language != 'null' &&
                    authority_department != 'null' &&
                    authority_group != 'null' &&
                    authority_position != 'null' &&
                    authority_employee != 'null' ||
                    Role != 'null' ||
                    goal_department != 'null' &&
                    goal_group != 'null' &&
                    goal_position != 'null' &&
                    goal_employee != 'null'
                )
                {
                    cy.get(data.selector.notification).invoke('text').should('eq',Notification)
                    cy.wait(750)
                    cy.get(data.selector.btn_rowPerPage).click({force:true})
                    cy.get(`${data.selector.btn_rowPerPage_listName}:eq(5)`).click()
                    cy.get(data.selector.total_count).invoke(`text`).then((str)=>
                    {
                        var A = str.match(/\d+/g);
                        let new_row = parseInt(A[2])
                        expect(new_row).to.gt(old_row)
                        if(authority_department == 'null') { authority_department = '' }
                        if(authority_group == 'null') { authority_group = '' }
                        if(authority_position == 'null') { authority_position = '' }
                        if(authority_employee == 'null') { authority_employee = '' }

                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(2)`).invoke('text').should('eq', authority_department)
                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(3)`).invoke('text').should('eq', authority_group)
                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(4)`).invoke('text').should('eq', authority_position)
                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(5)`).invoke('text').should('contain', authority_employee)
                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(6)`).invoke('text').should('eq', Role)
                    })
                }

                else
                {
                    if(
                        language != 'null' &&
                        authority_department != 'null' &&
                        authority_group != 'null' &&
                        authority_position != 'null' &&
                        authority_employee != 'null'
                    ) { cy.get(`[class='v-form form'] > .require:eq(1)`).invoke('text').should('eq', Notification) }

                    if(Role != 'null') { cy.get(`[class='v-form form'] > .require:eq(3)`).invoke('text').should('eq', Notification) }

                    if(
                        goal_department != 'null' &&
                        goal_group != 'null' &&
                        goal_position != 'null' &&
                        goal_employee != 'null'
                    ) { cy.get(`[class='v-form form'] > .require:eq(5)`).invoke('text').should('eq', Notification) }
                }
            })
        })
    })
})


describe("Edit", function(){
    before(function(){
        cy.task('xlsx_reader_role').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("100%")})
    })
    
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.role)
        cy.viewport(1920,1080).wait(2000)
    })

    edit.forEach((excel)=>{
        it(Object.values(excel)[0], function(){
            var Time_From_model = Object.values(excel)[7]
            var Time_To_model = Object.values(excel)[8]

            const language = Object.values(excel)[1]
            let authority_department = Object.values(excel)[2]
            let authority_group = Object.values(excel)[3]
            let authority_position = Object.values(excel)[4]
            let authority_employee = Object.values(excel)[5]
            let Role = Object.values(excel)[6]
            const Time_From = `${Time_From_model[6]}${Time_From_model[7]}${Time_From_model[8]}${Time_From_model[9]}-${Time_From_model[3]}${Time_From_model[4]}-${Time_From_model[0]}${Time_From_model[1]}`
            const Time_To = `${Time_To_model[6]}${Time_To_model[7]}${Time_To_model[8]}${Time_To_model[9]}-${Time_To_model[3]}${Time_To_model[4]}-${Time_To_model[0]}${Time_To_model[1]}`
            const goal_department = Object.values(excel)[9]
            const goal_group = Object.values(excel)[10]
            const goal_position = Object.values(excel)[11]
            const goal_employee = Object.values(excel)[12]
            const in_charge = Object.values(excel)[13]
            const Notification = Object.values(excel)[14]

            let notifi_success = ['Xác nhận thành công', 'Successful confirmation','成功を確認']
            let notifi_empty = ['Vui lòng không được để trống','Please enter in the blank','空欄に入力してください']

            if(language == 'Tiếng Việt')
            {
                cy.get(general.selector.language_name).click().wait(250)
                cy.get(general.selector.language_name_Vn).click()
                if(Role == 'Chỉ xem'){ Role = 'Chỉ xem' }
                if(Role == 'Báo cáo'){ Role = 'Báo cáo' }
                notifi_success = notifi_success[0]
                notifi_empty = notifi_empty[0]
            }
            if(language == 'English')
            {
                cy.get(general.selector.language_name).click().wait(250)
                cy.get(general.selector.language_name_En).click()
                if(Role == 'Chỉ xem'){ Role = 'View Only' }
                if(Role == 'Báo cáo'){ Role = 'Report' }
                notifi_success = notifi_success[1]
                notifi_empty = notifi_empty[1]
            }
            if(language == '日本語')
            {
                cy.get(general.selector.language_name).click().wait(250)
                cy.get(general.selector.language_name_Jp).click()
                if(Role == 'Chỉ xem'){ Role = '閲覧のみ' }
                if(Role == 'Báo cáo'){ Role = '報告' }
                notifi_success = notifi_success[2]
                notifi_empty = notifi_empty[2]
            }


            cy.get(data.selector.total_count).invoke(`text`).then((str)=>
            {
                var A = str.match(/\d+/g);
                // Tổng số rows dữ liệu trước khi thực hiện thao tác
                var old_row = parseInt(A[2]) 
                // Nhấn nút edit
                cy.get(data.selector.btn_edit).click().wait(500)
    
    
                // Authority Department
                // Nhấn mở list Department của phần Authority
                cy.get(data.selector.authority_department).click().wait(200)
                cy.get(data.selector.authority_department_listName).its(`length`).then((count)=>{
                    //Clear các selected item có sẵn
                    for( let I=0; I<count; I++)
                    {
                        cy.get(`${data.selector.authority_department_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                            if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.authority_department_listName}:eq(${I}) > label`).click() }
                        })
                    }
                    if(authority_department != 'null')
                    {
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_department_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == authority_department) { cy.get(`${data.selector.authority_department_listName}:eq(${I}) > label`).click() }
                            })
                        }
                    }
                    cy.get(data.selector.authority_department).click()
                })
                
    
    
                // Authority Group
                // Nhấn mở list Group của phần Authority
                cy.get(data.selector.authority_group).click().wait(200)
                cy.get(data.selector.authority_group_listName).its(`length`).then((count)=>{
                    //Clear các selected item có sẵn
                    for( let I=0; I<count; I++)
                    {
                        cy.get(`${data.selector.authority_group_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                            if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.authority_group_listName}:eq(${I}) > label`).click() }
                        })
                    }
                    if(authority_group != 'null')
                    {
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_group_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == authority_group) { cy.get(`${data.selector.authority_group_listName}:eq(${I}) > label`).click() }
                            })
                        }
                    }
                    cy.get(data.selector.authority_group).click()
                })
                
    
    
                // Authority Position
                // Nhấn mở list Position của phần Authority
                cy.get(data.selector.authority_position).click().wait(200)
                cy.get(data.selector.authority_position_listName).its(`length`).then((count)=>{
                    //Clear các selected item có sẵn
                    for( let I=0; I<count; I++)
                    {
                        cy.get(`${data.selector.authority_position_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                            if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.authority_position_listName}:eq(${I}) > label`).click() }
                        })
                    }
                    if(authority_position != 'null')
                    {
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_position_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == authority_position) { cy.get(`${data.selector.authority_position_listName}:eq(${I}) > label`).click() }
                            })
                        }
                    }
                    cy.get(data.selector.authority_position).click()
                })
    
    
                // Authority Employee
                // Nhấn mở list Employee của phần Authority
                cy.get(data.selector.authority_employee).click().wait(200)
                cy.get(data.selector.authority_employee_listName).its(`length`).then((count)=>{
                    //Clear các selected item có sẵn
                    for( let I=0; I<count; I++)
                    {
                        cy.get(`${data.selector.authority_employee_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                            if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.authority_employee_listName}:eq(${I}) > label`).click() }
                        })
                    }
                    // Select item mong muốn
                    if(authority_employee != 'null')
                    {
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.authority_employee_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == authority_employee) { cy.get(`${data.selector.authority_employee_listName}:eq(${I}) > label`).click() }
                            })
                        }
                    }
                    cy.get(data.selector.authority_employee).click()
                })
    
    
                // Role
                // Nhấn mở list Role
                cy.get(data.selector.Role).click().wait(200)
                cy.get(data.selector.Role_listName).its(`length`).then((count)=>{
                    //Clear các selected item có sẵn
                    for( let I=0; I<count; I++)
                    {
                        cy.get(`${data.selector.Role_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                            cy.get(`${data.selector.Role_listName}:eq(${I}) > label`).invoke('attr','class','d-flex flex-row align-center label-text')
                        })
                    }
                    if(Role != 'null')
                    {
                        // Select item mong muốn
                        if(Role == 'Chỉ xem' || Role == 'View Only' || Role == '閲覧のみ') { cy.get(`${data.selector.Role_listName}:eq(0)`).click() }
                        if(Role == 'Báo cáo' || Role == 'Report' || Role == '報告') { cy.get(`${data.selector.Role_listName}:eq(1)`).click() }
                    }
                    else{cy.get(data.selector.Role).click()}
                })
    
    
                // Time
                cy.get(data.selector.Time_From).clear()
                if(Time_From != 'null')
                {
                    // Input thời gian bắt đầu
                    cy.get(data.selector.Time_From).type(Time_From)
                }
                cy.get(data.selector.Time_To).clear()
                if(Time_To != 'null')
                {
                    // Input thời gian kết thúc
                    cy.get(data.selector.Time_To).type(Time_To)
                }
    
    
                // Goal Department
                // Nhấn mở list Department của phần Goal
                cy.get(data.selector.goal_department).click().wait(200)
                cy.get(data.selector.goal_department_listName).its(`length`).then((count)=>{
                    //Clear các selected item có sẵn
                    for( let I=0; I<count; I++)
                    {
                        cy.get(`${data.selector.goal_department_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                            if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.goal_department_listName}:eq(${I}) > label`).click() }
                        })
                    }
                    if(goal_department != 'null')
                    {
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_department_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == goal_department) { cy.get(`${data.selector.goal_department_listName}:eq(${I}) > label`).click() }
                            })
                        }
                    }
                    cy.get(data.selector.goal_department).click()
                })
                
    
    
                // Goal Group
                // Nhấn mở list Group của phần Goal
                cy.get(data.selector.goal_group).click().wait(200)
                cy.get(data.selector.goal_group_listName).its(`length`).then((count)=>{
                    //Clear các selected item có sẵn
                    for( let I=0; I<count; I++)
                    {
                        cy.get(`${data.selector.goal_group_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                            if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.goal_group_listName}:eq(${I}) > label`).click() }
                        })
                    }
                    if(goal_group != 'null')
                    {
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_group_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == goal_group) { cy.get(`${data.selector.goal_group_listName}:eq(${I}) > label`).click() }
                            })
                        }
                    }
                    cy.get(data.selector.goal_group).click()
                })
                
    
    
                // Goal Position
                // Nhấn mở list Position của phần Goal
                cy.get(data.selector.goal_position).click().wait(200)
                cy.get(data.selector.goal_position_listName).its(`length`).then((count)=>{
                    //Clear các selected item có sẵn
                    for( let I=0; I<count; I++)
                    {
                        cy.get(`${data.selector.goal_position_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                            if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.goal_position_listName}:eq(${I}) > label`).click() }
                        })
                    }
                    if(goal_position != 'null')
                    {
                        // Select item mong muốn
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_position_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == goal_position) { cy.get(`${data.selector.goal_position_listName}:eq(${I}) > label`).click() }
                            })
                        }
                    }
                    cy.get(data.selector.goal_position).click()
                })
    
    
                // Goal Employee
                // Nhấn mở list Employee của phần Goal
                cy.get(data.selector.goal_employee).click().wait(200)
                cy.get(data.selector.goal_employee_listName).its(`length`).then((count)=>{
                    //Clear các selected item có sẵn
                    for( let I=0; I<count; I++)
                    {
                        cy.get(`${data.selector.goal_employee_listName}:eq(${I}) > label`).invoke('attr','class').then((check)=>{
                            if(check == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.goal_employee_listName}:eq(${I}) > label`).click() }
                        })
                    }
                    // Select item mong muốn
                    if(goal_employee != 'null')
                    {
                        for( let I=0; I<count; I++)
                        {
                            cy.get(`${data.selector.goal_employee_listName}:eq(${I}) > label`).invoke('text').then((check)=>{
                                if(check == goal_employee) { cy.get(`${data.selector.goal_employee_listName}:eq(${I}) > label`).click() }
                            })
                        }
                    }
                    cy.get(data.selector.goal_employee).click()
                })
    
    
                // Click Submit
                cy.get(data.selector.btn_submit).click().wait(200)
                if(in_charge == 'Đã có') {cy.get(data.selector.btn_confirm_submit).click().wait(200)}
    
                
                // Đặt điều kiện nếu tất cả input bắt buộc không bỏ trống
                if
                (
                    language != 'null' &&
                    authority_department != 'null' &&
                    authority_group != 'null' &&
                    authority_position != 'null' &&
                    authority_employee != 'null' ||
                    Role != 'null' ||
                    goal_department != 'null' &&
                    goal_group != 'null' &&
                    goal_position != 'null' &&
                    goal_employee != 'null'
                )
                {
                    cy.get(data.selector.notification).invoke('text').should('eq',Notification)
                    cy.wait(750)
                    cy.get(data.selector.btn_rowPerPage).click({force:true})
                    cy.get(`${data.selector.btn_rowPerPage_listName}:eq(5)`).click()
                    cy.get(data.selector.total_count).invoke(`text`).then((str)=>
                    {
                        var A = str.match(/\d+/g);
                        let new_row = parseInt(A[2])
                        expect(new_row).to.eq(old_row)
                        if(authority_department == 'null') { authority_department = '' }
                        if(authority_group == 'null') { authority_group = '' }
                        if(authority_position == 'null') { authority_position = '' }
                        if(authority_employee == 'null') { authority_employee = '' }

                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(2)`).invoke('text').should('eq', authority_department)
                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(3)`).invoke('text').should('eq', authority_group)
                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(4)`).invoke('text').should('eq', authority_position)
                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(5)`).invoke('text').should('contain', authority_employee)
                        cy.get(`.vue3-easy-data-table__body > :nth-child(${new_row}) > :nth-child(6)`).invoke('text').should('eq', Role)
                    })
                }
                
                else
                {
                    if(
                        language != 'null' &&
                        authority_department != 'null' &&
                        authority_group != 'null' &&
                        authority_position != 'null' &&
                        authority_employee != 'null'
                    ) { cy.get(`[class='v-form form'] > .require:eq(1)`).invoke('text').should('eq', Notification) }

                    if(Role != 'null') { cy.get(`[class='v-form form'] > .require:eq(3)`).invoke('text').should('eq', Notification) }

                    if(
                        goal_department != 'null' &&
                        goal_group != 'null' &&
                        goal_position != 'null' &&
                        goal_employee != 'null'
                    ) { cy.get(`[class='v-form form'] > .require:eq(5)`).invoke('text').should('eq', Notification) }
                }
            })
        })
    })
})


describe.only("Delete", function(){
    before(function(){
        cy.task('xlsx_reader_role').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("100%")})
    })

    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.role)
        cy.viewport(1920,1080).wait(2000)
    })

    it('Delete All', function(){
        cy.get(data.selector.btn_rowPerPage).click()
        cy.get(`${data.selector.btn_rowPerPage_listName}:eq(5)`).click()
        cy.get(data.selector.row).its('length').then((A)=>{
            const old_row = A
            for(let I=0; I<A; I++)
            {
                cy.get(data.selector.btn_thaotac).click().wait(50)
                cy.get(data.selector.btn_delete).click().wait(200)
                cy.get(data.selector.btn_submit).click().wait(500)

                cy.get(data.selector.row).its('length').then((B)=>{
                    const new_row = B
                    expect(B).to.lessThan(A)
                })
            }
        })
    })
})





describe("Test", function(){
    before(function(){
        cy.task('xlsx_reader_role').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader_role').then(()=>{cy.log("100%")})
    })

    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.role)
        cy.viewport(1920,1080).wait(2000)
    })

    it('test', function(){
        cy.visit(general.url.role)
    })
})






