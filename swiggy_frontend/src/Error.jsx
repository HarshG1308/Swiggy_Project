import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but we couldn't find the page you were looking for.</p>
        <p>Error: {error.status} - {error.statusText}. {error.data}</p>
    </div>
  )
}

export default Error
