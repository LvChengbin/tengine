const engines = require( './engines' );

module.exports = ( name, engine ) => {
    if( !engines[ name ] ) {
        throw new TypeError( `unsupported template engine "${name}".` );
    }
    return new engines[ name ]( engine );
};
