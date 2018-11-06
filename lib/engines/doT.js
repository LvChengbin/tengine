const Engine = require( '../engine' );

module.exports = class extends Engine {
    constructor( base, engine ) {
        super( base, engine, 'dot' );
        this.settings = null;
    }

    configure( settings ) {
        this.settings = settings;
    }

    async renderString( str, context ) {
        const compiled = this.engine.template( str, this.settings || undefined );
        return compiled( context );
    }
}
