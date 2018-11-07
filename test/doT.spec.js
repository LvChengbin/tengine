const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'doT', () => {
    it( 'renderString', () => {
        const engine = tengine( 'doT' );
        engine.configure( Object.assign( {}, engine.engine.templateSettings, {
            varname : 'x',
        } ) );

        return expect( engine.renderString( '{{=x.engine}}', {
            engine : 'tengine'
        } ) ).resolves.toBe( 'tengine' );
    } );

    it( 'render', () => {
        const engine = tengine( 'doT' );

        engine.base = path.join( __dirname, 'templates', 'doT' );

        return expect( engine.render( 'index.html', {
            title : 'doT'
        } ) ).resolves.toBe( 'doT' );
    } );
} );
