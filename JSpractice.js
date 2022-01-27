//
function filterRange(arr,a,b){
    return arr.filter(i=>i>=a&&i<=b);
}
let arr=[5,3,8,1];
console.log("Filterarray");
let filtered=filterRange(arr,1,4);
console.log(filtered);
//
let even=function(a){
    if(a%2==0) return true
    else return false
}
let a=arr.filter(even)
console.log(a)
//
let unique=(a)=>new Set(a)
let arr2=["React Js", "JavaScript", "React Js", "JavaScript","JavaScript", "JavaScript", 
"React Js", "React Js"]
let ans=new Array(unique(arr2))
ans.map((i)=>console.log(i))
//
function truncate(str,max){
    if(str.length>max) return str.slice(0,max-1)+"..."
    else return str
}
console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20))
//
function extractCurrencyValue(str){
    return Number(str.slice(1))
}
console.log( extractCurrencyValue('$120') === 120 );

module.exports={even,unique};