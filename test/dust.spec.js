const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'dust', () => {
    it( 'renderString', () => {
        const engine = tengine.engine( 'dust' ); 
        engine.configure( {
            filters : {
                repeat : v => v + v
            }
        } );

        expect( engine.renderString( '{engine|repeat}', {
            engine : 'tengine'
        } ) ).resolves.toEqual( 'tenginetengine' );
    } ); 

    it( 'render', () => {
        const engine = tengine.engine( 'dust', path.join( __dirname, 'templates', 'dust' ) );

        expect( engine.render( 'index.html', {
            title : 'dust'
        } ) ).resolves.toEqual( 'dust' );
    } );
} );
