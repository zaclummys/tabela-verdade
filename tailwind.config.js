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
                'primary': '#52c41a',
                'primary-dark': '#389e0d',
                'secondary': '#722ed1',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
