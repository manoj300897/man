import React from 'react';
import axios from 'axios';
function Insert() {
  const insertUser = async(event) => {
        event.preventDefault();
        const config = {headers:{"enctype":"multiport/form-data"}};
        const Name = document.getElementById('Name').value;
        const Address = document.getElementById('Address').value;
        const City = document.getElementById('City').value;
        const Pincode = document.getElementById('Pincode').value;
        const Country = document.getElementById('Country').value;
        if(Name === ''  || Name === null){
            alert("Enter your Name");
        }
          else if (Address === '' || Address === null) {
            alert(" Enter your Address");
          }
          else if (City === '' || City === null) {
            alert("Enter your City");
          }
          else if (Pincode === '' || Pincode === null) {
            alert("Enter your pincode");
          }
          else if (Country === '' || Country === null) {
            alert("Enter your Country");
          }
        else{
          await axios.post("http://localhost:3110/insertdetails",{Name,Address,City,Pincode,Country},config)  
          .then(function (res) {
            if (res.data.status === 'error') {
                alert("Errorr");
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

      }}
    return (
       <>
      <div className='container-fluid mt-5'>
          <form onSubmit={insertUser} className='d-block'>
                  <label>Name:</label>
                  <input type="Name" name="Name" id="Name" placeholder='Enter your name' className='ms-2'/>
                  <label>Address:</label>
                  <input type="text" name="Address" id="Address" placeholder='Enter your Address'  className='ms-2'/>
                  <label>City:</label>
                  <input type="text" name="City" id="City" placeholder='Enter your city' className='ms-2'/>
                  <label>Pincode:</label>
                  <input type="number" name="Pincode"  id="Pincode" placeholder='Enter your pincode'  className='ms-2'/>
                  <label>Country:</label>
                  <input type="text" name="Country" id="Country" placeholder='Enter your country'  className='ms-2'/>
                  <button type="submit" className='rounded-3 bg-info h5  mt-3 p-2'>submit</button>
            </form>
          </div>
        </>
      );
      }
export default Insert;
