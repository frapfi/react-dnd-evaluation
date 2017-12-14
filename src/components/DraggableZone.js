import React, { Component } from 'react';
import LittleBlackBox from './LittleBlackBox';
import LittleGreyBox from './LittleGreyBox';

export default class DraggableZone extends Component {

	render() {
		return (
			<div className="col-sm-4" style={{
				height: '200px',
				border: '5px solid',
				width: '35%'
			}}>
				<div className="row">
					<LittleBlackBox/>
					<LittleGreyBox/>
				</div>

			</div>
		)
	}

}