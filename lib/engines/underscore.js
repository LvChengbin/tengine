const Engine = require( '../engine' );

module.exports = class extends Engine {
    constructor( base, engine ) {
        super( base, engine, 'underscore' );
        this.settings = {};
    }

    configure( settings = {} ) {
        this.settings = settings;
    }

    async renderString( str, context ) {
        const compiled = this.engine.template( str, this.settings );
        return compiled( context );
    }
}
