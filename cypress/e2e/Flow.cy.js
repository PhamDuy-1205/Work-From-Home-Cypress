//TODO: Button cancel - line 255 - Đợi đồng nhất bảng thông báo
//TODO: Kiểm tra lại thông báo edit thành công
//TODO: Kiểm tra lại thông báo Delete thành công
//TODO: Hoàn thiện Addnew + edit + copy giống với các MH khác (nếu có tgian)


//*     ---- Import Start ---- 
/// <reference types="cypress"/>
require("cypress-plugin-tab");
import 'cypress-real-events/support'
const responsive = require('../Data/Responsive.json')
const addNew = require('../Data/Flow_addNew.json')
const copy = require('../Data/Flow_copy.json')
const edit = require('../Data/Flow_edit.json')
import general from '../Variables/general_data'
const data = require('../Variables/Flow')

//*     ---- Import End ---- 


//*     ---- Code Start ---- 


describe("addNew flow", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })
    
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.flow)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })

    
    addNew.forEach((excel)=>{
        it(Object.values(excel)[0], function(){
            
            // Create Varialbe
            // This is for Personal Information form
            const language = Object.values(excel)[1]
            let Psn_Info_flow_name = Object.values(excel)[2]
            let Psn_Info_department = Object.values(excel)[3]
            let Psn_Info_group = Object.values(excel)[4]
            let Psn_Info_position = Object.values(excel)[5]

            // This is for Detail Information form
            let detail_1_NameVN = Object.values(excel)[6]
            let detail_1_NameEN = Object.values(excel)[7]
            let detail_1_NameJP = Object.values(excel)[8]
            let detail_1_UserSubmit = Object.values(excel)[9]
            let detail_1_position = Object.values(excel)[10]
            let detail_1_employee = Object.values(excel)[11]
            let detail_1_type = Object.values(excel)[12]
            let detail_1_approve_nameVN = Object.values(excel)[13]
            let detail_1_approve_nameEN = Object.values(excel)[14]
            let detail_1_approve_nameJP = Object.values(excel)[15]
            let detail_1_deny_nameVN = Object.values(excel)[16]
            let detail_1_deny_nameEN = Object.values(excel)[17]
            let detail_1_deny_nameJP = Object.values(excel)[18]

            // This is also for Detail Information form but Step 2
            let detail_2_NameVN = Object.values(excel)[19]
            let detail_2_NameEN = Object.values(excel)[20]
            let detail_2_NameJP = Object.values(excel)[21]
            let detail_2_UserSubmit = Object.values(excel)[22]
            let detail_2_position = Object.values(excel)[23]
            let detail_2_employee = Object.values(excel)[24]
            let detail_2_type = Object.values(excel)[25]
            let detail_2_approve_nameVN = Object.values(excel)[26]
            let detail_2_approve_nameEN = Object.values(excel)[27]
            let detail_2_approve_nameJP = Object.values(excel)[28]
            let detail_2_deny_nameVN = Object.values(excel)[29]
            let detail_2_deny_nameEN = Object.values(excel)[30]
            let detail_2_deny_nameJP = Object.values(excel)[31]

            // This is for notification if error exist
            let notification = Object.values(excel)[32]

            let notifi_exist_flow = [`Tên Flow đã tồn tại , vui lòng kiểm tra lại`, `Flow name already exists. Please check again.`, `フロー名は既に存在します。 再度確認してください。`]
            let notifi_exist_department = [`Vị trí trong Phòng ban đã tồn tại`, `Position in Department exist`, `部署内の役職あり`]
            let notifi_exist_PsnInfo = [`Thông tin cơ bản đã tồn tại, vui lòng kiểm tra lại`, `The selected basic information already exists.`, `選択した基本情報は既に存在します。`]
            let notifi_create_sussces = [`Tạo flow thành công`, `Create flow success`, `フローの成功を作成する`]
            let notifi_edit_sussces = [`Cập nhật flow thành công`, `Update flow success`, `更新フローの成功`]
            let notifi_update_sussces = [`Cập nhật flow thành công`, `Update flow success`, `更新フローの成功`]
            let notifi_delete_sussces = [`Xóa flow thành công`, `Delete flow success`, `フローの削除成功`]
            let notifi_Require_Psn_flow = [`Vui lòng nhập tiêu đề Flow`, `Please enter a Title`, `タイトルを入力してください。`]
            let notifi_maxlength_Psn_flow = [`Tiêu đề Flow tối đa 255 ký tự 1 byte hoặc 127 ký tự 2 byte`, ``, ``]
            let notifi_Require_Psn_department = [`Phòng ban không được để trống`, `Please select a Department`, `部門を選択してください。`]
            let notifi_Require_Psn_group = [`Group không được để trông`, `Please select a Group`, `グループを選択してください。`]
            let notifi_Require_Psn_position = [`Chức vụ không được để trống`, `Please select a Position`, `ポジションを選択してください。`]
            let notifi_Require_Dt_nameVN = [`Tên(VN) không được để trống`, `Please enter a Name (VN)`, `名前 VN を入力してください。`]
            let notifi_maxlength_Dt_nameVN = [`Tên (VN) tối đa 255 kí tự`, `Please specify the Name VN within 255 characters`, `VN の名前を 255 文字以内で指定してください。`]
            let notifi_Require_Dt_nameEN = [`Tên(EN) không được để trống`, `Please enter a Name (EN)`, `名前を入力してください EN。`]
            let notifi_maxlength_Dt_nameEN = [`Tên (EN) tối đa 255 kí tự`, `Please specify the Name EN within 255 characters`, `名前 EN を 255 文字以内で指定してください。`]
            let notifi_Require_Dt_nameJP = [`Tên(JP) không được để trống`, `Please enter a Name (JP)`, `名前を入力してください JP。`]
            let notifi_maxlength_Dt_nameJP = [`Tên (JP) tối đa 127 kí tự`, `Please specify the Name JP within 127 characters`, `名前 EN を 127 文字以内で指定してください。`]
            let notifi_Require_Dt_userSubmit = [`Vui lòng chọn Người chứng nhận`, `Please enter Attestor`, `認証者を入力してください。`]
            let notifi_Require_Dt_Approve_nameVN = [`Tên chấp thuận(VN) không được để trống`, `Please enter a Approve name (VN)`, `承認を入力してください (VN)。`]
            let notifi_maxlength_Dt_Approve_nameVN = [`Tên chấp thuận(VN) tối đa 255 kí tự`, `Please specify the Approve name (VN) within 255 characters`, `承認(VN)を255文字以内で指定してください。`]
            let notifi_Require_Dt_Approve_nameEN = [`Tên chấp thuận(EN) không được để trống`, `Please enter a Approve name (EN)`, `承認を入力してください (EN)。`]
            let notifi_maxlength_Dt_Approve_nameEN = [`Tên chấp thuận(EN) tối đa 255 kí tự`, `Please specify the Approve name (EN) within 255 characters`, `承認(EN)を255文字以内で指定してください。`]
            let notifi_Require_Dt_Approve_nameJP = [`Tên chấp thuận(JP) không được để trống`, `Please enter a Approve name (JP)`, `承認を入力してください (JP)。`]
            let notifi_maxlength_Dt_Approve_nameJP = [`Tên chấp thuận(JP) tối đa 127 kí tự`, `Please specify the Approve name (JP) within 127 characters`, `承認(JP)は127文字以内で指定してください。`]
            let notifi_Require_Dt_Deny_nameVN = [`Tên từ chối(VN) không được để trống`, `Please enter a Deny name (VN)`, `拒否 (VN) を入力してください。`]
            let notifi_maxlength_Dt_Deny_nameVN = [`Tên từ chối(VN) tối đa 255 kí tự`, `Please specify the Deny name (VN) within 255 characters`, `拒否 (VN) を 255 文字以内で指定してください。`]
            let notifi_Require_Dt_Deny_nameEN = [`Tên từ chối(EN) không được để trống`, `Please enter a Deny name (EN)`, `拒否を入力してください (EN)。`]
            let notifi_maxlength_Dt_Deny_nameEN = [`Tên từ chối(EN) tối đa 255 kí tự`, `Please specify the Deny name (EN) within 255 characters`, `拒否 (EN) を 255 文字以内で指定してください。`]
            let notifi_Require_Dt_Deny_nameJP = [`Tên từ chối(JP) không được để trống`, `Please enter a Deny name (JP)`, `拒否を入力してください (JP)。`]
            let notifi_maxlength_Dt_Deny_nameJP = [`Tên từ chối(JP) tối đa 127 kí tự`, `Please specify the Deny name (JP) within 127 characters`, `拒否(JP)は127文字以内で指定してください`]
            let notifi_Require_byte_nameVN = [`Tên(VN) phải chứa kí tự 2 byte`, `The Process name(EN) field must contain 2 byte character`, `ProcessNameVN フィールドには 2 バイト文字が含まれている必要があります`]
            let notifi_Require_byte_nameEN = [`Tên(EN) phải chứa kí tự 1 byte`, `The Process name(EN) field must contain 1 byte character`, `ProcessNameEN フィールドには 1 バイト文字が含まれている必要があります`]
            let notifi_Require_byte_nameJP = [`Tên chấp thuận(JP) phải chứa kí tự tiếng Nhật`, `The Approve name(JP) field must contain Japanese characters`, `ApproveTextJp フィールドには日本語の文字が含まれている必要があります`]
            let notifi_Require_byte_Approve_nameVN = [`Tên chấp thuận(VN) phải chứa kí tự 2 byte`, `The Approve name(VN) field must contain 2 byte character`, `ApproveTextVN フィールドには 2 バイト文字が含まれている必要があります`]
            let notifi_Require_byte_Approve_nameEN = [`Tên chấp thuận(EN) phải chứa kí tự 1 byte`, `The Approve name(EN) field must contain 1 byte character`, `ApproveTextEN フィールドには 1 バイト文字が含まれている必要があります`]
            let notifi_Require_byte_Approve_nameJP = [`Tên chấp thuận(JP) phải chứa kí tự tiếng Nhật`, `The Approve name(JP) field must contain Japanese characters`, `ApproveTextJp フィールドには日本語の文字が含まれている必要があります`]
            let notifi_Require_byte_Deny_nameVN = [`Tên từ chối(VN) phải chứa kí tự 2 byte`, `The Deny name(VN) field must contain 2 byte character`, `DenyTextVN フィールドには 2 バイト文字が含まれている必要があります`]
            let notifi_Require_byte_Deny_nameEN = [`Tên từ chối(EN) phải chứa kí tự 1 byte`, `The Deny name(EN) field must contain 1 byte character`, `DenyTextEN フィールドには 1 バイト文字が含まれている必要があります`]
            let notifi_Require_byte_Deny_nameJP = [`Tên từ chối(JP) phải chứa kí tự tiếng Nhật`, `The Deny name(JP) field must contain Japanese characters`, `DenyTextJp フィールドには日本語の文字が含まれている必要があります`]
            
            if(language == 'Tiếng Việt')
            {
                cy.get(general.selector.language_name).click()
                cy.get(general.selector.language_name_Vn).click()
                notifi_create_sussces = notifi_create_sussces[0]
            }

            if(language == 'English')
            {
                cy.get(general.selector.language_name).click()
                cy.get(general.selector.language_name_En).click()
                notifi_create_sussces = notifi_create_sussces[1]
            }

            if(language == '日本語')
            {
                cy.get(general.selector.language_name).click()
                cy.get(general.selector.language_name_Jp).click()
                notifi_create_sussces = notifi_create_sussces[2]
            }

            // Count row before action
            cy.get(data.selector.row).its(`length`).then((A)=>{
                let old_row = A
                cy.get(data.selector.btn_addNew).click()
                if(Psn_Info_flow_name != null){cy.get(data.selector.flow_name).type(Psn_Info_flow_name).wait(300)}
                cy.get(data.selector.department).click().wait(700)
                cy.get(data.selector.department_listName).contains(Psn_Info_department).click().wait(300)
                cy.get(data.selector.group).click().wait(700)
                cy.get(data.selector.group_listName).contains(Psn_Info_group).click().wait(300)
                cy.get(data.selector.group).click().wait(300)
                cy.get(data.selector.position).click().wait(700)
                cy.get(data.selector.position_listName).contains(Psn_Info_position).click().wait(300)
                cy.get(data.selector.position).click().wait(300)
        
                if(detail_1_NameVN != null){cy.get(`${data.selector.detail_Name_VN}:eq(0)`).type(detail_1_NameVN).wait(300)}
                if(detail_1_NameEN != null){cy.get(`${data.selector.detail_Name_EN}:eq(0)`).type(detail_1_NameEN).wait(300)}
                if(detail_1_NameJP != null){cy.get(`${data.selector.detail_Name_JP}:eq(0)`).type(detail_1_NameJP).wait(300)}
                if(detail_1_UserSubmit == 'Check'){ cy.get(`${data.selector.detail_checkbox_userSubmit}:eq(0)`).click().wait(300) }
                cy.get(`${data.selector.detail_position}:eq(0)`).click().wait(700)
                cy.get(`${data.selector.detail_position_listName}`).contains(detail_1_position).click().wait(300)
                cy.get(`${data.selector.detail_position}:eq(0)`).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(0)`).click().wait(700)
                cy.get(`${data.selector.detail_employee_listName}`).contains(detail_1_employee).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(0)`).click().wait(300)
                cy.get(`${data.selector.detail_type}:eq(0)`).click().wait(1200)
                if(detail_1_type == "Chứng nhận"){cy.get(`${data.selector.detail_type_listName}:eq(0)`).click().wait(1000)}
                if(detail_1_type == "Xác nhận"){cy.get(`${data.selector.detail_type_listName}:eq(1)`).click().wait(1000)}
                if(detail_1_type == "Chứng nhận")
                {
                    if(detail_1_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(0)`).type(detail_1_approve_nameVN).wait(300)}
                    if(detail_1_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(0)`).type(detail_1_approve_nameEN).wait(300)}
                    if(detail_1_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(0)`).type(detail_1_approve_nameJP).wait(300)}
                    if(detail_1_deny_nameVN != null){cy.get(`${data.selector.detail_Deny_nameVN}:eq(0)`).type(detail_1_deny_nameVN).wait(300)}
                    if(detail_1_deny_nameEN != null){cy.get(`${data.selector.detail_Deny_nameEN}:eq(0)`).type(detail_1_deny_nameEN).wait(300)}
                    if(detail_1_deny_nameJP != null){cy.get(`${data.selector.detail_Deny_nameJP}:eq(0)`).type(detail_1_deny_nameJP).wait(300)}
                }
                if(detail_1_type == "Xác nhận")
                {
                    if(detail_1_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(0)`).type(detail_1_approve_nameVN).wait(300)}
                    if(detail_1_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(0)`).type(detail_1_approve_nameEN).wait(300)}
                    if(detail_1_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(0)`).type(detail_1_approve_nameJP).wait(300)}
                }
        
                cy.get(data.selector.btn_flowSetting_step).click()
        
                if(detail_2_NameVN != null){cy.get(`${data.selector.detail_Name_VN}:eq(1)`).type(detail_2_NameVN).wait(300)}
                if(detail_2_NameEN != null){cy.get(`${data.selector.detail_Name_EN}:eq(1)`).type(detail_2_NameEN).wait(300)}
                if(detail_2_NameJP != null){cy.get(`${data.selector.detail_Name_JP}:eq(1)`).type(detail_2_NameJP).wait(300)}
                if(detail_2_UserSubmit == 'Check'){ cy.get(`${data.selector.detail_checkbox_userSubmit}:eq(1)`).click().wait(300) }
                cy.get(`${data.selector.detail_position}:eq(1)`).click().wait(700)
                cy.get(`${data.selector.detail_position_listName}`).contains(detail_2_position).click().wait(300)
                cy.get(`${data.selector.detail_position}:eq(1)`).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(1)`).click().wait(700)
                cy.get(`${data.selector.detail_employee_listName}`).contains(detail_2_employee).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(1)`).click().wait(300)
                cy.get(`${data.selector.detail_type}:eq(1)`).click().wait(1200)
                if(detail_2_type == "Chứng nhận"){cy.get(`${data.selector.detail_type_listName}:eq(0)`).click().wait(1000)}
                if(detail_2_type == "Xác nhận"){cy.get(`${data.selector.detail_type_listName}:eq(1)`).click().wait(1000)}
    
                if(detail_2_type == "Chứng nhận")
                {
                    if(detail_2_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(1)`).type(detail_2_approve_nameVN).wait(300)}
                    if(detail_2_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(1)`).type(detail_2_approve_nameEN).wait(300)}
                    if(detail_2_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(1)`).type(detail_2_approve_nameJP).wait(300)}
                    if(detail_2_deny_nameVN != null){cy.get(`${data.selector.detail_Deny_nameVN}:eq(1)`).type(detail_2_deny_nameVN).wait(300)}
                    if(detail_2_deny_nameEN != null){cy.get(`${data.selector.detail_Deny_nameEN}:eq(1)`).type(detail_2_deny_nameEN).wait(300)}
                    if(detail_2_deny_nameJP != null){cy.get(`${data.selector.detail_Deny_nameJP}:eq(1)`).type(detail_2_deny_nameJP).wait(300)}
                }
                if(detail_2_type == "Xác nhận")
                {
                    if(detail_2_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(1)`).type(detail_2_approve_nameVN).wait(300)}
                    if(detail_2_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(1)`).type(detail_2_approve_nameEN).wait(300)}
                    if(detail_2_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(1)`).type(detail_2_approve_nameJP).wait(300)}
                }
    
                cy.get(data.selector.btn_flowSetting_submit).click().wait(500)
                if(notification != 'null')
                {
                    cy.get(data.selector.notifi_box).invoke(`text`).should(`eq`,notification)
                }
                else
                {
                    cy.get(data.selector.notifi_box).invoke(`text`).should(`eq`,notifi_create_sussces)
                    cy.visit(general.url.flow).wait(2000)
                    cy.get(data.selector.row).its(`length`).then((A)=>{
                        let new_row = A
                        expect(new_row).to.be.gt(old_row)
                        new_row = new_row-1
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${new_row}) td:eq(1)`).invoke(`text`).should(`eq`,Psn_Info_flow_name)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${new_row}) td:eq(2)`).invoke(`text`).should(`eq`,Psn_Info_department)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${new_row}) td:eq(3)`).invoke(`text`).should(`eq`,Psn_Info_group)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${new_row}) td:eq(4)`).invoke(`text`).should(`eq`,Psn_Info_position)
                    })
                }
            })
                
        })
    })
            
            
    // it.skip('addNew with 10 step', function(){
    //     const min = 0
    //     let max = null
    //     let randomNum = Cypress._.random(min, max);

    //     // Select the web page language
    //     cy.get(general.selector.language_name).click()
    //     cy.get(general.selector.language_name_En).click()
    //     // Click a Add New btn
    //     cy.get(data.selector.btn_addNew).click()
    //     cy.wait(300)

    //     // // Input Flow name
    //     // cy.get(data.selector.flow_name).type('addNew with 10 step')

    //     // // Select department
    //     // cy.get(data.selector.department).click()
    //     // cy.wait(500)
    //     // cy.get(data.selector.department_listName).its(`length`).then((A)=>{
    //     //     max = A-1
    //     //     randomNum = Cypress._.random(min, max);
    //     //     if(randomNum==1){randomNum=2}
    //     //     cy.wait(500)
    //     //     cy.get(`${data.selector.department_listName}:eq(${randomNum})`).click()
    //     // })

    //     // // Select group
    //     // cy.get(data.selector.group).click()
    //     // cy.wait(500)
    //     // cy.get(data.selector.group_listName).its(`length`).then((A)=>{
    //     //     max = A-1
    //     //     randomNum = Cypress._.random(min, max);
    //     //     for(let I=0; I<=max; I++)
    //     //     {
    //     //         cy.get(`${data.selector.group_listName}:eq(${I})`).click()
    //     //     }
    //     // })
    //     // cy.get(data.selector.group).click()

    //     // // Select position
    //     // cy.get(data.selector.position).click()
    //     // cy.wait(500)
    //     //     cy.get(`${data.selector.position_listName}`).its(`length`).then((A)=>{
    //     //         for( let I = 0; I <= 20; I++)
    //     //         {
    //     //             randomNum = Cypress._.random(min, A-1);
    //     //             cy.get(`${data.selector.position_listName}:eq(${randomNum})`).click()
    //     //         }
    //     //     })
    //     // cy.get(data.selector.position).click()
        
    //     // Start loop for the Detail Information Form
    //     let maximum = 10
    //     for( let I = 0; I < maximum; I++)
    //     {
    //         // //Input name(VN) name(EN) name(JP)
    //         // cy.get(`${data.selector.detail_Name_VN}:eq(${I})`).type(`Xin chào thế giới`).wait(300)
    //         // cy.get(`${data.selector.detail_Name_EN}:eq(${I})`).type(`Hello World`).wait(300)
    //         // cy.get(`${data.selector.detail_Name_JP}:eq(${I})`).type(`こんにちは世界`).wait(300)

    //         // // Checkbox User Submit
    //         // randomNum = Cypress._.random(1, 2);
    //         // if(randomNum == 1) { cy.get(`${data.selector.detail_checkbox_userSubmit}:eq(${I})`).click() }

    //         // // Select mục Position
    //         // cy.get(`${data.selector.detail_position}:eq(${I})`).click().wait(500)
    //         // cy.get(`${data.selector.detail_position_listName}`).its(`length`).then((A)=>{
    //         //     for( let I = 0; I <= 20; I++)
    //         //     {
    //         //         randomNum = Cypress._.random(min, A-1);
    //         //         cy.get(`${data.selector.detail_position_listName}:eq(${randomNum})`).click()
    //         //     }
    //         // })
    //         // cy.get(`${data.selector.detail_position}:eq(${I})`).click().wait(200)

    //         // // Select mục Employee
    //         // cy.get(`${data.selector.detail_employee}:eq(${I})`).click()
    //         // cy.wait(500)
    //         // cy.get(`${data.selector.detail_employee_listName}`).its(`length`).then((A)=>{
    //         //     for( let I = 0; I <= 20; I++)
    //         //     {
    //         //         randomNum = Cypress._.random(min, A-1);
    //         //         cy.get(`${data.selector.detail_employee_listName}:eq(${randomNum})`).click()
    //         //     }
    //         // })

    //         // Select Type
    //         cy.get(`${data.selector.detail_type}:eq(${I})`).click()
    //         cy.wait(1200)
    //         randomNum = Cypress._.random(1, 2);
    //         if(randomNum == 1)
    //         {
    //             cy.get(`${data.selector.detail_type_listName}`).contains(`Chứng nhận`).click().wait(500)
    //             // Input Show Certificate if type is "Chứng nhận"
    //             cy.get(`${data.selector.detail_Approve_nameVN}:eq(${I})`).type(`Xin chào thế giới`).wait(300)
    //             cy.get(`${data.selector.detail_Approve_nameEN}:eq(${I})`).type(`Hello World`).wait(300)
    //             cy.get(`${data.selector.detail_Approve_nameJP}:eq(${I})`).type(`こんにちは世界`).wait(300)
    //             cy.get(`${data.selector.detail_Deny_nameVN}:eq(${I})`).type(`Xin chào thế giới`).wait(300)
    //             cy.get(`${data.selector.detail_Deny_nameEN}:eq(${I})`).type(`Hello World`).wait(300)
    //             cy.get(`${data.selector.detail_Deny_nameJP}:eq(${I})`).type(`こんにちは世界`).wait(300)
    //         }
    //         if(randomNum == 2)
    //         {
    //             cy.get(`${data.selector.detail_type_listName}:eq(${I})`).contains(`Xác nhận`).click().wait(500)
    //             // Input Show Certificate if type is "Xác nhận"
    //             cy.get(`${data.selector.detail_Approve_nameVN}:eq(${I})`).type(`Xin chào thế giới`).wait(300)
    //             cy.get(`${data.selector.detail_Approve_nameEN}:eq(${I})`).type(`Hello World`).wait(300)
    //             cy.get(`${data.selector.detail_Approve_nameJP}:eq(${I})`).type(`こんにちは世界`).wait(300)
    //         }


    //         // Create new Detail Infomation form if not enough length
    //         if(I < maximum-1)
    //         {
    //             cy.get(data.selector.btn_flowSetting_step).click()
    //         }
    //         cy.wait(2000)
    //     }
            
            
    // })
})


