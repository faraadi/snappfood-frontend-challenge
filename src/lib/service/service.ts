import axios from 'axios';

const service = axios.create();

service.interceptors.response.use(
	function (res) {
		return {
			...res,
			ok: res.status >= 200 || res.status < 400,
			data: res.data.data,
		};
	},
	function (err) {},
);

export default service;
