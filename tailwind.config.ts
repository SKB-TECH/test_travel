import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                bgColor: "#0c1136",
                bgGray: "#FAFAFBFF",
                bgexplore: "#F8F9FAD6",
                bgFooter: "#323743",
            },
            backgroundImage: {
                gauche: "url('/assets/gauche.png')",
            },
            colors: {
                "color-text": "#0c1136",
                tew: "#ffffff",
            },
        },
    },
    plugins: [require("daisyui")],
};
export default config;
