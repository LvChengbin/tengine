const Engine = require( '../engine' );

module.exports = class extends Engine {
    constructor( base, engine ) {
        super( base, engine, 'ejs' );
        this.settings = {};
    }

    configure( settings = {} ) {
        this.settings = settings;
    }

    async renderString( str, context ) {
        return this.engine.render( str, context, this.settings );
    }
}
