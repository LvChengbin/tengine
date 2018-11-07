const tengine = require( '../lib' );

const engine = tengine( 'mustache', 'path/to/templates' );

engine.configure( {
    tags : [ '<%', '%>' ]
} );

engine.renderString( '<% title %>', { title : 'tengine' } ).then( res => {
    console.log( res );
} );

engine.render( 'index.html', {} ).then( res => {
    console.log( res );
} );
