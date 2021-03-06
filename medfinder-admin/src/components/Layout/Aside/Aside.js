import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Aside.css';

function Aside(props) {
	const history = useHistory();
	const isActive = (currentPath) => history.location.pathname.includes(currentPath);
	return (
		<aside className='menu'>
			<ul className='menu-list'>
				<li />
				<li>
					<Link className={isActive('/admin/users') ? 'is-active' : ''} to={'/admin/users/'}>
						Users
					</Link>
				</li>
				<li>
					<Link className={isActive('/admin/products') ? 'is-active' : ''} to={'/addmed'}>
						Medications
					</Link>
				</li>
				<li>
					<Link className={isActive('/pharmacies') ? 'is-active' : ''} to={'/pharmacies'}>
						Pharmacies
					</Link>
				</li>
				<li>
					<Link className={isActive('/admin/orders') ? 'is-active' : ''} to={'/admin/orders'}>
						Orders
					</Link>
				</li>
			</ul>
		</aside>
	);
}

export default Aside;
