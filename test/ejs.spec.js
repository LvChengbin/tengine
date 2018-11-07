const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'ejs', () => {
    it( 'renderString', () => {
        const engine = tengine( 'ejs' );
        engine.configure( {
            delimiter : '?'
        } );

        return expect( engine.renderString( '<?=engine ?>', {
            engine : 'tengine'
        } ) ).resolves.toBe( 'tengine' );
    } );

    it( 'render', () => {
        const engine = tengine( 'ejs' );
        
        engine.base = path.join( __dirname, 'templates', 'ejs' );
            
        return expect( engine.render( 'index.html', {
            title : 'ejs'
        } ).then( o => o.trim() ) ).resolves.toBe( 'ejs' );
    } );
} );
