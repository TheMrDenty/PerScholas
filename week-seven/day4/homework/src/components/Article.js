import React from 'react'
import photo from '../images/blog-image-2.jpg'

function Article() {
  return (
    <article>
        <time dateTime='2020-11-11'>11/11/20</time>
        <h3>vintage in vogue</h3>
        <img src={photo} alt='three people'/>
        <p>
            Selfies ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros turpis, tempus molestie 
            nisi sit amet, ultrices interdum justo. Donec et aliquet enim, nec malesuada massa. Praesent eu enim sagittis, 
            accumsan est vel, vestibulum mi. Aliquam molestie tortor vitae nunc laoreet, eu molestie nisl bibendum. Suspendisse 
            condimentum ipsum sit amet ipsum pretium auctor. Maecenas bibendum, leo a semper auctor, erat ligula viverra 
            massa, eu tincidunt dolor justo ac nisi. Proin aliquam laoreet lectus vel mollis. Aenean ut eleifend tortor. 
            Vestibulum eget ligula eleifend, commodo nunc id, eleifend justo. Fusce in diam sed lacus scelerisque tincidunt in nec ante. 
            Pellentesque at velit pretium, blandit magna quis, pulvinar leo. Curabitur vehicula tincidunt est, at 
            accumsan magna hendrerit a. Proin aliquam laoreet lectus vel mollis. Aenean ut eleifend tortor. 
            Vestibulum eget ligula eleifend, commodo nunc id, eleifend justo. Fusce in diam sed lacus scelerisque tincidunt in nec ante. 
            Pellentesque at velit pretium, blandit magna quis, pulvinar leo. Curabitur vehicula tincidunt est, at 
            accumsan magna hendrerit a.
        </p> 
        <div className='btn-right'>
            <button>continues ...</button>
        </div>
        <hr />
    </article>
  )
}

export default Article