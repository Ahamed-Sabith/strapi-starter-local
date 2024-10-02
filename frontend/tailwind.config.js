/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
			fontSize: {
                10: "10px",
                11: "11px",
                13: "13px",
                15: "15px",
                26: "26px",
				31: "31px",
                32: "32px",
				36: "36px",
                40: "40px",
				48: "48px",
                56: "56px",
				222: "222px"
            },
			textColor: {
				primary: '#D9F509',
				secondary: '#F5FFA7'
			},
			colors: {
				green: '#D9F509',
				grey: '#767676',
				greySecondary: "#6A6A6A"
			},
			borderRadius: {
				55: '55px'
			}
			 
		}, 
	}, 
	plugins: [], 
}