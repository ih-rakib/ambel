import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    path.join(__dirname, "../shared/src/**/*.{js,jsx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
