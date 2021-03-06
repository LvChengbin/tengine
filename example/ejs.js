const tengine = require( '../lib' );

const engine = tengine( 'ejs', 'path/to/templates' );

engine.configure( {
    delimiter : '?'
} );

engine.renderString( '<?=title ?>', { title : 'tengine' } ).then( res => {
    console.log( res );
} );

engine.render( 'index.html', {} ).then( res => {
    console.log( res );
} );
