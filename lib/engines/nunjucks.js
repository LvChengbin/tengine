const is = require( '@lvchengbin/is' );
const Engine = require( '../engine' );

module.exports = class extends Engine {

    constructor( base, engine ) {
        super( base, engine, 'nunjucks' );
    }

    configure( options = {} ) {

        if( is.function( this.engine.configure ) ) {
            if( options.path ) {
                this.engine = this.engine.configure( options.path, options.config || {} );
            } else {
                this.engine = this.engine.configure( options, options.config || {} );
            }
        }

        if( options.filters && is.function( this.engine.addFilter ) ) {
            for( const name in options.filters ) {
                const filter = options.filters[ name ];
                if( is.function( filter ) ) {
                    this.engine.addFilter( name, filter );
                } else {
                    this.engine.addFilter( name, filter.filter, filter.async );
                }
            }
        }

        if( options.extensions && is.function( this.engine.addExtension ) ) {
            for( const name in options.extensions ) {
                const extension = options.extensions[ name ];
                this.engine.addExtension( name, extension );           
            }
        }

        if( options.globals && is.function( this.engine.addGlobal ) ) {
            for( const name in options.globals ) {
                const value = options.globals[ name ];
                this.engine.addGlobal( name, value );
            }
        }
    }

    async render( name, context ) {
        return this.engine.render( this.path( name ), context );
    }

    async renderString( str, context ) {
        return this.engine.renderString( str, context );
    }
}
