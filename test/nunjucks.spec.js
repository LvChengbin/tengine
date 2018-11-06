const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'Nunjucks', () => {
    it( 'renderString', () => {
        const engine = tengine.engine( 'nunjucks' );
        engine.configure( {
            config : {
                autoescape : false
            },
            filters : {
                repeat : str => str + str,
                times : {
                    filter : ( n, callback ) => callback(),
                    async : true
                }
            },
            globals : {
                engine : 'nunjucks'
            }
        } );

        expect( engine.renderString( '<{{title}}>{{engine | repeat()}}{{2 | times}}', {
            title : 'tengine'
        } ) ).resolves.toEqual( '<tengine>nunjucksnunjucks' );
    } );

    it( 'render', () => {
        const engine = tengine.engine( 'nunjucks', path.join( __dirname, 'templates', 'nunjucks' ) );
            
        expect( engine.render( 'index.html', {
            title : 'nunjucks'
        } ) ).resolves.toEqual( 'nunjucks\n' );
    } );
} );
