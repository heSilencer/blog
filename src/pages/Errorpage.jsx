import React from 'react'
import { Link } from 'react-router-dom'

export default function Errorpage() {
  return (
    <section>
      <div className='error-center'>
        <h2>404</h2>
        <h3>Opss! 😬 Pages Not Found !</h3>
        <Link to={'/'} className='btn btn-primary'>Go Back Home</Link>
      </div>
    </section>
  )
}
