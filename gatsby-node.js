const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const Webinairetemplate = path.resolve ('./src/templates/webinaire.js');

// Individual webinaire pages
const webinaire = graphql(`
{
	allDatoCmsWebinaire {
	edges {
	  node {
		id
		slug
	  }
	}
  }
}

`).then(result => {
	  if (result.errors) {
		  Promise.reject(result.errors);
	  }

	  // Create product pages
	  result.data.allDatoCmsWebinaire.edges.forEach(({ node }) => {
		  createPage({
	  path: `webinaire/${node.slug}`,				
	  component: Webinairetemplate,         
	  context: {
		slug: node.slug,
	  },
		  });
	  });
  });



  
	// Individual blogs pages
	const product = graphql(`
  {
    allDatoCmsArticle {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
  
  `).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create product pages
		result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
			createPage({
        path: `blog/${node.slug}`,				
        component: blogPostTemplate,         
        context: {
          slug: node.slug,
        },
			});
		});
	});

	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([product,webinaire]);
};