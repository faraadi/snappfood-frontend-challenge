import Service from './service';

class VendorsService extends Service {
	async getList(page: number, lat: string, long: string) {
		try {
			const vendors = await this.http.get('https://snappfood.ir/mobile/v3/restaurant/vendors-list', {
				params: {
					updateChannels: '["master"]',
					lat,
					long,
					page,
					'page_size': '10',
				},
			});

			return this.response(vendors.data, null);
		} catch(err) {
			return this.response(null, err);
		}
	}
}

export default new VendorsService();
