import React from 'react'
import BookDetails from './BookDetails';

export default function BookShelf( { bookShelfTitle, bookList }){
  return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {  bookList && bookList.map(bookDetail => (
                 <li key={bookDetail.id}> <BookDetails detail={bookDetail}/> </li>
               ))
              }
          </ol>
        </div>
      </div>
  )
}
