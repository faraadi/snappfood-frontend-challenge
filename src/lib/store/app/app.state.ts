import { VendorResult } from '@/lib/types/vendor';

export interface AppState {
	vendors: VendorResult[],
	lat: string
	long: string
	page: number
	nextPage: number
	error: null | string
}

const appInitialState: AppState = {
	vendors: [],
	lat: '35.759',
	long: '51.401',
	page: 0,
	nextPage: 0,
	error: null,
};

export default appInitialState;
