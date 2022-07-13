const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  	const FormationTemplate = path.resolve('./src/templates/formation.js');
	  const FormationProTemplate = path.resolve('./src/templates/formationPro.js');

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

	// Formations
	const actu = graphql(`
		{
			allDatoCmsFormation {
        edges {
          node  {
					slug
					id
          }
        }
      }
    }
    
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create atelier pages
		result.data.allDatoCmsFormation.edges.forEach(({ node }) => {
			createPage({
        path: `formations/${node.slug}`,
				component: FormationTemplate,
        context: {slug: node.slug},
			});
		});
	});
// Individual Formation Pro
const FormationPro = graphql(`
{
	allDatoCmsFormationPro {
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

	  // Create FormationPro pages
	  result.data.allDatoCmsFormationPro.edges.forEach(({ node }) => {
		  createPage({
	  path: `pro/formations/${node.slug}`,				
	  component: FormationProTemplate,         
	  context: {
		slug: node.slug,
	  },
		  });
	  });
  });


	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([product, actu,FormationPro]);
};