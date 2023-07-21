import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import '@/assets/sass/components/button.scss';
import { Link } from 'react-router-dom';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement|HTMLAnchorElement> {
	color: 'primary' | 'secondary'
	to?: string
}

export default function Button(props: Props) {
	const classes = [props.className, 'btn', `btn--${props.color}`];
	return props.to
		? (
			<Link {...props} className={classNames(classes)} to={props.to}>
				{props.children}
			</Link>
		)
		: (
			<button {...props} className={classNames(classes)}>
				{props.children}
			</button>
		);
}
