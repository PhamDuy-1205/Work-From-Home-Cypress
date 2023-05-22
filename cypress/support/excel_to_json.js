//!~~ Đây là file chứa code chuyển dữ liệu từ Excel sang file Json và lưu tại : cypress/Data/file-json-testcase
//* ----- Import Start -----
const fs = require("fs");
const xlsx = require("xlsx");
const file_excel = xlsx.readFile('File-Excel/WFH.xlsx');
//* ----- Import End -----




//* ----- Code Start -----

// Chuyển đổi dữ liệu từ dạng string sang dạng khác
// let newLogin = [];
// newLogin = sheet_list.Login.map((d)=> {
//     if(d.username === "NULL" | d.username === "null") d.username = null;
//     if(d.userpass === "NULL" | d.userpass === "null") d.userpass = null;
// })



function xlsx_reader()
{
    for (let index = 0; index < file_excel.SheetNames.length; index++)
    {
        var A = file_excel.SheetNames[index]
        ID = 0
        const sheet_list ={ [`${A}`] : xlsx.utils.sheet_to_json(file_excel.Sheets[`${A}`]), }
        for (const sheet in sheet_list)
        {if (sheet != 'Introduce' && sheet != 'Selector'){fs.writeFileSync('cypress/Data/'+sheet+'.json', JSON.stringify(sheet_list[sheet],null,2))}}
    }
}


xlsx_reader()

//* ----- Code End -----