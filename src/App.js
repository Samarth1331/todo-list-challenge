import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home'
import TodoList from './routes/TodoList'
import './App.scss'

export default function App() {
  return (
    <div className='app'>      
      <div>
        <TodoList></TodoList>
      </div>
    </div>

  )
}
