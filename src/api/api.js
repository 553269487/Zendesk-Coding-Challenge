import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:5000'})

async function getTickets(){
    try{
        const res = await api.get('/')
        return res.data; 
    }catch(err){
        return err.message;
    }
}

async function getSingleTickets(id){
    try{
        const res = await api.get('/id',{params:{ticketId: id}})
        return res.data; 
    }catch(err){
        alert(`Error loading ticket ${id} data`)
    }
}


export {getTickets, getSingleTickets}
