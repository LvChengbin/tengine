# Tengine
Unifying APIs of various of template engines.

 [![Build Status](https://travis-ci.com/LvChengbin/tengine.svg?branch=master)](https://travis-ci.com/LvChengbin/tengine)
 [![Coverage Status](https://img.shields.io/codecov/c/github/LvChengbin/tengine.svg?style=flat)](https://codecov.io/gh/LvChengbin/tengine)
 [![Node Version](https://img.shields.io/node/v/tengine.svg)](https://nodejs.org)
 [![License](https://img.shields.io/npm/l/tengine.svg)](https://en.wikipedia.org/wiki/MIT_License)
 [![NPM Version](https://img.shields.io/npm/v/tengine.svg)](https://www.npmjs.com/package/tengine)
 [![NPM Download](https://img.shields.io/npm/dw/tengine.svg)](https://www.npmjs.com/package/tengine)

## Installation

```sh
$ npm install tengine --save
```

## Usage

```js
const path = require( 'path' );
const tengine = require( 'tengine' );

const engine = tengine( 'nunjucks' );

engine.configure( {
    config : {
        autoescape : false
    },
    filters : {
        repeat : str => str + str
    }
} );

engine.globals = { engine : 'tengine' };
eigine.base = path.join( __dirname, 'templates' );

engine.render( 'index.html', {
    title : 'tengine'
} ).then( res => {
    console.log( res );
} );
```

## Supported template engines

 - [x] [doT](https://github.com/olado/doT) [(website)](http://olado.github.io/doT/) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/doT.js)
 - [x] [dust](https://github.com/linkedin/dustjs) [(website)](http://linkedin.github.io/dustjs/) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/dust.js)
 - [ ] [eco](https://github.com/sstephenson/eco)
 - [ ] [ect](https://github.com/baryshev/ect) [(website)](http://ectjs.com/)
 - [x] [ejs](https://github.com/mde/ejs) [(website)](http://ejs.co/) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/ejs.js)
 - [ ] [haml](https://github.com/visionmedia/haml.js)
 - [ ] [haml-coffee](https://github.com/9elements/haml-coffee)
 - [ ] [handlebars](https://github.com/wycats/handlebars.js/) [(website)](http://handlebarsjs.com/)
 - [ ] [hogan](https://github.com/twitter/hogan.js) [(website)](http://twitter.github.com/hogan.js/)
 - [ ] [htmling](https://github.com/codemix/htmling)
 - [x] [jade](https://github.com/visionmedia/jade) [(website)](http://jade-lang.com/) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/jade.js)
 - [ ] [jazz](https://github.com/shinetech/jazz)
 - [ ] [jqtpl](https://github.com/kof/jqtpl)
 - [ ] [liquid](https://github.com/leizongmin/tinyliquid) [(website)](http://liquidmarkup.org/)
 - [ ] [lodash](https://github.com/bestiejs/lodash) [(website)](http://lodash.com/)
 - [ ] [marko](https://github.com/marko-js/marko) [(website)](http://markojs.com)
 - [x] [mustache](https://github.com/janl/mustache.js) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/mustache.js)
 - [x] [nunjucks](https://github.com/mozilla/nunjucks) [(website)](https://mozilla.github.io/nunjucks) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/nunjucks.js)
 - [ ] [plates](https://github.com/flatiron/plates)
 - [ ] [pug](https://github.com/pugjs/pug) [(website)](http://jade-lang.com/)
 - [ ] [ractive](https://github.com/Rich-Harris/Ractive)
 - [ ] [react](https://github.com/facebook/react)
 - [ ] [slm](https://github.com/slm-lang/slm)
 - [ ] [swig-templates](https://github.com/node-swig/swig-templates)
 - [ ] [swig](https://github.com/paularmstrong/swig)
 - [ ] [teacup](https://github.com/goodeggs/teacup)
 - [ ] [templayed](http://archan937.github.com/templayed.js/)
 - [ ] [toffee](https://github.com/malgorithms/toffee)
 - [ ] [twig](https://github.com/justjohn/twig.js)
 - [x] [underscore](https://github.com/documentcloud/underscore) [(website)](http://underscorejs.org/#template) [(example)](https://github.com/LvChengbin/tengine/blob/master/example/underscore.js)
 - [ ] [vash](https://github.com/kirbysayshi/vash)
 - [ ] [walrus](https://github.com/jeremyruppel/walrus) [(website)](http://documentup.com/jeremyruppel/walrus/)
 - [ ] [whiskers](https://github.com/gsf/whiskers.js)

## APIs

### tengine( string name[, object engine ] )

To initialize a template Engine

 - name: the name of the template engine, see [Supported template engines](#)
 - engine: to specify another template engine for replacing the default engine.

```js
const engine = tengine( 'doT' );
```

```js
const nunjucks = require( 'nunjucks' );
const engine = tengine( 'nunjucks', nunjucks );
```

### tengine.support( name )

to check if the template engine is supported in tengine.

- name: the name of the template engine

### tengine.engines

An array of supported template engine's name.

### engine.global 

Global variables for templates.

```js
const engine = require( 'underscore' );

engine.global = {
    title : 'global title'    
}

engine.renderString( '<%-title %>' ).then( res => {
    console.log( res ); // output: global title
} );
```

### engine.base

The base directory of template files

```js
const engine = tengine( 'ejs' );
engine.base = '/path/to/ejs/template/directory';
engine.render( 'index.html' );
```

### engine.engine

The template engine instance.

### engins.path( name )

To get the full path of a template file in base direcotry.

- name: the file name of the template file.

### engine.context( data )

To get the context data which will includes the global variables if exists.

- the local context for compiling the template.

### engine.configure( options )

Configuring the template engines.

### engine.render( file, context )

Rendering a template file.

 - file: the template file name.
 - context: the context for the template

### engine.renderString( str, context )

Rendering template string.

 - str: the template string
 - context: the context for compiling
