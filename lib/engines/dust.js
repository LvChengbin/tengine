const Engine = require( '../engine' );

module.exports = class extends Engine {
    constructor( engine ) {
        super( engine, 'dustjs-helpers' );
    }

    configure( options = {} ) {
        if( options.filters ) {
            for( const name of Object.keys( options.filters ) ) {
                this.engine.filters[ name ] = options.filters[ name ]; 
            }
        }

        if( options.helpers ) {
            for( const name of Object.keys( options.helpers ) ) {
                this.engine.helpers[ name ] = options.helpers[ name ]; 
            }
        }
    }

    async renderString( str, data ) {
        const name = str || 'anonymous-template';
        const compiled = this.engine.compile( str, name );
        this.engine.loadSource( compiled );
        return new Promise( ( resolve, reject ) => {
            this.engine.render( name, this.context( data ), ( err, output ) => {
                if( err ) return reject( err );
                resolve( output );
            } );
        } );
    }
}
