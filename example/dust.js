const tengine = require( '../lib' );

const engine = tengine.engine( 'dust', 'path/to/templates' ); 

engine.configure( {
    filters : {
        repeat : v => v + v
    },
    helpers : {
        // your helpers
        // name : helper
    }
} );

engine.renderString( '{engine|repeat}', { engine : 'tengine' } ).then( res => {
    console.log( res );
} );

engine.render( 'index.html', {} ).then( res => {
    console.log( res );
} );
