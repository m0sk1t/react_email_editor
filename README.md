This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
## Summary

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/m0sk1t)
This project is experimental! My attempt to create visual email template editor using React+Redux+etc... tools stack.

Inspired by [Mosaico](https://mosaico.io)

## Installation
Just download this repo, and after then run following commands:

```
npm install
npm start
```

it opens your browser with address http://localhost:3000, and you will see this:

![Main interface](https://habrastorage.org/web/991/b47/e7e/991b47e7e43a41f899e576cef8e053f5.png)

Or you may run:

```
npm run build
```

then copy build folder to _server_nodejs_ folder, then run:

```
node app
```
in _server_nodejs_ folder. This helps you to check save\send functions from client to server. Then open http://localhost:8888 in your browser.

## Interface
Left panel containing block list, common options and block options tabs. In the middle of the screen you see template. If you click on some block, action buttons will appears. You can drag block from block list to template, click on action button for remove block, save template or send test email:

![Block actions and options](https://habrastorage.org/web/cd2/765/f7e/cd2765f7ee754197925d25f4dbd0ac97.png)

Common options give you aibility to apply color or bgcolor to all blocks, which have customStyle flag set to false:

![Common options](https://habrastorage.org/web/837/8db/a10/8378dba1062644deae06e365f6eee08a.png)

## Block example
This is an example of block with HR element:

```javascript
import React from 'react';

const BlockHr = ({ blockOptions }) => {
    return (
        <table
            width="550"
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
        >
            <tbody>
                <tr>
                    <td
                    width="550"
                    style={blockOptions.elements[0]}
                    height={blockOptions.container.height}
                    >
                    <hr />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
export default BlockHr;
```

## Block options example

This is an example of options of block with HR element:

```javascript
import React from 'react';

const OptionsHr = ({ block, language, onPropChange }) => {
    return (
        <div>
            <div>
                <label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
            </div>
            <hr />
            <div>
                <label>{language["Height"]}: <input type="number" value={block.options.container.height} onChange={(e) => onPropChange('height', e.target.value, true)} /></label>
            </div>
            <div>
                <label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
            </div>
        </div>
    );
};
export default OptionsHr;
```

## Inner objects

* template - Array of building blocks. Every block containing
  * id
  * block_type
  * options
    * container - style options for container
    * elements - Array of block elements (mixed style properties and custom data, ex. source or text)
* common - Object containig common options for both template blocks and added blocks
* components - blocks available for adding
* tabs - tabs visibility settings
* tinymce_config - common options for TinyMCE
* language - localisation of interface
* templateId - template id

## Conveyor diagram

![Common options](https://habrastorage.org/web/994/9a1/fe7/9949a1fe72d6446199fbbb860e35b175.png)

## How to build your own block

First you need to add new object containing block settings. To do this, add following json to  _public/components.json_:

```json
...previous blocks...
        {
            "preview": "images/3_icons.png",
            "block": {
                "block_type": "3_icons",
                "options": {
                    "container": {
                        "padding": "0 50px",
                        "color": "#333333",
                        "fontSize": "20px",
                        "customStyle": false,
                        "backgroundColor": "#F7F8FA"
                    },
                    "elements": [{
                        "source": "https://images.vexels.com/media/users/3/136010/isolated/preview/e7e28c15388e5196611aa2d7b7056165-ghost-skull-circle-icon-by-vexels.png"
                    },
                    {
                        "source": "http://www.1pengguna.com/1pengguna/uploads/images/tipimgdemo/kesihatan.gif"
                    },
                    {
                        "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Circle-icons-cloud.svg/2000px-Circle-icons-cloud.svg.png"
                    },
                    {
                        "text": "DEADS",
                        "textAlign": "center"
                    },
                    {
                        "text": "LOVES",
                        "textAlign": "center"
                    },
                    {
                        "text": "CLOUDS",
                        "textAlign": "center"
                    }]
                }
            }
        },
...next blocks...
```

when take this picture:

![New block preview](https://habrastorage.org/web/5cd/0f5/c4d/5cd0f5c4d4ae434d9810aeeb0cccb918.png)

and place it to folder _src/images_ and you must get something like this:

![New block added](https://habrastorage.org/web/ea0/530/a94/ea0530a942144bc1a214ece366b08e5e.png)

Now you need to add new file _Block3Icons.js_ in folder _src/components/blocks_ with this content:

```javascript
import React from 'react';

const Block3Icons = ({ blockOptions, onPropChange }) => {
    const alt="cool image";
    return (
        <table
            width="450"
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
        >
            <tbody>
                <tr>
                    <td width="150">
                        <a width="150" href={blockOptions.elements[0].source}>
                            <img alt={alt} width="150" src={blockOptions.elements[0].source} />
                        </a>
                    </td>
                    <td width="150">
                        <a width="150" href={blockOptions.elements[1].source}>
                            <img alt={alt} width="150" src={blockOptions.elements[1].source} />
                        </a>
                    </td>
                    <td width="150">
                        <a width="150" href={blockOptions.elements[2].source}>
                            <img alt={alt} width="150" src={blockOptions.elements[2].source} />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style={blockOptions.elements[3]}>{blockOptions.elements[3].text}</td>
                    <td style={blockOptions.elements[4]}>{blockOptions.elements[4].text}</td>
                    <td style={blockOptions.elements[5]}>{blockOptions.elements[5].text}</td>
                </tr>
            </tbody>
        </table>
    );
};
export default Block3Icons;
```

Now you need to add _Options3Icons.js_ in folder _src/components/options_ with this content:

```javascript
import React from 'react';

const Options3Icons = ({ block, language, onFileChange, onPropChange }) => {
    let textIndex = 3;
    let imageIndex = 0;
    return (
        <div>
            <div>
                <label>{language["Custom style"]}: <input type="checkbox" checked={block.options.container.customStyle? 'checked': '' } onChange={(e) => onPropChange('customStyle', !block.options.container.customStyle, true)} /></label>
            </div>
            <hr />
            <div>
                <label>{language["Color"]}: <input type="color" value={block.options.container.color} onChange={(e) => onPropChange('color', e.target.value, true)} /></label>
            </div>
            <div>
                <label>{language["Background"]}: <input type="color" value={block.options.container.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, true)} /></label>
            </div>
            <hr />
            <div>
                <label>
                    {language["URL"]}
                    <select onChange={e => imageIndex = +e.target.value}>
                        <option value="0">{language["URL"]} 1</option>
                        <option value="1">{language["URL"]} 2</option>
                        <option value="2">{language["URL"]} 3</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    {language["URL"]} {imageIndex + 1}:
                    <label>
                        <input
                            type="file"
                            onChange={(e) => {
                                onFileChange(block, +imageIndex, e.target.files[0]);
                            }} />
                        <div>&#8853;</div>
                    </label>
                    <input type="text" value={block.options.elements[+imageIndex].source} onChange={(e) => onPropChange('source', e.target.value, false, +imageIndex)} />
                </label>
            </div>
            <hr />
            <div>
                <label>
                    {language["Text"]}
                    <select onChange={e => textIndex = +e.target.value}>
                        <option value="3">{language["Text"]} 1</option>
                        <option value="4">{language["Text"]} 2</option>
                        <option value="5">{language["Text"]} 3</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    {language["Text"]} {textIndex - 2}
                    <input type="text" value={block.options.elements[+textIndex].text} onChange={e => onPropChange('text', e.target.value, false, +textIndex)} />
                </label>
            </div>
        </div>
    );
};
export default Options3Icons;
```

Ok, now add in _src/components/Block.js_ this code:

```javascript
//...another imports...
import Block3Icons from './blocks/Block3Icons';
//...and here...

//...another cases...
        case '3_icons':
            return <Block3Icons id={block.id} blockOptions={block.options} />;
//...and here...
```

almost same make with _src/containers/Options.js_:

```javascript
//...another imports...
import Options3Icons from '../components/options/Options3Icons';
//...and here...

//...another cases...
            case '3_icons':
                return <Options3Icons block={block} language={language} onFileChange={onFileChange} onPropChange={onPropChange} />;
//...and here...
```

After saving all files, and dragging our new block to template you must see this picture:

![Hoooray!!! New block added!!!](https://habrastorage.org/web/6dd/efe/520/6ddefe520c7f49b8be2fad710eec2002.png)

That's all!!! Thank for reading, and try to make your own coolest block =)
