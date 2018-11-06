const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'Underscore', () => {
    it( 'renderString', () => {
        const engine = tengine.engine( 'underscore' );
        engine.configure( {
            interpolate: /\{\{(.+?)\}\}/g
        } );

        expect( engine.renderString( '{{engine}}', {
            engine : 'tengine'
        } ) ).resolves.toEqual( 'tengine' );
    } );

    it( 'render', () => {
        const engine = tengine.engine( 'underscore', path.join( __dirname, 'templates', 'underscore' ) );
            
        expect( engine.render( 'index.html', {
            title : 'underscore'
        } ) ).resolves.toEqual( 'underscore\n' );
    } );
} );

