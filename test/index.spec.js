const path = require( 'path' );
const is = require( '@lvchengbin/is' );
const engines = require( '../lib/engines' );

describe( 'Basic APIs', () => {
    for( const name in engines ) {
        describe( name, () => {
            const engine = new engines[ name ]( path.join( __dirname, 'templates' ) );

            it( 'configure', () => {
                expect( is.function( engine.configure ) ).toBeTruthy(); 
            } );

            it( 'render', () => {
                expect( engine.render( 'index.html', {} ) ).resolves.toBe( '' ); 
            } );

            it( 'renderString', () => {
                expect( engine.renderString( '', {} ) ).resolves.toBe( '' );
            } );
        
        } );
    } 
} );
