const requireEsm = require('esm')(module);

// Allows support of ESM syntax for gatsby-node
module.exports = requireEsm('./gatsby-node.esm.js');
