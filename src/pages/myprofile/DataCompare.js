
export default function DataCompare(changedata,user){
    let newData = {}
    for(let item in changedata){
     if(changedata[item]){
         newData[item] = changedata[item]
     }
      else{ newData[item] = user[item] }
    }

console.log(newData);
return newData
}