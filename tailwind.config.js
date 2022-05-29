module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        green: {
          dark: "#017706",
          medium: "#01AA08",
          light: "#4DC452"
        },
        olivia: {
          dark: "#2B3E0F",
          medium: "#3E5915",
          light: "#788B5B"
        },
        lemon: {
          dark: "#637427",
          medium: "#8EA637",
          light: "#B0C173"
        }
      },
      secondary: {
        orange: {
          dark: "#98602F",
          medium: "#D98943",
          light: "#E4AC7B"
        },
        "green-gray": {
          dark: "#6D7466",
          medium: "#9CA692",
          light: "#BAC1B3"
        },
        "green-yellow": {
          dark: "#8D983B",
          medium: "#C9D955",
          light: "#D9E488"
        }
      },
      complement: {
        background: {
          normal: "#F2F2F2",
          soft: "#EDEBE9",
          gray: "#A9A9A9",
          white: "#F6F6F6"
        }
      },
      dark: {
        normal: "#0B0C0D",
        light: "#545556"
      },
      "assets-compose-color": "linear-gradient(0deg, rgba(120, 139, 91, 0.2), rgba(120, 139, 91, 0.2)), #F2F2F2;"
    },
    extends: {
    }
  },
  plugins: []
};
