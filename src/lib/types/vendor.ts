export interface Vendor {
	title: string
	logo: string
	backgroundImage: string
	backgroundImageCustom: string
	rate: number
	voteCount: number
	deliveryFee: number
	description: string
	eta: number
	isZFExpress: boolean
	discountValueForView: number
	menuUrl: string
	id: number
}

export interface VendorResultText {
	type: 'TEXT'
	data: string
}
export interface VendorResultVendor {
	type: 'Vendor'
	data: Vendor
}

export type VendorResult = VendorResultVendor | VendorResultText

export interface VendorList {
	count: number
	finalResult: VendorResult[]
	open_count: number
}
