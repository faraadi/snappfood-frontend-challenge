import { Button, Input } from '@/lib/components';
import { useAppDispatch, useAppSelector } from '@/lib/store/store';
import { setLat, setLong } from '@/lib/store/app/app.slice';
import '@/assets/sass/routes/Home.scss';
import { useState } from 'react';

export default function Home() {
	const [showCoords, setShowCoords] = useState(false);
	const { lat, long } = useAppSelector(state => state.app);
	const dispatch = useAppDispatch();

	const onShowCoords = () => {
		setShowCoords(true);
	};

	return (
		<div className='container body'>
			<div className='body__nav'>
				<Button color='primary' to='/vendors' className='ml-2'>
					رستوران‌ها
				</Button>
				<Button color='secondary' onClick={onShowCoords}>تغییر مختصات</Button>
			</div>
			{
				showCoords && (
					<div className='body__form'>
						<Input
							value={lat}
							label='عرض جغرافیایی'
							type='number'
							className='ml-2'
							onChange={e => dispatch(setLat(e.target.value))}
						/>
						<Input
							value={long}
							label='طول جغرافیایی'
							type='number'
							className='ml-2'
							onChange={e => dispatch(setLong(e.target.value))}
						/>
					</div>
				)
			}
		</div>
	);
}
