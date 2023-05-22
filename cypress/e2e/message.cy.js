//*     ---- Import Start ---- 
/// <reference types="cypress"/>
require("cypress-plugin-tab");
import general from '../Variables/general_data'
import 'cypress-real-events/support'
const data = require('../Variables/message')
const addNew = require('../Data/Message_addNew.json')
const copy = require('../Data/Message_copy.json')
const edit = require('../Data/Message_edit.json')
const responsive = require('../Data/Responsive.json')

//*     ---- Import End ---- 



//*     ---- Code Start ---- 
// describe("Update Excel List", function(){
//     it('Updating Excel', function(){
//         cy.task('xlsx_reader').then(()=>{cy.log("20%")})
//         cy.task('xlsx_reader').then(()=>{cy.log("40%")})
//         cy.task('xlsx_reader').then(()=>{cy.log("60%")})
//         cy.task('xlsx_reader').then(()=>{cy.log("80%")})
//         cy.task('xlsx_reader').then(()=>{cy.log("100%")})
//     })
// })



describe("addNew Messages", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })
    
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.messages)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })

    addNew.forEach((excel)=>{
        it(Object.values(excel)[0], function(){
            let language = Object.values(excel)[1]
            let value_type = Object.values(excel)[2]
            let value_topicVn = Object.values(excel)[3]
            let value_topicEn = Object.values(excel)[5]
            let value_topicJp = Object.values(excel)[7]
            let value_timeFrom = Object.values(excel)[9]
            let value_timeTo = Object.values(excel)[11]
            let value_messVn = Object.values(excel)[13]
            let value_messEn = Object.values(excel)[15]
            let value_messJp = Object.values(excel)[17]
            
            let notifi_topicVn = Object.values(excel)[4]
            let notifi_topicEn = Object.values(excel)[6]
            let notifi_topicJp = Object.values(excel)[8]
            let notifi_timeFrom = Object.values(excel)[10]
            let notifi_timeTo = Object.values(excel)[12]
            let notifi_messVn = Object.values(excel)[14]
            let notifi_messEn = Object.values(excel)[16]
            let notifi_messJp = Object.values(excel)[18]

            let timeFrom_confirm = null
            let timeTo_confirm = null
            let timeFrom_confirm_VN = null
            let timeFrom_confirm_EN = null
            let timeFrom_confirm_JP = null
            let timeTo_confirm_VN = null
            let timeTo_confirm_EN = null
            let timeTo_confirm_JP = null
            let Nothing_null = false
            let Nothing_error = false
            let notifi_green_addnew = null
            let notifi_duplicate = ['Tên đã tồn tại. Vui lòng kiểm tra lại', 'Name already exists. Please check again', '名前は既に存在します。再度確認してください']
            let notifi_empty = ['Vui lòng không được để trống', 'Please enter in the blank', '空欄に入力してください']
            let notifi_malformed = ['Nội dung không đúng định dạng', 'The content is malformed', 'コンテンツの形式が正しくありません']
            let value_type_info = ['Thông tin', 'Information','情報']
            let value_type_warning = ['Cảnh báo','Warning','警告']
            let value_type_error = ['Lỗi','Error','エラー']

            if(value_timeFrom.length == 16 && value_timeFrom[10] == 'T')
            {
                timeFrom_confirm = Object.values(excel)[9]
                timeFrom_confirm_VN = `${timeFrom_confirm[11]}${timeFrom_confirm[12]}${timeFrom_confirm[13]}${timeFrom_confirm[14]}${timeFrom_confirm[15]} AM ${timeFrom_confirm[0]}${timeFrom_confirm[1]}${timeFrom_confirm[2]}${timeFrom_confirm[3]}/${timeFrom_confirm[5]}${timeFrom_confirm[6]}/${timeFrom_confirm[8]}${timeFrom_confirm[9]}`
                timeFrom_confirm_EN = `${timeFrom_confirm[11]}${timeFrom_confirm[12]}${timeFrom_confirm[13]}${timeFrom_confirm[14]}${timeFrom_confirm[15]} AM ${timeFrom_confirm[0]}${timeFrom_confirm[1]}${timeFrom_confirm[2]}${timeFrom_confirm[3]}/${timeFrom_confirm[5]}${timeFrom_confirm[6]}/${timeFrom_confirm[8]}${timeFrom_confirm[9]}`
                timeFrom_confirm_JP = `${timeFrom_confirm[11]}${timeFrom_confirm[12]}${timeFrom_confirm[13]}${timeFrom_confirm[14]}${timeFrom_confirm[15]} AM ${timeFrom_confirm[0]}${timeFrom_confirm[1]}${timeFrom_confirm[2]}${timeFrom_confirm[3]}/${timeFrom_confirm[5]}${timeFrom_confirm[6]}/${timeFrom_confirm[8]}${timeFrom_confirm[9]}`
            }
            else {timeFrom_confirm = 'null'}

            if(value_timeTo.length == 16 && value_timeTo[10] == 'T')
            {
                timeTo_confirm = Object.values(excel)[11]
                timeTo_confirm_VN = `${timeTo_confirm[11]}${timeTo_confirm[12]}${timeTo_confirm[13]}${timeTo_confirm[14]}${timeTo_confirm[15]} AM ${timeTo_confirm[0]}${timeTo_confirm[1]}${timeTo_confirm[2]}${timeTo_confirm[3]}/${timeTo_confirm[5]}${timeTo_confirm[6]}/${timeTo_confirm[8]}${timeTo_confirm[9]}`
                timeTo_confirm_EN = `${timeTo_confirm[11]}${timeTo_confirm[12]}${timeTo_confirm[13]}${timeTo_confirm[14]}${timeTo_confirm[15]} AM ${timeTo_confirm[0]}${timeTo_confirm[1]}${timeTo_confirm[2]}${timeTo_confirm[3]}/${timeTo_confirm[5]}${timeTo_confirm[6]}/${timeTo_confirm[8]}${timeTo_confirm[9]}`
                timeTo_confirm_JP = `${timeTo_confirm[11]}${timeTo_confirm[12]}${timeTo_confirm[13]}${timeTo_confirm[14]}${timeTo_confirm[15]} AM ${timeTo_confirm[0]}${timeTo_confirm[1]}${timeTo_confirm[2]}${timeTo_confirm[3]}/${timeTo_confirm[5]}${timeTo_confirm[6]}/${timeTo_confirm[8]}${timeTo_confirm[9]}`
            }
            else {timeTo_confirm = 'null'}

            if
            (
                value_topicVn != 'null' &&
                value_topicEn != 'null' &&
                value_topicJp != 'null' &&
                timeFrom_confirm != 'null' &&
                timeTo_confirm != 'null' &&
                value_messVn != 'null' &&
                value_messEn != 'null' &&
                value_messJp != 'null'
            )
            { Nothing_null = true }

            if
            (
                notifi_topicVn == 'null' &&
                notifi_topicEn == 'null' &&
                notifi_topicJp == 'null' &&
                notifi_messVn == 'null' &&
                notifi_messEn == 'null' &&
                notifi_messJp == 'null'
            )
            { Nothing_error = true }

            if(language == "Tiếng Việt")
            {
                notifi_green_addnew = "Thêm dữ liệu mới thành công"
                if(notifi_topicVn == notifi_duplicate[0]) {notifi_topicVn = notifi_duplicate[0]}
                else if(notifi_topicVn == notifi_empty[0]) {notifi_topicVn = notifi_empty[0]}

                if(notifi_topicEn == notifi_duplicate[0]) {notifi_topicEn = notifi_duplicate[0]}
                else if(notifi_topicEn == notifi_empty[0]) {notifi_topicEn = notifi_empty[0]}

                if(notifi_topicJp == notifi_duplicate[0]) {notifi_topicJp = notifi_duplicate[0]}
                else if(notifi_topicJp == notifi_empty[0]) {notifi_topicJp = notifi_empty[0]}

                if(notifi_timeFrom == notifi_malformed[0]) {notifi_timeFrom = notifi_malformed[0]}

                if(notifi_timeTo == notifi_malformed[0]) {notifi_timeTo = notifi_malformed[0]}
                
                if(notifi_messVn == notifi_duplicate[0]) {notifi_messVn = notifi_duplicate[0]}
                else if(notifi_messVn == notifi_empty[0]) {notifi_messVn = notifi_empty[0]}

                if(notifi_messEn == notifi_duplicate[0]) {notifi_messEn = notifi_duplicate[0]}
                else if(notifi_messEn == notifi_empty[0]) {notifi_messEn = notifi_empty[0]}

                if(notifi_messJp == notifi_duplicate[0]) {notifi_messJp = notifi_duplicate[0]}
                else if(notifi_messJp == notifi_empty[0]) {notifi_messJp = notifi_empty[0]}

                if(value_type == value_type_info[1]) {value_type = value_type_info[0]}
                if(value_type == value_type_warning[1]) {value_type = value_type_warning[0]}
                if(value_type == value_type_error[1]) {value_type = value_type_error[0]}
            }
            if(language == "English")
            {
                notifi_green_addnew = "New data added successfully"
                if(notifi_topicVn == notifi_duplicate[0]) {notifi_topicVn = notifi_duplicate[1]}
                else if(notifi_topicVn == notifi_empty[0]) {notifi_topicVn = notifi_empty[1]}

                if(notifi_topicEn == notifi_duplicate[0]) {notifi_topicEn = notifi_duplicate[1]}
                else if(notifi_topicEn == notifi_empty[0]) {notifi_topicEn = notifi_empty[1]}

                if(notifi_topicJp == notifi_duplicate[0]) {notifi_topicJp = notifi_duplicate[1]}
                else if(notifi_topicJp == notifi_empty[0]) {notifi_topicJp = notifi_empty[1]}

                if(notifi_timeFrom == notifi_malformed[0]) {notifi_timeFrom = notifi_malformed[1]}

                if(notifi_timeTo == notifi_malformed[0]) {notifi_timeTo = notifi_malformed[1]}
                
                if(notifi_messVn == notifi_duplicate[0]) {notifi_messVn = notifi_duplicate[1]}
                else if(notifi_messVn == notifi_empty[0]) {notifi_messVn = notifi_empty[1]}

                if(notifi_messEn == notifi_duplicate[0]) {notifi_messEn = notifi_duplicate[1]}
                else if(notifi_messEn == notifi_empty[0]) {notifi_messEn = notifi_empty[1]}

                if(notifi_messJp == notifi_duplicate[0]) {notifi_messJp = notifi_duplicate[1]}
                else if(notifi_messJp == notifi_empty[0]) {notifi_messJp = notifi_empty[1]}

                if(value_type == value_type_info[1]) {value_type = value_type_info[1]}
                if(value_type == value_type_warning[1]) {value_type = value_type_warning[1]}
                if(value_type == value_type_error[1]) {value_type = value_type_error[1]}
            }
            if(language == "日本語")
            {
                notifi_green_addnew = "新しいデータが正常に追加されました"
                if(notifi_topicVn == notifi_duplicate[0]) {notifi_topicVn = notifi_duplicate[2]}
                else if(notifi_topicVn == notifi_empty[0]) {notifi_topicVn = notifi_empty[2]}

                if(notifi_topicEn == notifi_duplicate[0]) {notifi_topicEn = notifi_duplicate[2]}
                else if(notifi_topicEn == notifi_empty[0]) {notifi_topicEn = notifi_empty[2]}

                if(notifi_topicJp == notifi_duplicate[0]) {notifi_topicJp = notifi_duplicate[2]}
                else if(notifi_topicJp == notifi_empty[0]) {notifi_topicJp = notifi_empty[2]}

                if(notifi_timeFrom == notifi_malformed[0]) {notifi_timeFrom = notifi_malformed[2]}

                if(notifi_timeTo == notifi_malformed[0]) {notifi_timeTo = notifi_malformed[2]}
                
                if(notifi_messVn == notifi_duplicate[0]) {notifi_messVn = notifi_duplicate[2]}
                else if(notifi_messVn == notifi_empty[0]) {notifi_messVn = notifi_empty[2]}

                if(notifi_messEn == notifi_duplicate[0]) {notifi_messEn = notifi_duplicate[2]}
                else if(notifi_messEn == notifi_empty[0]) {notifi_messEn = notifi_empty[2]}

                if(notifi_messJp == notifi_duplicate[0]) {notifi_messJp = notifi_duplicate[2]}
                else if(notifi_messJp == notifi_empty[0]) {notifi_messJp = notifi_empty[2]}

                if(value_type == value_type_info[1]) {value_type = value_type_info[2]}
                if(value_type == value_type_warning[1]) {value_type = value_type_warning[2]}
                if(value_type == value_type_error[1]) {value_type = value_type_error[2]}
            }

            cy.wait(2000)
            cy.get(general.selector.language_name).click()
            if(language == "Tiếng Việt") {cy.get(general.selector.language_name_Vn).click()}
            if(language == "English") {cy.get(general.selector.language_name_En).click()}
            if(language == "日本語") {cy.get(general.selector.language_name_Jp).click()}
            cy.get(data.selector.btn_addNew).click()
            cy.wait(500)
            if(value_type == "Thông tin" || value_type == "Information" || value_type == "情報")
            {
                cy.get(data.selector.box_type).click()
                cy.get(data.selector.box_type_info).click()
            }
            if(value_type == "Cảnh báo" || value_type == "Warning" || value_type == "警告")
            {
                cy.get(data.selector.box_type).click()
                cy.get(data.selector.box_type_warn).click()
            }
            if(value_type == "Lỗi" || value_type == "Error" || value_type == "エラー")
            {
                cy.get(data.selector.box_type).click()
                cy.get(data.selector.box_type_error).click()
            }

            if(value_topicVn != 'null') {cy.get(data.selector.input_topic_VN).type(value_topicVn)}
            if(value_topicEn != 'null') {cy.get(data.selector.input_topic_EN).type(value_topicEn)}
            if(value_topicJp != 'null') {cy.get(data.selector.input_topic_JP).type(value_topicJp)}
            if(timeFrom_confirm != 'null') {cy.get(data.selector.input_timeFrom).type(timeFrom_confirm, {force:true})}
            if(timeTo_confirm != 'null') {cy.get(data.selector.input_timeTo).type(timeTo_confirm, {force:true})}
            if(value_messVn != 'null') {cy.get(data.selector.input_mess_VN).type(value_messVn)}
            if(value_messEn != 'null') {cy.get(data.selector.input_mess_EN).type(value_messEn)}
            if(value_messJp != 'null') {cy.get(data.selector.input_mess_JP).type(value_messJp)}




            if(Nothing_null == true &&  Nothing_error == true)
            {
                cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                {
                    var A = str.match(/\d+/g);
                    var row_old = parseInt(A[2]) // Tổng số rows dữ liệu ban đầu
                    cy.get(data.selector.btn_submit).click()
                    cy.wait(500)
                    // if(row_old > 1)
                    // {
                    //     cy.get(data.selector.btn_confirm).click()
                    //     cy.wait(500)
                    // }
                    cy.get(data.selector.notifi_green).invoke('text').should('eq', notifi_green_addnew)
                    cy.wait(700)
                    cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                    {
                        var A = str.match(/\d+/g);
                        var row_new = parseInt(A[2]) // Tổng số rows dữ liệu sau thao tác
                        expect(row_new).to.gt(row_old)
                        if(language == "Tiếng Việt")
                        { 
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1) span`).invoke('text').should('eq', value_topicVn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke('text').should('eq', value_type)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3) span`).invoke('text').should('eq', value_messVn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4) span`).invoke('text').should('eq', timeFrom_confirm_VN)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5) span`).invoke('text').should('eq', timeTo_confirm_VN)
                        }

                        if(language == "English")
                        {
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1) span`).invoke('text').should('eq', value_topicEn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke('text').should('eq', value_type)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3) span`).invoke('text').should('eq', value_messEn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4) span`).invoke('text').should('eq', timeFrom_confirm_EN)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5) span`).invoke('text').should('eq', timeTo_confirm_EN)
                        }
                        if(language == "日本語")
                        {
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1) span`).invoke('text').should('eq', value_topicJp)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke('text').should('eq', value_type)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3) span`).invoke('text').should('eq', value_messJp)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4) span`).invoke('text').should('eq', timeFrom_confirm_JP)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5) span`).invoke('text').should('eq', timeTo_confirm_JP)
                        }
                    })
                })
            }

            else
            {
                cy.get(data.selector.btn_submit).click()
                cy.wait(500)
                if(value_topicVn == 'null' || notifi_topicVn != 'null') { cy.get(data.selector.notifi_topicVn).invoke('text').should('eq', notifi_topicVn) }
                if(value_topicEn == 'null' || notifi_topicEn != 'null') { cy.get(data.selector.notifi_topicEn).invoke('text').should('eq', notifi_topicEn) }
                if(value_topicJp == 'null' || notifi_topicJp != 'null') { cy.get(data.selector.notifi_topicJp).invoke('text').should('eq', notifi_topicJp) }
                if(timeFrom_confirm == 'null' || notifi_timeFrom != 'null') { cy.get(data.selector.notifi_timeFrom).invoke('text').should('eq', notifi_timeFrom) }
                if(timeTo_confirm == 'null' || notifi_timeTo != 'null') { cy.get(data.selector.notifi_timeTo).invoke('text').should('eq', notifi_timeTo) }
                if(value_messVn == 'null' || notifi_messVn != 'null') { cy.get(data.selector.notifi_messVn).invoke('text').should('eq', notifi_messVn) }
                if(value_messEn == 'null' || notifi_messEn != 'null') { cy.get(data.selector.notifi_messEn).invoke('text').should('eq', notifi_messEn) }
                if(value_messJp == 'null' || notifi_messJp != 'null') { cy.get(data.selector.notifi_messJp).invoke('text').should('eq', notifi_messJp) }
            }
            // if(language == "Tiếng Việt")
            // {
            // }

            // if(language == "English")
            // {
            //     if(Nothing_null == true &&  Nothing_error == true)
            //     {
            //         cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
            //         {
            //             var A = str.match(/\d+/g);
            //             var row_old = parseInt(A[2]) // Tổng số rows dữ liệu ban đầu
            //             cy.get(data.selector.btn_submit).click()
            //             cy.wait(500)
            //             if(row_old > 1)
            //             {
            //                 cy.get(data.selector.btn_confirm).click()
            //                 cy.wait(500)
            //             }
            //             cy.get(data.selector.notifi_green).invoke('text').should('eq', notifi_green_addnew)
            //             cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
            //             {
            //                 var A = str.match(/\d+/g);
            //                 var row_new = parseInt(A[2]) // Tổng số rows dữ liệu sau thao tác
            //                 expect(row_new).to.gt(row_old)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(1) span`)
            //                     .invoke('text').should('eq', value_topicVn)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(2) span`)
            //                     .invoke('text').should('eq', value_type)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(3) span`)
            //                     .invoke('text').should('eq', value_messVn)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(4) span`)
            //                     .invoke('text').should('eq', timeFrom_confirm_VN)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(5) span`)
            //                     .invoke('text').should('eq', timeTo_confirm_VN)
            //             })
            //         })
            //     }

            //     else
            //     {
            //         cy.get(data.selector.btn_submit).click()
            //         cy.wait(500)
            //         if(value_topicVn == 'null' || notifi_topicVn != 'null') { cy.get(data.selector.notifi_topicVn).invoke('text').should('eq', notifi_topicVn) }
            //         if(value_topicEn == 'null' || notifi_topicEn != 'null') { cy.get(data.selector.notifi_topicEn).invoke('text').should('eq', notifi_topicEn) }
            //         if(value_topicJp == 'null' || notifi_topicJp != 'null') { cy.get(data.selector.notifi_topicJp).invoke('text').should('eq', notifi_topicJp) }
            //         if(timeFrom_confirm == 'null' || notifi_timeFrom != 'null') { cy.get(data.selector.notifi_timeFrom).invoke('text').should('eq', notifi_timeFrom) }
            //         if(timeTo_confirm == 'null' || notifi_timeTo != 'null') { cy.get(data.selector.notifi_timeTo).invoke('text').should('eq', notifi_timeTo) }
            //         if(value_messVn == 'null' || notifi_messVn != 'null') { cy.get(data.selector.notifi_messVn).invoke('text').should('eq', notifi_messVn) }
            //         if(value_messEn == 'null' || notifi_messEn != 'null') { cy.get(data.selector.notifi_messEn).invoke('text').should('eq', notifi_messEn) }
            //         if(value_messJp == 'null' || notifi_messJp != 'null') { cy.get(data.selector.notifi_messJp).invoke('text').should('eq', notifi_messJp) }
            //     }
            // }

            // if(language == "日本語")
            // {
            //     if(Nothing_null == true &&  Nothing_error == true)
            //     {
            //         cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
            //         {
            //             var A = str.match(/\d+/g);
            //             var row_old = parseInt(A[2]) // Tổng số rows dữ liệu ban đầu
            //             cy.get(data.selector.btn_submit).click()
            //             cy.wait(500)
            //             if(row_old > 1)
            //             {
            //                 cy.get(data.selector.btn_confirm).click()
            //                 cy.wait(500)
            //             }
            //             cy.get(data.selector.notifi_green).invoke('text').should('eq', notifi_green_addnew)
            //             cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
            //             {
            //                 var A = str.match(/\d+/g);
            //                 var row_new = parseInt(A[2]) // Tổng số rows dữ liệu sau thao tác
            //                 expect(row_new).to.gt(row_old)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(1) span`) 
            //                     .invoke('text').should('eq', value_topicVn)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(2) span`)
            //                     .invoke('text').should('eq', value_type)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(3) span`)
            //                     .invoke('text').should('eq', value_messVn)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(4) span`)
            //                     .invoke('text').should('eq', timeFrom_confirm_VN)
            //                 cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_new}) td:eq(5) span`)
            //                     .invoke('text').should('eq', timeTo_confirm_VN)
            //             })
            //         })
            //     }

            //     else
            //     {
            //         cy.get(data.selector.btn_submit).click()
            //         cy.wait(500)
            //         if(value_topicVn == 'null' || notifi_topicVn != 'null') { cy.get(data.selector.notifi_topicVn).invoke('text').should('eq', notifi_topicVn) }
            //         if(value_topicEn == 'null' || notifi_topicEn != 'null') { cy.get(data.selector.notifi_topicEn).invoke('text').should('eq', notifi_topicEn) }
            //         if(value_topicJp == 'null' || notifi_topicJp != 'null') { cy.get(data.selector.notifi_topicJp).invoke('text').should('eq', notifi_topicJp) }
            //         if(timeFrom_confirm == 'null' || notifi_timeFrom != 'null') { cy.get(data.selector.notifi_timeFrom).invoke('text').should('eq', notifi_timeFrom) }
            //         if(timeTo_confirm == 'null' || notifi_timeTo != 'null') { cy.get(data.selector.notifi_timeTo).invoke('text').should('eq', notifi_timeTo) }
            //         if(value_messVn == 'null' || notifi_messVn != 'null') { cy.get(data.selector.notifi_messVn).invoke('text').should('eq', notifi_messVn) }
            //         if(value_messEn == 'null' || notifi_messEn != 'null') { cy.get(data.selector.notifi_messEn).invoke('text').should('eq', notifi_messEn) }
            //         if(value_messJp == 'null' || notifi_messJp != 'null') { cy.get(data.selector.notifi_messJp).invoke('text').should('eq', notifi_messJp) }
            //     }
            // }
        })

    })
})


