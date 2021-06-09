import path from 'path';
import {createFilePath} from 'gatsby-source-filesystem';

import {routes, RouteType} from './routes.js';
import {slugify} from './src/utils/slugify.js';
import {queryAllRepos} from './src/utils/queries/query-all-repos.js';

const templateMapping = {
  [RouteType.Default]: 'default.js',
  [RouteType.Document]: 'document.js',
  [RouteType.Nav]: 'nav.js',
  [RouteType.Package]: 'package.js',
  [RouteType.Packages]: 'nav.js',
  [RouteType.System]: 'system.js',
  [RouteType.Systems]: 'nav.js',
};

const createPage = ({create, data, parentPath = ''}) => {
  const {allRepos, children, description, name, type} = data;

  const currentPath = `${parentPath}/${slugify(name)}`;
  const pageContext = {description, name};

  switch (type) {
    case RouteType.Nav:
    case RouteType.Systems: {
      pageContext.links = children.map((child) => {
        const {description, name, tags} = child;
        createPage({
          create,
          data: {...child, allRepos},
          parentPath: currentPath,
        });
        return {
          name,
          description,
          tags,
          to: slugify(name),
        };
      });
      break;
    }

    case RouteType.Packages: {
      pageContext.links = Object.values(allRepos).map((repo) => {
        const {description, name, tags} = repo;
        createPage({
          create,
          data: {
            ...repo,
            type: RouteType.Package,
            allRepos,
          },
          parentPath: currentPath,
        });
        return {
          name,
          description,
          tags,
          to: slugify(name),
        };
      });
      break;
    }

    case RouteType.Package: {
      pageContext.data = allRepos[name];
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
    component: path.resolve(`./src/templates/${templateMapping[type]}`),
    context: pageContext,
    path: currentPath,
  });
};

export const createPages = async ({actions, graphql}) => {
  const allRepos = await queryAllRepos(graphql);
  routes.forEach((route) => {
    const data = {...route, allRepos};
    createPage({create: actions.createPage, data});
  });
};

export const onCreateNode = ({node, actions, getNode}) => {
  switch (node.internal.type) {
    // Create mdx pages under the /learn route
    // https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/
    case 'Mdx':
      actions.createNodeField({
        name: 'slugify',
        node,
        value: `/learn${createFilePath({node, getNode})}`,
      });
      break;
    default:
      break;
  }
};
