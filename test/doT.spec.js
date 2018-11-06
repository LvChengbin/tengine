const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'doT', () => {
    it( 'renderString', () => {
        const engine = tengine.engine( 'doT' );
        engine.configure( Object.assign( {}, engine.engine.templateSettings, {
            varname : 'x',
        } ) );

        expect( engine.renderString( '{{=x.engine}}', {
            engine : 'tengine'
        } ) ).resolves.toEqual( 'tengine' );
    } );

    it( 'render', () => {
        const engine = tengine.engine( 'doT', path.join( __dirname, 'templates', 'doT' ) );

        expect( engine.render( 'index.html', {
            title : 'doT'
        } ) ).resolves.toEqual( 'doT' );
    } );
} );
