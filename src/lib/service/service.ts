import axios from 'axios';

export default class Service {
	http = axios.create();

	constructor() {
		this.http.interceptors.response.use(
			function (res) {
				return {
					...res,
					ok: res.status >= 200 || res.status < 400,
					data: res.data.data,
				};
			},
			function (err) {
				return Promise.reject(err);
			},
		);
	}

	response<T, E>(data: T, err: E) {
		return {
			data,
			err,
			ok: !!err,
		};
	}
}
