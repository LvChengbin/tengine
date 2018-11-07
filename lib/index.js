const engines = require( './engines' );

module.exports = ( name, engine ) => {
    if( !engines[ name ] ) return false;
    return new engines[ name ]( engine );
};
