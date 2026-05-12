const { jobs, site } = require('../config');
const messages = require('../messages');
const exampleHealthJob = require('./example-health-job');

async function registerJobs(fastify) {
  fastify.decorate('jobs', [exampleHealthJob]);

  if (!jobs.enabled) {
    fastify.log.warn(messages.warning.JOBS_DISABLED);
    return;
  }

  fastify.log.info(
    `[${site.code}] Registered ${fastify.jobs.length} job definition(s).`
  );
}

module.exports = registerJobs;
