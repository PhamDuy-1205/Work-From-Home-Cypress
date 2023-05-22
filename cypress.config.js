// const { ok } = require('assert');
//* ----- Import Start -----
const { defineConfig } = require('cypress')
const path = require('path');
const fs = require("fs");
const xlsx = require("xlsx");
const file_excel_main = xlsx.readFile('File-Excel/WFH.xlsx');
const file_excel_role = xlsx.readFile('File-Excel/WFH_Role.xlsx');
//* ----- Import End -----


module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("task", {
        // task list
        xlsx_reader : xlsx_reader,
        xlsx_reader_role : xlsx_reader_role,
      });
      // return config
    },
  },
});


function xlsx_reader()
{
    //* Loop tất cả các sheet Excel trong path "File-Excel\WFH.xlsx" và tạo ra file Json tương tự lưu trong path "cypress\Data"
    for (let index = 0; index < file_excel_main.SheetNames.length; index++)
    {
        var A = file_excel_main.SheetNames[index]
        ID = 0
        const sheet_list ={ [`${A}`] : xlsx.utils.sheet_to_json(file_excel_main.Sheets[`${A}`]), }
        for (const sheet in sheet_list)
        {if (sheet != 'Introduce' && sheet != 'Selector')
        {
          fs.writeFileSync('cypress/Data/'+sheet+'.json', JSON.stringify(sheet_list[sheet],null,2))
        }}
    }
    return null
}


function xlsx_reader_role()
{
    //* Loop tất cả các sheet Excel trong path "File-Excel\WFH.xlsx" và tạo ra file Json tương tự lưu trong path "cypress\Data"
    for (let index = 0; index < file_excel_role.SheetNames.length; index++)
    {
        var A = file_excel_role.SheetNames[index]
        ID = 0
        const sheet_list ={ [`${A}`] : xlsx.utils.sheet_to_json(file_excel_role.Sheets[`${A}`]), }
        for (const sheet in sheet_list)
        {if (sheet != 'Introduce' && sheet != 'Selector')
        {
          fs.writeFileSync('cypress/Data/Role/'+sheet+'.json', JSON.stringify(sheet_list[sheet],null,2))
        }}
    }
    return null
}


