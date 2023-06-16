import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faTrash, faPen} from '@fortawesome/free-solid-svg-icons';
function Details() {
  //for get method
  const [Mobiles, setMobiles] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3110/getdetails')
      .then((res) => {
        console.log(res);
        setMobiles(res.data);
      })
  }, []);

  //for delete method
  const data_delete = (Id) => {
    var datastring = {Id:Id};
    var config = { headers: { "enctype": "multipart/form-data" } };
    axios.post('http://localhost:3110/delete', datastring, config)
      .then(function (res) {
        if (res.data.status === 'error') {
          alert("Error");
          window.location.reload();
        }
        else if (res.data.status === 'success') {
          alert('Data inserted');
          window.location.reload();
        }
      })
      .catch(function (error) {
        alert(error);
        window.location.reload();
      })
  }
  return (
    <>
      <div className="container-fluid">
        <div className="container">
        <h1>Customer Details</h1>
         <table className='mt-5'>
            <thead className='text-center border border-dark'>
              <th className="p-1 border border-dark">Id</th>
              <th className="p-1 border border-dark">Name</th>
              <th className="p-1 border border-dark">Address</th>
              <th className="p-1 border border-dark">City</th>
              <th className="p-1 border border-dark">Pincode</th>
              <th className="p-1 border border-dark">Country</th>
              <th className="p-1 text-center border border-dark">Actions</th>
            </thead>
            <tbody>
              {Mobiles.map((value, index) => (
                <>
                  <tr>
                    <td className="p-1 border border-dark">{value.Id}</td>
                    <td className="p-1 border border-dark">{value.Name}</td>
                    <td className="p-1 border border-dark">{value.Address}</td>
                    <td className="p-1 border border-dark">{value.City}</td>
                    <td className="p-1 border border-dark">{value.Pincode}</td>
                    <td className="p-1 border border-dark">{value.Country}</td>
                    <td className="border border-dark"><Link to={"/View/"+value.Id}><FontAwesomeIcon icon={faEye} className='text-primary p-1'/></Link>
                    <Link to={"/Update/"+value.Id}><FontAwesomeIcon icon={faPen} className='text-warning p-1'/></Link>
                    <FontAwesomeIcon icon={faTrash} className='text-danger p-1' onClick={() => { data_delete(value.Id) }}/></td>
                  </tr>
                </>
              ))}
            </tbody>
        </table>
    </div>
</div>
</>
);
}
export default Details;