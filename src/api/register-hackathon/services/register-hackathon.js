'use strict';

/**
 * register-hackathon service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-hackathon.register-hackathon');
