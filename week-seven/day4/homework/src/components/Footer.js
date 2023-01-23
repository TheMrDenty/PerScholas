import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <nav aria-label='Main Navigation' role='navigation'>
            <ul>
                <li><a href='/'>home</a></li>
                <li><a href='womens/'>women's</a></li>
                <li><a href='mens/'>men's</a></li>
                <li><a href='on-the-street/'>on the street</a></li>
                <li><a href='the-catwalk/'>the catwalk</a></li>
                <li><a href='adwatch/'>adWatch</a></li>
                <li><a href='about/'>about</a></li>
                <li><a href='tips/'>tips</a></li>
            </ul>
        </nav>
        <h5><span>&copy; 2013 valet industries, inc.</span></h5>
    </div>
  )
}

export default Footer