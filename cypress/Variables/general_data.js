class general_data{
    user = {
        username_right: "1305",
        userpass_right : "1",
    }

    selector = {
        username_input: "input[placeholder='Tài khoản']",
        password_input: "input[placeholder='Mật khẩu']",
        notify_warning : "[class='notify mt-5']",
        notify_error : "[class='mt-1 text-center red-text-css red--text']",
        btn_login : "span[class='v-btn__content']",
        btn_logout : "button[class='log-out-btn']",
        language_name: "div[class='button-user-setting-container d-flex flex-row justify-end align-center'] div[class='d-flex flex-row align-center'] span[class='langue-name']",
        language_name_Vn: "div[class='v-list-item__content'] div[class='v-list-item-title']:eq(0) span[class='langue-name']",
        language_name_En: "div[class='v-list-item__content'] div[class='v-list-item-title']:eq(1) span[class='langue-name']",
        language_name_Jp: "div[class='v-list-item__content'] div[class='v-list-item-title']:eq(2) span[class='langue-name']",
        full_name: "div[class='avatar d-flex flex-row'] div[class='d-flex flex-column justify-center align-start pl-3'] span[class='full-name-user']",
        full_email: "div[class='avatar d-flex flex-row'] div[class='d-flex flex-column justify-center align-start pl-3'] span[class='email-user']",
        navigation_bar: "div[class='v-navigation-drawer__content']",
        navigation_bar_pin: "svg[class='active-menu-icons feather feather-disc d-xl-block collapse-toggle-icon primary font-medium-4']",
        menu_WFH: "ul[class='navigation navigation-main'] li:eq(1)",
        menu_WFH_registration: "div[class='v-expand-transition'] ul[class='submenu pl-0'] li:eq(0)",
        menu_setting: "ul[class='navigation navigation-main'] li:eq(4)",
    }

    url = {
        main : 'https://wfh.csvdemo.com/',
        login : 'https://wfh.csvdemo.com/login',
        master_items : 'https://wfh.csvdemo.com/setting/master-items/',
        messages : 'https://wfh.csvdemo.com/setting/message',
        flow : 'https://wfh.csvdemo.com/setting/flow-setting',
        role : 'https://wfh.csvdemo.com/setting/role/',
    }
}
module.exports = new general_data();
