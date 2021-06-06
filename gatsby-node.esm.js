import path from 'path';
import {createFilePath} from 'gatsby-source-filesystem';

import {slugify} from './src/utils/slugify.js';
import {routes, RouteType} from './routes.js';

const createPage = (route, create, parentPath = '') => {
  const {children, description, name, type} = route;

  let template;
  const context = {description, name};
  const currentPath = `${parentPath}/${slugify(name)}`;

  switch (type) {
    case RouteType.Nav:
    case RouteType.Systems:
    case RouteType.Packages: {
      const links = [];
      children.forEach((child) => {
        const {name, description, tags} = child;
        links.push({
          name,
          description,
          tags,
          to: slugify(name),
        });
        createPage(child, create, currentPath);
      });

      template = './src/templates/nav.js';
      context.links = links;
      break;
    }

    case RouteType.Document: {
      template = './src/templates/document.js';
      break;
    }

    case RouteType.Package:
    case RouteType.System:
    case RouteType.Default:
    default: {
      template = './src/templates/default.js';
      break;
    }
  }

  create({
    component: path.resolve(template),
    context,
    path: currentPath,
  });
};

export const createPages = ({actions}) => {
  routes.forEach((route) => {
    createPage(route, actions.createPage);
  });
};

export const onCreateNode = ({node, actions, getNode}) => {
  // Create mdx pages under the /learn route
  // https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/
  if (node.internal.type === 'Mdx') {
    actions.createNodeField({
      name: 'slugify',
      node,
      value: `/learn${createFilePath({node, getNode})}`,
    });
  }
};
