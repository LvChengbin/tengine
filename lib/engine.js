const path = require( 'path' );
const read = require( './read' );

module.exports = class {
    constructor( base, engine, moduleName ) {
        this.base = base;
        this.engine = engine || require( moduleName );
    }

    path( name ) {
        return this.base ? path.resolve( this.base, name ) : name;
    }

    async render( name, context ) {
        const str = await read( this.path( name ) );
        return this.renderString( str, context );
    }
}
