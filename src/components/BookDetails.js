import React from 'react'
import * as BooksAPI from '../BooksAPI'
import ReadingOptions from './ReadingOptions'

export default class BookDetails extends React.Component {

  updateShelf = (value) => {
    BooksAPI.update(this.props.detail, value)
            .then((response) => {
               alert("Book reading status updated.")
               window.location.reload()
             });
  }

  render(){
    let { detail } = this.props
    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
                  style={{
                        width: 128,
                        height: 192,
                        backgroundImage: `url(${detail.imageLinks.thumbnail})`
                      }}>
            </div>
            <ReadingOptions
              readingOption={detail.shelf}
              updateShelf={this.updateShelf}/>
          </div>
          <div className="book-title">{detail.title}</div>
          <div className="book-authors">
            { detail.authors && detail.authors.map(author => (
               <div key={author}>{author}</div>
            ))
            }
          </div>
        </div>
    )

  }
}
