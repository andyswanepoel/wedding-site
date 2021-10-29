module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Wedding Site"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Swandry Wedding",
        short_name: "Swandry Wedding",
        icon: "src/images/swandry.png",
        start_url: "/",
        background_color: "#242a2c",
        theme_color: "#675447",
        display: "standalone"
      }
    }
  ]
};
