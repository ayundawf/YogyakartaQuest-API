const {
    // postMethodHandler,
    getMethodHandler,
    getDetailMethodHandler,
    // putMethodHandler,
    // deleteMethodHandler,
  } = require('./handler');
  
  const routes = [
    // {
    //   method: 'POST',
    //   path: '/wisata',
    //   config: { auth: 'jwt' },
    //   handler: postMethodHandler,
    // },
    {
      method: 'GET',
      path: '/wisata',
      config: { auth: 'jwt' },
      handler: getMethodHandler,
    },
    {
      method: 'GET',
      path: '/wisata/{id}',
      config: { auth: 'jwt' },
      handler: getDetailMethodHandler,
    },
    // {
    //   method: 'PUT',
    //   path: '/wisata/{id}',
    //   config: { auth: 'jwt' },
    //   handler: putMethodHandler,
    // },
    // {
    //   method: 'DELETE',
    //   path: '/wisata/{id}',
    //   config: { auth: 'jwt' },
    //   handler: deleteMethodHandler,
    // },
  ];
  
  module.exports = routes;