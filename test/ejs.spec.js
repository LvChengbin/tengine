const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'ejs', () => {
    it( 'renderString', () => {
        const engine = tengine.engine( 'ejs' );
        engine.configure( {
            delimiter : '?'
        } );

        expect( engine.renderString( '<?=engine ?>', {
            engine : 'tengine'
        } ) ).resolves.toEqual( 'tengine' );
    } );

    it( 'render', () => {
        const engine = tengine.engine( 'ejs', path.join( __dirname, 'templates', 'ejs' ) );
            
        expect( engine.render( 'index.html', {
            title : 'ejs'
        } ) ).resolves.toEqual( 'ejs\n' );
    } );
} );
