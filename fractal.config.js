'use strict';


/*
* Require the path module
*/
const fs = require('fs')
const path = require('path');
const mandelbrot = require('@frctl/mandelbrot');
const nunjucksEnv = require('nunjucks').configure();

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();


/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal Dimensions UI Library');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.web.set('builder.dest', __dirname + '/build');

const nunjucks = require('@frctl/nunjucks');

fractal.components.engine(nunjucks({
  filters: {
    json: function (obj) {
      return JSON.stringify(obj, null, '\t');
    },
    attrib: function (attrs) {
      if (!attrs) return;
      return nunjucksEnv.filters.safe(
          Object
              .entries(attrs)
              .reduce((p, [key, value]) => `${p} ${key}="${value}"`, ""));
    },
    svg: function (path) {
      const file = `./public/${path}`;

      try {
        return nunjucksEnv.filters.safe(fs.readFileSync(file).toString());
      } catch (err) {
        console.error(err)
      }

      return `Could not load '${file}'.`;
    },
    icon: function (icon) {
      const file = `./public/icons/${icon}.svg`;

      try {
        const data = fs.readFileSync(file).toString();
        const tagsRemoved = data.replace(/(<title>[^<]*<\/title>)/gi, "");
        return nunjucksEnv.filters.safe(tagsRemoved);
      } catch (err) {
        console.error(err)
      }

      return `Could not load '${file}'.`;
    }
  }
}));


fractal.components.set('ext', '.njk');

fractal.web.theme(mandelbrot({
  skin: {
    name: 'fuchsia',
    accent: '#38146a',
    complement: '#fff',
    links: '#7e187c'
  },
  information: [
    {
      label: 'Version',
      value: require('./package.json').version,
    },
    {
      label: 'Built on',
      value: new Date(),
      type: 'time',
      format: (value) => {
        return value.toLocaleDateString('en');
      },
    },
  ],
}))
