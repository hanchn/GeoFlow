const { jobs, site } = require('../config');
const exampleHealthJob = require('./example-health-job');

async function registerJobs(fastify) {
  fastify.decorate('jobs', [exampleHealthJob]);

  if (!jobs.enabled) {
    return;
  }
}

module.exports = registerJobs;
