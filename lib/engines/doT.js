const Engine = require( '../engine' );

module.exports = class Dot extends Engine {
    async renderString( str, data ) {
        const compiled = this.engine.template( str, this.settings );
        return compiled( this.context( data ) );
    }
}
