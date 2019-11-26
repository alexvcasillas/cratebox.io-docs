module.exports = {
  siteMetadata: {
    title: `Cratebox – State management library`,
    name: `Code Bushi`,
    siteUrl: `https://cratebox.oio`,
    description: `A state management library suitable for React, Vue, Svelte and any other UI framework you'd like to use it with.`,
    social: [
      {
        name: `github`,
        url: `https://github.com/alexvcasillas/cratebox`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/alexvcasillas`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/examples", "/plugins"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
