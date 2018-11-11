const Engine = require( '../engine' );

module.exports = class Pug extends Engine {
    configure( settings ) {
        this.settings = settings;
    }

    async renderString( str, data ) {
        const compiled = this.engine.compile( str, this.settings );
        return compiled( this.context( data ) );
    }
}

