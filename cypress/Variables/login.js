class login{
    selector = {
        username_input: "input[placeholder='Tài khoản']",
        password_input: "input[placeholder='Mật khẩu']",
        notify_warning : "div[class='form-template'] div[class='notify mt-5']",
        notify_error_username : "div[class='username'] div[class='icon'] p[class='mt-1 text-center red-text-css red--text']",
        notify_error_password : "div[class='password'] div[class='icon'] div[class='mt-1 text-center red-text-css red--text']",
        btn_login : "button[type='button'] span[class='v-btn__content']",
        btn_hide_password: "div[class='password'] div[class='icon'] div[class='icon-action pointer'] div[class='mdi-eye-off mdi v-icon notranslate v-theme--light v-icon--size-default']",
    }
}
module.exports = new login(); 