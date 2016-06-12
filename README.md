# waigo-plugin-sitemap

This [waigo](http://waigojs.com) plugin provides:

* Cron job to submit sitemap to Google and Bing.

## Installation

```bash
$ npm install waigo-plugin-sitemap
```

## Usage

The cron job is enabled by default and will run daily.

The sitemap is expected to be found at `{app.config.baseURL}/sitemap.xml`. You 
can change this in your config file:


```javascript
module.exports = function(config) {
  ...

  config.sitemapPath = '/custom_sitemap.xml';  // relative to baseURL

  ...
}
```


## License

MIT - see LICENSE.md