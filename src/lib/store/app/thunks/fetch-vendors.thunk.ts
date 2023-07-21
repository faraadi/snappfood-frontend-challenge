import { createAsyncThunk } from '@reduxjs/toolkit';
import { VendorsService } from '@/lib/service';
import { type AppState } from '../app.state';

/**
 * Fetch the next page of vendors list.
 * Optionally accepts a page parameter to lookup fo a specific page.
 */
const fetchVendors = createAsyncThunk('app/fetchVendors', async (_page: number | undefined, { getState, rejectWithValue }) => {
	const state = getState() as { app: AppState };
	const { nextPage, lat, long } = state.app;

	const page = Number(_page) >= 0 ? Number(_page) : nextPage;

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
