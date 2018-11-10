const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'Lodash', () => {
    it( 'renderString', () => {
        const engine = tengine( 'lodash' );
        engine.configure( {
            interpolate : /{{([\s\S]+?)}}/g,
            imports : {
                n : 100
            }
        } );

        return expect( engine.renderString( '{{x+n}}', {
            x : 1
        } ) ).resolves.toBe( '101' );
    } );

    it( 'render', () => {
        const engine = tengine( 'lodash' );

        engine.base = path.join( __dirname, 'templates', 'lodash' );
        return expect( engine.render( 'index.html', {
            users : ['fred', 'barney']
        } ).then( o => o.trim() ) ).resolves.toBe( '<li>fred</li><li>barney</li>' );
    } );
} );
