import React from 'react';
import { connect } from 'react-redux';
import { selectComponent } from '../actions';

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs,
		components: state.components
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		selectComponent: (index) => {
			dispatch(selectComponent(index));
		}
	};
};

const Blocks = connect(
	mapStateToProps,
	mapDispatchToProps
)(({ tabs, components, selectComponent }) => {
	if (tabs && tabs.blocks) {
		const alt = "block preview";
		return (
			<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
			}}
			>
				{components.map((el, index) => 
					<div
						key={index}
						style={{
							width: '90%',
							margin: '1%',
							border: '1px solid #ccc',
						}}
						draggable="true"
						onClick={() => selectComponent(index)}
						onDragStart={() => selectComponent(index)}
						><img style={{width: '100%'}} alt={alt} src={el.preview} />
					</div>
				)}
			</div>
			);
	}
	return null;
});

export default Blocks;