const db = require('../../config/database');
const LivroDao = require('../infra/livro-dao');

module.exports = (app) => {
    app.get('/', function (req, resp) {
        resp.send('estou enviando a resposta');
    });

    app.get('/livros', function(req,resp){
        
        const livroDao = new LivroDao (db);
        
        livroDao.lista()
            .then(livros => resp.marko(
                require('../views/livros/lista/lista.marko'), 
                {
                    livros: livros
                }
            )
            .catch(erro => console.log(erro))
            
            
        )
    })
};

