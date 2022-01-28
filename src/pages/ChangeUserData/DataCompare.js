
export default function DataCompare(changedata,user){
    let newData = {}
    for(let item in changedata){
        ( changedata[item] ) ?  newData[item] = changedata[item] : newData[item] = user[item]
    }
    
return newData
}

