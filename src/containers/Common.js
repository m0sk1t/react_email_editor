import React from 'react';
import { connect } from 'react-redux';
import { stylizeAll, setBgcolor, setTemplateName } from '../actions';

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs,
		common: state.common,
		language: state.language,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTemplateName: (name) => {
			dispatch(setTemplateName(name));
		},
		stylizeAll: (prop, val) => {
			dispatch(stylizeAll(prop, val));
		},
		setBgcolor: (val) => {
			dispatch(setBgcolor(val));
		}
	};
};

const Common = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ tabs, common, language, stylizeAll, setBgcolor, setTemplateName }) => {
	if (tabs && tabs.common) {
		const fontSize = common.fontSize.match(/\d+/)?common.fontSize.match(/\d+/)[0]: '16';
		return (
			<div
			style={{
				'overflowY': 'auto',
			}}
			>
				<label>{language["Common options"]}</label>
				<div>
					<label>{language["Template name"]}: <input type="text" value={common.templateName} onChange={(e) => setTemplateName(e.target.value)} /></label>
				</div>
				<div>
					<label>{language["Template background"]}: <input type="color" value={common.bgcolor} onChange={(e) => setBgcolor(e.target.value)} /></label>
				</div>
				<hr />
				<div>
					<label>{language["Color"]}: <input type="color" value={common.color} onChange={(e) => stylizeAll('color', e.target.value)} /></label>
				</div>
				<div>
					<label>{language["Background"]}: <input type="color" value={common.backgroundColor} onChange={(e) => stylizeAll('backgroundColor', e.target.value)} /></label>
				</div>
				<hr />
				<div>
					<label>{language["Font size"]}: <input type="number" value={fontSize.match(/\d+/)[0]} onChange={(e) => stylizeAll('fontSize', `${e.target.value}px`, true)} /></label>
				</div>
				<div>
					<label>
						{language["Font family"]}:
						<select style={{width: '50%'}} onChange={(e) => stylizeAll('fontFamily', e.target.value, true, 0)}>
							<option value="Georgia, serif">Georgia, serif</option>
							<option value="Tahoma, Geneva, sans-serif">Tahoma, Geneva, sans-serif</option>
							<option value="Verdana, Geneva, sans-serif">Verdana, Geneva, sans-serif</option>
							<option value="Arial, Helvetica, sans-serif">Arial, Helvetica, sans-serif</option>
							<option value="Impact, Charcoal, sans-serif">Impact, Charcoal, sans-serif</option>
							<option value="'Times New Roman', Times, serif">"Times New Roman", Times, serif</option>
							<option value="'Courier New', Courier, monospace">"Courier New", Courier, monospace</option>
							<option value="'Arial Black', Gadget, sans-serif">"Arial Black", Gadget, sans-serif</option>
							<option value="'Lucida Console', Monaco, monospace">"Lucida Console", Monaco, monospace</option>
							<option value="'Comic Sans MS', cursive, sans-serif">"Comic Sans MS", cursive, sans-serif</option>
							<option value="'Trebuchet MS', Helvetica, sans-serif">"Trebuchet MS", Helvetica, sans-serif</option>
							<option value="'Lucida Sans Unicode', 'Lucida Grande', sans-serif">"Lucida Sans Unicode", "Lucida Grande", sans-serif</option>
							<option value="'Palatino Linotype', 'Book Antiqua', Palatino, serif">"Palatino Linotype", "Book Antiqua", Palatino, serif</option>
						</select>
					</label>
				</div>
			</div>
			);
	}
	return null;
});

export default Common;