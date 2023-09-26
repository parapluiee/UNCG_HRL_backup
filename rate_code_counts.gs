function myFunction() {
  var hallchart = HRLSp.newHRL_Sheet("1zNTEiZms7ZwpTOnSOc4KdaHPQqoJrf_oXEUGAn792aU");
  var datatemp = hallchart.pullArray().getArray();
  var data = HRLSp.transpose(datatemp);
  var ratecodeIndex = 0;
  for (var i = 0; i < data.length; i++){
    if (data[i][0] == "Rate Code"){
      ratecodeIndex = i;
    }
  }
  var codes = data[ratecodeIndex]
  const codesList = ['QSNG', 'QDBL', 'RHAC', 'STAD', 'SSSG', 'APV2', 'APTV','SUSG', 'SUDB', 'APV1', 'LOL4', 'LL2B', 'TVLS', 'PRDB', 'TRIP', 'APTS']
  const rates = [3969.00, 3700.50, 2450.00, 2940.50, 3570.00, 4258.00, 4024.00, 3969.00, 3700.50, 4553.50, 4024.00, 4553.50, 3548.50, 3359.00, 2530.00, 4024.00]
  let out = codesList.map((code, i) => [code, rates[i], 0])
  for (var i = 0; i < codes.length; i++){
    let index = codesList.indexOf(codes[i]);
    if (index != -1){
      out[index][2]+=1;
    }
  }
  var sheet = HRLSp.newHRL_Sheet("1xzTIkoe1_RHKB0bhwdSAyIP9CDhWNJC5sE8XtIoGZ30");
  out = [["Codes", "Rate", "Count", "Revenue"]].concat(out.map(entry => entry.concat(entry[1] * entry[2]))).concat([["Totals:", "", codes.length, "=SUM(D2:D17)"]])
  sheet.pushArray(out)
  sheet.standardFormat()
  const format = sheet.getSheets()[0]
  let toprange = format.getRange(1, 1, 1, 4)
  toprange.setFontWeight('bold')
  toprange.setBorder(false, false, true, false, false, false)
  let bignums = format.getRange(out.length, 1, 1, 4)
  bignums.setFontWeight('bold')
  bignums.setBorder(true, false, false, false, false, false)
  
}

