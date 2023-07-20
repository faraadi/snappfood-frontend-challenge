import '@/assets/sass/routes/VendorText.scss';

interface Props {
	text: string
}

export default function VendorText({ text }: Props) {
	return (
		<div className='text-card'>
			<h4 className='text-card__heading'>{text}</h4>
		</div>
	);
}
