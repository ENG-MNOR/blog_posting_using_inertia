import { Link } from '@inertiajs/react'
import React, { Children } from 'react'

export default  function Layout({Children}) {
  return (
    <div>
      <header>
        <nav>
            <Link className='nav-link' href="/">Home</Link>
            <Link className='nav-link' href="/posts/create">Create</Link>
        </nav>
      </header>
      <main>
        {Children}
      </main>
    </div>
  )
}


