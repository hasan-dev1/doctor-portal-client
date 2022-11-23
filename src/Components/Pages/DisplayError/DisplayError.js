import React from 'react';
import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Others/UserContext/UserContext';

const DisplayError = () => {
    const {logout}= useContext(AuthContext)
    const error = useRouteError()
    const logoutbtn = ()=>{

        logout()
    }
    return (
      <div>
        <p className="text-red-600">We are Sorry Something went Wrong</p>
        <p>Error : {error.statusText || error.message}</p>
        <p>
          Please <button onClick={logoutbtn}>logout</button> and login again
        </p>
      </div>
    );
};

export default DisplayError;