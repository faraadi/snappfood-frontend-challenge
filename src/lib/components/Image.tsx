import { useState, type ImgHTMLAttributes } from 'react';

export default function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
	const [src, setSrc] = useState(props.src);

	const onError = () => {
		setSrc('/image-placeholder.svg');
	};

	return <img
		{...props}
		src={src}
		onError={onError}
	/>;
}
