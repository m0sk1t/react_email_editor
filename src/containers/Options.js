import React from 'react';
import TinyMCE from 'react-tinymce';
import { connect } from 'react-redux';
import AddItem from '../containers/AddItem';
import { stylishBlock, stylishNode } from '../actions';

const mapStateToProps = (state) => {
    return {
        blocks: state.blocks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPropChange: (prop, val, element) => {
            switch (element) {
                case 'node':
                    dispatch(stylishNode(prop, val));
                    break;
                case 'block':
                    dispatch(stylishBlock(prop, val));
                    break;
                default:
                    return;
            }
        }
    };
};

const Options = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ blocks, onPropChange }) => {
    const block = blocks.filter(b => b.selected)[0];
    if (block) {
        const node = block.nodes.filter(n => n.selected)[0];
        if (node) {
            return (
                <div
                    style={{
                        width: '20%',
                    }}
                    >
                        <AddItem />
                        <p></p>
                        <div>Block options</div>
                        <hr />
                        <div>
                            <label>Width: <input type="text" value={block.options.width} onChange={(e) => onPropChange('width', e.target.value, 'block')} /></label>
                        </div>
                        <div>
                            <label>Height: <input type="text" value={block.options.height} onChange={(e) => onPropChange('height', e.target.value, 'block')} /></label>
                        </div>
                        <div>
                            <label>Color: <input type="color" value={block.options.color} onChange={(e) => onPropChange('color', e.target.value, 'block')} /></label>
                        </div>
                        <div>
                            <label>Background: <input type="color" value={block.options.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, 'block')} /></label>
                        </div>
                        <p></p>
                        <p></p>
                        <div>Node options</div>
                        <hr />
                        <div>
                            <label>Text:
                            <TinyMCE
                                content={node.options.text}
                                config={{
                                  plugins: 'link image code textcolor colorpicker',
                                  toolbar: 'undo redo | forecolor backcolor |bold italic | alignleft aligncenter alignright | code'
                                }}
                                onChange={(e) => onPropChange('text', e.target.getContent(), 'node')}
                             />
                             </label>
                        </div>
                        <div>
                            <label>Font size: <input type="text" value={node.options.fontSize} onChange={(e) => onPropChange('fontSize', e.target.value, 'node')} /></label>
                        </div>
                        <div>
                            <label>
                                Font family:
                                <select style={{width: '50%'}} onChange={(e) => onPropChange('fontFamily', e.target.value, 'node')}>
                                    <option value='Georgia, serif'>Georgia, serif</option>
                                    <option value='Tahoma, Geneva, sans-serif'>Tahoma, Geneva, sans-serif</option>
                                    <option value='Verdana, Geneva, sans-serif'>Verdana, Geneva, sans-serif</option>
                                    <option value='Arial, Helvetica, sans-serif'>Arial, Helvetica, sans-serif</option>
                                    <option value='Impact, Charcoal, sans-serif'>Impact, Charcoal, sans-serif</option>
                                    <option value='"Times New Roman", Times, serif'>"Times New Roman", Times, serif</option>
                                    <option value='"Courier New", Courier, monospace'>"Courier New", Courier, monospace</option>
                                    <option value='"Arial Black", Gadget, sans-serif'>"Arial Black", Gadget, sans-serif</option>
                                    <option value='"Lucida Console", Monaco, monospace'>"Lucida Console", Monaco, monospace</option>
                                    <option value='"Comic Sans MS", cursive, sans-serif'>"Comic Sans MS", cursive, sans-serif</option>
                                    <option value='"Trebuchet MS", Helvetica, sans-serif'>"Trebuchet MS", Helvetica, sans-serif</option>
                                    <option value='"Lucida Sans Unicode", "Lucida Grande", sans-serif'>"Lucida Sans Unicode", "Lucida Grande", sans-serif</option>
                                    <option value='Palatino Linotype", "Book Antiqua", Palatino, serif'>"Palatino Linotype", "Book Antiqua", Palatino, serif</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>Width: <input type="text" value={node.options.width} onChange={(e) => onPropChange('width', e.target.value, 'node')} /></label>
                        </div>
                        <div>
                            <label>Height: <input type="text" value={node.options.height} onChange={(e) => onPropChange('height', e.target.value, 'node')} /></label>
                        </div>
                        <div>
                            <label>Color: <input type="color" value={node.options.color} onChange={(e) => onPropChange('color', e.target.value, 'node')} /></label>
                        </div>
                        <div>
                            <label>Background: <input type="color" value={node.options.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, 'node')} /></label>
                        </div>
                    </div>
                );
        } else {
        return (
            <div
            style={{
                width: '20%',
            }}
            >
                <AddItem />
                <div>Block options</div>
                <hr />
                <div>
                    <label>Width: <input type="text" value={block.options.width} onChange={(e) => onPropChange('width', e.target.value, 'block')} /></label>
                </div>
                <div>
                    <label>Height: <input type="text" value={block.options.height} onChange={(e) => onPropChange('height', e.target.value, 'block')} /></label>
                </div>
                <div>
                    <label>Color: <input type="color" value={block.options.color} onChange={(e) => onPropChange('color', e.target.value, 'block')} /></label>
                </div>
                <div>
                    <label>Background: <input type="color" value={block.options.backgroundColor} onChange={(e) => onPropChange('backgroundColor', e.target.value, 'block')} /></label>
                </div>
            </div>
            );
        }
    } else {
        return (
            <div
                style={{
                    width: '20%',
                }}
            ></div>
        );
    }
});

export default Options;
