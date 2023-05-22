//TODO: Sửa lại code file_url thay đổi từ input file url sang upload file
//TODO: Edit lại phần test Layout


//*     ---- Import Start ---- 
/// <reference types="cypress"/>
const general = require('../Variables/general_data')
const data = require('../Variables/master_items')
const WFH_registration = require('../Variables/WFH_registration')
const responsive = require('../Data/Responsive.json')
const addnews = require('../Data/MasterItems_addNew.json')
const edit = require('../Data/MasterItems_edit.json')
const copy = require('../Data/MasterItems_copy.json')
require("cypress-plugin-tab");
//*     ---- Import End ---- 


//*     ---- Variable Start ---- 
var Word = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
var randomName = ""
//*     ---- Variable End ----


//*     ---- Code Start ---- 
describe("addItem", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })
    
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.master_items)
        cy.viewport(1920,1080)
    })
    
    
    addnews.forEach((excel)=>{
        // Điền các form của mục chính
        // Hiển thị warning "Tên đã tồn tại. Vui lòng kiểm tra lại" nếu trùng
        // Hiển thị warning "Vui lòng không được để trống" nếu để trống
        // Kiểm tra dữ liệu mới (phải trùng khớp với dữ liệu vừa được nhập vào)
        // Kiểm tra thông báo thêm mới thành công (hiển thị && đúng nội dung)
        it(Object.values(excel)[0], function(){
            cy.wait(2000)
            cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
            {
                var A = str.match(/\d+/g);
                var row_old = parseInt(A[2]) // Tổng số rows dữ liệu ban đầu
                let language = Object.values(excel)[1]
                let value_type = Object.values(excel)[2]
                let value_nameVN = Object.values(excel)[3]
                let value_nameEN = Object.values(excel)[5]
                let value_nameJP = Object.values(excel)[7]
                let value_fileUrl = Object.values(excel)[9]

                let notifi_nameVN = Object.values(excel)[4]
                let notifi_nameEN = Object.values(excel)[6]
                let notifi_nameJP = Object.values(excel)[8]
                let notifi_fileUrl = Object.values(excel)[10]

                let value_type_diachilamviec = ['Địa chỉ làm việc','Work Location','勤務地']
                let value_type_lydo = ['Lý do','Reason','理由']
                let value_type_thietbi = ['Thiết bị','Device','デバイス']
                let value_type_huongdan = ['Hướng dẫn','Guide','ガイド']

                const notifi_success = ['Thêm dữ liệu mới thành công','New data added successfully','新しいデータが正常に追加されました']
                const notifi_duplicate = ['Tên đã tồn tại. Vui lòng kiểm tra lại', 'Name already exists. Please check again', '名前は既に存在します。再度確認してください']
                const notifi_empty = ['Vui lòng không được để trống', 'Please enter in the blank', '空欄に入力してください'] 

                let notifi_green = null

                if(language == 'Tiếng Việt')
                {
                    if(value_type == value_type_diachilamviec[0]) {value_type = value_type_diachilamviec[0]}
                    if(value_type == value_type_lydo[0]) {value_type = value_type_lydo[0]}
                    if(value_type == value_type_thietbi[0]) {value_type = value_type_thietbi[0]}
                    if(value_type == value_type_huongdan[0]) {value_type = value_type_huongdan[0]}
                    notifi_green = notifi_success[0]

                    if(notifi_nameVN == notifi_duplicate[0]) {notifi_nameVN = notifi_duplicate[0]}
                    else if (notifi_nameVN == notifi_empty[0]) {notifi_nameVN = notifi_empty[0]}
                    if(notifi_nameEN == notifi_duplicate[0]) {notifi_nameEN = notifi_duplicate[0]}
                    else if (notifi_nameEN == notifi_empty[0]) {notifi_nameEN = notifi_empty[0]}
                    if(notifi_nameJP == notifi_duplicate[0]) {notifi_nameJP = notifi_duplicate[0]}
                    else if (notifi_nameJP == notifi_empty[0]) {notifi_nameJP = notifi_empty[0]}
                    if(notifi_fileUrl == notifi_duplicate[0]) {notifi_fileUrl = notifi_duplicate[0]}
                    else if (notifi_fileUrl == notifi_empty[0]) {notifi_fileUrl = notifi_empty[0]}

                    cy.get(general.selector.language_name).click()
                    cy.get(general.selector.language_name_Vn).click()
                }

                if(language == 'English')
                {
                    if(value_type == value_type_diachilamviec[0]) {value_type = value_type_diachilamviec[1]}
                    if(value_type == value_type_lydo[0]) {value_type = value_type_lydo[1]}
                    if(value_type == value_type_thietbi[0]) {value_type = value_type_thietbi[1]}
                    if(value_type == value_type_huongdan[0]) {value_type = value_type_huongdan[1]}
                    notifi_green = notifi_success[1]

                    if(notifi_nameVN == notifi_duplicate[0]) {notifi_nameVN = notifi_duplicate[1]}
                    if (notifi_nameVN == notifi_empty[0]) {notifi_nameVN = notifi_empty[1]}
                    cy.log(notifi_nameVN)
                    if(notifi_nameEN == notifi_duplicate[0]) {notifi_nameEN = notifi_duplicate[1]}
                    else if (notifi_nameEN == notifi_empty[0]) {notifi_nameEN = notifi_empty[1]}
                    if(notifi_nameJP == notifi_duplicate[0]) {notifi_nameJP = notifi_duplicate[1]}
                    else if (notifi_nameJP == notifi_empty[0]) {notifi_nameJP = notifi_empty[1]}
                    if(notifi_fileUrl == notifi_duplicate[0]) {notifi_fileUrl = notifi_duplicate[1]}
                    else if (notifi_fileUrl == notifi_empty[0]) {notifi_fileUrl = notifi_empty[1]}

                    cy.get(general.selector.language_name).click()
                    cy.get(general.selector.language_name_En).click()
                }

                if(language == '日本語')
                {
                    if(value_type == value_type_diachilamviec[0]) {value_type = value_type_diachilamviec[2]}
                    if(value_type == value_type_lydo[0]) {value_type = value_type_lydo[2]}
                    if(value_type == value_type_thietbi[0]) {value_type = value_type_thietbi[2]}
                    if(value_type == value_type_huongdan[0]) {value_type = value_type_huongdan[2]}
                    notifi_green = notifi_success[2]

                    if(notifi_nameVN == notifi_duplicate[0]) {notifi_nameVN = notifi_duplicate[2]}
                    else if (notifi_nameVN == notifi_empty[0]) {notifi_nameVN = notifi_empty[2]}
                    if(notifi_nameEN == notifi_duplicate[0]) {notifi_nameEN = notifi_duplicate[2]}
                    else if (notifi_nameEN == notifi_empty[0]) {notifi_nameEN = notifi_empty[2]}
                    if(notifi_nameJP == notifi_duplicate[0]) {notifi_nameJP = notifi_duplicate[2]}
                    else if (notifi_nameJP == notifi_empty[0]) {notifi_nameJP = notifi_empty[2]}
                    if(notifi_fileUrl == notifi_duplicate[0]) {notifi_fileUrl = notifi_duplicate[2]}
                    else if (notifi_fileUrl == notifi_empty[0]) {notifi_fileUrl = notifi_empty[2]}

                    cy.get(general.selector.language_name).click()
                    cy.get(general.selector.language_name_Jp).click()
                }

                cy.get(data.selector.btn_addnew).click()
                cy.wait(500)
                if(value_type == value_type_diachilamviec[0] || value_type == value_type_diachilamviec[1] || value_type == value_type_diachilamviec[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_diachilamviec).click()
                }

                if(value_type == value_type_lydo[0] || value_type == value_type_lydo[1] || value_type == value_type_lydo[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_lydo).click()
                }

                if(value_type == value_type_thietbi[0] || value_type == value_type_thietbi[1] || value_type == value_type_thietbi[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_thietbi).click()
                }

                if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_huongdan).click()
                }
                cy.wait(500)
                if(value_nameVN != 'null') {cy.get(data.selector.input_nameVN).type(value_nameVN)}
                if(value_nameEN != 'null') {cy.get(data.selector.input_nameEN).type(value_nameEN)}
                if(value_nameJP != 'null') {cy.get(data.selector.input_nameJP).type(value_nameJP)}
                if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2]) {if(value_fileUrl != 'null') {cy.get(data.selector.input_url).type(value_fileUrl)}}

                if(notifi_nameVN == 'null' && notifi_nameEN == 'null' && notifi_nameJP == 'null' && notifi_fileUrl == 'null')
                {
                    cy.get(data.selector.btn_submit).click()
                    cy.wait(300)
                    cy.get(data.selector.notifi_green).invoke(`text`).should('eq',notifi_green)
                    cy.wait(1000)
                    cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                    {
                        var A = str.match(/\d+/g);
                        var row_new = parseInt(A[2]) // Tổng số rows dữ liệu sau
                        expect(row_new).to.gt(row_old)
                        cy.get(data.selector.row1_typeItem).invoke(`text`).should('eq', value_type)
                        cy.get(data.selector.row1_nameVN).invoke(`text`).should('eq', value_nameVN)
                        cy.get(data.selector.row1_nameEN).invoke(`text`).should('eq', value_nameEN)
                        cy.get(data.selector.row1_nameJP).invoke(`text`).should('eq', value_nameJP)
                    })
                }

                else
                {
                    cy.get(data.selector.btn_submit).click()
                    cy.wait(300)
                    if(notifi_nameVN != 'null') {cy.get(data.selector.notifi_input_nameVN).invoke(`text`).should('eq', notifi_nameVN)}
                    if(notifi_nameEN != 'null') {cy.get(data.selector.notifi_input_nameEN).invoke(`text`).should('eq', notifi_nameEN)}
                    if(notifi_nameJP != 'null') {cy.get(data.selector.notifi_input_nameJP).invoke(`text`).should('eq', notifi_nameJP)}
                    if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2])
                    {if(notifi_fileUrl != 'null') {cy.get(data.selector.notifi_input_url).invoke(`text`).should('eq', notifi_fileUrl)}}
                }
            })

        })

    })



    for (var i = 0; i < 3; i++){
        // Điền các form của mục chính - type Địa chỉ làm việc (Bằng tên được tạo ra ngẫu nhiên)
        // Kiểm tra dữ liệu mới (phải trùng khớp với dữ liệu vừa được nhập vào)
        // Kiểm tra thông báo thêm mới thành công (hiển thị && đúng nội dung)
        it(`Random name ${i}`, function(){
            for (var i = 0; i < 1; i++)
            randomName+=Word.charAt(Math.floor(Math.random() * Word.length));
            cy.get(data.selector.btn_addnew).click()
            cy.get(data.selector.board_contentTitle)
                .should('contain', 'Thêm mục chính')
            cy.get(data.selector.input_nameVN)
                .type(randomName)
            cy.get(data.selector.input_nameEN)
                .type(randomName)
            cy.get(data.selector.input_nameJP)
                .type(randomName)
            cy.get(data.selector.btn_submit).click()
                .then(()=>{
                    cy.get(data.selector.notifi_green)
                        .should('be.visible')
                        .invoke('text')
                            .then((text)=>{
                                expect(text).to.include('Thêm dữ liệu mới thành công')
                            })
                })
            })
    }
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
        cy.visit(general.url.master_items)
        cy.viewport(1920,1080)
    })


    // Kiểm tra nút rows per page (Hiển thị đúng số lượng rows được chọn ở mỗi page)
    // Kiểm tra số trang (tạo thêm trang mới khi số rows nhiều hơn số lượng cho phép trong một trang)
    it('Rows per page',function(){
        cy.viewport(1280,1280)
        cy.wait(1000)
        for(var I=1; I<=6; I++)
        {
            cy.get(data.selector.btn_rowPerPage).click()
            cy.get(`.select-items > :nth-child(${I})`).click()
            cy.get(data.selector.rowPerPage_allowed).invoke(`text`).then((num)=>{
                var rowsPerPage = parseInt(num)
                cy.get(data.selector.current_total_rows).its('length').should(`not.be.gt`,rowsPerPage)
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
                        expect(pageCount).to.eq(count)
                    })
                })
            })
        }
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
        cy.visit(general.url.master_items)
        cy.viewport(1920,1080)
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

            else if( (Object.values(res)[1] >= 600) && (Object.values(res)[1] < 960) ){
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
            
            else if( (Object.values(res)[1] >= 960) && (Object.values(res)[1] < 1280) ){

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

            else if( (Object.values(res)[1] >= 1280) && (Object.values(res)[1] < 1920) ){
                cy.get(data.selector.btn_addnew_background).should('have.css', 'width')
                .and('match', /(\d+)/)
                .then(($width) => {
                  const width = parseInt($width);
                  expect(width).to.be.at.least(165);
                });
            }

            else if( (Object.values(res)[1] >= 1920) && (Object.values(res)[1] < 2560) ){
                cy.get(data.selector.btn_addnew_background).should('have.css', 'width')
                .and('match', /(\d+)/)
                .then(($width) => {
                  const width = parseInt($width);
                  expect(width).to.be.at.least(165);
                });
            }

            else if( (Object.values(res)[1] >= 2560)){
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


describe("Thông Tin", function(){
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.master_items)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })

    it('Infomation',function(){
        cy.get(data.selector.count_rows).its('length')
            .then((row)=>{
                if(row > 0)
                {
                    cy.wait(1000)
                    cy.get(data.selector.row1_typeItem).invoke(`text`).then((typeItem_old)=>{
                        cy.get(data.selector.row1_nameVN).invoke(`text`).then((nameVN_old)=>{
                            cy.get(data.selector.row1_nameEN).invoke(`text`).then((nameEN_old)=>{
                                cy.get(data.selector.row1_nameJP).invoke(`text`).then((nameJP_old)=>{
                                    cy.get(data.selector.row1_fileUrl).invoke(`text`).then((fileUrl_old)=>{
                                        cy.get(data.selector.btn_thaotac).click()
                                        cy.get(data.selector.btn_info).click()
                                        cy.wait(1000)
                                        cy.get(data.selector.box_type).invoke(`text`).then((typeItem_new)=>{
                                            cy.get(data.selector.input_nameVN).invoke(`val`).then((nameVN_new)=>{
                                                cy.log(nameVN_new)
                                                cy.get(data.selector.input_nameEN).invoke(`val`).then((nameEN_new)=>{
                                                    cy.get(data.selector.input_nameJP).invoke(`val`).then((nameJP_new)=>{
                                                        cy.get(data.selector.input_url).invoke(`val`).then((fileUrl_new)=>{
                                                            expect(typeItem_old).to.eq(typeItem_new)
                                                            expect(nameVN_old).to.eq(nameVN_new)
                                                            expect(nameEN_old).to.eq(nameEN_new)
                                                            expect(nameJP_old).to.eq(nameJP_new)
                                                            if(typeItem_new == 'Hướng dẫn') {expect(fileUrl_old).to.eq(fileUrl_new)}
                                                            cy.get(data.selector.input_nameVN).should('be.disabled')
                                                            cy.get(data.selector.input_nameEN).should('be.disabled')
                                                            cy.get(data.selector.input_nameJP).should('be.disabled')
                                                            if(typeItem_new == 'Hướng dẫn') {cy.get(data.selector.input_url).should('be.disabled')}
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


describe("Edit Items", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })

    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.master_items)
        cy.viewport(1920,1080)
    })
    
    // TODO: Chú thích tính năng của code
    edit.forEach((excel)=>{
        // Điền các form của mục chính
        // Hiển thị warning "Tên đã tồn tại. Vui lòng kiểm tra lại" nếu trùng
        // Hiển thị warning "Vui lòng không được để trống" nếu để trống
        // Kiểm tra dữ liệu mới (phải trùng khớp với dữ liệu vừa được nhập vào)
        // Kiểm tra thông báo thêm mới thành công (hiển thị && đúng nội dung)
        it(Object.values(excel)[0], function(){
            cy.wait(2000)
            cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
            {
                var A = str.match(/\d+/g);
                var row_old = parseInt(A[2]) // Tổng số rows dữ liệu ban đầu
                let language = Object.values(excel)[1]
                let value_type = Object.values(excel)[2]
                let value_nameVN = Object.values(excel)[3]
                let value_nameEN = Object.values(excel)[5]
                let value_nameJP = Object.values(excel)[7]
                let value_fileUrl = Object.values(excel)[9]

                let notifi_nameVN = Object.values(excel)[4]
                let notifi_nameEN = Object.values(excel)[6]
                let notifi_nameJP = Object.values(excel)[8]
                let notifi_fileUrl = Object.values(excel)[10]

                let value_type_diachilamviec = ['Địa chỉ làm việc','Work Location','勤務地']
                let value_type_lydo = ['Lý do','Reason','理由']
                let value_type_thietbi = ['Thiết bị','Device','デバイス']
                let value_type_huongdan = ['Hướng dẫn','Guide','ガイド']

                const notifi_success = ['Chỉnh sửa dữ liệu thành công','Data edited successfully','データが正常に編集されました']
                const notifi_duplicate = ['Tên đã tồn tại. Vui lòng kiểm tra lại', 'Name already exists. Please check again', '名前は既に存在します。再度確認してください']
                const notifi_empty = ['Vui lòng không được để trống', 'Please enter in the blank', '空欄に入力してください'] 

                let notifi_green = null

                if(language == 'Tiếng Việt')
                {
                    if(value_type == value_type_diachilamviec[0]) {value_type = value_type_diachilamviec[0]}
                    if(value_type == value_type_lydo[0]) {value_type = value_type_lydo[0]}
                    if(value_type == value_type_thietbi[0]) {value_type = value_type_thietbi[0]}
                    if(value_type == value_type_huongdan[0]) {value_type = value_type_huongdan[0]}
                    notifi_green = notifi_success[0]

                    if(notifi_nameVN == notifi_duplicate[0]) {notifi_nameVN = notifi_duplicate[0]}
                    else if (notifi_nameVN == notifi_empty[0]) {notifi_nameVN = notifi_empty[0]}
                    if(notifi_nameEN == notifi_duplicate[0]) {notifi_nameEN = notifi_duplicate[0]}
                    else if (notifi_nameEN == notifi_empty[0]) {notifi_nameEN = notifi_empty[0]}
                    if(notifi_nameJP == notifi_duplicate[0]) {notifi_nameJP = notifi_duplicate[0]}
                    else if (notifi_nameJP == notifi_empty[0]) {notifi_nameJP = notifi_empty[0]}
                    if(notifi_fileUrl == notifi_duplicate[0]) {notifi_fileUrl = notifi_duplicate[0]}
                    else if (notifi_fileUrl == notifi_empty[0]) {notifi_fileUrl = notifi_empty[0]}

                    cy.get(general.selector.language_name).click()
                    cy.get(general.selector.language_name_Vn).click()
                }

                if(language == 'English')
                {
                    if(value_type == value_type_diachilamviec[0]) {value_type = value_type_diachilamviec[1]}
                    if(value_type == value_type_lydo[0]) {value_type = value_type_lydo[1]}
                    if(value_type == value_type_thietbi[0]) {value_type = value_type_thietbi[1]}
                    if(value_type == value_type_huongdan[0]) {value_type = value_type_huongdan[1]}
                    notifi_green = notifi_success[1]

                    if(notifi_nameVN == notifi_duplicate[0]) {notifi_nameVN = notifi_duplicate[1]}
                    if (notifi_nameVN == notifi_empty[0]) {notifi_nameVN = notifi_empty[1]}
                    cy.log(notifi_nameVN)
                    if(notifi_nameEN == notifi_duplicate[0]) {notifi_nameEN = notifi_duplicate[1]}
                    else if (notifi_nameEN == notifi_empty[0]) {notifi_nameEN = notifi_empty[1]}
                    if(notifi_nameJP == notifi_duplicate[0]) {notifi_nameJP = notifi_duplicate[1]}
                    else if (notifi_nameJP == notifi_empty[0]) {notifi_nameJP = notifi_empty[1]}
                    if(notifi_fileUrl == notifi_duplicate[0]) {notifi_fileUrl = notifi_duplicate[1]}
                    else if (notifi_fileUrl == notifi_empty[0]) {notifi_fileUrl = notifi_empty[1]}

                    cy.get(general.selector.language_name).click()
                    cy.get(general.selector.language_name_En).click()
                }

                if(language == '日本語')
                {
                    if(value_type == value_type_diachilamviec[0]) {value_type = value_type_diachilamviec[2]}
                    if(value_type == value_type_lydo[0]) {value_type = value_type_lydo[2]}
                    if(value_type == value_type_thietbi[0]) {value_type = value_type_thietbi[2]}
                    if(value_type == value_type_huongdan[0]) {value_type = value_type_huongdan[2]}
                    notifi_green = notifi_success[2]

                    if(notifi_nameVN == notifi_duplicate[0]) {notifi_nameVN = notifi_duplicate[2]}
                    else if (notifi_nameVN == notifi_empty[0]) {notifi_nameVN = notifi_empty[2]}
                    if(notifi_nameEN == notifi_duplicate[0]) {notifi_nameEN = notifi_duplicate[2]}
                    else if (notifi_nameEN == notifi_empty[0]) {notifi_nameEN = notifi_empty[2]}
                    if(notifi_nameJP == notifi_duplicate[0]) {notifi_nameJP = notifi_duplicate[2]}
                    else if (notifi_nameJP == notifi_empty[0]) {notifi_nameJP = notifi_empty[2]}
                    if(notifi_fileUrl == notifi_duplicate[0]) {notifi_fileUrl = notifi_duplicate[2]}
                    else if (notifi_fileUrl == notifi_empty[0]) {notifi_fileUrl = notifi_empty[2]}

                    cy.get(general.selector.language_name).click()
                    cy.get(general.selector.language_name_Jp).click()
                }

                cy.get(data.selector.btn_edit).click()
                cy.wait(500)
                if(value_type == value_type_diachilamviec[0] || value_type == value_type_diachilamviec[1] || value_type == value_type_diachilamviec[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_diachilamviec).click()
                }

                if(value_type == value_type_lydo[0] || value_type == value_type_lydo[1] || value_type == value_type_lydo[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_lydo).click()
                }

                if(value_type == value_type_thietbi[0] || value_type == value_type_thietbi[1] || value_type == value_type_thietbi[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_thietbi).click()
                }

                if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_huongdan).click()
                }
                cy.wait(500)
                
                if(value_nameVN != 'null') {cy.get(data.selector.input_nameVN).clear().type(value_nameVN)}
                else{cy.get(data.selector.input_nameVN).clear()}
                if(value_nameEN != 'null') {cy.get(data.selector.input_nameEN).clear().type(value_nameEN)}
                else{cy.get(data.selector.input_nameEN).clear()}
                if(value_nameJP != 'null') {cy.get(data.selector.input_nameJP).clear().type(value_nameJP)}
                else{cy.get(data.selector.input_nameJP).clear()}
                if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2])
                {
                    if(value_fileUrl != 'null') {cy.get(data.selector.input_url).clear().type(value_fileUrl)}
                    else{cy.get(data.selector.input_url).clear()}
                }
                

                if(notifi_nameVN == 'null' && notifi_nameEN == 'null' && notifi_nameJP == 'null' && notifi_fileUrl == 'null')
                {
                    cy.get(data.selector.btn_submit).click()
                    cy.wait(300)
                    cy.get(data.selector.notifi_green).invoke(`text`).should('eq',notifi_green)
                    cy.wait(1000)
                    cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                    {
                        var A = str.match(/\d+/g);
                        var row_new = parseInt(A[2]) // Tổng số rows dữ liệu sau
                        expect(row_new).to.eq(row_old)
                        cy.get(data.selector.row1_typeItem).invoke(`text`).should('eq', value_type)
                        cy.get(data.selector.row1_nameVN).invoke(`text`).should('eq', value_nameVN)
                        cy.get(data.selector.row1_nameEN).invoke(`text`).should('eq', value_nameEN)
                        cy.get(data.selector.row1_nameJP).invoke(`text`).should('eq', value_nameJP)
                    })
                }

                else
                {
                    cy.get(data.selector.btn_submit).click()
                    cy.wait(300)
                    if(notifi_nameVN != 'null') {cy.get(data.selector.notifi_input_nameVN).invoke(`text`).should('eq', notifi_nameVN)}
                    if(notifi_nameEN != 'null') {cy.get(data.selector.notifi_input_nameEN).invoke(`text`).should('eq', notifi_nameEN)}
                    if(notifi_nameJP != 'null') {cy.get(data.selector.notifi_input_nameJP).invoke(`text`).should('eq', notifi_nameJP)}
                    if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2])
                    {if(notifi_fileUrl != 'null') {cy.get(data.selector.notifi_input_url).invoke(`text`).should('eq', notifi_fileUrl)}}
                }
            })

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
        cy.visit(general.url.master_items)
        cy.viewport(1920,1080)
    })


    // Thực hiện thao tác copy cơ bản
    // So sánh số hàng ngang trước và sau khi copy (sau phải hơn trước 1 đơn vị)
    // Kiểm tra thanh thông báo khi copy thành công (hiển thị && hoạt động)
    // Kiểm tra dữ liệu của hàng vừa được tạo ra sau khi copy có đúng không
    // Bắt thông báo và so sánh với đầu ra mong muốn của tester
    copy.forEach((excel)=>{
        it(Object.values(excel)[0], function(){
            cy.wait(2000)
            cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
            {
                var A = str.match(/\d+/g);
                var row_old = parseInt(A[2]) // Tổng số rows dữ liệu ban đầu
                let language = Object.values(excel)[1]
                let value_type = Object.values(excel)[2]
                let value_nameVN = Object.values(excel)[3]
                let value_nameEN = Object.values(excel)[5]
                let value_nameJP = Object.values(excel)[7]
                let value_fileUrl = Object.values(excel)[9]

                let notifi_nameVN = Object.values(excel)[4]
                let notifi_nameEN = Object.values(excel)[6]
                let notifi_nameJP = Object.values(excel)[8]
                let notifi_fileUrl = Object.values(excel)[10]

                let value_type_diachilamviec = ['Địa chỉ làm việc','Work Location','勤務地']
                let value_type_lydo = ['Lý do','Reason','理由']
                let value_type_thietbi = ['Thiết bị','Device','デバイス']
                let value_type_huongdan = ['Hướng dẫn','Guide','ガイド']

                const notifi_success = ['Thêm dữ liệu mới thành công','New data added successfully','新しいデータが正常に追加されました']
                const notifi_duplicate = ['Tên đã tồn tại. Vui lòng kiểm tra lại', 'Name already exists. Please check again', '名前は既に存在します。再度確認してください']
                const notifi_empty = ['Vui lòng không được để trống', 'Please enter in the blank', '空欄に入力してください'] 

                let notifi_green = null

                if(language == 'Tiếng Việt')
                {
                    if(value_type == value_type_diachilamviec[0]) {value_type = value_type_diachilamviec[0]}
                    if(value_type == value_type_lydo[0]) {value_type = value_type_lydo[0]}
                    if(value_type == value_type_thietbi[0]) {value_type = value_type_thietbi[0]}
                    if(value_type == value_type_huongdan[0]) {value_type = value_type_huongdan[0]}
                    notifi_green = notifi_success[0]

                    if(notifi_nameVN == notifi_duplicate[0]) {notifi_nameVN = notifi_duplicate[0]}
                    else if (notifi_nameVN == notifi_empty[0]) {notifi_nameVN = notifi_empty[0]}
                    if(notifi_nameEN == notifi_duplicate[0]) {notifi_nameEN = notifi_duplicate[0]}
                    else if (notifi_nameEN == notifi_empty[0]) {notifi_nameEN = notifi_empty[0]}
                    if(notifi_nameJP == notifi_duplicate[0]) {notifi_nameJP = notifi_duplicate[0]}
                    else if (notifi_nameJP == notifi_empty[0]) {notifi_nameJP = notifi_empty[0]}
                    if(notifi_fileUrl == notifi_duplicate[0]) {notifi_fileUrl = notifi_duplicate[0]}
                    else if (notifi_fileUrl == notifi_empty[0]) {notifi_fileUrl = notifi_empty[0]}

                    cy.get(general.selector.language_name).click()
                    cy.get(general.selector.language_name_Vn).click()
                }

                if(language == 'English')
                {
                    if(value_type == value_type_diachilamviec[0]) {value_type = value_type_diachilamviec[1]}
                    if(value_type == value_type_lydo[0]) {value_type = value_type_lydo[1]}
                    if(value_type == value_type_thietbi[0]) {value_type = value_type_thietbi[1]}
                    if(value_type == value_type_huongdan[0]) {value_type = value_type_huongdan[1]}
                    notifi_green = notifi_success[1]

                    if(notifi_nameVN == notifi_duplicate[0]) {notifi_nameVN = notifi_duplicate[1]}
                    if (notifi_nameVN == notifi_empty[0]) {notifi_nameVN = notifi_empty[1]}
                    cy.log(notifi_nameVN)
                    if(notifi_nameEN == notifi_duplicate[0]) {notifi_nameEN = notifi_duplicate[1]}
                    else if (notifi_nameEN == notifi_empty[0]) {notifi_nameEN = notifi_empty[1]}
                    if(notifi_nameJP == notifi_duplicate[0]) {notifi_nameJP = notifi_duplicate[1]}
                    else if (notifi_nameJP == notifi_empty[0]) {notifi_nameJP = notifi_empty[1]}
                    if(notifi_fileUrl == notifi_duplicate[0]) {notifi_fileUrl = notifi_duplicate[1]}
                    else if (notifi_fileUrl == notifi_empty[0]) {notifi_fileUrl = notifi_empty[1]}

                    cy.get(general.selector.language_name).click()
                    cy.get(general.selector.language_name_En).click()
                }

                if(language == '日本語')
                {
                    if(value_type == value_type_diachilamviec[0]) {value_type = value_type_diachilamviec[2]}
                    if(value_type == value_type_lydo[0]) {value_type = value_type_lydo[2]}
                    if(value_type == value_type_thietbi[0]) {value_type = value_type_thietbi[2]}
                    if(value_type == value_type_huongdan[0]) {value_type = value_type_huongdan[2]}
                    notifi_green = notifi_success[2]

                    if(notifi_nameVN == notifi_duplicate[0]) {notifi_nameVN = notifi_duplicate[2]}
                    else if (notifi_nameVN == notifi_empty[0]) {notifi_nameVN = notifi_empty[2]}
                    if(notifi_nameEN == notifi_duplicate[0]) {notifi_nameEN = notifi_duplicate[2]}
                    else if (notifi_nameEN == notifi_empty[0]) {notifi_nameEN = notifi_empty[2]}
                    if(notifi_nameJP == notifi_duplicate[0]) {notifi_nameJP = notifi_duplicate[2]}
                    else if (notifi_nameJP == notifi_empty[0]) {notifi_nameJP = notifi_empty[2]}
                    if(notifi_fileUrl == notifi_duplicate[0]) {notifi_fileUrl = notifi_duplicate[2]}
                    else if (notifi_fileUrl == notifi_empty[0]) {notifi_fileUrl = notifi_empty[2]}

                    cy.get(general.selector.language_name).click()
                    cy.get(general.selector.language_name_Jp).click()
                }

                cy.get(data.selector.btn_thaotac).click()
                cy.get(data.selector.btn_copy).click()
                cy.wait(500)
                if(value_type == value_type_diachilamviec[0] || value_type == value_type_diachilamviec[1] || value_type == value_type_diachilamviec[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_diachilamviec).click()
                }

                if(value_type == value_type_lydo[0] || value_type == value_type_lydo[1] || value_type == value_type_lydo[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_lydo).click()
                }

                if(value_type == value_type_thietbi[0] || value_type == value_type_thietbi[1] || value_type == value_type_thietbi[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_thietbi).click()
                }

                if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2])
                {
                    cy.get(data.selector.box_type).click()
                    cy.get(data.selector.box_type_huongdan).click()
                }
                cy.wait(500)
                
                if(value_nameVN != 'null') {cy.get(data.selector.input_nameVN).clear().type(value_nameVN)}
                else{cy.get(data.selector.input_nameVN).clear()}
                if(value_nameEN != 'null') {cy.get(data.selector.input_nameEN).clear().type(value_nameEN)}
                else{cy.get(data.selector.input_nameEN).clear()}
                if(value_nameJP != 'null') {cy.get(data.selector.input_nameJP).clear().type(value_nameJP)}
                else{cy.get(data.selector.input_nameJP).clear()}
                if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2])
                {
                    if(value_fileUrl != 'null') {cy.get(data.selector.input_url).clear().type(value_fileUrl)}
                    else{cy.get(data.selector.input_url).clear()}
                }
                

                if(notifi_nameVN == 'null' && notifi_nameEN == 'null' && notifi_nameJP == 'null' && notifi_fileUrl == 'null')
                {
                    cy.get(data.selector.btn_submit).click()
                    cy.wait(300)
                    cy.get(data.selector.notifi_green).invoke(`text`).should('eq',notifi_green)
                    cy.wait(1000)
                    cy.get(data.selector.count_rows).invoke(`text`).then((str)=>
                    {
                        var A = str.match(/\d+/g);
                        var row_new = parseInt(A[2]) // Tổng số rows dữ liệu sau
                        expect(row_new).to.gt(row_old)
                        cy.wait(1000)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(1)`).invoke(`text`).should('eq', value_type)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(2)`).invoke(`text`).should('eq', value_nameVN)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(3)`).invoke(`text`).should('eq', value_nameEN)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(4)`).invoke(`text`).should('eq', value_nameJP)
                        if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2])
                        {cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${row_old}) td:eq(5)`).invoke(`text`).should('eq', value_fileUrl)}
                    })
                }

                else
                {
                    cy.get(data.selector.btn_submit).click()
                    cy.wait(300)
                    if(notifi_nameVN != 'null') {cy.get(data.selector.notifi_input_nameVN).invoke(`text`).should('eq', notifi_nameVN)}
                    if(notifi_nameEN != 'null') {cy.get(data.selector.notifi_input_nameEN).invoke(`text`).should('eq', notifi_nameEN)}
                    if(notifi_nameJP != 'null') {cy.get(data.selector.notifi_input_nameJP).invoke(`text`).should('eq', notifi_nameJP)}
                    if(value_type == value_type_huongdan[0] || value_type == value_type_huongdan[1] || value_type == value_type_huongdan[2])
                    {if(notifi_fileUrl != 'null') {cy.get(data.selector.notifi_input_url).invoke(`text`).should('eq', notifi_fileUrl)}}
                }
            })

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
        cy.visit(general.url.master_items)
        cy.viewport(1920,1080)
    })


    after(function(){
        cy.clearAllSessionStorage()
    })


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
                    for (let index = 1; index <= row_old; index++) {
                        cy.get(data.selector.btn_thaotac)
                            .click({force:true})
                        cy.get(data.selector.btn_delete)
                            .click()
                        cy.get(data.selector.btn_submit)
                            .click()
                        cy.get(data.selector.notifi_green)
                            .should('be.visible')
                            .should('contain','Xoá dữ liệu thành công')
                    }
                }
                else{ cy.log("No data to delete") }
            })
        cy.wait(500)
            
    })
})


describe("Layout", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })

    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.master_items)
        cy.wait(1000)
        cy.viewport(1280,1280)
    })

    it('Layout addItem',function(){
        cy.get(data.selector.btn_addnew).click()
        cy.get(data.selector.board_contentTitle).invoke(`text`).should(`eq`,`Thêm mục chính`)
        cy.get(data.selector.box_type)
            .should(`be.visible`)
            .should(`not.be.disabled`)
            .click()
        cy.get(data.selector.box_type_diachilamviec)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(data.selector.box_type_lydo)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(data.selector.box_type_thietbi)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(data.selector.box_type_huongdan)
            .should(`be.visible`)
            .should(`not.be.disabled`)
            .click()
        for(let I = 1; I <=6; I++)
        {
            if(I != 2)
            {
                cy.get(`div[class='input-label']:eq(${I}) label[class='v-label'] span[class='require-char']`)
                    .should(`be.visible`)
                    .invoke(`text`).should(`contain`,'*')
            }
        }
        cy.get(`form[class='v-form content'] input[class='form-input']`)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(`form[class='v-form content'] div[class='input-label'] input[class='form-input']`)
            .should(`be.visible`)
            .should(`not.be.disabled`)
    })


    it('Layout editItem',function(){
        cy.get(data.selector.btn_edit).click()
        cy.get(data.selector.board_contentTitle).invoke(`text`).should(`eq`,`Chỉnh sửa mục chính`)
        cy.get(data.selector.box_type)
            .should(`be.visible`)
            .should(`not.be.disabled`)
            .click()
        cy.get(data.selector.box_type_diachilamviec)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(data.selector.box_type_lydo)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(data.selector.box_type_thietbi)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(data.selector.box_type_huongdan)
            .should(`be.visible`)
            .should(`not.be.disabled`)
            .click()
        for(let I = 1; I <=6; I++)
        {
            cy.get(`div[class='input-label']:eq(${I}) label[class='v-label'] span[class='require-char']`)
                .should(`be.visible`)
                .invoke(`text`).should(`contain`,'*')
        }
        cy.get(`form[class='v-form content'] input[class='form-input']`)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(`form[class='v-form content'] div[class='input-label'] input[class='form-input']`)
            .should(`be.visible`)
            .should(`not.be.disabled`)
    })


    it('Layout copyItem',function(){
        cy.get(data.selector.btn_thaotac).click()
        cy.get(data.selector.btn_copy).click()
        cy.get(data.selector.board_contentTitle).invoke(`text`).should(`eq`,`Sao chép mục chính`)
        cy.get(data.selector.box_type)
            .should(`be.visible`)
            .should(`not.be.disabled`)
            .click()
        cy.get(data.selector.box_type_diachilamviec)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(data.selector.box_type_lydo)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(data.selector.box_type_thietbi)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(data.selector.box_type_huongdan)
            .should(`be.visible`)
            .should(`not.be.disabled`)
            .click()
        for(let I = 1; I <=6; I++)
        {
            cy.get(`div[class='input-label']:eq(${I}) label[class='v-label'] span[class='require-char']`)
                .should(`be.visible`)
                .invoke(`text`).should(`contain`,'*')
        }
        cy.get(`form[class='v-form content'] input[class='form-input']`)
            .should(`be.visible`)
            .should(`not.be.disabled`)
        cy.get(`form[class='v-form content'] div[class='input-label'] input[class='form-input']`)
            .should(`be.visible`)
            .should(`not.be.disabled`)
    })
})


//*     ---- Code End ---- 




describe.only("Test", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.master_items)
        cy.viewport(1920,1080).wait(1000)

    })
    it('test',function(){
        
    })
})
