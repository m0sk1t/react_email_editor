import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp, {
  blocks: [
    {
      id: 1491998309943,
      nodes: [
        {
          id: 1491998310387,
          options: {
            border: 0,
            width: '10%',
            height: '100px',
            text: 'test text',
            display: 'table-cell',
            backgroundColor: '#003388'
          },
          block_id: 1491998309943,
          node_type: 'text'
        },
        {
          id: 1491998310666,
          options: {
            border: 0,
            width: '100px',
            height: '100px',
            display: 'table-cell',
            backgroundColor: '#006666',
            image_url: 'https://www.w3schools.com/css/img_fjords.jpg',
          },
          block_id: 1491998309943,
          node_type: 'image',
        }
      ],
      options: {
        border: 0,
        width: '100%',
        height: '100px',
        backgroundColor: '#cccccc'
      }
    }
  ]}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
