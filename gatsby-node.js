const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    let { date, slug } = node.frontmatter
    date = new Date(date)
    const path = `/blog/${date.getFullYear()}/${date.getMonth() + 1}/${slug}`
    createNodeField({
      name: "path",
      node,
      value: path,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
            fields {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.path,
      component: path.resolve(`./src/templates/posts-page-template.js`),
      context: { id: node.id },
    })
  })
}
