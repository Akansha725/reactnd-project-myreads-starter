// Home.
import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

export default class Home extends React.Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    listLoaded: false,
  }

  componentDidMount(){
    BooksAPI.getAll().then((booksList) => {
       let currentlyReading = [], wantToRead = [], read = [];
       booksList.forEach((book, index) => {
         if(book.shelf === 'currentlyReading'){
           currentlyReading.push(book);
         }else if(book.shelf === 'wantToRead'){
           wantToRead.push(book);
         }else {
           read.push(book);
         }
         if(index === booksList.length-1){
           this.setState({
             currentlyReading: currentlyReading,
             wantToRead: wantToRead,
             read: read,
             listLoaded: true
           })
         }
       });
    });
  }

  render(){
    let { currentlyReading, wantToRead, read, listLoaded } = this.state
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        { !listLoaded &&
          <div>
            <p> Loading... </p>
          </div>
        }
        { listLoaded &&
          <div className="list-books-content">
            <div>
              <BookShelf bookShelfTitle="Currently Reading" bookList ={currentlyReading}/>
              <BookShelf bookShelfTitle="Want to Read" bookList ={wantToRead}/>
              <BookShelf bookShelfTitle="Read" bookList ={read}/>
            </div>
          </div>
        }
        { listLoaded &&
          <div className="open-search">
            <Link to='/search'>
              <button>Add a book</button>
            </Link>
          </div>
        }
      </div>
    )
  }

}
