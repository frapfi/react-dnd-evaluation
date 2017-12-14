import React, { Component } from 'react';
import PropTypes from 'prop-types';

const bBStyle = {
	width: '75px',
	height: '75px',
	backgroundColor: 'black',
	border: 'solid 5px grey'
};

export default class LittleBlackBox extends Component {
	render() {
		return <div className="col-sm-6" style={bBStyle} />;
	}
}
