import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';


PrivateRoute.propTypes = {
  component: propTypes.any,
  isAuth: propTypes.any,
  location: propTypes.any
}

async function isValidJWT() {
  let response = await axios.get('http://localhost:3000/api/auth', { withCredentials: true })
  return response
}

function PrivateRoute({ component: Component, ...rest }) {

  const [isAuth, setIsAuth] = useState(null)
  const [isSendingRequest, setIsSendingRequest] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        let isAuth = await isValidJWT();
        setIsAuth(isAuth)
        setIsSendingRequest(false)
      }
      catch (error) {
        console.log(error)
        setIsSendingRequest(false)
      }
    })();
  }, []);

  if (isSendingRequest) {
    return null
  }

  return (
    <Route
      {...rest}
      render={props =>
        (isAuth ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
      }
    />
  )
}

export default PrivateRoute;