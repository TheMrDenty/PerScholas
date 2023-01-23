import React from 'react'
import Article from './Article'
import articles from '../data.js'

function ArticleList() {
  return (
    <div>
        {
            articles.map((article) => {
                const {id, date, title, img, text} = article;
                return (
                    <Article 
                        id={id}
                        date={date}
                        title={title}
                        img={img}
                        text={text}
                    />
                )
            })
        }
    </div>
  )
}

export default ArticleList