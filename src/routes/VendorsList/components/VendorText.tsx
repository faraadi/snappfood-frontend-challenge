import '@/assets/sass/routes/VendorText.scss';

interface Props {
	text: string
}

export default function VendorText({ text }: Props) {
	return (
		<div className='vendor__text'>
			<h4 className='vendor__heading'>{text}</h4>
		</div>
	);
}
