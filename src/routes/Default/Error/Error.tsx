import { NavLink, useRouteError } from 'react-router-dom';
import '@/assets/sass/routes/Error.scss';

export default function Error() {
	const error = useRouteError() as Error;

	const isNotFound = error.statusText && error.statusText === 'Not Found';
	if (isNotFound) {
		return (
			<main className='error'>
					<img className='error__img' src="/not-found.svg" alt="Page not found illustration" />
					<h4 className='error__text'>صفحه مورد نظر یافت نشد.</h4>
					<nav>
						<ul className='error__navList'>
							<li>
								<NavLink className='error__navLink' to='/'>خانه </NavLink>
								<NavLink className='error__navLink' to='/vendors'>رستوران‌ها</NavLink>
							</li>
						</ul>
					</nav>
			</main>
		)
	}
	return (
		<main className='error'>
				<img className='error__img' src="/error.svg" alt="Error illustration" />
				<p className='error__text'>
					در حال حاضر سیستم قادر به پردازش درخواست شما نمی‌باشد. لطفا اندکی بعد دوباره تلاش کنید.
					<br />
					در صورت ادامه داشتن مشکل، با پشتیبانی در تماس باشید.
				</p>
		</main>
	)
}