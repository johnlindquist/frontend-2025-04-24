import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: '#daa520',
                darkGold: '#b8860b',
                'deco-dark-bg': '#1a1a1a',
                'deco-grad-start': '#2a2a2a',
                'deco-dark-gray': '#333',
                'deco-card-bg': '#282828', // Added from .art-deco-card
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', 'sans-serif'], // Use CSS variable
                heading: ['var(--font-poiret-one)', 'cursive'], // Use CSS variable
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config; 