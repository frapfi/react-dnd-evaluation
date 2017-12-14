import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LittleDragBox extends Component {
	render() {
		const { color } = this.props;

		const bBStyle = {
			width: '75px',
			height: '75px',
			backgroundColor: color
		};

		return <div className="col-sm-6" style={bBStyle} />;
	}
}