describe("Xóa", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })

    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.messages)
        cy.viewport(1208,1208)
    })


    // after(function(){
    //     cy.clearAllSessionStorage()
    // })


    // Thực hiện hành động chọn và xóa từng dòng dữ liệu đến khi hết
    // Kiểm tra dữ liệu của hàng vừa được tạo ra sau khi copy có đúng không
    it("Xóa tất cả", function(){
        cy.wait(2000)
        cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
            {
                var A = str.match(/\d+/g);
                var row_old = parseInt(A[2])
                cy.log(row_old)
                if (row_old > 0)
                {
                    for (let index = 0; index < row_old; index++) {
                        cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                        {
                            var A = str.match(/\d+/g);
                            var row_old2 = parseInt(A[2])
                            cy.get(data.selector.btn_thaotac)
                                .click()
                            cy.get(data.selector.btn_delete)
                                .should('be.visible')
                                .should('not.be.disabled')
                                .click()
                            cy.get(data.selector.btn_confirm)
                                .click()
                            cy.get(data.selector.notifi_green)
                                .should('be.visible')
                                .should('contain','Xoá dữ liệu thành công')
                                cy.wait(700)
                                cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                                {
                                    var A = str.match(/\d+/g);
                                    var row_new = parseInt(A[2])
                                        expect(row_old2).to.be.gt(row_new)
                                })
                        })
                    }
                }
                else{ cy.log("No data to delete") }
            })            
    })
})


