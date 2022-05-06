module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
            },
            colors: {
                'primary': '#45a616',
                'primary-dark': '#378512',
                'secondary': '#7616a6',
            },
        },
    },
    plugins: [],
}
