//const app = require('./app')
//console.log(app.x)
const arr = [2,4,5,3,0,8,30,5,4,12];
//console.log(arr);
//arr.filter((item)=>{
  //  console.log(item);
//})

let result = arr . filter((item)=>{
    return item<3
})
console.log(result)