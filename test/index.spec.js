const path = require( 'path' );
const is = require( '@lvchengbin/is' );
const Engine = require( '../lib/engine' );
const tengine = require( '../lib' );

const list = { 
    nunjucks : {
        template : '{{engine}}-{{title}}',
        output : 'tengine-nunjucks'
    }, 
    underscore : {
        template : '<%-engine %>-<%-title %>',
        output : 'tengine-underscore'
    },
    doT : {
        template : '{{=it.engine}}-{{=it.title}}',
        output : 'tengine-doT'
    },
    dust : {
        template : '{engine}-{title}',
        output : 'tengine-dust'
    },
    jade : {
        template : 'title= engine\nh1= title',
        output : '<title>tengine</title><h1>jade</h1>'
    },
    ejs : {
        template : '<%=engine %>-<%=title %>',
        output : 'tengine-ejs'
    },
    mustache : {
        template : '{{engine}}-{{title}}',
        output : 'tengine-mustache'
    }
};

describe( 'Supported engines', () => {

    for( const name of Object.keys( list ) ) {
        it( `should support ${name}`, () => {
            expect( tengine( name ) instanceof Engine ).toBeTruthy(); 
        } ); 
    }
} );

describe( 'Basic APIs', () => {

    it( 'calling with unsupported template engine', () => {
        expect( () => tengine( 'unsupported' )  ).toThrow();
    } );

    for( const name of Object.keys( list ) ) {
        describe( name, () => {
            const engine = tengine( name );

            engine.base = path.join( __dirname, 'templates' );

            it( 'configure', () => {
                expect( is.function( engine.configure ) ).toBeTruthy(); 
            } );

            it( 'render', () => {
                return expect( engine.render( 'index.html', {} ) ).resolves.toBe( '' ); 
            } );

            it( 'renderString', () => {
                return expect( engine.renderString( '', {} ) ).resolves.toBe( '' );
            } );
        
        } );
    } 
} );

describe( 'Compile with global variables', () => {
    for( const name of Object.keys( list ) ) {
        it( name, () => {
            const engine = tengine( name );
            engine.global = {
                engine : 'tengine'
            };
            return expect( engine.renderString( list[ name ].template, {
                title : name
            } ) ).resolves.toBe( list[ name ].output );
        } ); 
    }
} );
