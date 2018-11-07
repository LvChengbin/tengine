const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'dust', () => {
    it( 'renderString', () => {
        const engine = tengine( 'dust' ); 
        engine.configure( {
            filters : {
                repeat : v => v + v
            }
        } );

        return expect( engine.renderString( '{engine|repeat}', {
            engine : 'tengine'
        } ) ).resolves.toBe( 'tenginetengine' );
    } ); 

    it( 'render', () => {
        const engine = tengine( 'dust' );

        engine.base = path.join( __dirname, 'templates', 'dust' );

        return expect( engine.render( 'index.html', {
            title : 'dust'
        } ) ).resolves.toBe( 'dust' );
    } );
} );
