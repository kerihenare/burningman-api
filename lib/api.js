'use strict';

var request = require('request');

/**
 * Burning Man API wrapper
 *
 * @param {string} apiKey
 * @constructor
 */
var Api = module.exports = function BurningManAPI (apiKey) {
  this._request = request.defaults({
    auth: {
      user: apiKey,
      pass: '',
      sendImmediately: true
    },
    baseUrl: 'https://api.burningman.org/api/v1',
    json: true
  });
};

/**
 * @private
 * @param  {string}           uri
 * @param  {{ year: string }} qs
 * @param  {Function}         callback
 */
Api.prototype._doRequest = function doRequest (uri, qs, callback) {
  return this._request({ uri: uri, qs: qs }, function (error, response, body) {
    if (error) {
      return callback(error);
    }

    callback(null, body);
  });
};

/**
 * Get All Art Installations
 *
 * @param  {number}   year     Burning Man year
 * @param  {Function} callback
 */
Api.prototype.arts = function getArts (year, callback) {
  if (!year) {
    return callback(Error('Year is required'));
  }

  return this._doRequest('/art', { year: year }, callback);
};

/**
 * Get Single Art Installation by UID

 * @param  {string}   uid      Art installation ID
 * @param  {Function} callback
 */
Api.prototype.art = function getArt (uid, callback) {
  return this._doRequest('/art/' + uid, {}, callback);
};

/**
 * Get All Camps
 *
 * @param  {number}   year     Burning Man year
 * @param  {Function} callback
 */
Api.prototype.camps = function getCamps (year, callback) {
  if (!year) {
    return callback(Error('Year is required'));
  }

  return this._doRequest('/camp', { year: year }, callback);
};

/**
 * Get Single Camp by UID
 *
 * @param  {string}   uid      Camp ID
 * @param  {Function} callback
 */
Api.prototype.camp = function getCamp (uid, callback) {
  return this._doRequest('/camp/' + uid, {}, callback);
};

/**
 * Get All Events
 *
 * @param  {number}   year     Burning Man year
 * @param  {Function} callback
 */
Api.prototype.events = function getEvents (year, callback) {
  if (!year) {
    return callback(Error('Year is required'));
  }

  return this._doRequest('/event', { year: year }, callback);
};

/**
 * Get Single Event by UID
 *
 * @param  {string}   uid      Event ID
 * @param  {Function} callback
 */
Api.prototype.event = function getEvent (uid, callback) {
  return this._doRequest('/event/' + uid, {}, callback);
};
