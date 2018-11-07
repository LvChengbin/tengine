const path = require( 'path' );
const tengine = require( '../lib' );

describe( 'Nunjucks', () => {
    it( 'renderString', () => {
        const engine = tengine( 'nunjucks' );
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

        return expect( engine.renderString( '<{{title}}>{{engine | repeat()}}{{2 | times}}', {
            title : 'tengine'
        } ) ).resolves.toBe( '<tengine>nunjucksnunjucks' );
    } );

    it( 'render', () => {
        const engine = tengine( 'nunjucks' );
        
        engine.base = path.join( __dirname, 'templates', 'nunjucks' );
            
        return expect( engine.render( 'index.html', {
            title : 'nunjucks'
        } ).then( o => o.trim() )  ).resolves.toBe( 'nunjucks' );
    } );
} );
