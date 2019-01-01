import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import SearchBookResults from './SearchBookResults'

export default class SearchBooks extends React.Component {

  state = {
    searchList: [],
    searchKeyword: ''
  }

  onSearch(value){
    this.setState({
      searchKeyword: value
    })
    if(value !== ''){
      BooksAPI.search(value)
              .then((searchList) => {
                 this.setState({
                   searchList: Array.isArray(searchList) ? searchList : []
                 })
               });
    }else {
      this.setState({
        searchList: undefined
      })
    }
  }
  render(){
    let { searchList, searchKeyword } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link to='/'>
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchKeyword}
            placeholder="Search by title or author"
            onChange={(e) => this.onSearch(e.target.value)} />
        </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          <SearchBookResults searchList ={searchList}/>
        </div>
      </div>
    )
  }

}
