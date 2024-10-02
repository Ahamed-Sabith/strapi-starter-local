export function renderButtonStyle(type: string) {
	switch (type) {
		case "primary":
			return "md:px-16 px-2 py-2 md:text-lg text-12 font-semibold  border-4 border-grey rounded-3xl ";
		case "secondary":
			return "px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100";
		default:
			return "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900";
	}
}
