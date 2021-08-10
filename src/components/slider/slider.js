import {React, Component} from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import PropTypes from 'prop-types';


const Switch = (props) => {
	const onSlideChange = index => console.log(`changed to slide ${index}`);

	const BulletComponent = ({onClick, isActive}) => (
		<li
			style={{
				width: '25px',
				height: '25px',
				backgroundColor: '#000',
				margin: '0 2px',
				opacity: isActive && '0.4'
			}}
			onClick={onClick}
		/>
	);

	BulletComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		isActive: PropTypes.bool.isRequired
	};

	const ArrowComponent = ({onClick, direction}) => {
		return (
			<div
				style={{
					border: '1px solid black',
					padding: '1em',
					backgroundColor: 'white'
				}}
				onClick={onClick}
			>
				{direction}
			</div>
		);
	};

	ArrowComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		direction: PropTypes.string.isRequired
	};


	return (
		<Slider 
			auto={10000}
			>
				<div className='content__slider-item'><img src={props.slide1} alt='film_logo'/></div>
				<div className='content__slider-item'><img src={props.slide2} alt='film_logo'/></div>
				<div className='content__slider-item'><img src={props.slide3} alt='film_logo'/></div>
		</Slider>
	)
}

export default Switch;