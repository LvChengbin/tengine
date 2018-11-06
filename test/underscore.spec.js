const path = require( 'path' );
const Engine = require( '../lib/engines/underscore' );

describe( 'Underscore', () => {
    it( 'renderString', () => {
        const engine = new Engine();
        engine.configure( {
            interpolate: /\{\{(.+?)\}\}/g
        } );

        expect( engine.renderString( '{{engine}}', {
            engine : 'tengine'
        } ) ).resolves.toEqual( 'tengine' );
    } );

    it( 'render', () => {
        const engine = new Engine( path.join( __dirname, 'templates', 'underscore' ) );
            
        expect( engine.render( 'index.html', {
            title : 'underscore'
        } ) ).resolves.toEqual( 'underscore\n' );
    } );
} );