describe("Copy", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })

    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.messages)
        cy.viewport(1920,1080)
        cy.wait(2000)
    })


    // Thực hiện thao tác copy cơ bản
    // So sánh số hàng ngang trước và sau khi copy (sau phải hơn trước 1 đơn vị)
    // Kiểm tra thanh thông báo khi copy thành công (hiển thị && hoạt động)
    // Kiểm tra dữ liệu của hàng vừa được tạo ra sau khi copy có đúng không
    copy.forEach((excel)=>{
        it(Object.values(excel)[0], function(){
            let language = Object.values(excel)[1]
            let value_type = Object.values(excel)[2]
            let value_topicVn = Object.values(excel)[3]
            let value_topicEn = Object.values(excel)[5]
            let value_topicJp = Object.values(excel)[7]
            let value_timeFrom = Object.values(excel)[9]
            let value_timeTo = Object.values(excel)[11]
            let value_messVn = Object.values(excel)[13]
            let value_messEn = Object.values(excel)[15]
            let value_messJp = Object.values(excel)[17]
            
            let notifi_topicVn = Object.values(excel)[4]
            let notifi_topicEn = Object.values(excel)[6]
            let notifi_topicJp = Object.values(excel)[8]
            let notifi_timeFrom = Object.values(excel)[10]
            let notifi_timeTo = Object.values(excel)[12]
            let notifi_messVn = Object.values(excel)[14]
            let notifi_messEn = Object.values(excel)[16]
            let notifi_messJp = Object.values(excel)[18]

            let timeFrom_confirm = null
            let timeTo_confirm = null
            let timeFrom_confirm_VN = null
            let timeFrom_confirm_EN = null
            let timeFrom_confirm_JP = null
            let timeTo_confirm_VN = null
            let timeTo_confirm_EN = null
            let timeTo_confirm_JP = null
            let Nothing_null = false
            let Nothing_error = false
            let notifi_green_addnew = null
            let notifi_duplicate = ['Tên đã tồn tại. Vui lòng kiểm tra lại', 'Name already exists. Please check again', '名前は既に存在します。再度確認してください']
            let notifi_empty = ['Vui lòng không được để trống', 'Please enter in the blank', '空欄に入力してください']
            let notifi_malformed = ['Nội dung không đúng định dạng', 'The content is malformed', 'コンテンツの形式が正しくありません']
            let value_type_info = ['Thông tin', 'Information','情報']
            let value_type_warning = ['Cảnh báo','Warning','警告']
            let value_type_error = ['Lỗi','Error','エラー']

            if(value_timeFrom.length == 16 && value_timeFrom[10] == 'T')
            {
                timeFrom_confirm = Object.values(excel)[9]
                timeFrom_confirm_VN = `${timeFrom_confirm[11]}${timeFrom_confirm[12]}${timeFrom_confirm[13]}${timeFrom_confirm[14]}${timeFrom_confirm[15]} AM ${timeFrom_confirm[0]}${timeFrom_confirm[1]}${timeFrom_confirm[2]}${timeFrom_confirm[3]}/${timeFrom_confirm[5]}${timeFrom_confirm[6]}/${timeFrom_confirm[8]}${timeFrom_confirm[9]}`
                timeFrom_confirm_EN = `${timeFrom_confirm[11]}${timeFrom_confirm[12]}${timeFrom_confirm[13]}${timeFrom_confirm[14]}${timeFrom_confirm[15]} AM ${timeFrom_confirm[0]}${timeFrom_confirm[1]}${timeFrom_confirm[2]}${timeFrom_confirm[3]}/${timeFrom_confirm[5]}${timeFrom_confirm[6]}/${timeFrom_confirm[8]}${timeFrom_confirm[9]}`
                timeFrom_confirm_JP = `${timeFrom_confirm[11]}${timeFrom_confirm[12]}${timeFrom_confirm[13]}${timeFrom_confirm[14]}${timeFrom_confirm[15]} AM ${timeFrom_confirm[0]}${timeFrom_confirm[1]}${timeFrom_confirm[2]}${timeFrom_confirm[3]}/${timeFrom_confirm[5]}${timeFrom_confirm[6]}/${timeFrom_confirm[8]}${timeFrom_confirm[9]}`
            }
            else {timeFrom_confirm = 'null'}

            if(value_timeTo.length == 16 && value_timeTo[10] == 'T')
            {
                timeTo_confirm = Object.values(excel)[11]
                timeTo_confirm_VN = `${timeTo_confirm[11]}${timeTo_confirm[12]}${timeTo_confirm[13]}${timeTo_confirm[14]}${timeTo_confirm[15]} AM ${timeTo_confirm[0]}${timeTo_confirm[1]}${timeTo_confirm[2]}${timeTo_confirm[3]}/${timeTo_confirm[5]}${timeTo_confirm[6]}/${timeTo_confirm[8]}${timeTo_confirm[9]}`
                timeTo_confirm_EN = `${timeTo_confirm[11]}${timeTo_confirm[12]}${timeTo_confirm[13]}${timeTo_confirm[14]}${timeTo_confirm[15]} AM ${timeTo_confirm[0]}${timeTo_confirm[1]}${timeTo_confirm[2]}${timeTo_confirm[3]}/${timeTo_confirm[5]}${timeTo_confirm[6]}/${timeTo_confirm[8]}${timeTo_confirm[9]}`
                timeTo_confirm_JP = `${timeTo_confirm[11]}${timeTo_confirm[12]}${timeTo_confirm[13]}${timeTo_confirm[14]}${timeTo_confirm[15]} AM ${timeTo_confirm[0]}${timeTo_confirm[1]}${timeTo_confirm[2]}${timeTo_confirm[3]}/${timeTo_confirm[5]}${timeTo_confirm[6]}/${timeTo_confirm[8]}${timeTo_confirm[9]}`
            }
            else {timeTo_confirm = 'null'}

            if
            (
                value_topicVn != 'null' &&
                value_topicEn != 'null' &&
                value_topicJp != 'null' &&
                timeFrom_confirm != 'null' &&
                timeTo_confirm != 'null' &&
                value_messVn != 'null' &&
                value_messEn != 'null' &&
                value_messJp != 'null'
            )
            { Nothing_null = true }

            if
            (
                notifi_topicVn == 'null' &&
                notifi_topicEn == 'null' &&
                notifi_topicJp == 'null' &&
                notifi_messVn == 'null' &&
                notifi_messEn == 'null' &&
                notifi_messJp == 'null'
            )
            { Nothing_error = true }

            if(language == "Tiếng Việt")
            {
                notifi_green_addnew = "Sao chép dữ liệu thành công"
                if(notifi_topicVn == notifi_duplicate[0]) {notifi_topicVn = notifi_duplicate[0]}
                else if(notifi_topicVn == notifi_empty[0]) {notifi_topicVn = notifi_empty[0]}

                if(notifi_topicEn == notifi_duplicate[0]) {notifi_topicEn = notifi_duplicate[0]}
                else if(notifi_topicEn == notifi_empty[0]) {notifi_topicEn = notifi_empty[0]}

                if(notifi_topicJp == notifi_duplicate[0]) {notifi_topicJp = notifi_duplicate[0]}
                else if(notifi_topicJp == notifi_empty[0]) {notifi_topicJp = notifi_empty[0]}

                if(notifi_timeFrom == notifi_malformed[0]) {notifi_timeFrom = notifi_malformed[0]}

                if(notifi_timeTo == notifi_malformed[0]) {notifi_timeTo = notifi_malformed[0]}
                
                if(notifi_messVn == notifi_duplicate[0]) {notifi_messVn = notifi_duplicate[0]}
                else if(notifi_messVn == notifi_empty[0]) {notifi_messVn = notifi_empty[0]}

                if(notifi_messEn == notifi_duplicate[0]) {notifi_messEn = notifi_duplicate[0]}
                else if(notifi_messEn == notifi_empty[0]) {notifi_messEn = notifi_empty[0]}

                if(notifi_messJp == notifi_duplicate[0]) {notifi_messJp = notifi_duplicate[0]}
                else if(notifi_messJp == notifi_empty[0]) {notifi_messJp = notifi_empty[0]}

                if(value_type == value_type_info[1]) {value_type = value_type_info[0]}
                if(value_type == value_type_warning[1]) {value_type = value_type_warning[0]}
                if(value_type == value_type_error[1]) {value_type = value_type_error[0]}
            }
            if(language == "English")
            {
                notifi_green_addnew = "New data added successfully"
                if(notifi_topicVn == notifi_duplicate[0]) {notifi_topicVn = notifi_duplicate[1]}
                else if(notifi_topicVn == notifi_empty[0]) {notifi_topicVn = notifi_empty[1]}

                if(notifi_topicEn == notifi_duplicate[0]) {notifi_topicEn = notifi_duplicate[1]}
                else if(notifi_topicEn == notifi_empty[0]) {notifi_topicEn = notifi_empty[1]}

                if(notifi_topicJp == notifi_duplicate[0]) {notifi_topicJp = notifi_duplicate[1]}
                else if(notifi_topicJp == notifi_empty[0]) {notifi_topicJp = notifi_empty[1]}

                if(notifi_timeFrom == notifi_malformed[0]) {notifi_timeFrom = notifi_malformed[1]}

                if(notifi_timeTo == notifi_malformed[0]) {notifi_timeTo = notifi_malformed[1]}
                
                if(notifi_messVn == notifi_duplicate[0]) {notifi_messVn = notifi_duplicate[1]}
                else if(notifi_messVn == notifi_empty[0]) {notifi_messVn = notifi_empty[1]}

                if(notifi_messEn == notifi_duplicate[0]) {notifi_messEn = notifi_duplicate[1]}
                else if(notifi_messEn == notifi_empty[0]) {notifi_messEn = notifi_empty[1]}

                if(notifi_messJp == notifi_duplicate[0]) {notifi_messJp = notifi_duplicate[1]}
                else if(notifi_messJp == notifi_empty[0]) {notifi_messJp = notifi_empty[1]}

                if(value_type == value_type_info[1]) {value_type = value_type_info[1]}
                if(value_type == value_type_warning[1]) {value_type = value_type_warning[1]}
                if(value_type == value_type_error[1]) {value_type = value_type_error[1]}
            }
            if(language == "日本語")
            {
                notifi_green_addnew = "新しいデータが正常に追加されました"
                if(notifi_topicVn == notifi_duplicate[0]) {notifi_topicVn = notifi_duplicate[2]}
                else if(notifi_topicVn == notifi_empty[0]) {notifi_topicVn = notifi_empty[2]}

                if(notifi_topicEn == notifi_duplicate[0]) {notifi_topicEn = notifi_duplicate[2]}
                else if(notifi_topicEn == notifi_empty[0]) {notifi_topicEn = notifi_empty[2]}

                if(notifi_topicJp == notifi_duplicate[0]) {notifi_topicJp = notifi_duplicate[2]}
                else if(notifi_topicJp == notifi_empty[0]) {notifi_topicJp = notifi_empty[2]}

                if(notifi_timeFrom == notifi_malformed[0]) {notifi_timeFrom = notifi_malformed[2]}

                if(notifi_timeTo == notifi_malformed[0]) {notifi_timeTo = notifi_malformed[2]}
                
                if(notifi_messVn == notifi_duplicate[0]) {notifi_messVn = notifi_duplicate[2]}
                else if(notifi_messVn == notifi_empty[0]) {notifi_messVn = notifi_empty[2]}

                if(notifi_messEn == notifi_duplicate[0]) {notifi_messEn = notifi_duplicate[2]}
                else if(notifi_messEn == notifi_empty[0]) {notifi_messEn = notifi_empty[2]}

                if(notifi_messJp == notifi_duplicate[0]) {notifi_messJp = notifi_duplicate[2]}
                else if(notifi_messJp == notifi_empty[0]) {notifi_messJp = notifi_empty[2]}

                if(value_type == value_type_info[1]) {value_type = value_type_info[2]}
                if(value_type == value_type_warning[1]) {value_type = value_type_warning[2]}
                if(value_type == value_type_error[1]) {value_type = value_type_error[2]}
            }

            cy.wait(2000)
            cy.get(general.selector.language_name).click()
            if(language == "Tiếng Việt") {cy.get(general.selector.language_name_Vn).click()}
            if(language == "English") {cy.get(general.selector.language_name_En).click()}
            if(language == "日本語") {cy.get(general.selector.language_name_Jp).click()}
            cy.get(data.selector.btn_thaotac).click()
            cy.get(data.selector.btn_copy).click()
            cy.wait(500)
            if(value_type == "Thông tin" || value_type == "Information" || value_type == "情報")
            {
                cy.get(data.selector.box_type).click()
                cy.get(data.selector.box_type_info).click()
            }
            if(value_type == "Cảnh báo" || value_type == "Warning" || value_type == "警告")
            {
                cy.get(data.selector.box_type).click()
                cy.get(data.selector.box_type_warn).click()
            }
            if(value_type == "Lỗi" || value_type == "Error" || value_type == "エラー")
            {
                cy.get(data.selector.box_type).click()
                cy.get(data.selector.box_type_error).click()
            }

            
            if(value_topicVn == 'null') {cy.get(data.selector.input_topic_VN).clear()}
            if(value_topicEn == 'null') {cy.get(data.selector.input_topic_EN).clear()}
            if(value_topicJp == 'null') {cy.get(data.selector.input_topic_JP).clear()}
            if(timeFrom_confirm == 'null') {cy.get(data.selector.input_timeFrom).clear()}
            if(timeTo_confirm == 'null') {cy.get(data.selector.input_timeTo).clear()}
            if(value_messVn == 'null') {cy.get(data.selector.input_mess_VN).clear()}
            if(value_messEn == 'null') {cy.get(data.selector.input_mess_EN).clear()}
            if(value_messJp == 'null') {cy.get(data.selector.input_mess_JP).clear()}


            if(value_topicVn != 'null') {cy.get(data.selector.input_topic_VN).clear().type(value_topicVn)}
            if(value_topicEn != 'null') {cy.get(data.selector.input_topic_EN).clear().type(value_topicEn)}
            if(value_topicJp != 'null') {cy.get(data.selector.input_topic_JP).clear().type(value_topicJp)}
            if(timeFrom_confirm != 'null') {cy.get(data.selector.input_timeFrom).clear().type(timeFrom_confirm, {force:true})}
            if(timeTo_confirm != 'null') {cy.get(data.selector.input_timeTo).clear().type(timeTo_confirm, {force:true})}
            if(value_messVn != 'null') {cy.get(data.selector.input_mess_VN).clear().type(value_messVn)}
            if(value_messEn != 'null') {cy.get(data.selector.input_mess_EN).clear().type(value_messEn)}
            if(value_messJp != 'null') {cy.get(data.selector.input_mess_JP).clear().type(value_messJp)}

            if(Nothing_null == true &&  Nothing_error == true)
            {
                cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                {
                    var A = str.match(/\d+/g);
                    var row_old = parseInt(A[2]) // Tổng số rows dữ liệu ban đầu
                    cy.get(data.selector.btn_submit).click()
                    cy.wait(500)
                    // if(row_old > 1)
                    // {
                    //     cy.get(data.selector.btn_confirm).click()
                    //     cy.wait(500)
                    // }
                    cy.get(data.selector.notifi_green).invoke('text').should('eq', notifi_green_addnew)
                    cy.wait(700)
                    cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                    {
                        var A = str.match(/\d+/g);
                        var row_new = parseInt(A[2]) // Tổng số rows dữ liệu sau thao tác
                        expect(row_new).to.gt(row_old)
                        if(language == "Tiếng Việt")
                        { 
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1) span`).invoke('text').should('eq', value_topicVn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke('text').should('eq', value_type)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3) span`).invoke('text').should('eq', value_messVn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4) span`).invoke('text').should('eq', timeFrom_confirm_VN)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5) span`).invoke('text').should('eq', timeTo_confirm_VN)
                        }

                        if(language == "English")
                        {
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1) span`).invoke('text').should('eq', value_topicEn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke('text').should('eq', value_type)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3) span`).invoke('text').should('eq', value_messEn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4) span`).invoke('text').should('eq', timeFrom_confirm_EN)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5) span`).invoke('text').should('eq', timeTo_confirm_EN)
                        }
                        if(language == "日本語")
                        {
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1) span`).invoke('text').should('eq', value_topicJp)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke('text').should('eq', value_type)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3) span`).invoke('text').should('eq', value_messJp)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4) span`).invoke('text').should('eq', timeFrom_confirm_JP)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5) span`).invoke('text').should('eq', timeTo_confirm_JP)
                        }
                    })
                })
            }

            else
            {
                cy.get(data.selector.btn_submit).click()
                cy.wait(500)
                if(value_topicVn == 'null' || notifi_topicVn != 'null') { cy.get(data.selector.notifi_topicVn).invoke('text').should('eq', notifi_topicVn) }
                if(value_topicEn == 'null' || notifi_topicEn != 'null') { cy.get(data.selector.notifi_topicEn).invoke('text').should('eq', notifi_topicEn) }
                if(value_topicJp == 'null' || notifi_topicJp != 'null') { cy.get(data.selector.notifi_topicJp).invoke('text').should('eq', notifi_topicJp) }
                if(timeFrom_confirm == 'null' || notifi_timeFrom != 'null') { cy.get(data.selector.notifi_timeFrom).invoke('text').should('eq', notifi_timeFrom) }
                if(timeTo_confirm == 'null' || notifi_timeTo != 'null') { cy.get(data.selector.notifi_timeTo).invoke('text').should('eq', notifi_timeTo) }
                if(value_messVn == 'null' || notifi_messVn != 'null') { cy.get(data.selector.notifi_messVn).invoke('text').should('eq', notifi_messVn) }
                if(value_messEn == 'null' || notifi_messEn != 'null') { cy.get(data.selector.notifi_messEn).invoke('text').should('eq', notifi_messEn) }
                if(value_messJp == 'null' || notifi_messJp != 'null') { cy.get(data.selector.notifi_messJp).invoke('text').should('eq', notifi_messJp) }
            }
        })

    })
})


