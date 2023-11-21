
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'hamadzia74',
                mongodb_password: 'rY3wxIulu2cJ7KnU',
                mongodb_clustername: 'blogsclustor',
                mongodb_database: 'blogsclustorDB',
            }
        }
    }
    return {
        env: {
            mongodb_username: 'hamadzia74',
            mongodb_password: 'rY3wxIulu2cJ7KnU',
            mongodb_clustername: 'blogsclustor',
            mongodb_database: 'blogsclustor',
        }
    }
}