module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
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
    variants: {
        extend: {},
    },
    plugins: [],
}
