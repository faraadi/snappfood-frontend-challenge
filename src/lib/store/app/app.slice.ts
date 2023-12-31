import { createSlice } from '@reduxjs/toolkit';
import { fetchVendors } from './thunks';
import appInitialState from './app.state';

export const appSlice = createSlice({
	name: 'app',
	initialState: appInitialState,
	reducers: {
		setLat(state, action) {
			state.lat = action.payload;
		},
		setLong(state, action) {
			state.long = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchVendors.rejected, (state, action) => {
			state.error = action.payload as string;
		});
		builder.addCase(fetchVendors.fulfilled, (state, action) => {
			const { page, data } = action.payload!;
			if (page === 0) {
				state.vendors = [...data];
			} else {
				state.vendors.push(...data);
			}
			state.page = page;
			state.nextPage = page + 1;
		});
	},
});

export const { setLat, setLong } = appSlice.actions;

export default appSlice.reducer;
