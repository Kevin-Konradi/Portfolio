/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            display: [],
            body: [],
        },
        extend: {
            colors: {
                'transparent': 'transparent',
                'light': {
                    'primary': {
                        50: '#f8fafc',
                        100: '#f1f5f9',
                        200: '#e2e8f0',
                        300: '#cbd5e1',
                        400: '#94a3b8',
                        500: '#64748b',
                        600: '#475569',
                        700: '#334155',
                        800: '#1e293b',
                        900: '#0f172a',
                    }
                },
                'dark': {
                    'primary': {
                        50: '#B6C3CE',
                        100: '#9DAEBE',
                        200: '#859AAD',
                        300: '#6C859D',
                        400: '#536979',
                        500: '#4A5E6D',
                        600: '#425361',
                        700: '#3A4955',
                        800: '#323F49',
                        900: '#29333D',
                    },
                    'accent': {
                       400: '#2DE1FC', 
                    },
                    'success': {
                        50: '#A3F5C7',
                        100: '#91F3BB',
                        200: '#7EF1B0',
                        300: '#6BEFA5',
                        400: '#59EE99',
                        500: '#46EC8E',
                        600: '#2FEA7F',
                        700: '#31E981',
                    },
                    'warning': {
                        50: '#FFF5CC',
                        100: '#FFF3B9',
                        200: '#FFF1A6',
                        300: '#FFEF93',
                        400: '#FFED80',
                        500: '#FFEB6D',
                        600: '#FFE95A',
                        700: '#FFE749',
                        800: '#FFE537',
                        900: '#FEC601',
                    },
                    'error': {
                        50: '#FBDADE',
                        100: '#F9C8CD',
                        200: '#F5A3AB',
                        300: '#F17E8A',
                        400: '#ED5A68',
                        500: '#EA4859',
                        600: '#E93547',
                        700: '#DC182C',
                        800: '#B81425',
                    }
                }
            },
        }
    },
    plugins: [
    ],
}
