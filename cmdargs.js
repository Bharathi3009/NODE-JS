const fs=require('fs')
const yargs=require('yargs')
const argv=yargs.argv
const command=argv._[0]
const title=argv._[1]
const date=argv._[2]
if(command=='add'){
    fs.readFile('./data/cmdargs.json','utf-8',(err,jsonString)=>{
        if(err){
            console.log("file reading failed ");
            return;
        }
        const notes= JSON.parse(jsonString)
        let newNote={
        title:title,
        date:date
    }

    const temp = notes.find((note)=>{
        return note.title==newNote.title
    })
    if(!temp){
        notes.push(newNote)
        fs.writeFileSync('./data/cmdargs.json',JSON.stringify(notes))
    }
    else{
        console.log("Note exists...")
    }
    console.log("Done writing...")
});
}

if(command=='view'){
    const data=fs.readFileSync('./data/cmdargs.txt','utf-8')
    console.log(data)
}