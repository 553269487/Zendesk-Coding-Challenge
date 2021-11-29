import { getTickets, getSingleTickets} from '../api/api'
import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const Tickets = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getTickets()
        .then(res => setData(res))
        .catch(err => console.log(err));
    }, []);

    const columns = [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Subject",
          accessor: "subject",
        },
        {
          Header: "Description",
          accessor: "description",
        },
        {
          Header: "Status",
          accessor: "status",
        },
        {
          Header: "Organisation Id",
          accessor: "organization_id",
        },
        {
          id: "created_at",
          Header: "Created At",
          accessor: (d) => {
            return new Intl.DateTimeFormat("en-AD").format(new Date(d.created_at));
          },
        },
      ];
    
      return (
        <>
          <h1 className="white pa4">Zendesk Ticket Viewer</h1>
            <ReactTable
              data={data}
              columns={columns}
              defaultPageSize={25}
              pageSizeOptions={[25]}
              style={{ background: "white" }}
              className="-striped -highlight"
            />
        </>
      );
}
export default Tickets;