const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'jade', () => {
    it( 'renderString', () => {
        const engine = tengine( 'jade' );

        return expect( engine.renderString( 'title= engine', {
            engine : 'tengine'
        } ) ).resolves.toBe( '<title>tengine</title>' );
    } );

    it( 'render', () => {
        const engine = tengine( 'jade' );
        
        engine.base = path.join( __dirname, 'templates', 'jade' );

        engine.configure( {
            self : true
        } );

        return expect( engine.render( 'index.html', {
            heading : 'jade'
        } ) ).resolves.toBe( '<h1>jade</h1>' );

    } );
} );
