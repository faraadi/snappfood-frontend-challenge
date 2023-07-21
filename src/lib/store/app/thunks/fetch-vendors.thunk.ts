import { createAsyncThunk } from '@reduxjs/toolkit';
import { VendorResult } from '@/lib/types/vendor';
import { VendorsService } from '@/lib/service';
import { type AppState } from '../app.state';

interface ThunkReturn {
	data: VendorResult[]
	page: number
}

const fetchVendors = createAsyncThunk<ThunkReturn | void, void, {state: {app: AppState}}>('app/fetchVendors', async (_param, { getState, rejectWithValue }) => {
	const { nextPage: page, lat, long } = getState().app;

	const { data, err } = await VendorsService.getList(page, lat, long);

	if (err) {
		return rejectWithValue(String(err));
	}

	return {
		data: data.finalResult,
		page,
		err,
	};
});

export default fetchVendors;
