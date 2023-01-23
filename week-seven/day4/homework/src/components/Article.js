import React from 'react'

function Article({id, date, title, img, text}) {
  return (
    <article>
        <time dateTime='2020-11-11'>{date}</time>
        <h3>{title}</h3>
        <img src={img.src} alt={img.alt}/>
        <p>
            {text}
        </p> 
        <div className='btn-right'>
            <button>continues ...</button>
        </div>
        <hr />
    </article>
  )
}

export default Article