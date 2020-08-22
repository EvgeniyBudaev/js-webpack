import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import './scss/index.scss'
// import './css/style.css'
// import * as module from './css/mail.module.css'
// import * as module from './scss/main.module.scss'
import webpackImage from '../public/assets/images/webpack.png'

const App = () => (
  <div>
    <h1 className="title">Hello World!</h1>
    <img src={webpackImage} alt="image" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
