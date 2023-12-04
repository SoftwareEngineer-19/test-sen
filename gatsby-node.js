const path = require("path");


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components")
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {

  const { data:netZeroData } = await graphql(`
  query NetZero {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/net-zero/" } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          description
          product_img
          demo_link
          id
        }
      }
    }
  }
  `)

  const { data: natureData } = await graphql(`
  query Nature {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/nature/" } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          description
          product_img
          demo_link
          id
        }
      }
    }
  }
  `)

  const { data: transitionSystemsData } = await graphql(`
  query TransitionSystems {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/transition-systems/" } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          description
          product_img
          demo_link
        }
      }
    }
  }
  `)

  const { data: marketplaceData } = await graphql(`
  query Marketplace {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/marketplace/" } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          description
          product_img
          demo_link
        }
      }
    }
  }
  `)

  netZeroData.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path:  node.frontmatter.slug+'/net-zero/',
      component: path.resolve('./src/templates/net-zero.tsx'),
      context: { id: node.frontmatter.id }
    })
  })

  natureData.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path:  node.frontmatter.slug+'/nature/',
      component: path.resolve('./src/templates/nature.tsx'),
      context: { id: node.frontmatter.id }
    })
  })

  transitionSystemsData.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path:  '/transition-systems'+node.frontmatter.slug,
      component: path.resolve('./src/templates/transition-systems.tsx'),
      context: { slug: node.frontmatter.slug }
    })
  })

  marketplaceData.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path:  '/marketplace'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/marketplace.tsx'),
      context: { slug: node.frontmatter.slug }
    })
  })
}


 


