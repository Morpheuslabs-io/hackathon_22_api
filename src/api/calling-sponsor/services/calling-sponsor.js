'use strict';

/**
 * calling-sponsor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calling-sponsor.calling-sponsor');
