import { useEffect, useRef } from 'react';
import { VendorCard, VendorText } from './components';
import { fetchVendors } from '@/lib/store/app/thunks';
import { store, useAppDispatch, useAppSelector } from '@/lib/store/store';
import '@/assets/sass/routes/VendorsList.scss';

// Preload page's data
export async function loader() {
	await store.dispatch(fetchVendors(0));
	const state = store.getState();

	if (state.app.error) {
		throw new Error(state.app.error);
	}

	return true;
}

export default function VendorsList() {
	const vendors = useAppSelector(state => state.app.vendors);
	const dispatch = useAppDispatch();

	const scrollElement = useRef(null);

	useEffect(() => {
		// Infinite scroll using browser's Intersection Observers
		const observer = new IntersectionObserver((e) => {
			e.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				}
				dispatch(fetchVendors());
			});
		});

		if (vendors && vendors.length) {
			observer.observe(scrollElement.current!);
		}

		return () => observer.disconnect();
	}, [vendors, dispatch]);

	return (
		<div className="container">
			{
				vendors && vendors.length
					? (
						<div className='list'>
							{
								vendors.map((v, i) => (
									v.type === 'TEXT'
										? <VendorText key={i} text={v.data} />
										: <VendorCard key={v.data.id} vendor={v.data} />
								))
							}
							<div ref={scrollElement}>در حال بارگذاری...</div>
						</div>
					)
					: (
						<div className='list__not-found'>
							<img src="/not-found.svg" alt="Not found illustration" width="300px" height="350px" />
							<p >رستورانی یافت نشد.</p>
						</div>
					)
			}
		</div>
	);
}
