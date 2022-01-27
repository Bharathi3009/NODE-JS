const fs=require('fs')
fs.writeFileSync('./data/sample.txt','File opened...')
let obj=[{
    name:"Bhars",
    age:20
},
{
    name:"chinnu",
    age:17
}]
obj[2]='hi'
fs.writeFileSync('./data/sample.txt',JSON.stringify(obj))
const data2=fs.readFileSync('./data/sample.txt','utf-8')
console.log(data2)

//writing os specifications into file
const os1=require('os')
let osobj={
    totalme:os1.totalmem(),
    freeme:os1.freemem(),
    type1:os1.type(),
    releas:os1.release(),
    host:os1.hostname(),
    platform:os1.platform()
}
fs.writeFileSync('./data/sample2.json',JSON.stringify(osobj))

const data3=fs.readFileSync('./new.html','utf-8')
//console.log(data3)
const data4=fs.readFileSync('./unique.js','utf-8')
//console.log(data4)

