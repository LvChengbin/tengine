const fs = require( 'fs' );
const path = require( 'path' );
const underscore = require( 'underscore' );
const uuid = require( 'uuid/v1' );
const is = require( '@lvchengbin/is' );
const Engine = require( '../lib/engine' );
const tengine = require( '../lib' );
const read = require( '../lib/read' );

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
    },
    lodash : {
        template : '<%=engine %>-<%=title %>',
        output : 'tengine-lodash'
    },
    pug : {
        template : 'title= engine\nh1=title',
        output : '<title>tengine</title><h1>pug</h1>'
    }
};

describe( 'Supported engines', () => {
    for( const name of Object.keys( list ) ) {
        it( `should support ${name}`, () => {
            expect( tengine( name ) instanceof Engine ).toBeTruthy(); 
            expect( tengine.support( name ) ).toBeTruthy(); 
        } ); 
    }

    it( 'should return false', () => {
        expect( tengine.support( 'unsupported engine' ) ).toBeFalsy(); 
    } );

    it( 'should return full supported engine list', () => {
        expect( tengine.engines.sort() ).toEqual( Object.keys( list ).sort() ); 
    } );
} );

describe( 'Basic APIs', () => {

    it( 'calling with unsupported template engine', () => {
        expect( tengine( 'unsupported' )  ).toBeFalsy();
    } );

    it( 'should use the specific template engine', () => {
        const engine = tengine( 'underscore', underscore );
        expect( engine.engine ).toEqual( underscore ); 
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

describe( 'read file', () => {
    const dir = path.join( __dirname, 'templates' );
    const files = [];


    afterAll( () => {
        for( const file of files ) fs.unlinkSync( file );
    } );

    it( 'should read content from file', () => {
        const name = path.join( dir, uuid() + '.tmpl' );
        files.push( name );
        const init = uuid();
        fs.writeFileSync( name, init );
        return expect( read( name ) ).resolves.toBe( init );
    } ); 

    it( 'should have cached the file', async () => {
        const name = path.join( dir, uuid() + '.tmpl' );
        files.push( name );
        const init = uuid();
        fs.writeFileSync( name, init );
        const c = await read( name );
        expect( c ).toEqual( init );
        fs.writeFileSync( name, uuid() );
        return expect( read( name ) ).resolves.toBe( init );
    } );

    it( 'should not cache the file', async () => {
        const name = path.join( dir, uuid() + '.tmpl' );
        files.push( name );
        const init = uuid();
        fs.writeFileSync( name, init );
        const c = await read( name, { cache : false } );
        expect( c ).toEqual( init );
        const n = uuid();
        fs.writeFileSync( name, n );
        return expect( read( name, { cache : false } ) ).resolves.toBe( n );
    } );

    it( 'should reject', () => {
        const name = path.join( dir, uuid() );
        return expect( read( name ) ).rejects.toThrow();
    } );
} );
