import { useLoaderData } from 'react-router-dom';
import service from '@/lib/service/service';
import { VendorList } from '@/lib/types/vendor';
import { VendorCard, VendorText } from './components';
import '@/assets/sass/routes/VendorsList.scss';

export async function loader() {
	const vendors = await service.get('https://snappfood.ir/mobile/v3/restaurant/vendors-list', {
		params: {
			// 'extra-filter': '{"vendor_collection":0,"distance_sort":false,"vendor_count_respect":false,"vendor_collection_view_mode":"","banner_collection":false,"new_home":true,"new_home_section":"SERVICES","page_supertype":null,"user_base_list":false,"only_vendor_ids":null,"spot": "list"}',
			updateChannels: '["master"]',
			lat: '35.759',
			long: '51.401',
			page: '0',
			// 'page_size': '10',
		},
	});

	return vendors.data;
}

export default function VendorsList() {
	const data = useLoaderData() as VendorList;
	const vendors = data.finalResult;
	console.log(data, vendors);
	if (vendors) {
		return (
			<div className="container">
				<div className='list'>
					{
						vendors.map((v, i) => (
							v.type === 'TEXT'
								? <VendorText key={i} text={v.data} />
								: <VendorCard key={v.data.id} vendor={v.data} />
						))
					}
				</div>
			</div>
		);
	}
	return <p>None</p>;
}
