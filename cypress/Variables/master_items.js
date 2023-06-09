class master_items{
    selector = {
        btn_addnew : "button[class='v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated ma-2 white--text'] span[class='v-btn__content'] i",
        btn_addnew_background : "button[class='v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated ma-2 white--text'] span[class='v-btn__overlay']",
        btn_submit : "button[class='v-btn v-btn--elevated v-theme--light bg-success v-btn--density-default v-btn--size-default v-btn--variant-elevated btn-success btn-success'] ",
        btn_no : "div[class='button-container'] button[class='v-btn v-btn--elevated v-theme--light bg-error v-btn--density-default v-btn--size-default v-btn--variant-elevated btn-danger']",
        btn_rowPerPage : "div[class='pagination__rows-per-page'] div[class='easy-data-table__rows-selector'] div[class='rows-input__wrapper']",
        btn_thaotac : "td[class='direction-left']:eq(6) div[class='d-flex flex-row justify-left align-center'] button[class='d-flex flex-row justify-center']:eq(0)",
        btn_edit : "td[class='direction-left']:eq(6) div[class='d-flex flex-row justify-left align-center'] button[class='d-flex flex-row justify-center']:eq(1)",
        btn_info: "div[class='v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text p-0 m-0 list-item'] div[class='v-list-item__content'] div[class='v-list-item-title']:eq(0)",
        btn_copy : "div[class='v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text p-0 m-0 list-item'] div[class='v-list-item__content'] div[class='v-list-item-title']:eq(1)",
        btn_delete : "div[class='v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text p-0 m-0 list-item'] div[class='v-list-item__content'] div[class='v-list-item-title']:eq(2)",
        board_contentTitle : "div[class='v-card'] div[class='header']",
        box_type : "div[class='v-input v-input--horizontal v-input--density-default v-input--dirty v-input--disabled v-input--readonly v-text-field v-select v-select--single v-select--selected dropdown dropdown-read-only']",
        box_type_select : "div[class='v-list-item v-list-item--link v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text']",
        box_type_diachilamviec : ".v-list > :nth-child(1)",
        box_type_lydo : ".v-list > :nth-child(2)",
        box_type_thietbi : ".v-list > :nth-child(3)",
        box_type_huongdan : ".v-list > :nth-child(4)",
        input_nameVN: "form[class='v-form content'] input:eq(1)",
        input_nameEN: "form[class='v-form content'] input:eq(2)",
        input_nameJP: "form[class='v-form content'] input:eq(3)",
        input_url: "form[class='v-form content'] div[class='input-label']:eq(4) input",
        notifi_green: "div[class='d-flex flex-row align-center justify-space-between']",
        notifi_warning: "span[class='require-char']",
        notifi_warning2: "span[class='require-char red--text']",
        notifi_input_nameVN: "div[class='input-label']:eq(1) span[class='require-char red--text']",
        notifi_input_nameEN: "div[class='input-label']:eq(2) span[class='require-char red--text']",
        notifi_input_nameJP: "div[class='input-label']:eq(3) span[class='require-char red--text']",
        notifi_input_url: "div[class='input-label']:eq(4) span[class='require-char red--text']",
        page_num: "div[class='item button']",
        table_contains_list: "div[class='vue3-easy-data-table__main fixed-header hoverable']",
        count_rows: "div[class='pagination__items-index']",
        rowPerPage_allowed: "div[class='rows-input__wrapper'] div[class='rows-input']",
        current_total_rows: "tbody[class='vue3-easy-data-table__body']",
        pages_count: "div[class='buttons-pagination'] div",
        row1_STT: "tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(0)",
        row1_typeItem: "tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(1)",
        row1_nameVN: "tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(2)",
        row1_nameEN: "tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(3)",
        row1_nameJP: "tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(4)",
        row1_fileUrl: "tbody[class='vue3-easy-data-table__body'] tr:eq(0) td:eq(5)",
    }
}
module.exports = new master_items();