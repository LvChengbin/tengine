const tengine = require( '../lib/tengine' );

const engine = tengine.engine( 'nunjucks', 'path/to/templates' );

engine.configure( {
    config : {
        autoescape : false
    },
    filters : {
        repeat : str => str + str,
        times : {
            filter : ( n, callback ) => callback(),
            async : true
        }
    },
    extensions : {
        // your custom extensions
        // name : extension
    },
    globals : {
        engine : 'tengine'
    }
} );

engine.render( 'index.html', {} ).then( res => {
    console.log( res );
} );

engine.renderString( '{{title}}', { title : 'tengine' } ).then( res => {
    console.log( res );
} );
