import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
function View() {
    const {Id} = useParams();
    const [ViewDetails, setViewDetails] = useState([]);
    useEffect(() => {
    fetch('http://localhost:3110/getdetails'+Id+'')
      .then((res) => {
        console.log(res);
        setViewDetails(res.data);
      })
  }, []);
return (
    <>
       {
        ViewDetails.map((value, index) => (
        <>
            <div className="card">
                <h1 className="p-1 border border-dark">{value.Name}</h1>
                <h1 className="p-1">{value.Address}</h1>
                <h1 className="p-1">{value.City}</h1>
                <h1 className="p-1">{value.Pincode}</h1>
                <h1 className="p-1">{value.Country}</h1>
                <Link to={`/Details/${value.Id}`}><FontAwesomeIcon icon={faEye} className='text-warning p-1'/></Link>
            </div>
        </>
        ))
        }
    </>
    );
}
export default View;