const got = require('got');


const pingUrl = function(app, url) {
  app.logger.debug('Submitting sitemap: ' + url);

  return got(url)
    .then(function(res) {
      if (200 !== res.status) {
        throw new Error('Error fetching ' + url + ': ' + res.text);
      }
    })
    .catch(function(err) {
      app.logger.error(err.toString());
    });
};



module.exports = {
  schedule: '0 0 0 * * *',  // every day at midnight
  handler: function*(app) {
    var sitemapUrl = encodeURIComponent(
      app.config.baseURL + (app.config.sitemapPath || '/sitemap.xml')
    );

    yield [
      pingUrl(app, 'http://www.google.com/ping?sitemap=' + sitemapUrl),
      pingUrl(app, 'http://www.bing.com/ping?sitemap=' + sitemapUrl),
    ];      
  }
};
