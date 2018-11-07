const path = require( 'path' );
const read = require( './read' );

const TENGINE_BASE = Symbol( 'tengine#base' );
const TENGINE_GLOBAL = Symbol( 'tengine#global' );
const TENGINE_ENGINE = Symbol( 'tengine#engine' );

module.exports = class {
    constructor( engine, moduleName ) {
        if( engine ) {
            this.engine = engine;
        } else if( moduleName ) {
            this.engine = require( moduleName );
        } else {
            this.engine = require( this.constructor.name.toLowerCase() );
        }
    }

    get base() {
        return this[ TENGINE_BASE ];
    }

    set base( v ) {
        return this[ TENGINE_BASE ] = v;
    }

    get global() {
        return this[ TENGINE_GLOBAL ];
    }

    set global( v ) {
        this[ TENGINE_GLOBAL ] = v;
    }

    get engine() {
        return this[ TENGINE_ENGINE ];
    }

    set engine( v ) {
        this[ TENGINE_ENGINE ] = v;
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

    async render( name, data ) {
        const str = await read( this.path( name ) );
        return this.renderString( str, this.context( data ) );
    }
}
