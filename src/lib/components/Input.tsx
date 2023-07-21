import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import '@/assets/sass/components/input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export default function Input(props: Props) {

	const classes = [props.className, 'input'];

	const id = props.id || (Math.random() * 10000).toString();

	return (
		<div className='input__wrapper'>
			<label className='input__label' htmlFor={id}>{props.label}</label>
			<input {...props} id={id} className={classNames(classes)} />
		</div>
	);
}
