const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'mustache', () => {

    it( 'renderString', () => {

        const engine = tengine( 'mustache' );

        engine.configure( {
            tags : [ '<%', '%>' ]
        } );

        return expect( engine.renderString( '<% engine %>', {
            engine : 'tengine'
        } ) ).resolves.toBe( 'tengine' );
        
    } );

    it( 'render', () => {

        const engine = tengine( 'mustache' );

        engine.base = path.join( __dirname, 'templates', 'mustache' );

        return expect( engine.render( 'index.html', {
            title : 'mustache'
        } ).then( o => o.trim() ) ).resolves.toBe( 'mustache' );
        
        
    } );
    
} );
