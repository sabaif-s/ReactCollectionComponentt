const withMT = require("@material-tailwind/react/utils/withMT");
 const animationPreset=require('./tailwind-preset');
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  presets: [animationPreset],
  theme: {
    extend: {},
  },
  plugins: [],
});