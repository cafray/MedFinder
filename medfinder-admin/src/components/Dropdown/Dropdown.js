import React, { useState } from 'react';

function Dropdown(props){

	const [isActive, setIsActive] = useState(false);

	const handleSelect = () => {
		setIsActive(!isActive)
	}
		const { listName } = props;
		return (
			<div className={`dropdown ${isActive ? 'is-active' : ''}`} onClick={(e) => handleSelect()}>
				<div className='dropdown-trigger'>
					<button className='button' aria-haspopup='true' aria-controls='dropdown-menu'>
						<span>{listName}</span>
						<span className='icon is-small'>
							<i className='fas fa-angle-down' aria-hidden='true' />
						</span>
					</button>
				</div>
				<div className='dropdown-menu' id='dropdown-menu' role='menu'>
					<div className='dropdown-content'>{props.children}</div>
				</div>
			</div>
		);
	
}

export default Dropdown;
