import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          sand: "#E7DFC9",
          sandSoft: "#DDD2B8",
          sandDark: "#CFC2A4",
          olive: "#5F6F52",
          oliveDark: "#4E5C44",
          moss: "#3A4F3C",
          charcoal: "#2B2B2B",
        },
      },
      boxShadow: {
        soft: "0 10px 24px rgba(43, 47, 42, 0.08)",
      },
    },
  },
};

export default config;
