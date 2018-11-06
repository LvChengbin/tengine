const engines = require( './engines' );

module.exports = {
    engine( name, base, engine ) {
        if( !engines[ name ] ) {
            throw new TypeError( `unsupported template engine "${name}".` );
        }

        return new engines[ name ]( base, engine );
    }
};
