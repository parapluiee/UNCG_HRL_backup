function newHRL_Array(a){
  return new HRL_Array(a);
}
class HRL_Array{
  constructor(a){
    this.array = a;
    this.headers = this.array[0]
  }

  formatBirth(){
    var birthdateindex = 0;
    for (var i = 0; i < this.headers.length; i++){
      if (this.headers[i] == "Birth Date"){
        birthdateindex = i;
        break;
      }
    }

    for (var i = 1; i < this.array.length; i++){
      var date = this.array[i][birthdateindex]
      if (typeof(date) == 'string'){ 
        this.array[i][birthdateindex] = date.split("T")[0]
      } 
    }

  }

  getArray(){
    return this.array;
  }
}