describe("edit flow", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })
    
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.flow)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })


    edit.forEach((excel)=>{
        it(Object.values(excel)[0], function(){
            
            // Create Varialbe
            // This is for Personal Information form
            const language = Object.values(excel)[1]
            let Psn_Info_flow_name = Object.values(excel)[2]
            let Psn_Info_department = Object.values(excel)[3]
            let Psn_Info_group = Object.values(excel)[4]
            let Psn_Info_position = Object.values(excel)[5]

            // This is for Detail Information form
            let detail_1_NameVN = Object.values(excel)[6]
            let detail_1_NameEN = Object.values(excel)[7]
            let detail_1_NameJP = Object.values(excel)[8]
            let detail_1_UserSubmit = Object.values(excel)[9]
            let detail_1_position = Object.values(excel)[10]
            let detail_1_employee = Object.values(excel)[11]
            let detail_1_type = Object.values(excel)[12]
            let detail_1_approve_nameVN = Object.values(excel)[13]
            let detail_1_approve_nameEN = Object.values(excel)[14]
            let detail_1_approve_nameJP = Object.values(excel)[15]
            let detail_1_deny_nameVN = Object.values(excel)[16]
            let detail_1_deny_nameEN = Object.values(excel)[17]
            let detail_1_deny_nameJP = Object.values(excel)[18]

            // This is also for Detail Information form but Step 2
            let detail_2_NameVN = Object.values(excel)[19]
            let detail_2_NameEN = Object.values(excel)[20]
            let detail_2_NameJP = Object.values(excel)[21]
            let detail_2_UserSubmit = Object.values(excel)[22]
            let detail_2_position = Object.values(excel)[23]
            let detail_2_employee = Object.values(excel)[24]
            let detail_2_type = Object.values(excel)[25]
            let detail_2_approve_nameVN = Object.values(excel)[26]
            let detail_2_approve_nameEN = Object.values(excel)[27]
            let detail_2_approve_nameJP = Object.values(excel)[28]
            let detail_2_deny_nameVN = Object.values(excel)[29]
            let detail_2_deny_nameEN = Object.values(excel)[30]
            let detail_2_deny_nameJP = Object.values(excel)[31]

            // This is for notification if error exist
            let notification = Object.values(excel)[32]

            let notifi_create_sussces = [`Tạo flow thành công`, `Create flow success`, `フローの成功を作成する`]
            let notifi_edit_sussces = [`Cập nhật flow thành công`, `Update flow success`, `更新フローの成功`]
            
            if(language == 'Tiếng Việt')
            {
                cy.get(general.selector.language_name).click()
                cy.get(general.selector.language_name_Vn).click()
                notifi_edit_sussces = notifi_edit_sussces[0]
            }

            if(language == 'English')
            {
                cy.get(general.selector.language_name).click()
                cy.get(general.selector.language_name_En).click()
                notifi_edit_sussces = notifi_edit_sussces[1]
            }

            if(language == '日本語')
            {
                cy.get(general.selector.language_name).click()
                cy.get(general.selector.language_name_Jp).click()
                notifi_edit_sussces = notifi_edit_sussces[2]
            }

            // Count row before action
            cy.get(data.selector.row).its(`length`).then((A)=>{
                let old_row = A
                cy.get(data.selector.btn_edit).click().wait(1200)
                
                // Làm mới lại step
                cy.get(`.list-group-item`).its(`length`).then((A)=>{
                    for( let I=0; I<A; I++)
                    {
                        cy.get(`${data.selector.btn_flowSetting_delete}:eq(0)`).click().wait(300)
                        cy.get(`${data.selector.btn_flowSetting_confirm_YES}`).click().wait(700)
                        if(I == A-1)
                        {
                            cy.get(`${data.selector.btn_flowSetting_refreshStep}:eq(0)`).click().wait(300)
                            cy.get(`${data.selector.btn_flowSetting_confirm_YES}`).click().wait(700)
                        }
                    }
                })

                if(Psn_Info_flow_name != null){cy.get(data.selector.flow_name).clear().type(Psn_Info_flow_name).wait(300)}
                cy.get(data.selector.department).click().wait(700)
                cy.get(data.selector.department_listName).contains(Psn_Info_department).click().wait(300)
                cy.get(data.selector.group).click().wait(700)
                cy.get(data.selector.group_listName).its(`length`).then((A)=>{
                    for(let I=0; I<A; I++)
                    {
                        cy.get(`${data.selector.group_listName}:eq(${I}) > label`).invoke(`attr`,`class`,`d-flex flex-row align-center label-text`)
                    }
                })
                cy.get(data.selector.group_listName).contains(Psn_Info_group).click().wait(300)
                cy.get(data.selector.group).click().wait(300)
                cy.get(data.selector.position).click().wait(700)
                cy.get(data.selector.position_listName).its(`length`).then((A)=>{
                    for(let I=0; I<A; I++)
                    {
                        cy.get(`${data.selector.position_listName}:eq(${I}) > label`).invoke(`attr`,`class`).then((class_name)=>{
                            if(class_name == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.position_listName}:eq(${I})`).click() }
                        })
                    }
                })
                cy.get(data.selector.position_listName).contains(Psn_Info_position).click().wait(300)
                cy.get(data.selector.position).click().wait(300)

        
                if(detail_1_NameVN != null){cy.get(`${data.selector.detail_Name_VN}:eq(0)`).type(detail_1_NameVN).wait(300)}
                if(detail_1_NameEN != null){cy.get(`${data.selector.detail_Name_EN}:eq(0)`).type(detail_1_NameEN).wait(300)}
                if(detail_1_NameJP != null){cy.get(`${data.selector.detail_Name_JP}:eq(0)`).type(detail_1_NameJP).wait(300)}
                if(detail_1_UserSubmit == 'Check'){ cy.get(`${data.selector.detail_checkbox_userSubmit}:eq(0)`).click().wait(300) }
                cy.get(`${data.selector.detail_position}:eq(0)`).click().wait(700)
                cy.get(`${data.selector.detail_position_listName}`).contains(detail_1_position).click().wait(300)
                cy.get(`${data.selector.detail_position}:eq(0)`).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(0)`).click().wait(700)
                cy.get(`${data.selector.detail_employee_listName}`).contains(detail_1_employee).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(0)`).click().wait(300)
                cy.get(`${data.selector.detail_type}:eq(0)`).click().wait(1200)
                if(detail_1_type == "Chứng nhận"){cy.get(`${data.selector.detail_type_listName}:eq(0)`).click().wait(1000)}
                if(detail_1_type == "Xác nhận"){cy.get(`${data.selector.detail_type_listName}:eq(1)`).click().wait(1000)}
                if(detail_1_type == "Chứng nhận")
                {
                    if(detail_1_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(0)`).type(detail_1_approve_nameVN).wait(300)}
                    if(detail_1_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(0)`).type(detail_1_approve_nameEN).wait(300)}
                    if(detail_1_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(0)`).type(detail_1_approve_nameJP).wait(300)}
                    if(detail_1_deny_nameVN != null){cy.get(`${data.selector.detail_Deny_nameVN}:eq(0)`).type(detail_1_deny_nameVN).wait(300)}
                    if(detail_1_deny_nameEN != null){cy.get(`${data.selector.detail_Deny_nameEN}:eq(0)`).type(detail_1_deny_nameEN).wait(300)}
                    if(detail_1_deny_nameJP != null){cy.get(`${data.selector.detail_Deny_nameJP}:eq(0)`).type(detail_1_deny_nameJP).wait(300)}
                }
                if(detail_1_type == "Xác nhận")
                {
                    if(detail_1_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(0)`).type(detail_1_approve_nameVN).wait(300)}
                    if(detail_1_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(0)`).type(detail_1_approve_nameEN).wait(300)}
                    if(detail_1_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(0)`).type(detail_1_approve_nameJP).wait(300)}
                }
        
                cy.get(data.selector.btn_flowSetting_step).click()
        
                if(detail_2_NameVN != null){cy.get(`${data.selector.detail_Name_VN}:eq(1)`).type(detail_2_NameVN).wait(300)}
                if(detail_2_NameEN != null){cy.get(`${data.selector.detail_Name_EN}:eq(1)`).type(detail_2_NameEN).wait(300)}
                if(detail_2_NameJP != null){cy.get(`${data.selector.detail_Name_JP}:eq(1)`).type(detail_2_NameJP).wait(300)}
                if(detail_2_UserSubmit == 'Check'){ cy.get(`${data.selector.detail_checkbox_userSubmit}:eq(1)`).click().wait(300) }
                cy.get(`${data.selector.detail_position}:eq(1)`).click().wait(700)
                cy.get(`${data.selector.detail_position_listName}`).contains(detail_2_position).click().wait(300)
                cy.get(`${data.selector.detail_position}:eq(1)`).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(1)`).click().wait(700)
                cy.get(`${data.selector.detail_employee_listName}`).contains(detail_2_employee).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(1)`).click().wait(300)
                cy.get(`${data.selector.detail_type}:eq(1)`).click().wait(1200)
                if(detail_2_type == "Chứng nhận"){cy.get(`${data.selector.detail_type_listName}:eq(0)`).click().wait(1000)}
                if(detail_2_type == "Xác nhận"){cy.get(`${data.selector.detail_type_listName}:eq(1)`).click().wait(1000)}
    
                if(detail_2_type == "Chứng nhận")
                {
                    if(detail_2_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(1)`).type(detail_2_approve_nameVN).wait(300)}
                    if(detail_2_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(1)`).type(detail_2_approve_nameEN).wait(300)}
                    if(detail_2_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(1)`).type(detail_2_approve_nameJP).wait(300)}
                    if(detail_2_deny_nameVN != null){cy.get(`${data.selector.detail_Deny_nameVN}:eq(1)`).type(detail_2_deny_nameVN).wait(300)}
                    if(detail_2_deny_nameEN != null){cy.get(`${data.selector.detail_Deny_nameEN}:eq(1)`).type(detail_2_deny_nameEN).wait(300)}
                    if(detail_2_deny_nameJP != null){cy.get(`${data.selector.detail_Deny_nameJP}:eq(1)`).type(detail_2_deny_nameJP).wait(300)}
                }
                if(detail_2_type == "Xác nhận")
                {
                    if(detail_2_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(1)`).type(detail_2_approve_nameVN).wait(300)}
                    if(detail_2_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(1)`).type(detail_2_approve_nameEN).wait(300)}
                    if(detail_2_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(1)`).type(detail_2_approve_nameJP).wait(300)}
                }
    
                cy.get(data.selector.btn_flowSetting_submit).click().wait(500)
                cy.get(`${data.selector.btn_flowSetting_confirm_YES}`).click().wait(700)
                cy.get(`${data.selector.btn_flowSetting_confirm_YES}`).click().wait(700)
                if(notification != 'null')
                {
                    cy.get(data.selector.notifi_box).invoke(`text`).should(`eq`,notification)
                }
                else
                {
                    // cy.get(data.selector.notifi_box).invoke(`text`).should(`eq`,notifi_edit_sussces)
                    cy.visit(general.url.flow).wait(2000)
                    cy.get(data.selector.row).its(`length`).then((A)=>{
                        let new_row = A
                        expect(new_row).to.be.eq(old_row)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(1)`).invoke(`text`).should(`eq`,Psn_Info_flow_name)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(2)`).invoke(`text`).should(`eq`,Psn_Info_department)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(3)`).invoke(`text`).should(`eq`,Psn_Info_group)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(4)`).invoke(`text`).should(`eq`,Psn_Info_position)
                    })
                }
                
            })
                
        })
    })
})


describe("copy flow", function(){
    before(function(){
        cy.task('xlsx_reader').then(()=>{cy.log("20%")})
        cy.task('xlsx_reader').then(()=>{cy.log("40%")})
        cy.task('xlsx_reader').then(()=>{cy.log("60%")})
        cy.task('xlsx_reader').then(()=>{cy.log("80%")})
        cy.task('xlsx_reader').then(()=>{cy.log("100%")})
    })
    
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.flow)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })


    copy.forEach((excel)=>{
        it(Object.values(excel)[0], function(){
            
            // Create Varialbe
            // This is for Personal Information form
            const language = Object.values(excel)[1]
            let Psn_Info_flow_name = Object.values(excel)[2]
            let Psn_Info_department = Object.values(excel)[3]
            let Psn_Info_group = Object.values(excel)[4]
            let Psn_Info_position = Object.values(excel)[5]

            // This is for Detail Information form
            let detail_1_NameVN = Object.values(excel)[6]
            let detail_1_NameEN = Object.values(excel)[7]
            let detail_1_NameJP = Object.values(excel)[8]
            let detail_1_UserSubmit = Object.values(excel)[9]
            let detail_1_position = Object.values(excel)[10]
            let detail_1_employee = Object.values(excel)[11]
            let detail_1_type = Object.values(excel)[12]
            let detail_1_approve_nameVN = Object.values(excel)[13]
            let detail_1_approve_nameEN = Object.values(excel)[14]
            let detail_1_approve_nameJP = Object.values(excel)[15]
            let detail_1_deny_nameVN = Object.values(excel)[16]
            let detail_1_deny_nameEN = Object.values(excel)[17]
            let detail_1_deny_nameJP = Object.values(excel)[18]

            // This is also for Detail Information form but Step 2
            let detail_2_NameVN = Object.values(excel)[19]
            let detail_2_NameEN = Object.values(excel)[20]
            let detail_2_NameJP = Object.values(excel)[21]
            let detail_2_UserSubmit = Object.values(excel)[22]
            let detail_2_position = Object.values(excel)[23]
            let detail_2_employee = Object.values(excel)[24]
            let detail_2_type = Object.values(excel)[25]
            let detail_2_approve_nameVN = Object.values(excel)[26]
            let detail_2_approve_nameEN = Object.values(excel)[27]
            let detail_2_approve_nameJP = Object.values(excel)[28]
            let detail_2_deny_nameVN = Object.values(excel)[29]
            let detail_2_deny_nameEN = Object.values(excel)[30]
            let detail_2_deny_nameJP = Object.values(excel)[31]

            // This is for notification if error exist
            let notification = Object.values(excel)[32]

            let notifi_create_sussces = [`Tạo flow thành công`, `Create flow success`, `フローの成功を作成する`]
            let notifi_edit_sussces = [`Cập nhật flow thành công`, `Update flow success`, `更新フローの成功`]
            let notifi_copy_sussces = [`Tạo flow thành công`, `Create flow success`, `フローの成功を作成する`]
            
            if(language == 'Tiếng Việt')
            {
                cy.get(general.selector.language_name).click()
                cy.get(general.selector.language_name_Vn).click()
                notifi_create_sussces = notifi_copy_sussces[0]
            }

            if(language == 'English')
            {
                cy.get(general.selector.language_name).click()
                cy.get(general.selector.language_name_En).click()
                notifi_copy_sussces = notifi_copy_sussces[1]
            }

            if(language == '日本語')
            {
                cy.get(general.selector.language_name).click()
                cy.get(general.selector.language_name_Jp).click()
                notifi_copy_sussces = notifi_copy_sussces[2]
            }

            // Count row before action
            cy.get(data.selector.row).its(`length`).then((A)=>{
                let old_row = A
                cy.get(data.selector.btn_thactac).click().wait(500)
                cy.get(data.selector.btn_copy).click().wait(1200)
                
                // Làm mới lại step
                cy.get(`.list-group-item`).its(`length`).then((A)=>{
                    for( let I=0; I<A; I++)
                    {
                        cy.get(`${data.selector.btn_flowSetting_delete}:eq(0)`).click().wait(300)
                        cy.get(`${data.selector.btn_flowSetting_confirm_YES}`).click().wait(700)
                        if(I == A-1)
                        {
                            cy.get(`${data.selector.btn_flowSetting_refreshStep}:eq(0)`).click().wait(300)
                            cy.get(`${data.selector.btn_flowSetting_confirm_YES}`).click().wait(700)
                        }
                    }
                })

                if(Psn_Info_flow_name != null){cy.get(data.selector.flow_name).clear().type(Psn_Info_flow_name).wait(300)}
                cy.get(data.selector.department).click().wait(700)
                cy.get(data.selector.department_listName).contains(Psn_Info_department).click().wait(300)
                cy.get(data.selector.group).click().wait(700)
                cy.get(data.selector.group_listName).its(`length`).then((A)=>{
                    for(let I=0; I<A; I++)
                    {
                        cy.get(`${data.selector.group_listName}:eq(${I}) > label`).invoke(`attr`,`class`,`d-flex flex-row align-center label-text`)
                    }
                })
                cy.get(data.selector.group_listName).contains(Psn_Info_group).click().wait(300)
                cy.get(data.selector.group).click().wait(300)
                cy.get(data.selector.position).click().wait(700)
                cy.get(data.selector.position_listName).its(`length`).then((A)=>{
                    for(let I=0; I<A; I++)
                    {
                        cy.get(`${data.selector.position_listName}:eq(${I}) > label`).invoke(`attr`,`class`).then((class_name)=>{
                            if(class_name == 'd-flex flex-row align-center label-text selected') { cy.get(`${data.selector.position_listName}:eq(${I})`).click() }
                        })
                    }
                })
                cy.get(data.selector.position_listName).contains(Psn_Info_position).click().wait(300)
                cy.get(data.selector.position).click().wait(300)

        
                if(detail_1_NameVN != null){cy.get(`${data.selector.detail_Name_VN}:eq(0)`).type(detail_1_NameVN).wait(300)}
                if(detail_1_NameEN != null){cy.get(`${data.selector.detail_Name_EN}:eq(0)`).type(detail_1_NameEN).wait(300)}
                if(detail_1_NameJP != null){cy.get(`${data.selector.detail_Name_JP}:eq(0)`).type(detail_1_NameJP).wait(300)}
                if(detail_1_UserSubmit == 'Check'){ cy.get(`${data.selector.detail_checkbox_userSubmit}:eq(0)`).click().wait(300) }
                cy.get(`${data.selector.detail_position}:eq(0)`).click().wait(700)
                cy.get(`${data.selector.detail_position_listName}`).contains(detail_1_position).click().wait(300)
                cy.get(`${data.selector.detail_position}:eq(0)`).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(0)`).click().wait(700)
                cy.get(`${data.selector.detail_employee_listName}`).contains(detail_1_employee).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(0)`).click().wait(300)
                cy.get(`${data.selector.detail_type}:eq(0)`).click().wait(1200)
                if(detail_1_type == "Chứng nhận"){cy.get(`${data.selector.detail_type_listName}:eq(0)`).click().wait(1000)}
                if(detail_1_type == "Xác nhận"){cy.get(`${data.selector.detail_type_listName}:eq(1)`).click().wait(1000)}
                if(detail_1_type == "Chứng nhận")
                {
                    if(detail_1_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(0)`).type(detail_1_approve_nameVN).wait(300)}
                    if(detail_1_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(0)`).type(detail_1_approve_nameEN).wait(300)}
                    if(detail_1_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(0)`).type(detail_1_approve_nameJP).wait(300)}
                    if(detail_1_deny_nameVN != null){cy.get(`${data.selector.detail_Deny_nameVN}:eq(0)`).type(detail_1_deny_nameVN).wait(300)}
                    if(detail_1_deny_nameEN != null){cy.get(`${data.selector.detail_Deny_nameEN}:eq(0)`).type(detail_1_deny_nameEN).wait(300)}
                    if(detail_1_deny_nameJP != null){cy.get(`${data.selector.detail_Deny_nameJP}:eq(0)`).type(detail_1_deny_nameJP).wait(300)}
                }
                if(detail_1_type == "Xác nhận")
                {
                    if(detail_1_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(0)`).type(detail_1_approve_nameVN).wait(300)}
                    if(detail_1_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(0)`).type(detail_1_approve_nameEN).wait(300)}
                    if(detail_1_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(0)`).type(detail_1_approve_nameJP).wait(300)}
                }
        
                cy.get(data.selector.btn_flowSetting_step).click()
        
                if(detail_2_NameVN != null){cy.get(`${data.selector.detail_Name_VN}:eq(1)`).type(detail_2_NameVN).wait(300)}
                if(detail_2_NameEN != null){cy.get(`${data.selector.detail_Name_EN}:eq(1)`).type(detail_2_NameEN).wait(300)}
                if(detail_2_NameJP != null){cy.get(`${data.selector.detail_Name_JP}:eq(1)`).type(detail_2_NameJP).wait(300)}
                if(detail_2_UserSubmit == 'Check'){ cy.get(`${data.selector.detail_checkbox_userSubmit}:eq(1)`).click().wait(300) }
                cy.get(`${data.selector.detail_position}:eq(1)`).click().wait(700)
                cy.get(`${data.selector.detail_position_listName}`).contains(detail_2_position).click().wait(300)
                cy.get(`${data.selector.detail_position}:eq(1)`).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(1)`).click().wait(700)
                cy.get(`${data.selector.detail_employee_listName}`).contains(detail_2_employee).click().wait(300)
                cy.get(`${data.selector.detail_employee}:eq(1)`).click().wait(300)
                cy.get(`${data.selector.detail_type}:eq(1)`).click().wait(1200)
                if(detail_2_type == "Chứng nhận"){cy.get(`${data.selector.detail_type_listName}:eq(0)`).click().wait(1000)}
                if(detail_2_type == "Xác nhận"){cy.get(`${data.selector.detail_type_listName}:eq(1)`).click().wait(1000)}
    
                if(detail_2_type == "Chứng nhận")
                {
                    if(detail_2_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(1)`).type(detail_2_approve_nameVN).wait(300)}
                    if(detail_2_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(1)`).type(detail_2_approve_nameEN).wait(300)}
                    if(detail_2_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(1)`).type(detail_2_approve_nameJP).wait(300)}
                    if(detail_2_deny_nameVN != null){cy.get(`${data.selector.detail_Deny_nameVN}:eq(1)`).type(detail_2_deny_nameVN).wait(300)}
                    if(detail_2_deny_nameEN != null){cy.get(`${data.selector.detail_Deny_nameEN}:eq(1)`).type(detail_2_deny_nameEN).wait(300)}
                    if(detail_2_deny_nameJP != null){cy.get(`${data.selector.detail_Deny_nameJP}:eq(1)`).type(detail_2_deny_nameJP).wait(300)}
                }
                if(detail_2_type == "Xác nhận")
                {
                    if(detail_2_approve_nameVN != null){cy.get(`${data.selector.detail_Approve_nameVN}:eq(1)`).type(detail_2_approve_nameVN).wait(300)}
                    if(detail_2_approve_nameEN != null){cy.get(`${data.selector.detail_Approve_nameEN}:eq(1)`).type(detail_2_approve_nameEN).wait(300)}
                    if(detail_2_approve_nameJP != null){cy.get(`${data.selector.detail_Approve_nameJP}:eq(1)`).type(detail_2_approve_nameJP).wait(300)}
                }
    
                cy.get(data.selector.btn_flowSetting_submit).click().wait(500)
                if(notification != 'null')
                {
                    cy.get(data.selector.notifi_box).invoke(`text`).should(`eq`,notification)
                }
                else
                {
                    // cy.get(data.selector.notifi_box).invoke(`text`).should(`eq`,notifi_copy_sussces)
                    cy.visit(general.url.flow).wait(2000)
                    cy.get(data.selector.row).its(`length`).then((A)=>{
                        let new_row = A
                        expect(new_row).to.be.gt(old_row)
                        new_row = new_row - 1
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${new_row}) td:eq(1)`).invoke(`text`).should(`eq`,Psn_Info_flow_name)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${new_row}) td:eq(2)`).invoke(`text`).should(`eq`,Psn_Info_department)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${new_row}) td:eq(3)`).invoke(`text`).should(`eq`,Psn_Info_group)
                        cy.get(`tbody[class='vue3-easy-data-table__body'] tr:eq(${new_row}) td:eq(4)`).invoke(`text`).should(`eq`,Psn_Info_position)
                    })
                }
                
            })
                
        })
    })
})


