// import logo from './logo.svg';
import './App.css';
import { getTickets } from './api/api'
import ReactPaginate from 'react-paginate'
import React, { useState, useEffect } from "react";
// import ReactTable from 'react-table-6'

// import "react-table-v6/react-table.css" 

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    getTickets().then(res => setData(res))
    .catch(err => console.log(err));
  }, []);
  

  const listItems = data.map((number) => {
    return(
    <div>
      <li>{number.created_at} {number.subject}</li>
    </div>)
  }
    );
  return (
    <div className="App">
      <h1>Mobile Ticket Viewer</h1>
      <h2>{listItems.length} total tickets</h2>
      <p>{listItems}</p>
    </div>
  );
}

export default App;
