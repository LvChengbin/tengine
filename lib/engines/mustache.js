const Engine = require( '../engine' );

module.exports = class Mustache extends Engine {

    configure( options = {} ) {
        this.settings = options;
    }

    async renderString( str, data = {} ) {
        const settings = this.settings || {};
        return this.engine.render( str, this.context( data ), settings.partials, settings.tags );
    }
}
