const path = require( 'path' );
const Engine = require( '../lib/engines/nunjucks' );

describe( 'Nunjucks', () => {
    it( 'renderString', () => {
        const engine = new Engine();
        engine.configure( {
            config : {
                autoescape : false
            },
            filters : {
                repeat : str => str + str
            },
            globals : {
                engine : 'nunjucks'
            }
        } );

        expect( engine.renderString( '<{{title}}>{{engine | repeat()}}', {
            title : 'tengine'
        } ) ).resolves.toEqual( '<tengine>nunjucksnunjucks' );
    } );

    it( 'render', () => {
        const engine = new Engine( path.join( __dirname, 'templates', 'nunjucks' ) );
            
        expect( engine.render( 'index.html', {
            title : 'nunjucks'
        } ) ).resolves.toEqual( 'nunjucks\n' );
    } );
} );
