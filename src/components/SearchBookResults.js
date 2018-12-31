import React from 'react'
import * as BooksAPI from '../BooksAPI'
import BookDetails from './BookDetails';

export default class SearchBookResults extends React.Component {

  state = {
    searchList: [],
    readingList: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((readingList) => {
      this.setState({
        readingList: readingList
      })
    });
  }

  static getDerivedStateFromProps(props, state){
    let updateList = props.searchList
    updateList.forEach((searchBook) => {
      state.readingList.forEach(readingBook => {
        if(readingBook.id === searchBook.id){
          searchBook["shelf"] = readingBook.shelf
        }
      })
    })

    return { searchList: updateList }
  }

  render(){
    let { searchList } = this.state
    return (
        <div className="bookshelf">
          <div className="bookshelf-books">
            {  !Array.isArray(searchList) &&
                   <div> No result found.</div>
            }
            { Array.isArray(searchList) &&
                <ol className="books-grid">
                    {searchList.map(bookDetail => (
                           <li key={bookDetail.id}>
                              <BookDetails detail={bookDetail}/>
                           </li>
                         ))
                    }
                </ol>
            }
          </div>
        </div>
    )
  }
}
