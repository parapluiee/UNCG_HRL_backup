function onOpen(e) {
  //first two entries can be anything, but last must be the function at line 
  SpreadsheetApp.getUi().createMenu('Refresh').addItem('Refresh', 'Refresh').addToUi();
}

function Refresh() {
  //located in url
  const sheetid = "1siB-B3LsfK2ia9XMt0uEPlFoabViQIzHPXfllbs7SrE";
  //located in Mercury
  const instagridid = "pcUVOOUU1V5K6DCIHZX64DMA";
  //Must match mercury value keys
  const columnheaders =
    ["University ID",
      "Building",
      "Bed Space",
      "Key Code",
      "Gender",
      "First Name",
      "Middle Name",
      "Last Name",
      "Preferred Name",
      "Email",
      "Check In",
      "Check Out",
      "Birth Date",
      "Student Type",
      "Class",
      "Phone Cell",
      "Check-in Cell Phone",
      "Rate Code",
      "City",
      "State",
      "Community"];


  //creates HRL_Sheet object (refer to HRLSp reference)
  let hallchart = HRLSp.newHRL_Sheet(sheetid);
  //creates Mercury_Pull object (refer to HRLSp reference)
  let instagrid = HRLSp.newMercury_Call(instagridid, columnheaders);
  //create HRL_Array object (refer to HRLSp reference)
  let array = instagrid.getArray();
  //formats birthdate to be readable string
  array.formatBirth();
  //pushes array to hallchart
  hallchart.pushArrayName(array.getArray(), "Fall2023");

  //formats hallchart
  hallchart.standardFormat();

  //const leng = revenue(hallchart);
  //revenueFormat(hallchart.getSpreadSheet().getSheetByName("Revenue"), leng);
}


