module.exports = {
  siteMetadata: {
    title: `Cratebox – State management library`,
    name: `Alex Casillas`,
    siteUrl: `https://cratebox.io`,
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
  plugins: [
    { resolve: `gatsby-theme-document` },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-78795842-5",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-WCJHCDK",
        // Enables Google Optimize Experiment ID
        experimentId: "7VzomJt6R7GfGZLVbK7A5g",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "0",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "cratebox.io",
      },
    }
  ]
};
