const Engine = require( '../engine' );

module.exports = class Lodash extends Engine {
    configure( settings ) {
        this.settings = settings;
    }

    async renderString( str, data ) {
        const compiled = this.engine.template( str, this.settings );
        return compiled( this.context( data ), this.settings ); 
    }
}
