function newHRL_Sheet(id){
  return new HRL_Sheet(id);
}

class HRL_Sheet{
  constructor(id){
    this.spreadsheet = SpreadsheetApp.openById(id);
    this.sheets = this.spreadsheet.getSheets();
  }

  pushArray(array){
    const sheet = this.sheets[0];
    sheet.clear()
    const range = sheet.getRange(1, 1, array.length, array[0].length)
    range.setValues(array)
  }
  
  pushArrays(arrays){
    for (var i in this.sheets){
      this.sheets[i].clear();
      const range = this.sheets[i].getRange(1, 1, arrays[i].length, arrays[i][0].length);
      range.setValues(arrays[i]);
    }
  }

  pushArrayName(array, name){
    const sheet = this.spreadsheet.getSheetByName(name);
    sheet.clear();
    const range = sheet.getRange(1, 1, array.length, array[0].length);
    range.setValues(array);
  }
  pullArray(){
    return new HRL_Array(this.sheets[0].getDataRange().getValues());
  }
  pullArrayname(name){
    return new HRL_Array(this.spreadsheet.getSheetByName(name).getDataRange().getValues())
  }

  getSpreadSheet(){
    return this.spreadsheet;
  }
  
  getSheets(){
    return this.sheets;
  }

  standardFormat(){
    for (var i in this.sheets){
      var fullrange = this.sheets[i].getDataRange()
      fullrange.setHorizontalAlignment('left');
      this.sheets[i].getRange(1, 1, 1, fullrange.getLastColumn()).setHorizontalAlignment('center')
    }
  }
}

