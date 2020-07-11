import React from 'react'
import {Link} from 'react-router-dom'
import {matchPath} from 'react-router-dom'
import {useLocation} from 'react-router-dom'


export default function BackButton() {
  const location = useLocation()

  const matches = Boolean(matchPath(location.pathname, {
    path: "/:slug/",
    exact: true,
  }))

  return (
    <div>
      <h1 className="title">
        Blog
      </h1>
      <Link to={{pathname: "/"}}>
        {matches ? "Retour" : null}
      </Link>
    </div>
 )
}
