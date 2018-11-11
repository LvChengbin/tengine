const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'pug', () => {
    it( 'renderString', () => {
        const engine = tengine( 'pug' );

        return expect( engine.renderString( 'title= engine', {
            engine : 'tengine'
        } ) ).resolves.toBe( '<title>tengine</title>' );
    } );

    it( 'render', () => {
        const engine = tengine( 'pug' );
        
        engine.base = path.join( __dirname, 'templates', 'pug' );

        engine.configure( {
            self : true
        } );

        return expect( engine.render( 'index.html', {
            heading : 'pug'
        } ) ).resolves.toBe( '<h1>pug</h1>' );

    } );
} );


