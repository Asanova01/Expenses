import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
//этот метод берет JSX код и показывает ешо на странице. Этот метод бывает один и рендерит только App
//у него два аргумента: 1. JSX код 2. это наш div c id 'root'. И этот div будет рендерит весь наш проект
