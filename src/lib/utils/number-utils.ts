class NumberUtils {
	static instance: NumberUtils;
	constructor() {
		if (NumberUtils.instance) {
			return NumberUtils.instance;
		}
		NumberUtils.instance = this;
		return this;
	}

	/**
	 * Thousand separator
	 * @param n number
	 * @returns A comma separated number string
	 */
	thSeparator(n: string | number) {
		return Number(n).toLocaleString();
	}
}


export default new NumberUtils();