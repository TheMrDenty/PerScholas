import React from 'react'

function Header() {
  return (
    <div className='header'>
        <h1>sartre's list</h1>
        <h2>better-dressed people</h2>
        <nav aria-label='Main Navigation' role='navigation'>
            <ul>
                <li><a href='womens/'>women's</a></li>
                <li><a href='mens/'>men's</a></li>
                <li><a href='on-the-street/'>on the street</a></li>
                <li><a href='the-catwalk/'>the catwalk</a></li>
                <li><a href='adwatch/'>adWatch</a></li>
                <li><a href='about/'>about</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header