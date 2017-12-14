import React, { Component } from 'react';
import PropTypes from 'prop-types';

const gBStyle = {
	width: '75px',
	height: '75px',
	backgroundColor: 'grey',
	border: 'solid 5px black',
	float: 'left'
};

export default class LittleGreyBox extends Component {
	render() {
		return <div lassName="col-sm-6" style={gBStyle} />;
	}
}
