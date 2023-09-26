function myFunction() {
  var sheet = SpreadsheetApp.openById("1siB-B3LsfK2ia9XMt0uEPlFoabViQIzHPXfllbs7SrE");
  var fall = sheet.getSheetByName("Fall2023")
  var spring = sheet.getSheetByName("Summer2023")
  
  var fallarray = fall.getDataRange().getValues()
  var springarray = spring.getDataRange().getValues();
  var fallids = HRLSp.transpose(fallarray)[0]
  var output = []
  for (let i = 0; i < springarray.length; i++){
      const index = fallids.indexOf(springarray[i][0])
      if (index != -1){
      output.push([springarray[i][0], springarray[i][15], fallarray[index][15]])
      }
    }
  output[0][1] = 'Rate Code Spring'
  output[0][2] = 'Rate Code Fall'
  sheet.getSheetByName('Rate Discrepancy').getRange(1, 1, output.length, output[0].length).setValues(output)
  let out2 = []
  for (let i = 0; i < output.length; i++){
    if (output[i][1] != output[i][2]){
      out2.push(output[i])
    }
  }
  sheet.getSheetByName('Rate Discrepancy').getRange(1, 5, out2.length, out2[0].length).setValues(out2)
  }

