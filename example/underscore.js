const tengine = require( '../lib' );

const engine = tengine( 'underscore', 'path/to/templates' );

engine.configure( {
    interpolate: /\{\{(.+?)\}\}/g
} );

engine.renderString( '{{title}}', { title : 'tengine' } ).then( res => {
    console.log( res );
} );

engine.render( 'index.html', {} ).then( res => {
    console.log( res );
} );
