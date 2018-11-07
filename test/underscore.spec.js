const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'Underscore', () => {
    it( 'renderString', () => {
        const engine = tengine( 'underscore' );
        engine.configure( {
            interpolate: /\{\{(.+?)\}\}/g
        } );

        return expect( engine.renderString( '{{engine}}', {
            engine : 'tengine'
        } ) ).resolves.toBe( 'tengine' );
    } );

    it( 'render', () => {
        const engine = tengine( 'underscore' );
        
        engine.base = path.join( __dirname, 'templates', 'underscore' );
            
        return expect( engine.render( 'index.html', {
            title : 'underscore'
        } ) ).resolves.toBe( 'underscore\n' );
    } );
} );