describe("Responsive", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })

    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.messages)
    })


    // Kiểm tra các layout có sự thay đổi với các kích thước màn hình khác nhau
    responsive.forEach(res => {
        it(`Màn hình ${Object.values(res)[0]}`, function(){
            cy.viewport(Object.values(res)[1], Object.values(res)[2])
            cy.wait(1000)

            if( Object.values(res)[1] < 600){
                cy.get(data.selector.btn_addnew_background).should('have.css', 'width').and('match', /(\d+)/)
                .then(($width) => {
                  const width = parseInt($width);
                  expect(width).to.be.at.least(165);
                });
                cy.get(general.selector.navigation_bar)
                        .should('not.be.visible')
                cy.get(general.selector.full_name)
                        .should('not.be.visible')
                cy.get(general.selector.full_email)
                        .should('not.be.visible')
                cy.get(general.selector.language_name)
                        .should('not.be.visible')
            }

            if( (Object.values(res)[1] >= 600) && (Object.values(res)[1] < 960) ){
                cy.get(data.selector.btn_addnew_background).should('have.css', 'width')
                .and('match', /(\d+)/)
                .then(($width) => {
                  const width = parseInt($width);
                  expect(width).to.be.at.least(165);
                });
                cy.get(general.selector.navigation_bar)
                        .should('not.be.visible')
                if(Object.values(res)[1] < 650){
                    cy.get(general.selector.full_name)
                        .should('not.be.visible')
                    cy.get(general.selector.full_email)
                        .should('not.be.visible')
                    cy.get(general.selector.language_name)
                        .should('not.be.visible')
                }
            }
            
            if( (Object.values(res)[1] >= 960) && (Object.values(res)[1] < 1280) ){

                cy.get(data.selector.btn_addnew_background).should('have.css', 'width')
                .and('match', /(\d+)/)
                .then(($width) => {
                    const width = parseInt($width);
                    expect(width).to.be.at.least(165);
                });

                if(Object.values(res)[1] <= 1024){
                    cy.get(general.selector.navigation_bar)
                        .should('not.be.visible')
                    }
            }

            if( (Object.values(res)[1] >= 1280) && (Object.values(res)[1] < 1920) ){
                cy.get(data.selector.btn_addnew_background).should('have.css', 'width')
                .and('match', /(\d+)/)
                .then(($width) => {
                  const width = parseInt($width);
                  expect(width).to.be.at.least(165);
                });
            }

            if( (Object.values(res)[1] >= 1920) && (Object.values(res)[1] < 2560) ){
                cy.get(data.selector.btn_addnew_background).should('have.css', 'width')
                .and('match', /(\d+)/)
                .then(($width) => {
                  const width = parseInt($width);
                  expect(width).to.be.at.least(165);
                });
            }

            if( (Object.values(res)[1] >= 2560)){
                cy.get(data.selector.btn_addnew_background).should('have.css', 'width')
                .and('match', /(\d+)/)
                .then(($width) => {
                  const width = parseInt($width);
                  expect(width).to.be.at.least(165);
                });
            }
        })
    })  
})


