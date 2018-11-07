const engines = require( './engines' );

module.exports = ( name, engine ) => {
    if( !engines[ name ] ) return false;
    return new engines[ name ]( engine );
};

module.exports.engines = Object.keys( engines );
module.exports.support = name => engines.hasOwnProperty( name );
