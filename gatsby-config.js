module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // ...
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://katturai.cubebase.ai",
        accessToken:'50680852f75dee249bc1f3a8384e950e6a177098b372a096dfb1a5dd59d23a63b57a5b7e5eb67fb07bd57221b36591856278cc497d036442643b1ea4c0c2340531b59f0ad525c8b03ab0cd2a6ae447b922383326e2ae9b6c3255d44e36b7d1d247e9ab2d134192efbecf5772a4896810f1ca820d8aebae6968e12aa12abe8794',
        collectionTypes: [
          'homepage',
          'solution',
          'technology',
          'partner',
          'about',
          'carrer',
          'blog',
          'newsroom',
          'contact',
          'user'
        ],
        
        queryLimit: 1000,
      },
    },
    // 'gatsby-plugin-offline'
  ],
}