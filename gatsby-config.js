const siteMetadata = {
    title: `Tan Blog`,
    name: `Tanmay Surve`,
    siteUrl: `https://theinquisitiveguy.netlify.com/`,
    description: `Blog about college life`,
    hero: {
      heading: `Oh hey there, Hi!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/tanmaysurve`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/_perpetually_inquisitive_?igshid=trab2lggm25n`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/tanmay-surve-33690916a/`,
      },
  
    ],
  };


module.exports = {
    siteMetadata,
    plugins: [{
        resolve: "@narative/gatsby-theme-novela",
        options: {
            contentPosts: "content/posts",
            contentAuthors: "content/authors",
            rootPath: "/",
            basePath: "/",
            authorsPage: true,
            mailchimp: false,
            sources: {
                local: true,
                contentful: false,
            },
          },
        }
    ]
  };