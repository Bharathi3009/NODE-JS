const http=require("http")
const {even,unique}=require("./JSpractice")
http.createServer(function (req,res){
    if(req.url==='/'){
    res.write("I'm-dead"+even(2))
    res.end()
}
    if(req.url==='/course'){
        res.write(JSON.stringify([1,2]))
    res.end("Bye World")
    }
}).listen(3000)