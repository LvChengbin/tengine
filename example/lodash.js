const tengine = require( '../lib' );

const engine = tengine( 'lodash', 'path/to/templates' );

engine.configure( {
    interpolate: /\{\{(.+?)\}\}/g,
    imports : {
    }
} );

engine.renderString( '{{title}}', { title : 'tengine' } ).then( res => {
    console.log( res );
} );

engine.render( 'index.html', {} ).then( res => {
    console.log( res );
} );

