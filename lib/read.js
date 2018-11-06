const fs = require( 'fs' );

const cache = {};

module.exports = ( path, options = {} ) => {
    const str = cache[ path ];
    if( str && options.cache ) {
        return Promise.resolve( str );
    }

    return new Promise( ( resolve, reject ) => {
        fs.readFile( path, options.encoding || 'utf8', ( err, str ) => {
            if( err )  return reject( err );
            str = str.replace( /^\uFEFF/, '' );
            if( options.cache ) cache[ path ] = str;
            resolve( str );
        } );
    } );
};
