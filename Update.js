import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Update() {
    let { Id } = useParams();
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [Pincode, setPincode] = useState('');
    const [Country, setCountry] = useState('');
    useEffect(() => {
        fetch('http://localhost:3110/Update/' + Id + '')
            .then(res => res.json())
            .then((res)=> {
                setName(res[0].Name);
                setAddress(res[0].Address);
                setCity(res[0].City);
                setPincode(res[0].Pincode);
                setCountry(res[0].Country);
            })
            console.log(Name);
           },[])
    const insertUser = async (event) => {
        event.preventDefault();
        var config = { headers: { "enctype": "multipart/form-data" } };
        await axios.put('http://localhost:3110/Updatedata/' + Id + '', { Name, Address, City, Pincode, Country }, config)
            .then((res)=> {
                if (res.data.status === 'error') {
                    alert('error');
                    window.location.reload();
                }
                else if (res.data.status === 'success') {
                    alert('updated')
                    window.location.href = "/";
                }
            },[])
            .catch((error)=> {
                alert('api not called');
                window.location.href = "/";
            })
}
return (
        <>
            <div className='container-fluid mt-5'>
                <form onSubmit={insertUser} className='d-block'>
                    <label>Name:</label>
                    <input type="Name" name="Name" id="Name" placeholder='Enter your name' className='ms-2' value={Name} onChange={(e)=>setName(e.target.value)}/>
                    <label>Address:</label>
                    <input type="text" name="Address" id="Address" placeholder='Enter your Address' className='ms-2' value={Address} onChange={(e)=>setAddress(e.target.value)}/>
                    <label>City:</label>
                    <input type="text" name="City" id="City" placeholder='Enter your city' className='ms-2' value={City} onChange={(e)=>setCity(e.target.value)}/>
                    <label>Pincode:</label>
                    <input type="number" name="Pincode" id="Pincode" placeholder='Enter your pincode' className='ms-2' value={Pincode} onChange={(e)=>setPincode(e.target.value)}/>
                    <label>Country:</label>
                    <input type="text" name="Country" id="Country" placeholder='Enter your country' className='ms-2' value={Country} onChange={(e)=>setCountry(e.target.value)}/>
                    <button type="submit" className='rounded-3 bg-info h5  mt-3 p-2'>submit</button>
                </form>
            </div>
        </>
    );

}
export default Update;