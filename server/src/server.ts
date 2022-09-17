import express, { response } from 'express'
// foi adicionado a linha -- "type": "module" no package.json, está puxando o express de lá por isso.

const app = express()

// HTTP methods / API RESTful / HTTP CODES
/* metódos: GET, POST, PUT, PATCH, DELETE 

Front buscando informação - get
Post - criando algo
Put - editando algo
Patch - quando vai editar algo muito especifico numa entidade
Delete - quando vai remover algo
Pode usar qualquer método HTTP para fazer tudo isso, porém é boa prática e em APIRestful tem que ser feito certo.
*/

app.get('/games', (request, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

// Endereço - www.site.com/ (o get puxa o /...)  - localhost:3333/ads
app.get('/games/:id/ads', (request, response) => {
    return response.json(
        // const gameId = reques.params.id;
        [
        { id: 1,
         name: 'Anúncio 1'
        },
        { id: 2,
         name: 'Anúncio 2'
        },
        { id: 3,
         name: 'Anúncio 3'
        },
        { id: 4,
         name: 'Anúncio 4'
        },
    ]
    )
}) // essa função precisa ter uma resposta, se não fica carregando infinito.

app.get('/ads/:id/discord', (request, response) => {
    return response.json(
        // const gameId = reques.params.id;
        [
        
    ]
    )
}) 

app.listen(3333)