const Engine = require( '../engine' );

module.exports = class Underscore extends Engine {
    configure( settings ) {
        this.settings = settings;
    }

    async renderString( str, data ) {
        const compiled = this.engine.template( str, this.settings );
        return compiled( this.context( data ) );
    }
}
