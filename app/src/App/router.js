import App from '../Components/App/App';

/**
 * Error handling for modules
 * @param err {String} Logs an error.
 */
function errorLoading(err) {
  throw new Error(`Dynamic page loading failed ${err}`);
}

/**
 * Return the loaded module.
 *
 * @param cb {Function} The callback function
 * @returns {Module} The loaded module
 */
function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('../pages/home/home.jsx')
              .then(loadRoute(cb))
              .catch(errorLoading);
      }
    }
  ]
};