describe("Infomation", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })

    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.messages)
        cy.viewport(1920,1080)
        cy.wait(1000)

    })

    it('Infomation',function(){
        cy.get(data.selector.row_count).its('length')
            .then((row)=>{
                if(row > 0)
                {
                    cy.wait(1000)
                    cy.get(data.selector.row_topic).invoke(`text`).then((topic_old)=>{
                        cy.get(data.selector.row_type).invoke(`text`).then((type_old)=>{
                            cy.get(data.selector.row_mess).invoke(`text`).then((mess_old)=>{
                                cy.get(data.selector.row_timeFrom).invoke(`text`).then((timeFrom_old)=>{
                                    cy.get(data.selector.row_timeTo).invoke(`text`).then((timeTo_old)=>{
                                        let timeFrom_old_2 = `${timeFrom_old[9]}${timeFrom_old[10]}${timeFrom_old[11]}${timeFrom_old[12]}-${timeFrom_old[14]}${timeFrom_old[15]}-${timeFrom_old[17]}${timeFrom_old[18]}T${timeFrom_old[0]}${timeFrom_old[1]}:${timeFrom_old[3]}${timeFrom_old[4]}`
                                        let timeTo_old_2 = `${timeTo_old[9]}${timeTo_old[10]}${timeTo_old[11]}${timeTo_old[12]}-${timeTo_old[14]}${timeTo_old[15]}-${timeTo_old[17]}${timeTo_old[18]}T${timeTo_old[0]}${timeTo_old[1]}:${timeTo_old[3]}${timeTo_old[4]}`
                                        cy.get(data.selector.btn_thaotac).click()
                                        cy.get(data.selector.btn_info).click()
                                        cy.wait(1000)
                                        cy.get(data.selector.box_type).invoke(`text`).then((type_new)=>{
                                            cy.get(data.selector.input_topic_VN).invoke(`val`).then((topic_new)=>{
                                                cy.get(data.selector.input_mess_VN).invoke(`val`).then((mess_new)=>{
                                                    cy.get(data.selector.input_timeFrom).invoke(`val`).then((timeFrom_new)=>{
                                                        cy.get(data.selector.input_timeTo).invoke(`val`).then((timeTo_new)=>{
                                                            expect(topic_old).to.eq(topic_new)
                                                            expect(type_old).to.eq(type_new)
                                                            expect(mess_old).to.eq(mess_new)
                                                            expect(timeFrom_old_2).to.eq(timeFrom_new)
                                                            expect(timeTo_old_2).to.eq(timeTo_new)
                                                            // cy.get(data.selector.box_type).should('have.attr','aria-expanded', 'false')
                                                            cy.get(data.selector.input_topic_VN).should('be.disabled')
                                                            cy.get(data.selector.input_topic_EN).should('be.disabled')
                                                            cy.get(data.selector.input_topic_JP).should('be.disabled')
                                                            cy.get(data.selector.input_timeFrom).should('be.disabled')
                                                            cy.get(data.selector.input_timeTo).should('be.disabled')
                                                            cy.get(data.selector.input_mess_VN).should('be.disabled')
                                                            cy.get(data.selector.input_mess_EN).should('be.disabled')
                                                            cy.get(data.selector.input_mess_JP).should('be.disabled')
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }

                else {cy.log(`Không có dữ liệu kiểm tra`)}
            })
    })
})


describe.only("Filter", function(){
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.messages)
        cy.viewport(1920,1080).wait(2000)
    })
    
    it("Filter", function(){
        let year = "2019"
        let month = "June"
        let day = "25"
        cy.get(`[class='startDate flatpickr-input']`).click()
        cy.get(`.flatpickr-monthDropdown-months:eq(0)`).select(month)
        cy.get(`[class='numInput cur-year']:eq(0)`).type(year)
        cy.get(`.dayContainer:eq(0) > span[aria-label='${month} ${day}, ${year}']`).click()
    })
})


describe("Edit", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })


    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.messages)
        cy.viewport(1920,1080)
        cy.wait(1000)

    })


    edit.forEach((excel)=>{
        it(Object.values(excel)[0], function(){
            let language = Object.values(excel)[1]
            let value_type = Object.values(excel)[2]
            let value_topicVn = Object.values(excel)[3]
            let value_topicEn = Object.values(excel)[5]
            let value_topicJp = Object.values(excel)[7]
            let value_timeFrom = Object.values(excel)[9]
            let value_timeTo = Object.values(excel)[11]
            let value_messVn = Object.values(excel)[13]
            let value_messEn = Object.values(excel)[15]
            let value_messJp = Object.values(excel)[17]
            
            let notifi_topicVn = Object.values(excel)[4]
            let notifi_topicEn = Object.values(excel)[6]
            let notifi_topicJp = Object.values(excel)[8]
            let notifi_timeFrom = Object.values(excel)[10]
            let notifi_timeTo = Object.values(excel)[12]
            let notifi_messVn = Object.values(excel)[14]
            let notifi_messEn = Object.values(excel)[16]
            let notifi_messJp = Object.values(excel)[18]

            let timeFrom_confirm = null
            let timeTo_confirm = null
            let timeFrom_confirm_VN = null
            let timeFrom_confirm_EN = null
            let timeFrom_confirm_JP = null
            let timeTo_confirm_VN = null
            let timeTo_confirm_EN = null
            let timeTo_confirm_JP = null
            let Nothing_null = false
            let Nothing_error = false
            let notifi_green_addnew = null
            let notifi_duplicate = ['Tên đã tồn tại. Vui lòng kiểm tra lại', 'Name already exists. Please check again', '名前は既に存在します。再度確認してください']
            let notifi_empty = ['Vui lòng không được để trống', 'Please enter in the blank', '空欄に入力してください']
            let notifi_malformed = ['Nội dung không đúng định dạng', 'The content is malformed', 'コンテンツの形式が正しくありません']
            let value_type_info = ['Thông tin', 'Information','情報']
            let value_type_warning = ['Cảnh báo','Warning','警告']
            let value_type_error = ['Lỗi','Error','エラー']

            if(value_timeFrom.length == 16 && value_timeFrom[10] == 'T')
            {
                timeFrom_confirm = Object.values(excel)[9]
                timeFrom_confirm_VN = `${timeFrom_confirm[11]}${timeFrom_confirm[12]}${timeFrom_confirm[13]}${timeFrom_confirm[14]}${timeFrom_confirm[15]} AM ${timeFrom_confirm[0]}${timeFrom_confirm[1]}${timeFrom_confirm[2]}${timeFrom_confirm[3]}/${timeFrom_confirm[5]}${timeFrom_confirm[6]}/${timeFrom_confirm[8]}${timeFrom_confirm[9]}`
                timeFrom_confirm_EN = `${timeFrom_confirm[11]}${timeFrom_confirm[12]}${timeFrom_confirm[13]}${timeFrom_confirm[14]}${timeFrom_confirm[15]} AM ${timeFrom_confirm[0]}${timeFrom_confirm[1]}${timeFrom_confirm[2]}${timeFrom_confirm[3]}/${timeFrom_confirm[5]}${timeFrom_confirm[6]}/${timeFrom_confirm[8]}${timeFrom_confirm[9]}`
                timeFrom_confirm_JP = `${timeFrom_confirm[11]}${timeFrom_confirm[12]}${timeFrom_confirm[13]}${timeFrom_confirm[14]}${timeFrom_confirm[15]} AM ${timeFrom_confirm[0]}${timeFrom_confirm[1]}${timeFrom_confirm[2]}${timeFrom_confirm[3]}/${timeFrom_confirm[5]}${timeFrom_confirm[6]}/${timeFrom_confirm[8]}${timeFrom_confirm[9]}`
            }
            else {timeFrom_confirm = 'null'}

            if(value_timeTo.length == 16 && value_timeTo[10] == 'T')
            {
                timeTo_confirm = Object.values(excel)[11]
                timeTo_confirm_VN = `${timeTo_confirm[11]}${timeTo_confirm[12]}${timeTo_confirm[13]}${timeTo_confirm[14]}${timeTo_confirm[15]} AM ${timeTo_confirm[0]}${timeTo_confirm[1]}${timeTo_confirm[2]}${timeTo_confirm[3]}/${timeTo_confirm[5]}${timeTo_confirm[6]}/${timeTo_confirm[8]}${timeTo_confirm[9]}`
                timeTo_confirm_EN = `${timeTo_confirm[11]}${timeTo_confirm[12]}${timeTo_confirm[13]}${timeTo_confirm[14]}${timeTo_confirm[15]} AM ${timeTo_confirm[0]}${timeTo_confirm[1]}${timeTo_confirm[2]}${timeTo_confirm[3]}/${timeTo_confirm[5]}${timeTo_confirm[6]}/${timeTo_confirm[8]}${timeTo_confirm[9]}`
                timeTo_confirm_JP = `${timeTo_confirm[11]}${timeTo_confirm[12]}${timeTo_confirm[13]}${timeTo_confirm[14]}${timeTo_confirm[15]} AM ${timeTo_confirm[0]}${timeTo_confirm[1]}${timeTo_confirm[2]}${timeTo_confirm[3]}/${timeTo_confirm[5]}${timeTo_confirm[6]}/${timeTo_confirm[8]}${timeTo_confirm[9]}`
            }
            else {timeTo_confirm = 'null'}

            if
            (
                value_topicVn != 'null' &&
                value_topicEn != 'null' &&
                value_topicJp != 'null' &&
                timeFrom_confirm != 'null' &&
                timeTo_confirm != 'null' &&
                value_messVn != 'null' &&
                value_messEn != 'null' &&
                value_messJp != 'null'
            )
            { Nothing_null = true }

            if
            (
                notifi_topicVn == 'null' &&
                notifi_topicEn == 'null' &&
                notifi_topicJp == 'null' &&
                notifi_messVn == 'null' &&
                notifi_messEn == 'null' &&
                notifi_messJp == 'null'
            )
            { Nothing_error = true }

            if(language == "Tiếng Việt")
            {
                notifi_green_addnew = "Chỉnh sửa dữ liệu thành công"
                if(notifi_topicVn == notifi_duplicate[0]) {notifi_topicVn = notifi_duplicate[0]}
                else if(notifi_topicVn == notifi_empty[0]) {notifi_topicVn = notifi_empty[0]}

                if(notifi_topicEn == notifi_duplicate[0]) {notifi_topicEn = notifi_duplicate[0]}
                else if(notifi_topicEn == notifi_empty[0]) {notifi_topicEn = notifi_empty[0]}

                if(notifi_topicJp == notifi_duplicate[0]) {notifi_topicJp = notifi_duplicate[0]}
                else if(notifi_topicJp == notifi_empty[0]) {notifi_topicJp = notifi_empty[0]}

                if(notifi_timeFrom == notifi_malformed[0]) {notifi_timeFrom = notifi_malformed[0]}

                if(notifi_timeTo == notifi_malformed[0]) {notifi_timeTo = notifi_malformed[0]}
                
                if(notifi_messVn == notifi_duplicate[0]) {notifi_messVn = notifi_duplicate[0]}
                else if(notifi_messVn == notifi_empty[0]) {notifi_messVn = notifi_empty[0]}

                if(notifi_messEn == notifi_duplicate[0]) {notifi_messEn = notifi_duplicate[0]}
                else if(notifi_messEn == notifi_empty[0]) {notifi_messEn = notifi_empty[0]}

                if(notifi_messJp == notifi_duplicate[0]) {notifi_messJp = notifi_duplicate[0]}
                else if(notifi_messJp == notifi_empty[0]) {notifi_messJp = notifi_empty[0]}

                if(value_type == value_type_info[1]) {value_type = value_type_info[0]}
                if(value_type == value_type_warning[1]) {value_type = value_type_warning[0]}
                if(value_type == value_type_error[1]) {value_type = value_type_error[0]}
            }
            if(language == "English")
            {
                notifi_green_addnew = "Data edited successfully"
                if(notifi_topicVn == notifi_duplicate[0]) {notifi_topicVn = notifi_duplicate[1]}
                else if(notifi_topicVn == notifi_empty[0]) {notifi_topicVn = notifi_empty[1]}

                if(notifi_topicEn == notifi_duplicate[0]) {notifi_topicEn = notifi_duplicate[1]}
                else if(notifi_topicEn == notifi_empty[0]) {notifi_topicEn = notifi_empty[1]}

                if(notifi_topicJp == notifi_duplicate[0]) {notifi_topicJp = notifi_duplicate[1]}
                else if(notifi_topicJp == notifi_empty[0]) {notifi_topicJp = notifi_empty[1]}

                if(notifi_timeFrom == notifi_malformed[0]) {notifi_timeFrom = notifi_malformed[1]}

                if(notifi_timeTo == notifi_malformed[0]) {notifi_timeTo = notifi_malformed[1]}
                
                if(notifi_messVn == notifi_duplicate[0]) {notifi_messVn = notifi_duplicate[1]}
                else if(notifi_messVn == notifi_empty[0]) {notifi_messVn = notifi_empty[1]}

                if(notifi_messEn == notifi_duplicate[0]) {notifi_messEn = notifi_duplicate[1]}
                else if(notifi_messEn == notifi_empty[0]) {notifi_messEn = notifi_empty[1]}

                if(notifi_messJp == notifi_duplicate[0]) {notifi_messJp = notifi_duplicate[1]}
                else if(notifi_messJp == notifi_empty[0]) {notifi_messJp = notifi_empty[1]}

                if(value_type == value_type_info[1]) {value_type = value_type_info[1]}
                if(value_type == value_type_warning[1]) {value_type = value_type_warning[1]}
                if(value_type == value_type_error[1]) {value_type = value_type_error[1]}
            }
            if(language == "日本語")
            {
                notifi_green_addnew = "データが正常に編集されました"
                if(notifi_topicVn == notifi_duplicate[0]) {notifi_topicVn = notifi_duplicate[2]}
                else if(notifi_topicVn == notifi_empty[0]) {notifi_topicVn = notifi_empty[2]}

                if(notifi_topicEn == notifi_duplicate[0]) {notifi_topicEn = notifi_duplicate[2]}
                else if(notifi_topicEn == notifi_empty[0]) {notifi_topicEn = notifi_empty[2]}

                if(notifi_topicJp == notifi_duplicate[0]) {notifi_topicJp = notifi_duplicate[2]}
                else if(notifi_topicJp == notifi_empty[0]) {notifi_topicJp = notifi_empty[2]}

                if(notifi_timeFrom == notifi_malformed[0]) {notifi_timeFrom = notifi_malformed[2]}

                if(notifi_timeTo == notifi_malformed[0]) {notifi_timeTo = notifi_malformed[2]}
                
                if(notifi_messVn == notifi_duplicate[0]) {notifi_messVn = notifi_duplicate[2]}
                else if(notifi_messVn == notifi_empty[0]) {notifi_messVn = notifi_empty[2]}

                if(notifi_messEn == notifi_duplicate[0]) {notifi_messEn = notifi_duplicate[2]}
                else if(notifi_messEn == notifi_empty[0]) {notifi_messEn = notifi_empty[2]}

                if(notifi_messJp == notifi_duplicate[0]) {notifi_messJp = notifi_duplicate[2]}
                else if(notifi_messJp == notifi_empty[0]) {notifi_messJp = notifi_empty[2]}

                if(value_type == value_type_info[1]) {value_type = value_type_info[2]}
                if(value_type == value_type_warning[1]) {value_type = value_type_warning[2]}
                if(value_type == value_type_error[1]) {value_type = value_type_error[2]}
            }

            cy.wait(2000)
            cy.get(general.selector.language_name).click()
            if(language == "Tiếng Việt") {cy.get(general.selector.language_name_Vn).click()}
            if(language == "English") {cy.get(general.selector.language_name_En).click()}
            if(language == "日本語") {cy.get(general.selector.language_name_Jp).click()}
            cy.get(data.selector.btn_edit).click()
            cy.wait(500)
            if(value_type == "Thông tin" || value_type == "Information" || value_type == "情報")
            {
                cy.get(data.selector.box_type).click()
                cy.get(data.selector.box_type_info).click()
            }
            if(value_type == "Cảnh báo" || value_type == "Warning" || value_type == "警告")
            {
                cy.get(data.selector.box_type).click()
                cy.get(data.selector.box_type_warn).click()
            }
            if(value_type == "Lỗi" || value_type == "Error" || value_type == "エラー")
            {
                cy.get(data.selector.box_type).click()
                cy.get(data.selector.box_type_error).click()
            }

            
            if(value_topicVn == 'null') {cy.get(data.selector.input_topic_VN).clear()}
            if(value_topicEn == 'null') {cy.get(data.selector.input_topic_EN).clear()}
            if(value_topicJp == 'null') {cy.get(data.selector.input_topic_JP).clear()}
            if(timeFrom_confirm == 'null') {cy.get(data.selector.input_timeFrom).clear()}
            if(timeTo_confirm == 'null') {cy.get(data.selector.input_timeTo).clear()}
            if(value_messVn == 'null') {cy.get(data.selector.input_mess_VN).clear()}
            if(value_messEn == 'null') {cy.get(data.selector.input_mess_EN).clear()}
            if(value_messJp == 'null') {cy.get(data.selector.input_mess_JP).clear()}
            

            if(value_topicVn != 'null') {cy.get(data.selector.input_topic_VN).clear().type(value_topicVn)}
            if(value_topicEn != 'null') {cy.get(data.selector.input_topic_EN).clear().type(value_topicEn)}
            if(value_topicJp != 'null') {cy.get(data.selector.input_topic_JP).clear().type(value_topicJp)}
            if(timeFrom_confirm != 'null') {cy.get(data.selector.input_timeFrom).clear().type(timeFrom_confirm, {force:true})}
            if(timeTo_confirm != 'null') {cy.get(data.selector.input_timeTo).clear().type(timeTo_confirm, {force:true})}
            if(value_messVn != 'null') {cy.get(data.selector.input_mess_VN).clear().type(value_messVn)}
            if(value_messEn != 'null') {cy.get(data.selector.input_mess_EN).clear().type(value_messEn)}
            if(value_messJp != 'null') {cy.get(data.selector.input_mess_JP).clear().type(value_messJp)}

            if(Nothing_null == true &&  Nothing_error == true)
            {
                cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                {
                    var A = str.match(/\d+/g);
                    let row_old = parseInt(A[2]) // Tổng số rows dữ liệu ban đầu
                    cy.get(data.selector.btn_submit).click()
                    cy.wait(500)
                    // if(row_old > 1)
                    // {
                    //     cy.get(data.selector.btn_confirm).click()
                    //     cy.wait(500)
                    // }
                    cy.get(data.selector.notifi_green).invoke('text').should('eq', notifi_green_addnew)
                    cy.wait(700)
                    cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                    {
                        var A = str.match(/\d+/g);
                        let row_new = parseInt(A[2]) // Tổng số rows dữ liệu sau thao tác
                        expect(row_new).to.eq(row_old)
                        row_old = row_old - 1
                        if(language == "Tiếng Việt")
                        { 
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1) span`).invoke('text').should('eq', value_topicVn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke('text').should('eq', value_type)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3) span`).invoke('text').should('eq', value_messVn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4) span`).invoke('text').should('eq', timeFrom_confirm_VN)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5) span`).invoke('text').should('eq', timeTo_confirm_VN)
                        }

                        if(language == "English")
                        {
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1) span`).invoke('text').should('eq', value_topicEn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke('text').should('eq', value_type)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3) span`).invoke('text').should('eq', value_messEn)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4) span`).invoke('text').should('eq', timeFrom_confirm_EN)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5) span`).invoke('text').should('eq', timeTo_confirm_EN)
                        }
                        if(language == "日本語")
                        {
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1) span`).invoke('text').should('eq', value_topicJp)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke('text').should('eq', value_type)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3) span`).invoke('text').should('eq', value_messJp)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4) span`).invoke('text').should('eq', timeFrom_confirm_JP)
                            cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5) span`).invoke('text').should('eq', timeTo_confirm_JP)
                        }
                    })
                })
            }

            else
            {
                cy.get(data.selector.btn_submit).click()
                cy.wait(500)
                if(value_topicVn == 'null' || notifi_topicVn != 'null') { cy.get(data.selector.notifi_topicVn).invoke('text').should('eq', notifi_topicVn) }
                if(value_topicEn == 'null' || notifi_topicEn != 'null') { cy.get(data.selector.notifi_topicEn).invoke('text').should('eq', notifi_topicEn) }
                if(value_topicJp == 'null' || notifi_topicJp != 'null') { cy.get(data.selector.notifi_topicJp).invoke('text').should('eq', notifi_topicJp) }
                if(timeFrom_confirm == 'null' || notifi_timeFrom != 'null') { cy.get(data.selector.notifi_timeFrom).invoke('text').should('eq', notifi_timeFrom) }
                if(timeTo_confirm == 'null' || notifi_timeTo != 'null') { cy.get(data.selector.notifi_timeTo).invoke('text').should('eq', notifi_timeTo) }
                if(value_messVn == 'null' || notifi_messVn != 'null') { cy.get(data.selector.notifi_messVn).invoke('text').should('eq', notifi_messVn) }
                if(value_messEn == 'null' || notifi_messEn != 'null') { cy.get(data.selector.notifi_messEn).invoke('text').should('eq', notifi_messEn) }
                if(value_messJp == 'null' || notifi_messJp != 'null') { cy.get(data.selector.notifi_messJp).invoke('text').should('eq', notifi_messJp) }
            }
        })

    })
})


