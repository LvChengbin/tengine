const Engine = require( '../engine' );

module.exports = class Ejs extends Engine {

    configure( settings = {} ) {
        this.settings = settings;
    }

    async renderString( str, data ) {
        return this.engine.render( str, this.context( data ), this.settings );
    }
}
