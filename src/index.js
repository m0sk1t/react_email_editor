import React from 'react'
import todoApp from './reducers'
import { render } from 'react-dom'
import App from './components/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(todoApp, {
	'template': [
		{
			'id': 1491998309943,
			'block_type': "header",
			'options': {
				'container': {
					'backgroundColor': '#FFFFFF',
				},
				'elements': [{
					'text': 'Header',
					'fontSize': '32px',
					'fontWeight': 'bold',
					'textAlign': 'center'
				}]
			}
		},
		{
			'id': 1491998309944,
			'block_type': "image",
			'options': {
				'container': {
					'backgroundColor': '#FFFFFF',
				},
				'elements': [{
					'source': 'https://www.w3schools.com/css/trolltunga.jpg',
				}]
			}
		},
		{
			'id': 1491998309945,
			'block_type': "text",
			'options': {
				'container': {
					'backgroundColor': '#FFFFFF',
				},
				'elements': [{
					'text': 'Text block',
				}]
			}
		},
		{
			'id': 1491998309946,
			'block_type': "image_text",
			'options': {
				'container': {
					'backgroundColor': '#FFFFFF',
				},
				'elements': [{
					'source': 'https://www.w3schools.com/css/trolltunga.jpg',
				},
				{
					'text': 'Text block',
				}]
			}
		},
		{
			'id': 1491998309947,
			'block_type': "text_image",
			'options': {
				'container': {
					'backgroundColor': '#FFFFFF',
				},
				'elements': [{
					'text': 'Text block',
				},{
					'source': 'https://www.w3schools.com/css/trolltunga.jpg',
				}]
			}
		},
	],
	'components': [
		{
			'preview': 'images/header.png',
			'block': {
				'block_type': "header",
				'options': {
					'container': {
						'backgroundColor': '#FFFFFF',
					},
					'elements': [{
						'text': 'Заголовок письма',
						'fontSize': '32px',
						'fontWeight': 'bold',
						'textAlign': 'center'
					}]
				}
			}
		},
		{
			'preview': 'images/text.png',
			'block': {
				'block_type': "text",
				'options': {
					'container': {
						'backgroundColor': '#FFFFFF',
					},
					'elements': [{
						'text': 'Простой текстовый блок, который настраивается через TinyMCE. \r\n Вы можете написать свой текст',
					}]
				}
			}
		},
		{
			'preview': 'images/image_text.png',
			'block': {
				'block_type': "image_text",
				'options': {
					'container': {
						'backgroundColor': '#FFFFFF',
					},
					'elements': [{
						'source': 'https://www.w3schools.com/css/trolltunga.jpg',
					},
					{
						'text': 'Text block',
					}]
				}
			}
		},
		{
			'preview': 'images/text_image.png',
			'block': {
				'block_type': "text_image",
				'options': {
					'container': {
						'backgroundColor': '#FFFFFF',
					},
					'elements': [{
						'text': 'Text block',
					},{
						'source': 'https://www.w3schools.com/css/trolltunga.jpg',
					}]
				}
			}
		},
	],
	'tabs': {
		'blocks': true,
		'common': false,
		'options': false,
	}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
