/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                container: "1600px",
            },
            fontFamily: {
                DM: "DM Sans",
            },
            colors: {
                Primary_1: "#262626",
                Primary_2: "#6D6D6D",
                color_1: "#767676",
            },
        },
    },
    plugins: [],
};
