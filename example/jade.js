const tengine = require( '../lib' );

const engine = tengine( 'jade', 'path/to/templates' );

engine.configure( {
    self : true
} );

engine.renderString( 'title= self.engine', { engine : 'tengine' } ).then( res => {
   console.log( res ); 
} );


engine.render( 'index.html', { heading : 'jade' } ).then( res => {
    console.log( res );
} );
