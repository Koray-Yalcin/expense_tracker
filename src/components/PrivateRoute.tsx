import React from 'react'
import { Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps /*extends RouteProps*/ {

}

function PrivateRoute({/*element: Component,*/ ...theRest}: PrivateRouteProps) {
  return (
    <Route {...theRest} ></Route>
  )
}

export default PrivateRoute;