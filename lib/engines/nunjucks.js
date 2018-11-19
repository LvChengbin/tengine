const is = require( '@lvchengbin/is' );
const Engine = require( '../engine' );

module.exports = class Nunjucks extends Engine {

    configure( options = {} ) {

        this.options = options;

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

    async renderString( str, data ) {
        return this.engine.renderString( str, this.context( data ) );
    }
}
