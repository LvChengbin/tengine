const tengine = require( '../lib' );

const engine = tengine( 'doT', 'path/to/templates' );

engine.configure( Object.assign( {}, engine.engine.templateSettings, {
    varname : 'x',
} ) );

engine.renderString( '{{=x.engine}}', { engine : 'tengine' } ).then( res => {
    console.log( res );
} );

engine.render( 'index.html', {} ).then( res => {
    console.log( res );
} );
