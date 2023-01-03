/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  mode: "jit",
  darkMode: "class",
  variants: {
    extend: {},
  },
  theme: {
    colors: {
      "black-primary": "rgba(var(--color-black-primary), <alpha-value>)",
      "black-secondary": "rgba(var(--color-black-secondary), <alpha-value>)",
      "white-primary": "rgba(var(--color-white-primary), <alpha-value>)",
      "white-secondary": "rgba(var(--color-white-secondary), <alpha-value>)",
      "accent-primary": "rgba(var(--color-accent-primary), <alpha-value>)",
      "accent-secondary": "rgba(var(--color-accent-secondary), <alpha-value>)",
    },
    screens: {
      sm: "640px",
      md: "720px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      fontFamily: {
        body: ['"DM Sans"', "sans-serif"],
        title: ['"Source Serif Pro"', "serif"],
        monospace: ['"DM Mono"', "monospace"],
      },
      maxWidth: {
        "page-title": "15ch",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black-primary").replace("<alpha-value>", 1),
            figcaption: {
              opacity: 0.6,
              fontFamily: theme("fontFamily.monospace")[0],
              fontSize: "0.75rem",
              textAlign: "center",
            },
            a: {
              color: "inherit",
              transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
              transitionDuration: "500ms",
              transitionProperty: "color",
              wordBreak: "break-word",
              "&:hover": {
                color: theme("colors.accent-primary").replace("<alpha-value>", 1),
                textDecoration: "none",
              },
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            code: {
              fontFamily: theme("fontFamily.monospace")[0],
              fontWeight: 400,
              paddingLeft: "4px",
              paddingRight: "4px",
              wordBreak: "break-all",
              backgroundColor: theme("colors.white-secondary").replace("<alpha-value>", 1),
            },
            pre: {
              backgroundColor: theme("colors.black-secondary").replace("<alpha-value>", 1),
            },
            "pre code": {
              fontFamily: theme("fontFamily.monospace")[0],
              fontSize: theme("fontSize.sm")[0],
              fontWeight: 400,
              lineHeight: 1,
              paddingLeft: 0,
              paddingRight: 0,
              wordBreak: "normal",
              backgroundColor: theme("colors.black-secondary").replace("<alpha-value>", 1),
            },
            "figure > img": {
              width: "100%",
            },
            p: {
              lineHeight: "2rem",
            },
            hr: {
              marginLeft: "5rem",
              marginRight: "5rem",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white-primary").replace("<alpha-value>", 1),
            strong: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
              fontWeight: 700,
            },
            figcaption: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
            },
            a: {
              "&:hover": {
                color: theme("colors.accent-secondary").replace("<alpha-value>", 1),
              },
            },
            h1: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
            },
            h2: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
            },
            h3: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
            },
            h4: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
            },
            h5: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
            },
            code: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
              backgroundColor: theme("colors.black-secondary").replace("<alpha-value>", 1),
            },
            "ol > li::before": {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
            },
            blockquote: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
            },
            th: {
              color: theme("colors.white-primary").replace("<alpha-value>", 1),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
