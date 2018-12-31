import React from 'react'
export default class ReadingOptions extends React.Component {

  onChange = (value) => {
    this.props.updateShelf(value)
  }

  render(){
    let { readingOption } = this.props
    return (
      <div className="book-shelf-changer">
        <select
            value={ readingOption ? readingOption: 'none' }
            onChange={(e) => {this.onChange(e.target.value)}} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}
