function newMercury_Call(instagridID, heads){
  return new Mercury_Call(instagridID, heads);
}

class Mercury_Call{
  constructor(instagridID, heads){
    this.id = instagridID
    this.headers = heads
  }

  getArray(){
    var json = this.pullJSON();
    return new HRL_Array(this.jsonToArray(json));
  }
  
  pullJSON(){
    const username = "***_***";
    const password = "**************@****";
    const settings = {
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "Basic " + Utilities.base64Encode(username + ":" + password)
      }
    };
    const instaGrid = UrlFetchApp.fetch("https://mercury.uncg.edu/api/mdata/getinstagridlist?dataset=RMSREAL&linkid=" + this.id, settings);
    return (JSON.parse(instaGrid.getContentText()));
  }

  jsonToArray(jsonObject){
    const length = jsonObject.Data.length + 1;
    const numOfColumns = this.headers.length;
    //creates blank 2d array
    var twoDArray = createArray(length, numOfColumns);

    //sets column headers 
    for (var i = 0; i < numOfColumns; i++) {
      twoDArray[0][i] = this.headers[i];
    }
    //Creates array from arrayChart JSONObject, filtering which info we need
    for (var x = 1; x < length; x++) {
      for (var i = 0; i < numOfColumns; i++) {
        twoDArray[x][i] = jsonObject.Data[x-1][twoDArray[0][i]];
      }
    }
    return twoDArray;
  }
}

