const path = require( 'path' );
const is = require( '@lvchengbin/is' );
const read = require( './read' );

module.exports = class {
    constructor( base, engine, moduleName ) {
        this.base = base;
        if( engine ) {
            this.engine = engine;
        } else {
            if( is.function( moduleName ) ) {
                moduleName.call( this, this );
            } else if( is.string( moduleName ) ) {
                this.engine = require( moduleName );
            } else {
                this.engine = moduleName;
            }
        }
    }

    path( name ) {
        return this.base ? path.resolve( this.base, name ) : name;
    }

    async render( name, context ) {
        const str = await read( this.path( name ) );
        return this.renderString( str, context );
    }
}
