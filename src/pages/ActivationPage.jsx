import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { server } from '../server';
import { useState } from 'react';

const ActivationPage = () => {
    const {activation_token}= useParams();
    const[error,setError] = useState(false);

    useEffect(() => {
      if(activation_token){
        const activationEmail = async() => {
            try{
                const res= await axios.post(`${server}/activation`,{
                    activation_token,
                });
                console.log(res.data.message);
            }
            catch(error){
                console.log(error.response.data.message);
            };
        };
            activationEmail();
        }
    }, [activation_token]);

  return (
    <div style={{
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        {
            error ? (
                <p>Your token is expired!</p>
            ): (
                <p>Your acount has been createrd successfully!</p>
            )
        }
    </div>
  )
}

export default ActivationPage;