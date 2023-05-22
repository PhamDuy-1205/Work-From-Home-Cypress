class message{
    selector = {
        btn_rowPerPage : "div[class='rows-input__wrapper']",
        btn_rowPerPage_5 : "ul[class='select-items show inside'] li:eq(0)",
        btn_rowPerPage_15 : "ul[class='select-items show inside'] li:eq(1)",
        btn_rowPerPage_25 : "ul[class='select-items show inside'] li:eq(2)",
        btn_rowPerPage_50 : "ul[class='select-items show inside'] li:eq(3)",
        btn_rowPerPage_100 : "ul[class='select-items show inside'] li:eq(4)",
        btn_rowPerPage_1000 : "ul[class='select-items show inside'] li:eq(5)",
        btn_addNew : ".v-btn__content",
        btn_addnew_background : "button span[class='v-btn__overlay']",
        btn_submit: ".btn-success",
        btn_cancel: ".btn-danger",
        btn_confirm: ".bg-success > .v-btn__content",
        btn_thaotac: "button[class='d-flex flex-row justify-center']:eq(0)",
        btn_edit: "button[class='d-flex flex-row justify-center']:eq(1)",
        btn_info : "div[class='v-list-item-title']:eq(0)",
        btn_copy : "div[class='v-list-item-title']:eq(1)",
        btn_delete : "div[class='v-list-item-title']:eq(2)",
        box_type : ".v-field__input",
        box_type_info : ".v-list > :nth-child(1)",
        box_type_warn : ".v-list > :nth-child(2)",
        box_type_error : ".v-list > :nth-child(3)",
        input_topic_VN : ".v-form > :nth-child(2) > :nth-child(2)",
        input_topic_EN : ".v-form > :nth-child(3) > :nth-child(2)",
        input_topic_JP : ".v-form > :nth-child(4) > :nth-child(2)",
        input_timeFrom : "div[class='row'] div[class='col'] input[type='datetime-local']",
        input_timeTo : "div[class='row'] div[class='col right'] input[type='datetime-local']",
        input_mess_VN : ".v-form > :nth-child(6) > p > #textarea",
        input_mess_EN : ".v-form > :nth-child(7) > p > #textarea",
        input_mess_JP : ".v-form > :nth-child(8) > p > #textarea",
        broad_title: ".title",
        notifi_green: "div[class='d-flex flex-row align-center justify-space-between']",
        notifi_topicVn: "div[class='row']:eq(1) p span:eq(1)",
        notifi_topicEn: "div[class='row']:eq(2) p span:eq(1)",
        notifi_topicJp: "div[class='row']:eq(3) p span:eq(1)",
        notifi_timeFrom: "div[class='row']:eq(4) div[class='col'] p span:eq(1)",
        notifi_timeTo: "div[class='row']:eq(4) div[class='col right'] p span:eq(1)",
        notifi_messVn: "div[class='row']:eq(5) p span:eq(1)",
        notifi_messEn: "div[class='row']:eq(6) p span:eq(1)",
        notifi_messJp: "div[class='row']:eq(7) p span:eq(1)",
        filter_id: ":nth-child(2) > .header > .mdi",
        filter_creater: ":nth-child(3) > .header > .mdi",
        filter_type: ":nth-child(4) > .header > .mdi",
        filter_topic: ":nth-child(5) > .header > .mdi",
        filter_message: ":nth-child(6) > .header > .mdi",
        filter_timeFrom: ":nth-child(7) > .header > .mdi",
        filter_timeTo: ":nth-child(8) > .header > .mdi",
        row_count: "div[class='vue3-easy-data-table__main fixed-header hoverable'] table tbody[class='vue3-easy-data-table__body']",
        row_STT : ".vue3-easy-data-table__body > :nth-child(1) > :nth-child(1)",
        row_creator : ".vue3-easy-data-table__body > :nth-child(1) > :nth-child(7)",
        row_type : ".vue3-easy-data-table__body > :nth-child(1) > :nth-child(3)",
        row_topic : ".vue3-easy-data-table__body > :nth-child(1) > :nth-child(2)",
        row_mess : ".vue3-easy-data-table__body > :nth-child(1) > :nth-child(4)",
        row_timeFrom : ".vue3-easy-data-table__body > :nth-child(1) > :nth-child(5)",
        row_timeTo : ".vue3-easy-data-table__body > :nth-child(1) > :nth-child(6)",
        rowPerPage_allowed: "div[class='rows-input__wrapper'] div[class='rows-input']",
        count_rows: "div[class='pagination__items-index']",
        pages_count: "div[class='buttons-pagination'] div",
    }
}
module.exports = new message();