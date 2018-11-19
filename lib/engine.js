const path = require( 'path' );
const read = require( './read' );

module.exports = class {
    constructor( engine, moduleName ) {
        if( engine ) {
            this.engine = engine;
        } else if( moduleName ) {
            this.engine = require( moduleName );
        } else {
            this.engine = require( this.constructor.name.toLowerCase() );
        }

        this.base = null;
        this.global = null;
    }

    path( name ) {
        return this.base ? path.resolve( this.base, name ) : name;
    }

    configure( settings ) {
        this.settings = settings;
    }

    context( data = {} ) {
        return this.global ? Object.assign( {}, this.global, data ) : data;
    }

    async render( name, data, options = {} ) {
        const str = await read( this.path( name ), {
            cache : !( options.cache === false )
        } );
        return this.renderString( str, this.context( data ) );
    }
}