describe("Rows per page", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.messages)
        cy.viewport(1920,1080)
        cy.wait(1000)

    })


    it('Rows per page',function(){
        cy.viewport(1920,1080)
        cy.wait(1000)
        for(var I=1; I<6; I++)
        {
            cy.get(data.selector.btn_rowPerPage).click()
            cy.get(`ul[class='select-items show inside'] li:eq(${I})`).click()
            cy.get(data.selector.rowPerPage_allowed).invoke(`text`).then((num)=>{
                var rowsPerPage = parseInt(num)
                cy.get(data.selector.row_count).its('length').should(`not.be.gt`,rowsPerPage)
            })
            cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
            {
                var A = str.match(/\d+/g);
                var tong = A[2]
                cy.log(`tong = ${tong}`)
                cy.get(data.selector.rowPerPage_allowed).invoke(`text`).then((num)=>{
                    var rowsPerPage = parseInt(num)
                    cy.log(`rowsPerPage = ${rowsPerPage}`)
                    // cy.log(`rowsPerPage = ${rowsPerPage}`)
                    var nguyen = Math.floor(tong/rowsPerPage)
                    cy.log(`nguyen = ${nguyen}`)
                    let du = tong%rowsPerPage
                    du = Math.floor(du/rowsPerPage)
                    if(du < 1)
                    {
                        du = 1
                    }
                    cy.log(`du = ${du}`)
                    if(du == 0 || nguyen == 0)
                    {
                        var pageCount = 1
                    }
                    else{var pageCount = nguyen + du}
                    cy.log(`pageCount = ${pageCount}`)
                    cy.get(data.selector.pages_count).its(`length`).then((count)=>{
                        // expect(pageCount).to.eq(count)
                    })
                })
            })
        }
    })
})



describe.only("Test", function(){
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.messages)
        cy.viewport(1920,1080).wait(2000)
    })
    
    it("Test", function(){
        let year = "2019"
        let month = "June"
        let day = "25"
        cy.get(`[class='startDate flatpickr-input']`).click()
        cy.get(`.flatpickr-monthDropdown-months:eq(0)`).select(month)
        cy.get(`[class='numInput cur-year']:eq(0)`).type(year)
        cy.get(`.dayContainer:eq(0) > span[aria-label='${month} ${day}, ${year}']`).click()
    })
})