function pageLanding(req, res){   
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query   
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    // se tiver dados
    const isNotEmpty  = Object.keys(data).length > 0   
    if(isNotEmpty){
        
         data.subject = getSubject(data.subject)
         //adicionar dados ao a lista de proffys
         proffys.push(data)
         return res.redirect("/study")
    }
    //se não, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server, 
    noCache: true,
})


//Inicio e configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)