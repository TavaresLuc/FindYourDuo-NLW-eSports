import express from 'express'
// foi adicionado a linha -- "type": "module" no package.json, está puxando o express de lá por isso.

const app = express()

// Endereço - www.site.com/ (o get puxa o /...)  - localhost:3333/ads
app.get('/ads', (request, response) => {
    return response.json(
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

app.listen(3333)