import React, { Component } from 'react';

export default class DraggableZone extends Component {
	render() {
		const dz_style = {
			height: '200px',
			border: '5px solid',
			width: '35%',


		};

		return (
			<div className="col-sm-4" style={dz_style}>
				<div className="row">
					{this.props.children}
				</div>
			</div>
		);
	}
}
