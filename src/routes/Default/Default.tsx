import { Outlet, NavLink, useNavigation, ScrollRestoration } from 'react-router-dom';
import '@/assets/sass/routes/Default.scss';

export default function Default() {
	const navigation = useNavigation();

	return (
		<div className="default">
			<header className="header">
				{navigation.state === 'loading' && <div className="header__scrollbar"></div>}
				<div className="container flex items-center">
					<img className="header__logo" src="/snappfood-logo.svg" alt="Snappfood logo" width={60} height={30} />
					<nav className="header__nav">
						<ul className="header__navList">
							<li className="header__navItem">
								<NavLink className="header__navLink" to="/">خانه</NavLink>
							</li>
							<li className="header__navItem">
								<NavLink className="header__navLink" to="/vendors">رستوران‌ها</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<Outlet />

			<ScrollRestoration />
		</div>
	);
}
