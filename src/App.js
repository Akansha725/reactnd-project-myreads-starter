import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import SearchBooks from './components/SearchBooks'

export default function BooksApp(){
  return (
    <div className="app">
      <Switch>
           <Route exact path='/' component={Home}/>
           <Route path='/search' component={SearchBooks}/>
      </Switch>
    </div>
  )
}
