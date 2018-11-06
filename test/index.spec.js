const path = require( 'path' );
const is = require( '@lvchengbin/is' );
const tengine = require( '../lib' );

describe( 'Supported engines', () => {
    const list = [ 'nunjucks', 'underscore', 'doT' ];

    for( const name of list ) {
        it( `should support ${name}`, () => {
            expect( tengine.engines[ name ] ).toBeDefined(); 
        } ); 
    }
} );

describe( 'Basic APIs', () => {
    for( const name in tengine.engines ) {
        describe( name, () => {
            const engine = tengine.engine( name, path.join( __dirname, 'templates' ) );

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
