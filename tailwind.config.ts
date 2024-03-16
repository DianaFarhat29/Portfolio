import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#ac8bf1',
        'custom-gray': '#ececec',
        'angular-color': '#fa2987', 
        'spring-color': '#60b831',
        'html-color': '#e44d24',
        'css-color': '#2652e6',
        'javascript-color': '#e8c931',
        'java-color': '#e77100',
        'csharp-color': '#953dac',
        'tailwind-color': '#46abb3',
        'entity-color': '#7a3c89',
        'bootstrap-color': '#8012fa',
        'typescript-color': '#2d79c7',
        'mysql-color': '#084a68',
        'wpf-color': '#0091e8',
        'windowsforms-color': '#0081c2',
        'thymeleaf-color': '#005f0f',

      },
      backgroundImage: {
        'photo': "url('/images/photoLinkedIn.jpg')",
      },
      display: ["group-hover"]
    },
  },
  plugins: [],
};
export default config;
