const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;
const { base64encode, base64decode } = require('nodejs-base64');
const cors = require('cors')


app.use(express.json({extended:false}));
app.use(cors());


const userPass = '553269487@qq.com:Yangming553@';

const encoded =  Buffer.from(userPass,"utf8").toString('base64')

const api = axios.create({
    baseURL: 'https://zccupenn.zendesk.com/api/v2',
    headers: { Authorization: `Basic ${encoded}` },
    responseType: 'json',
    responseEncoding: 'utf8'
  })


app.get('/', async (req, res) => {
    try{
        const response = await api.get('/requests.json');
        if(!response){return res.status(400).json({msg:'no response'})};
        res.send(response.data.requests);
        // console.log(response.data.requests);

        
    }catch(error){
        res.send(JSON.stringify(error.response.status))
    }

})

app.get('/id', async (req, res) => {
    try{
        const response = await api.get(`tickets/${req.query.ticketId}`);
        if(!response){return res.status(400).json({msg:'no response'})};
        // console.log(response.data.requests);
        res.send(response.data.requests);
        
    }catch(error){
        res.send(JSON.stringify(error.response.status))
    }
})

app.listen(PORT, () => console.log('Server listening on port ' + PORT));
