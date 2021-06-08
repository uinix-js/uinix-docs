import path from 'path';
import {createFilePath} from 'gatsby-source-filesystem';

import {routes, RouteType} from './routes.js';
import {slugify} from './src/utils/slugify.js';

const templateMapping = {
  [RouteType.Default]: 'default.js',
  [RouteType.Document]: 'document.js',
  [RouteType.Nav]: 'nav.js',
  [RouteType.Package]: 'package.js',
  [RouteType.Packages]: 'nav.js',
  [RouteType.System]: 'system.js',
  [RouteType.Systems]: 'nav.js',
};

const createPage = (route, create, parentPath = '') => {
  const {children, description, name, type} = route;

  const template = `./src/templates/${templateMapping[type]}`;
  const component = path.resolve(template);
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
      context.links = links;
      break;
    }

    case RouteType.System:
    case RouteType.Document:
    case RouteType.Default:
    default: {
      break;
    }
  }

  create({
    component,
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
