function newCrlPull(bld, id){
  return new CrlPull(bld, id)
}

class CrlPull {

  constructor(bld, id) {
    var hallChart_id;
    hallChart_id = '1siB-B3LsfK2ia9XMt0uEPlFoabViQIzHPXfllbs7SrE' 
    
    this.crlSheet = HRLSp.newHRL_Sheet(id)
    this.buildings = bld

    this.hallChartSheet = HRLSp.newHRL_Sheet(hallChart_id);
   
  }
  //Legacy function name, dont wanna change 15+ sheets
  pullFromHallChart() {
    var buildingsArrays = this.createBuildingsArray();
    this.crlSheet.pushArrays(buildingsArrays);
    this.crlSheet.standardFormat();
  }

  createBuildingsArray(){
    var hallChart = this.hallChartSheet.pullArray().getArray();
    var headers = hallChart[0];
    var buildingsArrays = [[headers]]
    for (i in this.buildings) {
      buildingsArrays.push([headers])
    }
    var hcBuildingIndex = hallChart[0].indexOf('Building')
    for (var i = 0; i < hallChart.length; i++) {
      var temparray = hallChart[i]
      var tempindex = this.buildings.indexOf(temparray[hcBuildingIndex])
      if (tempindex != -1) {
        buildingsArrays[0].push(temparray)
        buildingsArrays[tempindex + 1].push(temparray)
      }
    }
    return buildingsArrays;
  }
}
