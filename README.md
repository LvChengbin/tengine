# tengine
Unifying APIs of various of template engines.

## Installation

```sh
$ npm install tengine --save
```

## Supported template engines

 - [x] [doT.js](https://github.com/olado/doT) [(website)](http://olado.github.io/doT/) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/doT.js)
 - [x] [dustjs-linkedin](https://github.com/linkedin/dustjs) [(website)](http://linkedin.github.io/dustjs/) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/dust.js)
 - [ ] [eco](https://github.com/sstephenson/eco)
 - [ ] [ect](https://github.com/baryshev/ect) [(website)](http://ectjs.com/)
 - [ ] [ejs](https://github.com/mde/ejs) [(website)](http://ejs.co/)
 - [ ] [haml](https://github.com/visionmedia/haml.js)
 - [ ] [haml-coffee](https://github.com/9elements/haml-coffee)
 - [ ] [handlebars](https://github.com/wycats/handlebars.js/) [(website)](http://handlebarsjs.com/)
 - [ ] [hogan](https://github.com/twitter/hogan.js) [(website)](http://twitter.github.com/hogan.js/)
 - [ ] [htmling](https://github.com/codemix/htmling)
 - [ ] [jade](https://github.com/visionmedia/jade) [(website)](http://jade-lang.com/)
 - [ ] [jazz](https://github.com/shinetech/jazz)
 - [ ] [jqtpl](https://github.com/kof/jqtpl)
 - [ ] [liquid](https://github.com/leizongmin/tinyliquid) [(website)](http://liquidmarkup.org/)
 - [ ] [lodash](https://github.com/bestiejs/lodash) [(website)](http://lodash.com/)
 - [ ] [marko](https://github.com/marko-js/marko) [(website)](http://markojs.com)
 - [ ] [mustache](https://github.com/janl/mustache.js)
 - [x] [nunjucks](https://github.com/mozilla/nunjucks) [(website)](https://mozilla.github.io/nunjucks) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/nunjucks.js)
 - [ ] [plates](https://github.com/flatiron/plates)
 - [ ] [pug (formerly jade)](https://github.com/pugjs/pug) [(website)](http://jade-lang.com/)
 - [ ] [ractive](https://github.com/Rich-Harris/Ractive)
 - [ ] [react](https://github.com/facebook/react)
 - [ ] [slm](https://github.com/slm-lang/slm)
 - [ ] [swig (maintained fork)](https://github.com/node-swig/swig-templates)
 - [ ] [swig (unmaintained)](https://github.com/paularmstrong/swig)
 - [ ] [teacup](https://github.com/goodeggs/teacup)
 - [ ] [templayed](http://archan937.github.com/templayed.js/)
 - [ ] [toffee](https://github.com/malgorithms/toffee)
 - [ ] [twig](https://github.com/justjohn/twig.js)
 - [x] [underscore](https://github.com/documentcloud/underscore) [(website)](http://underscorejs.org/#template) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/underscore.js)
 - [ ] [vash](https://github.com/kirbysayshi/vash)
 - [ ] [walrus](https://github.com/jeremyruppel/walrus) [(website)](http://documentup.com/jeremyruppel/walrus/)
 - [ ] [whiskers](https://github.com/gsf/whiskers.js)

## APIs

### tengine.engine( name, [ base_dir ], engine )

### engine.configure( options )

### engine.render( file, context )

### engine.renderString( str, context )

