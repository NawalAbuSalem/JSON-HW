const mainJson=require('./hw.json');
getAllToppingType();
getAllBatterType();
getPpuAvg();
getPpuSum();
getAllIDs();
function getAllToppingType(){
  let toppingArray =[];
  for(let i=0;i<mainJson.length;i++){
   let topping=mainJson[i].topping;
    for(let j=0;j<topping.length;j++){
   // console.log(topping[j].type);
    toppingArray.push(topping[j].type);
    }
  }
  return toppingArray;
}
function getAllBatterType(){
  let batterArray =[];
  for(let i=0;i<mainJson.length;i++){
   let batter=mainJson[i].batters.batter;
    for(let j=0;j<batter.length;j++){
    console.log(batter[j].type);
    batterArray.push(batter[j].type);
    }
  }
  return batterArray;
}
function getAllBatterType(){
  let batterArray =[];
  for(let i=0;i<mainJson.length;i++){
   let batter=mainJson[i].batters.batter;
    for(let j=0;j<batter.length;j++){
    //console.log(batter[j].type);
    batterArray.push(batter[j].type);
    }
  }
  return batterArray;
}

function getPpuAvg(){
  let x=0.0;
  for(let i=0;i<mainJson.length;i++){
   x+=mainJson[i].ppu;
   }
   x/=mainJson.length;
   //console.log(x);
  return x;
}
function getPpuSum(){
  let x=0.0;
  for(let i=0;i<mainJson.length;i++){
   x+=mainJson[i].ppu;
   }
  console.log(x);
  return x;
}
function getAllIDs(){
  let x=0.0;
  for(let i=0;i<mainJson.length;i++){
   x+=mainJson[i].ppu;
   }
  console.log(x);
  return x;
}