describe.only("Button Delete", function(){
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.flow)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })

    it("Button Delete", function(){
        cy.get(data.selector.btn_thactac).click().wait(300)
        cy.get(data.selector.btn_delete).click().wait(700)
        cy.get(data.selector.btn_flowSetting_confirm_YES).click().wait(700)
    })
})


describe("Button Add (Step)", function(){
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.flow)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })

    it("Hiển thị thêm flow step", function(){
        cy.get(data.selector.btn_addNew).click()
        cy.get(`.list-group-item`).its(`length`).should(`eq`,1)
        cy.get(data.selector.btn_flowSetting_step)
            .should('be.visible')
            .should('not.be.disabled')
            .click()
        cy.get(`.list-group-item`).its(`length`).should(`eq`,2)
    })
})


describe("Button Delete (Step)", function(){
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.flow)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })

    it("Xoá Flow step", function(){
        cy.get(data.selector.btn_addNew).click()
        cy.get(data.selector.btn_flowSetting_step).click().wait(500)
        cy.get(`.list-group-item`).its(`length`).should(`eq`,2)
        cy.get(`${data.selector.btn_flowSetting_delete}:eq(1)`).click()
        cy.get(data.selector.btn_flowSetting_confirm_YES).click()
        cy.get(`.list-group-item`).its(`length`).should(`eq`,1)
    })
})


describe("Button Refresh (Step)", function(){
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.flow)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })

    it("Làm mới step", function(){
        cy.get(data.selector.btn_addNew).click()
        cy.get(data.selector.detail_Name_VN).type(`dsfdshfsdldsjg`).invoke(`val`).should(`not.be.empty`)
        cy.get(data.selector.btn_addnew_refreshStep).click().wait(500)
        cy.get(data.selector.btn_flowSetting_confirm_YES).click().wait(500)
        cy.get(data.selector.detail_Name_VN).invoke(`val`).should(`be.empty`)
    })
})


//! Đợi fix
// describe("Button Cancel", function(){
//     beforeEach(function(){
//         cy.loginS(general.user.username_right, general.user.userpass_right)
//         cy.visit(general.url.flow)
//         cy.viewport(1920,1080)
//         cy.wait(1000)
//     })

//     it("Button Cancel", function(){
//         cy.get(data.selector.btn_addNew).click().wait(500)
//         cy.get(data.selector.btn_flowSetting_cancel).click().wait(500)
//         cy.get(data.selector.btn_flowSetting_confirm_YES).click().wait(500)
//         cy.url().should(`contain`,general.url.flow)
//     })
// })


describe("Button Refresh (Step)", function(){
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.flow)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })

    it("Làm mới step", function(){
        cy.get(data.selector.btn_addNew).click()
        cy.get(data.selector.detail_Name_VN).type(`dsfdshfsdldsjg`).invoke(`val`).should(`not.be.empty`)
        cy.get(data.selector.btn_addnew_refreshStep).click().wait(500)
        cy.get(data.selector.btn_flowSetting_confirm_YES).click().wait(500)
        cy.get(data.selector.detail_Name_VN).invoke(`val`).should(`be.empty`)
    })
})






//*     ---- Code End ---- 


describe("Test", function(){
    beforeEach(function(){
        cy.loginS(general.user.username_right, general.user.userpass_right)
        cy.visit(general.url.flow)
        cy.viewport(1920,1080)
        cy.wait(1000)
    })

    it("Test", function(){
        cy.wait(2000)
        cy.get(data.selector.btn_thactac).click().wait(500)
        cy.get(data.selector.btn_copy).click().wait(500)
    })
})
