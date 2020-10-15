/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

;/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Popper = Popper && Object.prototype.hasOwnProperty.call(Popper, 'default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(EVENT_CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(CLASS_NAME_SHOW);

      if (!$(element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.5.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$(button).hasClass(CLASS_NAME_BUTTON)) {
      button = $(button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'LABEL' && inputBtn && inputBtn.type === 'checkbox') {
        event.preventDefault(); // work around event sent to label and input
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(SELECTOR_BUTTON)[0];
    $(button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default), config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $(this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $.Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $(indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(CLASS_NAME_SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $(activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $(nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2(_objectSpread2({}, Default), $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread2(_objectSpread2({}, _config), config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(EVENT_SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $.Event(EVENT_HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$1), config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$1), $this.data()), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || $(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || !$(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), $(this._element).data()), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2(_objectSpread2({}, popperConfig), this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $(parent).removeClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $(this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          $(parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$2);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(EVENT_FOCUSIN);
      $(this._element).removeClass(CLASS_NAME_SHOW$3);
      $(this._element).off(EVENT_CLICK_DISMISS);
      $(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $(document).off(EVENT_FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$3), config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(EVENT_HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$3), $(this).data()), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2(_objectSpread2({}, defaultBsConfig), this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2(_objectSpread2({}, this.config), {}, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), dataAttributes), typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2(_objectSpread2({}, Tooltip.Default), {}, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2(_objectSpread2({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$6), typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $(this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(CLASS_NAME_ACTIVE$3) || $(this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(SELECTOR_ACTIVE_UL) : $(container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $(active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $(element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $(dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.5.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(EVENT_SHOW$4);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $(_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$4);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $(this._element).off(EVENT_CLICK_DISMISS$1);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$7), $(this._element).data()), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $(_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map

;//search bar
function searchCards() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCards");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchRAapproved() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRAapproved");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsApproved");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchRArejected() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRArejected");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsRejected");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchRAextension() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRAextension");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsExtension");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchRArenewal() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRArenewal");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsRenewal");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}


function searchRArejected() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRArejected");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsRejected");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchRAapprovede() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRAapprovede");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsApprovedE");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchRAapprovedr() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRAapprovedr");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsApprovedR");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}


$(document).ready(function () {
  if (!$.browser.webkit) {
      $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
  }
});


//Browse properties filters:
function filterDefault(){
  document.getElementById("filterCategory").innerHTML = 'Default';
}
function filterLTH(){
  document.getElementById("filterCategory").innerHTML = 'Low to High';
}
function filterHTL(){
  document.getElementById("filterCategory").innerHTML = 'High to Low';
}
function filterRecent(){
  document.getElementById("filterCategory").innerHTML = 'Most Recent';
}
function filterType(){
  document.getElementById("filterCategory").innerHTML = 'Property Type';
}


//back button
function goBack() {
  window.history.back();
}


function hideDiv(){
  var x = document.getElementById("moreOptions");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";

  }
}


function editPointOfInterest(){
  //edit header text
  document.getElementById("title").innerHTML = "Update Point of Interest";

  //hide edit button
  document.getElementById("edit").style.display = "none";
  document.getElementById("pointTypeDescriptionInput").style.display = "none";
  document.getElementById("suburbNameInput").style.display = "none";

  //make OK button visible
  document.getElementById("OKButton").display ==="block" ;
  OKButton.style.visibility = "visible";
  document.getElementById("typeInput").style.visibility = "visible";
  document.getElementById("suburbInput").style.visibility = "visible";

  document.getElementById("prompt").style.display = "block";

  //enable input fields
  document.getElementById("description").disabled = false;
  document.getElementById("typeInput").disabled = false;
  document.getElementById("suburbInput").disabled = false;
}


function editValuation() {
  //edit header text
  document.getElementById("title").innerHTML = "Capture Valuation";

  //hide edit button
  document.getElementById("edit").style.display = "none";

  //make upload doc button visible
  document.getElementById("uploadButton").display ==="block" ;
  uploadButton.style.visibility = "visible";

  //make OK button visible
  document.getElementById("OKButton").style.visibility = "visible" ;

  //make labels visible
  document.getElementById("label1").display ==="block" ;
  label1.style.visibility = "visible";

  //enable input fields
  document.getElementById("input2").disabled = false;
  document.getElementById("input3").disabled = false;


  document.getElementById("prompt").innerHTML = "Please provide the valuation details";
  document.getElementById("downloadDocument").style.display = "none" ;
  document.getElementById("valuerInput").style.visibility = "visible";
  //document.getElementById("input4").style.display = "none";
  document.getElementById("valuationStatusInput").style.visibility = "visible";
  //document.getElementById("input6").style.display = "none";
}


function editRentalAgreement() {
  //edit header text
  document.getElementById("title").innerHTML = "Maintain Rental Agreement";

  //hide edit button
  document.getElementById("edit").style.display = "none";

  //make OK button visible
  document.getElementById("OKButton").display ==="block" ;
  OKButton.style.visibility = "visible";

  //make labels visible
  document.getElementById("label1").display ==="block" ;
  label1.style.visibility = "visible";
  document.getElementById("label2").display ==="block" ;
  label2.style.visibility = "visible";
  document.getElementById("label3").display ==="block" ;
  label3.style.visibility = "visible";

  //make upload button visible
  document.getElementById("uploadButton1").display ==="block" ;
  uploadButton1.style.visibility = "visible";
}


//registration radio button options for id or passport
function southAfrican(){
  document.getElementById("idnumber").placeholder = "ID Number";
  document.getElementById("idnumber").id = "idnumber";
}
function notSouthAfrican(){
  document.getElementById("idnumber").placeholder = "Passport Number";
  document.getElementById("idnumber").id = "passport";
}


//convert address into google maps link
function addressLink(){
  $("address").each(function(){
    var embed ="<iframe width=100% height='100' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
                                $(this).html(embed);
   });
};


//-----------------------------------------------------------//DANIEL JS:
function editInspection(statusid) {
  //edit header texts
  if (statusid == 1){
    document.getElementById("title").innerHTML = "Capture Inspection";
    document.getElementById("prompt").innerHTML = "Please provide the inspection details";
  }
  else if (statusid == 2){
    document.getElementById("title").innerHTML = "Follow Up On Inspection";
    document.getElementById("prompt").innerHTML = "Please provide the updated inspection details";
  }

  //hide controls
  document.getElementById("edit").style.display = "none";
  document.getElementById("downloadDocument").style.display = "none" ;
  //document.getElementById("inspectorNameSurnameInput").style.display = "none"; --hides the inspector dropdown
  document.getElementById("inspectionTypeDescriptionInput").style.display = "none";
  document.getElementById("inspectionStatusDescriptionInput").style.display = "none";
  if (document.getElementsByName("defectDescription") != null){
    document.getElementsByName("defectDescription").forEach(e => {
      e.style.display = "none";
    });
  }
  if (document.getElementsByName("defectSpace") != null){
    document.getElementsByName("defectSpace").forEach(e => {
      e.style.display = "none";
    });
  }

  //show controls
  document.getElementById("uploadDocumentLabel").style.display = "block";
  document.getElementById("uploadButton").style.display = "block";
  document.getElementById("OKButton").style.visibility = "visible";
  // document.getElementById("inspectorInput").style.visibility = "visible";
  document.getElementById("statusInput").style.visibility = "visible";
  document.getElementById("inspectionTypeInput").style.visibility = "visible";
  document.getElementById("inspectionTypeInput").style.display = "block";
  document.getElementById("statusInput").style.display = "block";
  if (document.getElementsByName("defectDescriptionInput") != null){
    document.getElementsByName("defectDescriptionInput").forEach(e => {
      e.style.display = "initial";
    });
  }
  if (document.getElementsByName("defectSpaceInput") != null){
    document.getElementsByName("defectSpaceInput").forEach(e => {
      e.style.display = "initial";
      console.log("hit", e.style.display)
    });
  }

  //enable input fields
  document.getElementById("defectWrapper1").hidden = false;
 document.getElementById("noPointer").style.pointerEvents = "auto";

  //document.getElementById("defectSpaceInput").disabled = false;
  document.getElementById("commentsInput").disabled = false;
  ////document.getElementById("inspectorInput").disabled = false;
  document.getElementById("statusInput").disabled = false;

  //document.getElementById("defectDescriptionInput").disabled = false;
  document.getElementById("inspectionTypeInput").disabled = false;
  //document.getElementById("propertyDefectTotalQuantityInput").disabled = false;
  document.getElementById("date").disabled = false;
}



function editProperty() {
  //edit header text
  document.getElementById("title").innerHTML = "Update Property";

  //hide edit button
  document.getElementById("editProperty").style.display = "none";
  document.getElementById("mandateTypeDescriptionInput").style.display = "none";
  document.getElementById("marketTypeDescriptionInput").style.display = "none";
  document.getElementById("propertyTypeDescriptionInput").style.display = "none";
  document.getElementById("suburbNameInput").style.display = "none";

  //make OK button visible
  document.getElementById("OKButton").style.visibility = "visible";
  document.getElementById("prompt").style.display = "block";
  document.getElementById("mandateTypeInput").style.visibility = "visible";
  document.getElementById("marketTypeInput").style.visibility = "visible";
  document.getElementById("propertyTypeInput").style.visibility = "visible";
  document.getElementById("suburbInput").style.visibility = "visible";

  //enable input fields
  document.getElementById("mandateDateInput").disabled = false;
  document.getElementById("mandateTypeInput").disabled = false;

  document.getElementById("priceInput").disabled = false;
  document.getElementById("marketTypeInput").disabled = false;
  document.getElementById("propertyTypeInput").disabled = false;
  document.getElementById("termInput").disabled = false;
  document.getElementById("startDateInput").disabled = false;

  document.getElementById("addressInput").disabled = false;
  document.getElementById("suburbInput").disabled = false;

  document.getElementById("OwnerNameInput").disabled = false;
  document.getElementById("OwnerSurnameInput").disabled = false;
  document.getElementById("OwnerEmailInput").disabled = false;
  document.getElementById("OwnerIDInput").disabled = false;
  document.getElementById("OwnerAddressInput").disabled = false;
  document.getElementById("OwnerContactNumberInput").disabled = false;
  document.getElementById("OwnerAltContactNumberInput").disabled = false;

  document.getElementById("bedroomsInput").disabled = false;
  document.getElementById("bathroomsInput").disabled = false;

  document.getElementById("featureAcceptInput").disabled = false;
  document.getElementById("otherBuildingAcceptInput").disabled = false;
  document.getElementById("pointAcceptInput").disabled = false;
}


// Grouped functionality for single-attribute CRUDs
function editSingleAttributeCRUD(objectName) {

  // edit header text
  document.getElementById("title").innerHTML = "Update " + objectName;

  //hide control
  document.getElementById("edit").style.display = "none";

  //show control
  document.getElementById("OKButton").style.visibility = "visible";
  document.getElementById("prompt").style.display = "block";

  //enable input field
  document.getElementById("descriptionInput").disabled = false;
}


//----------------------------------------//LANI JS:
// Employee
function editEmployee() {
  //edit header text
  document.getElementById("title").innerHTML = "Update Employee";

  //hide control
  document.getElementById("edit").style.display = "none";

  //document.getElementById("checkBoxInput").style.display = "block"; //hides the label
  //document.getElementById("employeeTypeInput").disabled = false; //enable the checkboxes
  //document.getElementById("employeeTypeInput").style.display = "block"; //show the checkboxes
  //document.getElementById("employeeTypeDescriptionInput").style.display = "initial";

  //show control
  document.getElementById("OKButton").style.visibility = "visible";
  document.getElementById("prompt").style.display = "block";

  //enable input fields
  document.getElementById("name").disabled = false;
  document.getElementById("surname").disabled = false;
  document.getElementById("contactnumber").disabled = false;
  document.getElementById("altcontactnumber").disabled = false;
  document.getElementById("email").disabled = false;
  //document.getElementById("idorpassportnumber").disabled = false;
  document.getElementById("address").disabled = false;
  document.getElementById("banking").disabled = false;
  document.getElementById("dateemployed").disabled = false;
  document.getElementById("renumeration").disabled = false;
  document.getElementById("EmployeeTypeWrapper1").hidden = false;
  document.getElementById("noPointer").style.pointerEvents = "auto";
  console.log(document.getElementById("noPointer").style.pointerEvents)
}

//...........................................//Rotondwa's JS:
function editPropertyOwner() {
  //edit header text
  document.getElementById("title").innerHTML = "Update Property Owner";

  //hide edit button
  document.getElementById("editPropertyOwner").style.display = "none";

  //make OK button visible
  document.getElementById("OKButton").style.visibility = "visible";
  document.getElementById("prompt").style.display = "block";

  //enable input fields
  document.getElementById("nameInput").disabled = false;
  document.getElementById("surnameInput").disabled = false;
  document.getElementById("emailInput").disabled = false;
  document.getElementById("numberInput").disabled = false;
  document.getElementById("addressInput").disabled = false;
  document.getElementById("contactnumberInput").disabled = false;
  document.getElementById("altcontactnumberInput").disabled = false;
}


function editProperty() {
  //edit header text
  document.getElementById("title").innerHTML = "Update Property";

  //hide edit button
  document.getElementById("editProperty").style.display = "none";
  document.getElementById("mandateTypeDescriptionInput").style.display = "none";
  document.getElementById("marketTypeDescriptionInput").style.display = "none";
  document.getElementById("propertyTypeDescriptionInput").style.display = "none";
  document.getElementById("suburbNameInput").style.display = "none";

  //make OK button visible
  document.getElementById("OKButton").style.visibility = "visible";
  document.getElementById("prompt").style.display = "block";
  document.getElementById("mandateTypeInput").style.visibility = "visible";
  document.getElementById("marketTypeInput").style.visibility = "visible";
  document.getElementById("propertyTypeInput").style.visibility = "visible";
  document.getElementById("suburbInput").style.visibility = "visible";

  //enable input fields
  document.getElementById("mandateDateInput").disabled = false;
  document.getElementById("mandateTypeInput").disabled = false;

  document.getElementById("priceInput").disabled = false;
  document.getElementById("marketTypeInput").disabled = false;
  document.getElementById("propertyTypeInput").disabled = false;
  document.getElementById("termInput").disabled = false;
  document.getElementById("startDateInput").disabled = false;

  document.getElementById("addressInput").disabled = false;
  document.getElementById("suburbInput").disabled = false;

  document.getElementById("OwnerNameInput").disabled = false;
  document.getElementById("OwnerSurnameInput").disabled = false;
  document.getElementById("OwnerEmailInput").disabled = false;
  document.getElementById("OwnerIDInput").disabled = false;
  document.getElementById("OwnerAddressInput").disabled = false;
  document.getElementById("OwnerContactNumberInput").disabled = false;
  document.getElementById("OwnerAltContactNumberInput").disabled = false;

  document.getElementById("bedroomsInput").disabled = false;
  document.getElementById("bathroomsInput").disabled = false;

  document.getElementById("featureAcceptInput").disabled = false;
  document.getElementById("otherBuildingAcceptInput").disabled = false;
  document.getElementById("pointAcceptInput").disabled = false;
}


function editPointOfInterest(){
   //edit header text
   document.getElementById("title").innerHTML = "Update Point of Interest";

   //hide edit button

   document.getElementById("suburbNameInput").style.display = "none";

   //make OK button visible
   document.getElementById("OKButton").display ==="block" ;
   OKButton.style.visibility = "visible";

   document.getElementById("prompt").style.display = "block";

   document.getElementById("edit").style.display = "none";
   document.getElementById("typeInput").style.visibility = "visible";
   document.getElementById("typeInput").disabled = false;

   document.getElementById("suburbNameInput").style.display = "none";
   document.getElementById("suburbInput").disabled = false;
   document.getElementById("suburbInput").style.visibility = "visible";

   document.getElementById("pointTypeNameInput").style.display = "none";
   document.getElementById("nameInput").style.visibility = "visible";
   document.getElementById("nameInput").disabled = false;
}



function submitAddJS(){
  $("#addModal").modal('hide');
  $("#confirmAddModal").modal('show');
}




//Validation check
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    'use strict';
    window.addEventListener("load", function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("invalid")
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();



//Rental agreements search bars
function searchRented() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRented");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsRented");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchPendingAgentTermination() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterPendingAgentTermination");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsPendingAgentTermination");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchPendingClientAcceptance() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterPendingClientAcceptance");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsPendingClientAcceptance");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchRentalRenewed() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRentalRenewed");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsRentalRenewed");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchRentalExtended() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterRentalExtended");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsRentalExtended");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchPendingClientExtensionAcceptance() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterPendingClientExtensionAcceptance");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsPendingClientExtensionAcceptance");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchPendingClientRenewalAcceptance() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterPendingClientRenewalAcceptance");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsPendingClientRenewalAcceptance");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

function searchPendingAgentExtension() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilterPendingAgentExtension");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myCardsPendingAgentExtension");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title ");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}
;!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";
/** @license
   * jsPDF - PDF Document creation from JavaScript
   * Version 1.5.3 Built on 2018-12-27T14:11:42.696Z
   *                      CommitID d93d28db14
   *
   * Copyright (c) 2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
   *               2010 Aaron Spike, https://github.com/acspike
   *               2012 Willow Systems Corporation, willow-systems.com
   *               2012 Pablo Hess, https://github.com/pablohess
   *               2012 Florian Jenett, https://github.com/fjenett
   *               2013 Warren Weckesser, https://github.com/warrenweckesser
   *               2013 Youssef Beddad, https://github.com/lifof
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2013 Stefan Slonevskiy, https://github.com/stefslon
   *               2013 Jeremy Morel, https://github.com/jmorel
   *               2013 Christoph Hartmann, https://github.com/chris-rock
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Makes, https://github.com/dollaruw
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Steven Spungin, https://github.com/Flamenco
   *               2014 Kenneth Glassey, https://github.com/Gavvers
   *
   * Licensed under the MIT License
   *
   * Contributor(s):
   *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
   *    kim3er, mfo, alnorth, Flamenco
   */function se(t){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){if("object"!==se(t.console)){t.console={};for(var e,n,r=t.console,i=function(){},o=["memory"],a="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");e=o.pop();)r[e]||(r[e]={});for(;n=a.pop();)r[n]||(r[n]=i)}var s,l,h,u,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";void 0===t.btoa&&(t.btoa=function(t){var e,n,r,i,o,a=0,s=0,l="",h=[];if(!t)return t;for(;e=(o=t.charCodeAt(a++)<<16|t.charCodeAt(a++)<<8|t.charCodeAt(a++))>>18&63,n=o>>12&63,r=o>>6&63,i=63&o,h[s++]=c.charAt(e)+c.charAt(n)+c.charAt(r)+c.charAt(i),a<t.length;);l=h.join("");var u=t.length%3;return(u?l.slice(0,u-3):l)+"===".slice(u||3)}),void 0===t.atob&&(t.atob=function(t){var e,n,r,i,o,a,s=0,l=0,h=[];if(!t)return t;for(t+="";e=(a=c.indexOf(t.charAt(s++))<<18|c.indexOf(t.charAt(s++))<<12|(i=c.indexOf(t.charAt(s++)))<<6|(o=c.indexOf(t.charAt(s++))))>>16&255,n=a>>8&255,r=255&a,h[l++]=64==i?String.fromCharCode(e):64==o?String.fromCharCode(e,n):String.fromCharCode(e,n,r),s<t.length;);return h.join("")}),Array.prototype.map||(Array.prototype.map=function(t){if(null==this||"function"!=typeof t)throw new TypeError;for(var e=Object(this),n=e.length>>>0,r=new Array(n),i=1<arguments.length?arguments[1]:void 0,o=0;o<n;o++)o in e&&(r[o]=t.call(i,e[o],o,e));return r}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){if(null==this||"function"!=typeof t)throw new TypeError;for(var n=Object(this),r=n.length>>>0,i=0;i<r;i++)i in n&&t.call(e,n[i],i,n)}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var r=arguments[1],i=0;i<n;){var o=e[i];if(t.call(r,o,i,e))return o;i++}},configurable:!0,writable:!0}),Object.keys||(Object.keys=(s=Object.prototype.hasOwnProperty,l=!{toString:null}.propertyIsEnumerable("toString"),u=(h=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(t){if("object"!==se(t)&&("function"!=typeof t||null===t))throw new TypeError;var e,n,r=[];for(e in t)s.call(t,e)&&r.push(e);if(l)for(n=0;n<u;n++)s.call(t,h[n])&&r.push(h[n]);return r})),"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var n=arguments[e];if(null!=n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),String.prototype.trimLeft||(String.prototype.trimLeft=function(){return this.replace(/^\s+/g,"")}),String.prototype.trimRight||(String.prototype.trimRight=function(){return this.replace(/\s+$/g,"")}),Number.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")());var t,e,n,_,l,F,P,p,d,k,a,o,s,h,u,c,r,i,f,g,m,y,v,w,b,x,I,C,B,N,L,A,S,j,E,M,O,q,T,R,D,U,z,H,W,V,G,Y,J,X,K,Z,Q,$,tt,et,nt,rt,it,ot,at,st,lt=function(ie){function oe(o){if("object"!==se(o))throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var a={};this.subscribe=function(t,e,n){if(n=n||!1,"string"!=typeof t||"function"!=typeof e||"boolean"!=typeof n)throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");a.hasOwnProperty(t)||(a[t]={});var r=Math.random().toString(35);return a[t][r]=[e,!!n],r},this.unsubscribe=function(t){for(var e in a)if(a[e][t])return delete a[e][t],0===Object.keys(a[e]).length&&delete a[e],!0;return!1},this.publish=function(t){if(a.hasOwnProperty(t)){var e=Array.prototype.slice.call(arguments,1),n=[];for(var r in a[t]){var i=a[t][r];try{i[0].apply(o,e)}catch(t){ie.console&&console.error("jsPDF PubSub Error",t.message,t)}i[1]&&n.push(r)}n.length&&n.forEach(this.unsubscribe)}},this.getTopics=function(){return a}}function ae(t,e,i,n){var r={},o=[],a=1;"object"===se(t)&&(t=(r=t).orientation,e=r.unit||e,i=r.format||i,n=r.compress||r.compressPdf||n,o=r.filters||(!0===n?["FlateEncode"]:o),a="number"==typeof r.userUnit?Math.abs(r.userUnit):1),e=e||"mm",t=(""+(t||"P")).toLowerCase();var s=r.putOnlyUsedFonts||!0,K={},l={internal:{},__private__:{}};l.__private__.PubSub=oe;var h="1.3",u=l.__private__.getPdfVersion=function(){return h},c=(l.__private__.setPdfVersion=function(t){h=t},{a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]}),f=(l.__private__.getPageFormats=function(){return c},l.__private__.getPageFormat=function(t){return c[t]});"string"==typeof i&&(i=f(i)),i=i||f("a4");var p,Z=l.f2=l.__private__.f2=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return t.toFixed(2)},Q=l.__private__.f3=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f3");return t.toFixed(3)},d="00000000000000000000000000000000",g=l.__private__.getFileId=function(){return d},m=l.__private__.setFileId=function(t){return t=t||"12345678901234567890123456789012".split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),d=t};l.setFileId=function(t){return m(t),this},l.getFileId=function(){return g()};var y=l.__private__.convertDateToPDFDate=function(t){var e=t.getTimezoneOffset(),n=e<0?"+":"-",r=Math.floor(Math.abs(e/60)),i=Math.abs(e%60),o=[n,P(r),"'",P(i),"'"].join("");return["D:",t.getFullYear(),P(t.getMonth()+1),P(t.getDate()),P(t.getHours()),P(t.getMinutes()),P(t.getSeconds()),o].join("")},v=l.__private__.convertPDFDateToDate=function(t){var e=parseInt(t.substr(2,4),10),n=parseInt(t.substr(6,2),10)-1,r=parseInt(t.substr(8,2),10),i=parseInt(t.substr(10,2),10),o=parseInt(t.substr(12,2),10),a=parseInt(t.substr(14,2),10);parseInt(t.substr(16,2),10),parseInt(t.substr(20,2),10);return new Date(e,n,r,i,o,a,0)},w=l.__private__.setCreationDate=function(t){var e;if(void 0===t&&(t=new Date),"object"===se(t)&&"[object Date]"===Object.prototype.toString.call(t))e=y(t);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(t))throw new Error("Invalid argument passed to jsPDF.setCreationDate");e=t}return p=e},b=l.__private__.getCreationDate=function(t){var e=p;return"jsDate"===t&&(e=v(p)),e};l.setCreationDate=function(t){return w(t),this},l.getCreationDate=function(t){return b(t)};var x,N,L,A,S,$,_,F,P=l.__private__.padd2=function(t){return("0"+parseInt(t)).slice(-2)},k=!1,I=[],C=[],B=0,tt=(l.__private__.setCustomOutputDestination=function(t){N=t},l.__private__.resetCustomOutputDestination=function(t){N=void 0},l.__private__.out=function(t){var e;return t="string"==typeof t?t:t.toString(),(e=void 0===N?k?I[x]:C:N).push(t),k||(B+=t.length+1),e}),j=l.__private__.write=function(t){return tt(1===arguments.length?t.toString():Array.prototype.join.call(arguments," "))},E=l.__private__.getArrayBuffer=function(t){for(var e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n);e--;)r[e]=t.charCodeAt(e);return n},M=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]],et=(l.__private__.getStandardFonts=function(t){return M},r.fontSize||16),O=(l.__private__.setFontSize=l.setFontSize=function(t){return et=t,this},l.__private__.getFontSize=l.getFontSize=function(){return et}),nt=r.R2L||!1,q=(l.__private__.setR2L=l.setR2L=function(t){return nt=t,this},l.__private__.getR2L=l.getR2L=function(t){return nt},l.__private__.setZoomMode=function(t){var e=[void 0,null,"fullwidth","fullheight","fullpage","original"];if(/^\d*\.?\d*\%$/.test(t))L=t;else if(isNaN(t)){if(-1===e.indexOf(t))throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+t+'" is not recognized.');L=t}else L=parseInt(t,10)}),T=(l.__private__.getZoomMode=function(){return L},l.__private__.setPageMode=function(t){if(-1==[void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(t))throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+t+'" is not recognized.');A=t}),R=(l.__private__.getPageMode=function(){return A},l.__private__.setLayoutMode=function(t){if(-1==[void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(t))throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+t+'" is not recognized.');S=t}),D=(l.__private__.getLayoutMode=function(){return S},l.__private__.setDisplayMode=l.setDisplayMode=function(t,e,n){return q(t),R(e),T(n),this},{title:"",subject:"",author:"",keywords:"",creator:""}),U=(l.__private__.getDocumentProperty=function(t){if(-1===Object.keys(D).indexOf(t))throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return D[t]},l.__private__.getDocumentProperties=function(t){return D},l.__private__.setDocumentProperties=l.setProperties=l.setDocumentProperties=function(t){for(var e in D)D.hasOwnProperty(e)&&t[e]&&(D[e]=t[e]);return this},l.__private__.setDocumentProperty=function(t,e){if(-1===Object.keys(D).indexOf(t))throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return D[t]=e},0),z=[],rt={},H={},W=0,V=[],G=[],it=new oe(l),Y=r.hotfixes||[],J=l.__private__.newObject=function(){var t=X();return ot(t,!0),t},X=l.__private__.newObjectDeferred=function(){return z[++U]=function(){return B},U},ot=function(t,e){return e="boolean"==typeof e&&e,z[t]=B,e&&tt(t+" 0 obj"),t},at=l.__private__.newAdditionalObject=function(){var t={objId:X(),content:""};return G.push(t),t},st=X(),lt=X(),ht=l.__private__.decodeColorString=function(t){var e=t.split(" ");if(2===e.length&&("g"===e[1]||"G"===e[1])){var n=parseFloat(e[0]);e=[n,n,n,"r"]}for(var r="#",i=0;i<3;i++)r+=("0"+Math.floor(255*parseFloat(e[i])).toString(16)).slice(-2);return r},ut=l.__private__.encodeColorString=function(t){var e;"string"==typeof t&&(t={ch1:t});var n=t.ch1,r=t.ch2,i=t.ch3,o=t.ch4,a=(t.precision,"draw"===t.pdfColorType?["G","RG","K"]:["g","rg","k"]);if("string"==typeof n&&"#"!==n.charAt(0)){var s=new RGBColor(n);if(s.ok)n=s.toHex();else if(!/^\d*\.?\d*$/.test(n))throw new Error('Invalid color "'+n+'" passed to jsPDF.encodeColorString.')}if("string"==typeof n&&/^#[0-9A-Fa-f]{3}$/.test(n)&&(n="#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]),"string"==typeof n&&/^#[0-9A-Fa-f]{6}$/.test(n)){var l=parseInt(n.substr(1),16);n=l>>16&255,r=l>>8&255,i=255&l}if(void 0===r||void 0===o&&n===r&&r===i)if("string"==typeof n)e=n+" "+a[0];else switch(t.precision){case 2:e=Z(n/255)+" "+a[0];break;case 3:default:e=Q(n/255)+" "+a[0]}else if(void 0===o||"object"===se(o)){if(o&&!isNaN(o.a)&&0===o.a)return e=["1.000","1.000","1.000",a[1]].join(" ");if("string"==typeof n)e=[n,r,i,a[1]].join(" ");else switch(t.precision){case 2:e=[Z(n/255),Z(r/255),Z(i/255),a[1]].join(" ");break;default:case 3:e=[Q(n/255),Q(r/255),Q(i/255),a[1]].join(" ")}}else if("string"==typeof n)e=[n,r,i,o,a[2]].join(" ");else switch(t.precision){case 2:e=[Z(n/255),Z(r/255),Z(i/255),Z(o/255),a[2]].join(" ");break;case 3:default:e=[Q(n/255),Q(r/255),Q(i/255),Q(o/255),a[2]].join(" ")}return e},ct=l.__private__.getFilters=function(){return o},ft=l.__private__.putStream=function(t){var e=(t=t||{}).data||"",n=t.filters||ct(),r=t.alreadyAppliedFilters||[],i=t.addLength1||!1,o=e.length,a={};!0===n&&(n=["FlateEncode"]);var s=t.additionalKeyValues||[],l=(a=void 0!==ae.API.processDataByFilters?ae.API.processDataByFilters(e,n):{data:e,reverseChain:[]}).reverseChain+(Array.isArray(r)?r.join(" "):r.toString());0!==a.data.length&&(s.push({key:"Length",value:a.data.length}),!0===i&&s.push({key:"Length1",value:o})),0!=l.length&&(l.split("/").length-1==1?s.push({key:"Filter",value:l}):s.push({key:"Filter",value:"["+l+"]"})),tt("<<");for(var h=0;h<s.length;h++)tt("/"+s[h].key+" "+s[h].value);tt(">>"),0!==a.data.length&&(tt("stream"),tt(a.data),tt("endstream"))},pt=l.__private__.putPage=function(t){t.mediaBox;var e=t.number,n=t.data,r=t.objId,i=t.contentsObjId;ot(r,!0);V[x].mediaBox.topRightX,V[x].mediaBox.bottomLeftX,V[x].mediaBox.topRightY,V[x].mediaBox.bottomLeftY;tt("<</Type /Page"),tt("/Parent "+t.rootDictionaryObjId+" 0 R"),tt("/Resources "+t.resourceDictionaryObjId+" 0 R"),tt("/MediaBox ["+parseFloat(Z(t.mediaBox.bottomLeftX))+" "+parseFloat(Z(t.mediaBox.bottomLeftY))+" "+Z(t.mediaBox.topRightX)+" "+Z(t.mediaBox.topRightY)+"]"),null!==t.cropBox&&tt("/CropBox ["+Z(t.cropBox.bottomLeftX)+" "+Z(t.cropBox.bottomLeftY)+" "+Z(t.cropBox.topRightX)+" "+Z(t.cropBox.topRightY)+"]"),null!==t.bleedBox&&tt("/BleedBox ["+Z(t.bleedBox.bottomLeftX)+" "+Z(t.bleedBox.bottomLeftY)+" "+Z(t.bleedBox.topRightX)+" "+Z(t.bleedBox.topRightY)+"]"),null!==t.trimBox&&tt("/TrimBox ["+Z(t.trimBox.bottomLeftX)+" "+Z(t.trimBox.bottomLeftY)+" "+Z(t.trimBox.topRightX)+" "+Z(t.trimBox.topRightY)+"]"),null!==t.artBox&&tt("/ArtBox ["+Z(t.artBox.bottomLeftX)+" "+Z(t.artBox.bottomLeftY)+" "+Z(t.artBox.topRightX)+" "+Z(t.artBox.topRightY)+"]"),"number"==typeof t.userUnit&&1!==t.userUnit&&tt("/UserUnit "+t.userUnit),it.publish("putPage",{objId:r,pageContext:V[e],pageNumber:e,page:n}),tt("/Contents "+i+" 0 R"),tt(">>"),tt("endobj");var o=n.join("\n");return ot(i,!0),ft({data:o,filters:ct()}),tt("endobj"),r},dt=l.__private__.putPages=function(){var t,e,n=[];for(t=1;t<=W;t++)V[t].objId=X(),V[t].contentsObjId=X();for(t=1;t<=W;t++)n.push(pt({number:t,data:I[t],objId:V[t].objId,contentsObjId:V[t].contentsObjId,mediaBox:V[t].mediaBox,cropBox:V[t].cropBox,bleedBox:V[t].bleedBox,trimBox:V[t].trimBox,artBox:V[t].artBox,userUnit:V[t].userUnit,rootDictionaryObjId:st,resourceDictionaryObjId:lt}));ot(st,!0),tt("<</Type /Pages");var r="/Kids [";for(e=0;e<W;e++)r+=n[e]+" 0 R ";tt(r+"]"),tt("/Count "+W),tt(">>"),tt("endobj"),it.publish("postPutPages")},gt=function(){!function(){for(var t in rt)rt.hasOwnProperty(t)&&(!1===s||!0===s&&K.hasOwnProperty(t))&&(e=rt[t],it.publish("putFont",{font:e,out:tt,newObject:J,putStream:ft}),!0!==e.isAlreadyPutted&&(e.objectNumber=J(),tt("<<"),tt("/Type /Font"),tt("/BaseFont /"+e.postScriptName),tt("/Subtype /Type1"),"string"==typeof e.encoding&&tt("/Encoding /"+e.encoding),tt("/FirstChar 32"),tt("/LastChar 255"),tt(">>"),tt("endobj")));var e}(),it.publish("putResources"),ot(lt,!0),tt("<<"),function(){for(var t in tt("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),tt("/Font <<"),rt)rt.hasOwnProperty(t)&&(!1===s||!0===s&&K.hasOwnProperty(t))&&tt("/"+t+" "+rt[t].objectNumber+" 0 R");tt(">>"),tt("/XObject <<"),it.publish("putXobjectDict"),tt(">>")}(),tt(">>"),tt("endobj"),it.publish("postPutResources")},mt=function(t,e,n){H.hasOwnProperty(e)||(H[e]={}),H[e][n]=t},yt=function(t,e,n,r,i){i=i||!1;var o="F"+(Object.keys(rt).length+1).toString(10),a={id:o,postScriptName:t,fontName:e,fontStyle:n,encoding:r,isStandardFont:i,metadata:{}};return it.publish("addFont",{font:a,instance:this}),void 0!==o&&(rt[o]=a,mt(o,e,n)),o},vt=l.__private__.pdfEscape=l.pdfEscape=function(t,e){return function(t,e){var n,r,i,o,a,s,l,h,u;if(i=(e=e||{}).sourceEncoding||"Unicode",a=e.outputEncoding,(e.autoencode||a)&&rt[$].metadata&&rt[$].metadata[i]&&rt[$].metadata[i].encoding&&(o=rt[$].metadata[i].encoding,!a&&rt[$].encoding&&(a=rt[$].encoding),!a&&o.codePages&&(a=o.codePages[0]),"string"==typeof a&&(a=o[a]),a)){for(l=!1,s=[],n=0,r=t.length;n<r;n++)(h=a[t.charCodeAt(n)])?s.push(String.fromCharCode(h)):s.push(t[n]),s[n].charCodeAt(0)>>8&&(l=!0);t=s.join("")}for(n=t.length;void 0===l&&0!==n;)t.charCodeAt(n-1)>>8&&(l=!0),n--;if(!l)return t;for(s=e.noBOM?[]:[254,255],n=0,r=t.length;n<r;n++){if((u=(h=t.charCodeAt(n))>>8)>>8)throw new Error("Character at position "+n+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");s.push(u),s.push(h-(u<<8))}return String.fromCharCode.apply(void 0,s)}(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},wt=l.__private__.beginPage=function(t,e){var n,r="string"==typeof e&&e.toLowerCase();if("string"==typeof t&&(n=f(t.toLowerCase()))&&(t=n[0],e=n[1]),Array.isArray(t)&&(e=t[1],t=t[0]),(isNaN(t)||isNaN(e))&&(t=i[0],e=i[1]),r){switch(r.substr(0,1)){case"l":t<e&&(r="s");break;case"p":e<t&&(r="s")}"s"===r&&(n=t,t=e,e=n)}(14400<t||14400<e)&&(console.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),t=Math.min(14400,t),e=Math.min(14400,e)),i=[t,e],k=!0,I[++W]=[],V[W]={objId:0,contentsObjId:0,userUnit:Number(a),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(t),topRightY:Number(e)}},xt(W)},bt=function(){wt.apply(this,arguments),Dt(Rt),tt(Jt),0!==te&&tt(te+" J"),0!==ne&&tt(ne+" j"),it.publish("addPage",{pageNumber:W})},xt=function(t){0<t&&t<=W&&(x=t)},Nt=l.__private__.getNumberOfPages=l.getNumberOfPages=function(){return I.length-1},Lt=function(t,e,n){var r,i=void 0;return n=n||{},t=void 0!==t?t:rt[$].fontName,e=void 0!==e?e:rt[$].fontStyle,r=t.toLowerCase(),void 0!==H[r]&&void 0!==H[r][e]?i=H[r][e]:void 0!==H[t]&&void 0!==H[t][e]?i=H[t][e]:!1===n.disableWarning&&console.warn("Unable to look up font label for font '"+t+"', '"+e+"'. Refer to getFontList() for available fonts."),i||n.noFallback||null==(i=H.times[e])&&(i=H.times.normal),i},At=l.__private__.putInfo=function(){for(var t in J(),tt("<<"),tt("/Producer (jsPDF "+ae.version+")"),D)D.hasOwnProperty(t)&&D[t]&&tt("/"+t.substr(0,1).toUpperCase()+t.substr(1)+" ("+vt(D[t])+")");tt("/CreationDate ("+p+")"),tt(">>"),tt("endobj")},St=l.__private__.putCatalog=function(t){var e=(t=t||{}).rootDictionaryObjId||st;switch(J(),tt("<<"),tt("/Type /Catalog"),tt("/Pages "+e+" 0 R"),L||(L="fullwidth"),L){case"fullwidth":tt("/OpenAction [3 0 R /FitH null]");break;case"fullheight":tt("/OpenAction [3 0 R /FitV null]");break;case"fullpage":tt("/OpenAction [3 0 R /Fit]");break;case"original":tt("/OpenAction [3 0 R /XYZ null null 1]");break;default:var n=""+L;"%"===n.substr(n.length-1)&&(L=parseInt(L)/100),"number"==typeof L&&tt("/OpenAction [3 0 R /XYZ null null "+Z(L)+"]")}switch(S||(S="continuous"),S){case"continuous":tt("/PageLayout /OneColumn");break;case"single":tt("/PageLayout /SinglePage");break;case"two":case"twoleft":tt("/PageLayout /TwoColumnLeft");break;case"tworight":tt("/PageLayout /TwoColumnRight")}A&&tt("/PageMode /"+A),it.publish("putCatalog"),tt(">>"),tt("endobj")},_t=l.__private__.putTrailer=function(){tt("trailer"),tt("<<"),tt("/Size "+(U+1)),tt("/Root "+U+" 0 R"),tt("/Info "+(U-1)+" 0 R"),tt("/ID [ <"+d+"> <"+d+"> ]"),tt(">>")},Ft=l.__private__.putHeader=function(){tt("%PDF-"+h),tt("%ºß¬à")},Pt=l.__private__.putXRef=function(){var t=1,e="0000000000";for(tt("xref"),tt("0 "+(U+1)),tt("0000000000 65535 f "),t=1;t<=U;t++){"function"==typeof z[t]?tt((e+z[t]()).slice(-10)+" 00000 n "):void 0!==z[t]?tt((e+z[t]).slice(-10)+" 00000 n "):tt("0000000000 00000 n ")}},kt=l.__private__.buildDocument=function(){k=!1,B=U=0,C=[],z=[],G=[],st=X(),lt=X(),it.publish("buildDocument"),Ft(),dt(),function(){it.publish("putAdditionalObjects");for(var t=0;t<G.length;t++){var e=G[t];ot(e.objId,!0),tt(e.content),tt("endobj")}it.publish("postPutAdditionalObjects")}(),gt(),At(),St();var t=B;return Pt(),_t(),tt("startxref"),tt(""+t),tt("%%EOF"),k=!0,C.join("\n")},It=l.__private__.getBlob=function(t){return new Blob([E(t)],{type:"application/pdf"})},Ct=l.output=l.__private__.output=((F=function(t,e){e=e||{};var n=kt();switch("string"==typeof e?e={filename:e}:e.filename=e.filename||"generated.pdf",t){case void 0:return n;case"save":l.save(e.filename);break;case"arraybuffer":return E(n);case"blob":return It(n);case"bloburi":case"bloburl":if(void 0!==ie.URL&&"function"==typeof ie.URL.createObjectURL)return ie.URL&&ie.URL.createObjectURL(It(n))||void 0;console.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":return"data:application/pdf;filename="+e.filename+";base64,"+btoa(n);case"dataurlnewwindow":var r='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring")+'"></iframe></body></html>',i=ie.open();if(null!==i&&i.document.write(r),i||"undefined"==typeof safari)return i;case"datauri":case"dataurl":return ie.document.location.href="data:application/pdf;filename="+e.filename+";base64,"+btoa(n);default:return null}}).foo=function(){try{return F.apply(this,arguments)}catch(t){var e=t.stack||"";~e.indexOf(" at ")&&(e=e.split(" at ")[1]);var n="Error in function "+e.split("\n")[0].split("<")[0]+": "+t.message;if(!ie.console)throw new Error(n);ie.console.error(n,t),ie.alert&&alert(n)}},(F.foo.bar=F).foo),Bt=function(t){return!0===Array.isArray(Y)&&-1<Y.indexOf(t)};switch(e){case"pt":_=1;break;case"mm":_=72/25.4;break;case"cm":_=72/2.54;break;case"in":_=72;break;case"px":_=1==Bt("px_scaling")?.75:96/72;break;case"pc":case"em":_=12;break;case"ex":_=6;break;default:throw new Error("Invalid unit: "+e)}w(),m();var jt=l.__private__.getPageInfo=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:V[t].objId,pageNumber:t,pageContext:V[t]}},Et=l.__private__.getPageInfoByObjId=function(t){for(var e in V)if(V[e].objId===t)break;if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");return jt(e)},Mt=l.__private__.getCurrentPageInfo=function(){return{objId:V[x].objId,pageNumber:x,pageContext:V[x]}};l.addPage=function(){return bt.apply(this,arguments),this},l.setPage=function(){return xt.apply(this,arguments),this},l.insertPage=function(t){return this.addPage(),this.movePage(x,t),this},l.movePage=function(t,e){if(e<t){for(var n=I[t],r=V[t],i=t;e<i;i--)I[i]=I[i-1],V[i]=V[i-1];I[e]=n,V[e]=r,this.setPage(e)}else if(t<e){for(n=I[t],r=V[t],i=t;i<e;i++)I[i]=I[i+1],V[i]=V[i+1];I[e]=n,V[e]=r,this.setPage(e)}return this},l.deletePage=function(){return function(t){0<t&&t<=W&&(I.splice(t,1),--W<x&&(x=W),this.setPage(x))}.apply(this,arguments),this};l.__private__.text=l.text=function(t,e,n,i){var r;"number"!=typeof t||"number"!=typeof e||"string"!=typeof n&&!Array.isArray(n)||(r=n,n=e,e=t,t=r);var o=arguments[3],a=arguments[4],s=arguments[5];if("object"===se(o)&&null!==o||("string"==typeof a&&(s=a,a=null),"string"==typeof o&&(s=o,o=null),"number"==typeof o&&(a=o,o=null),i={flags:o,angle:a,align:s}),(o=o||{}).noBOM=o.noBOM||!0,o.autoencode=o.autoencode||!0,isNaN(e)||isNaN(n)||null==t)throw new Error("Invalid arguments passed to jsPDF.text");if(0===t.length)return c;var l,h="",u="number"==typeof i.lineHeightFactor?i.lineHeightFactor:Tt,c=i.scope||this;function f(t){for(var e,n=t.concat(),r=[],i=n.length;i--;)"string"==typeof(e=n.shift())?r.push(e):Array.isArray(t)&&1===e.length?r.push(e[0]):r.push([e[0],e[1],e[2]]);return r}function p(t,e){var n;if("string"==typeof t)n=e(t)[0];else if(Array.isArray(t)){for(var r,i,o=t.concat(),a=[],s=o.length;s--;)"string"==typeof(r=o.shift())?a.push(e(r)[0]):Array.isArray(r)&&"string"===r[0]&&(i=e(r[0],r[1],r[2]),a.push([i[0],i[1],i[2]]));n=a}return n}var d=!1,g=!0;if("string"==typeof t)d=!0;else if(Array.isArray(t)){for(var m,y=t.concat(),v=[],w=y.length;w--;)("string"!=typeof(m=y.shift())||Array.isArray(m)&&"string"!=typeof m[0])&&(g=!1);d=g}if(!1===d)throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');var b=rt[$].encoding;"WinAnsiEncoding"!==b&&"StandardEncoding"!==b||(t=p(t,function(t,e,n){return[(r=t,r=r.split("\t").join(Array(i.TabLen||9).join(" ")),vt(r,o)),e,n];var r})),"string"==typeof t&&(t=t.match(/[\r?\n]/)?t.split(/\r\n|\r|\n/g):[t]);var x=et/c.internal.scaleFactor,N=x*(Tt-1);switch(i.baseline){case"bottom":n-=N;break;case"top":n+=x-N;break;case"hanging":n+=x-2*N;break;case"middle":n+=x/2-N}0<(O=i.maxWidth||0)&&("string"==typeof t?t=c.splitTextToSize(t,O):"[object Array]"===Object.prototype.toString.call(t)&&(t=c.splitTextToSize(t.join(" "),O)));var L={text:t,x:e,y:n,options:i,mutex:{pdfEscape:vt,activeFontKey:$,fonts:rt,activeFontSize:et}};it.publish("preProcessText",L),t=L.text;a=(i=L.options).angle;var A=c.internal.scaleFactor,S=[];if(a){a*=Math.PI/180;var _=Math.cos(a),F=Math.sin(a);S=[Z(_),Z(F),Z(-1*F),Z(_)]}void 0!==(M=i.charSpace)&&(h+=Q(M*A)+" Tc\n");i.lang;var P=-1,k=void 0!==i.renderingMode?i.renderingMode:i.stroke,I=c.internal.getCurrentPageInfo().pageContext;switch(k){case 0:case!1:case"fill":P=0;break;case 1:case!0:case"stroke":P=1;break;case 2:case"fillThenStroke":P=2;break;case 3:case"invisible":P=3;break;case 4:case"fillAndAddForClipping":P=4;break;case 5:case"strokeAndAddPathForClipping":P=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":P=6;break;case 7:case"addToPathForClipping":P=7}var C=void 0!==I.usedRenderingMode?I.usedRenderingMode:-1;-1!==P?h+=P+" Tr\n":-1!==C&&(h+="0 Tr\n"),-1!==P&&(I.usedRenderingMode=P);s=i.align||"left";var B=et*u,j=c.internal.pageSize.getWidth(),E=(A=c.internal.scaleFactor,rt[$]),M=i.charSpace||Qt,O=i.maxWidth||0,q=(o={},[]);if("[object Array]"===Object.prototype.toString.call(t)){var T,R;v=f(t);"left"!==s&&(R=v.map(function(t){return c.getStringUnitWidth(t,{font:E,charSpace:M,fontSize:et})*et/A}));var D,U=Math.max.apply(Math,R),z=0;if("right"===s){e-=R[0],t=[];var H=0;for(w=v.length;H<w;H++)U-R[H],T=0===H?(D=Wt(e),Vt(n)):(D=(z-R[H])*A,-B),t.push([v[H],D,T]),z=R[H]}else if("center"===s){e-=R[0]/2,t=[];for(H=0,w=v.length;H<w;H++)(U-R[H])/2,T=0===H?(D=Wt(e),Vt(n)):(D=(z-R[H])/2*A,-B),t.push([v[H],D,T]),z=R[H]}else if("left"===s){t=[];for(H=0,w=v.length;H<w;H++)T=0===H?Vt(n):-B,D=0===H?Wt(e):0,t.push(v[H])}else{if("justify"!==s)throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');t=[];for(O=0!==O?O:j,H=0,w=v.length;H<w;H++)T=0===H?Vt(n):-B,D=0===H?Wt(e):0,H<w-1&&q.push(((O-R[H])/(v[H].split(" ").length-1)*A).toFixed(2)),t.push([v[H],D,T])}}!0===("boolean"==typeof i.R2L?i.R2L:nt)&&(t=p(t,function(t,e,n){return[t.split("").reverse().join(""),e,n]}));L={text:t,x:e,y:n,options:i,mutex:{pdfEscape:vt,activeFontKey:$,fonts:rt,activeFontSize:et}};it.publish("postProcessText",L),t=L.text,l=L.mutex.isHex;v=f(t);t=[];var W,V,G,Y=0,J=(w=v.length,"");for(H=0;H<w;H++)J="",Array.isArray(v[H])?(W=parseFloat(v[H][1]),V=parseFloat(v[H][2]),G=(l?"<":"(")+v[H][0]+(l?">":")"),Y=1):(W=Wt(e),V=Vt(n),G=(l?"<":"(")+v[H]+(l?">":")")),void 0!==q&&void 0!==q[H]&&(J=q[H]+" Tw\n"),0!==S.length&&0===H?t.push(J+S.join(" ")+" "+W.toFixed(2)+" "+V.toFixed(2)+" Tm\n"+G):1===Y||0===Y&&0===H?t.push(J+W.toFixed(2)+" "+V.toFixed(2)+" Td\n"+G):t.push(J+G);t=0===Y?t.join(" Tj\nT* "):t.join(" Tj\n"),t+=" Tj\n";var X="BT\n/"+$+" "+et+" Tf\n"+(et*u).toFixed(2)+" TL\n"+Kt+"\n";return X+=h,X+=t,tt(X+="ET"),K[$]=!0,c},l.__private__.lstext=l.lstext=function(t,e,n,r){return console.warn("jsPDF.lstext is deprecated"),this.text(t,e,n,{charSpace:r})},l.__private__.clip=l.clip=function(t){tt("evenodd"===t?"W*":"W"),tt("n")},l.__private__.clip_fixed=l.clip_fixed=function(t){console.log("clip_fixed is deprecated"),l.clip(t)};var Ot=l.__private__.isValidStyle=function(t){var e=!1;return-1!==[void 0,null,"S","F","DF","FD","f","f*","B","B*"].indexOf(t)&&(e=!0),e},qt=l.__private__.getStyle=function(t){var e="S";return"F"===t?e="f":"FD"===t||"DF"===t?e="B":"f"!==t&&"f*"!==t&&"B"!==t&&"B*"!==t||(e=t),e};l.__private__.line=l.line=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw new Error("Invalid arguments passed to jsPDF.line");return this.lines([[n-t,r-e]],t,e)},l.__private__.lines=l.lines=function(t,e,n,r,i,o){var a,s,l,h,u,c,f,p,d,g,m,y;if("number"==typeof t&&(y=n,n=e,e=t,t=y),r=r||[1,1],o=o||!1,isNaN(e)||isNaN(n)||!Array.isArray(t)||!Array.isArray(r)||!Ot(i)||"boolean"!=typeof o)throw new Error("Invalid arguments passed to jsPDF.lines");for(tt(Q(Wt(e))+" "+Q(Vt(n))+" m "),a=r[0],s=r[1],h=t.length,g=e,m=n,l=0;l<h;l++)2===(u=t[l]).length?(g=u[0]*a+g,m=u[1]*s+m,tt(Q(Wt(g))+" "+Q(Vt(m))+" l")):(c=u[0]*a+g,f=u[1]*s+m,p=u[2]*a+g,d=u[3]*s+m,g=u[4]*a+g,m=u[5]*s+m,tt(Q(Wt(c))+" "+Q(Vt(f))+" "+Q(Wt(p))+" "+Q(Vt(d))+" "+Q(Wt(g))+" "+Q(Vt(m))+" c"));return o&&tt(" h"),null!==i&&tt(qt(i)),this},l.__private__.rect=l.rect=function(t,e,n,r,i){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||!Ot(i))throw new Error("Invalid arguments passed to jsPDF.rect");return tt([Z(Wt(t)),Z(Vt(e)),Z(n*_),Z(-r*_),"re"].join(" ")),null!==i&&tt(qt(i)),this},l.__private__.triangle=l.triangle=function(t,e,n,r,i,o,a){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(o)||!Ot(a))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[n-t,r-e],[i-n,o-r],[t-i,e-o]],t,e,[1,1],a,!0),this},l.__private__.roundedRect=l.roundedRect=function(t,e,n,r,i,o,a){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(o)||!Ot(a))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var s=4/3*(Math.SQRT2-1);return this.lines([[n-2*i,0],[i*s,0,i,o-o*s,i,o],[0,r-2*o],[0,o*s,-i*s,o,-i,o],[2*i-n,0],[-i*s,0,-i,-o*s,-i,-o],[0,2*o-r],[0,-o*s,i*s,-o,i,-o]],t+i,e,[1,1],a),this},l.__private__.ellipse=l.ellipse=function(t,e,n,r,i){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||!Ot(i))throw new Error("Invalid arguments passed to jsPDF.ellipse");var o=4/3*(Math.SQRT2-1)*n,a=4/3*(Math.SQRT2-1)*r;return tt([Z(Wt(t+n)),Z(Vt(e)),"m",Z(Wt(t+n)),Z(Vt(e-a)),Z(Wt(t+o)),Z(Vt(e-r)),Z(Wt(t)),Z(Vt(e-r)),"c"].join(" ")),tt([Z(Wt(t-o)),Z(Vt(e-r)),Z(Wt(t-n)),Z(Vt(e-a)),Z(Wt(t-n)),Z(Vt(e)),"c"].join(" ")),tt([Z(Wt(t-n)),Z(Vt(e+a)),Z(Wt(t-o)),Z(Vt(e+r)),Z(Wt(t)),Z(Vt(e+r)),"c"].join(" ")),tt([Z(Wt(t+o)),Z(Vt(e+r)),Z(Wt(t+n)),Z(Vt(e+a)),Z(Wt(t+n)),Z(Vt(e)),"c"].join(" ")),null!==i&&tt(qt(i)),this},l.__private__.circle=l.circle=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||!Ot(r))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(t,e,n,n,r)};l.setFont=function(t,e){return $=Lt(t,e,{disableWarning:!1}),this},l.setFontStyle=l.setFontType=function(t){return $=Lt(void 0,t),this};l.__private__.getFontList=l.getFontList=function(){var t,e,n,r={};for(t in H)if(H.hasOwnProperty(t))for(e in r[t]=n=[],H[t])H[t].hasOwnProperty(e)&&n.push(e);return r};l.addFont=function(t,e,n,r){yt.call(this,t,e,n,r=r||"Identity-H")};var Tt,Rt=r.lineWidth||.200025,Dt=l.__private__.setLineWidth=l.setLineWidth=function(t){return tt((t*_).toFixed(2)+" w"),this},Ut=(l.__private__.setLineDash=ae.API.setLineDash=function(t,e){if(t=t||[],e=e||0,isNaN(e)||!Array.isArray(t))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return t=t.map(function(t){return(t*_).toFixed(3)}).join(" "),e=parseFloat((e*_).toFixed(3)),tt("["+t+"] "+e+" d"),this},l.__private__.getLineHeight=l.getLineHeight=function(){return et*Tt}),zt=(Ut=l.__private__.getLineHeight=l.getLineHeight=function(){return et*Tt},l.__private__.setLineHeightFactor=l.setLineHeightFactor=function(t){return"number"==typeof(t=t||1.15)&&(Tt=t),this}),Ht=l.__private__.getLineHeightFactor=l.getLineHeightFactor=function(){return Tt};zt(r.lineHeight);var Wt=l.__private__.getHorizontalCoordinate=function(t){return t*_},Vt=l.__private__.getVerticalCoordinate=function(t){return V[x].mediaBox.topRightY-V[x].mediaBox.bottomLeftY-t*_},Gt=l.__private__.getHorizontalCoordinateString=function(t){return Z(t*_)},Yt=l.__private__.getVerticalCoordinateString=function(t){return Z(V[x].mediaBox.topRightY-V[x].mediaBox.bottomLeftY-t*_)},Jt=r.strokeColor||"0 G",Xt=(l.__private__.getStrokeColor=l.getDrawColor=function(){return ht(Jt)},l.__private__.setStrokeColor=l.setDrawColor=function(t,e,n,r){return Jt=ut({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"draw",precision:2}),tt(Jt),this},r.fillColor||"0 g"),Kt=(l.__private__.getFillColor=l.getFillColor=function(){return ht(Xt)},l.__private__.setFillColor=l.setFillColor=function(t,e,n,r){return Xt=ut({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"fill",precision:2}),tt(Xt),this},r.textColor||"0 g"),Zt=l.__private__.getTextColor=l.getTextColor=function(){return ht(Kt)},Qt=(l.__private__.setTextColor=l.setTextColor=function(t,e,n,r){return Kt=ut({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"text",precision:3}),this},r.charSpace||0),$t=l.__private__.getCharSpace=l.getCharSpace=function(){return Qt},te=(l.__private__.setCharSpace=l.setCharSpace=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Qt=t,this},0);l.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2};l.__private__.setLineCap=l.setLineCap=function(t){var e=l.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return tt((te=e)+" J"),this};var ee,ne=0;l.__private__.setLineJoin=l.setLineJoin=function(t){var e=l.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return tt((ne=e)+" j"),this},l.__private__.setMiterLimit=l.setMiterLimit=function(t){if(t=t||0,isNaN(t))throw new Error("Invalid argument passed to jsPDF.setMiterLimit");return ee=parseFloat(Z(t*_)),tt(ee+" M"),this};for(var re in l.save=function(r,t){if(r=r||"generated.pdf",(t=t||{}).returnPromise=t.returnPromise||!1,!1!==t.returnPromise)return new Promise(function(t,e){try{var n=le(It(kt()),r);"function"==typeof le.unload&&ie.setTimeout&&setTimeout(le.unload,911),t(n)}catch(t){e(t.message)}});le(It(kt()),r),"function"==typeof le.unload&&ie.setTimeout&&setTimeout(le.unload,911)},ae.API)ae.API.hasOwnProperty(re)&&("events"===re&&ae.API.events.length?function(t,e){var n,r,i;for(i=e.length-1;-1!==i;i--)n=e[i][0],r=e[i][1],t.subscribe.apply(t,[n].concat("function"==typeof r?[r]:r))}(it,ae.API.events):l[re]=ae.API[re]);return l.internal={pdfEscape:vt,getStyle:qt,getFont:function(){return rt[Lt.apply(l,arguments)]},getFontSize:O,getCharSpace:$t,getTextColor:Zt,getLineHeight:Ut,getLineHeightFactor:Ht,write:j,getHorizontalCoordinate:Wt,getVerticalCoordinate:Vt,getCoordinateString:Gt,getVerticalCoordinateString:Yt,collections:{},newObject:J,newAdditionalObject:at,newObjectDeferred:X,newObjectDeferredBegin:ot,getFilters:ct,putStream:ft,events:it,scaleFactor:_,pageSize:{getWidth:function(){return(V[x].mediaBox.topRightX-V[x].mediaBox.bottomLeftX)/_},setWidth:function(t){V[x].mediaBox.topRightX=t*_+V[x].mediaBox.bottomLeftX},getHeight:function(){return(V[x].mediaBox.topRightY-V[x].mediaBox.bottomLeftY)/_},setHeight:function(t){V[x].mediaBox.topRightY=t*_+V[x].mediaBox.bottomLeftY}},output:Ct,getNumberOfPages:Nt,pages:I,out:tt,f2:Z,f3:Q,getPageInfo:jt,getPageInfoByObjId:Et,getCurrentPageInfo:Mt,getPDFVersion:u,hasHotfix:Bt},Object.defineProperty(l.internal.pageSize,"width",{get:function(){return(V[x].mediaBox.topRightX-V[x].mediaBox.bottomLeftX)/_},set:function(t){V[x].mediaBox.topRightX=t*_+V[x].mediaBox.bottomLeftX},enumerable:!0,configurable:!0}),Object.defineProperty(l.internal.pageSize,"height",{get:function(){return(V[x].mediaBox.topRightY-V[x].mediaBox.bottomLeftY)/_},set:function(t){V[x].mediaBox.topRightY=t*_+V[x].mediaBox.bottomLeftY},enumerable:!0,configurable:!0}),function(t){for(var e=0,n=M.length;e<n;e++){var r=yt(t[e][0],t[e][1],t[e][2],M[e][3],!0);K[r]=!0;var i=t[e][0].split("-");mt(r,i[0],i[1]||"")}it.publish("addFonts",{fonts:rt,dictionary:H})}(M),$="F1",bt(i,t),it.publish("initialized"),l}return ae.API={events:[]},ae.version="1.5.3","function"==typeof define&&define.amd?define("jsPDF",function(){return ae}):"undefined"!=typeof module&&module.exports?(module.exports=ae,module.exports.jsPDF=ae):ie.jsPDF=ae,ae}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")());
/**
   * @license
   * Copyright (c) 2016 Alexander Weidt,
   * https://github.com/BiggA94
   * 
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
   */
(function(t,e){var A,n=1,S=function(t){return t.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},y=function(t){return t.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},_=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return t.toFixed(2)},s=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return t.toFixed(5)};t.__acroform__={};var r=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},v=function(t){return t*n},w=function(t){return t/n},l=function(t){var e=new j,n=Y.internal.getHeight(t)||0,r=Y.internal.getWidth(t)||0;return e.BBox=[0,0,Number(_(r)),Number(_(n))],e},i=t.__acroform__.setBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return t|=1<<e},o=t.__acroform__.clearBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return t&=~(1<<e)},a=t.__acroform__.getBit=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return 0==(t&1<<e)?0:1},b=t.__acroform__.getBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return a(t,e-1)},x=t.__acroform__.setBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return i(t,e-1)},N=t.__acroform__.clearBitForPdf=function(t,e,n){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return o(t,e-1)},c=t.__acroform__.calculateCoordinates=function(t){var e=this.internal.getHorizontalCoordinate,n=this.internal.getVerticalCoordinate,r=t[0],i=t[1],o=t[2],a=t[3],s={};return s.lowerLeft_X=e(r)||0,s.lowerLeft_Y=n(i+a)||0,s.upperRight_X=e(r+o)||0,s.upperRight_Y=n(i)||0,[Number(_(s.lowerLeft_X)),Number(_(s.lowerLeft_Y)),Number(_(s.upperRight_X)),Number(_(s.upperRight_Y))]},f=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e=[],n=t.V||t.DV,r=h(t,n),i=A.internal.getFont(t.fontName,t.fontStyle).id;e.push("/Tx BMC"),e.push("q"),e.push("BT"),e.push(A.__private__.encodeColorString(t.color)),e.push("/"+i+" "+_(r.fontSize)+" Tf"),e.push("1 0 0 1 0 0 Tm"),e.push(r.text),e.push("ET"),e.push("Q"),e.push("EMC");var o=new l(t);return o.stream=e.join("\n"),o}},h=function(i,t){var e=i.maxFontSize||12,n=(i.fontName,{text:"",fontSize:""}),o=(t=")"==(t="("==t.substr(0,1)?t.substr(1):t).substr(t.length-1)?t.substr(0,t.length-1):t).split(" "),r=(A.__private__.encodeColorString(i.color),e),a=Y.internal.getHeight(i)||0;a=a<0?-a:a;var s=Y.internal.getWidth(i)||0;s=s<0?-s:s;var l=function(t,e,n){if(t+1<o.length){var r=e+" "+o[t+1];return F(r,i,n).width<=s-4}return!1};r++;t:for(;;){t="";var h=F("3",i,--r).height,u=i.multiline?a-r:(a-h)/2,c=-2,f=u+=2,p=0,d=0,g=0;if(r<=0){t="(...) Tj\n",t+="% Width of Text: "+F(t,i,r=12).width+", FieldWidth:"+s+"\n";break}g=F(o[0]+" ",i,r).width;var m="",y=0;for(var v in o)if(o.hasOwnProperty(v)){m=" "==(m+=o[v]+" ").substr(m.length-1)?m.substr(0,m.length-1):m;var w=parseInt(v);g=F(m+" ",i,r).width;var b=l(w,m,r),x=v>=o.length-1;if(b&&!x){m+=" ";continue}if(b||x){if(x)d=w;else if(i.multiline&&a<(h+2)*(y+2)+2)continue t}else{if(!i.multiline)continue t;if(a<(h+2)*(y+2)+2)continue t;d=w}for(var N="",L=p;L<=d;L++)N+=o[L]+" ";switch(N=" "==N.substr(N.length-1)?N.substr(0,N.length-1):N,g=F(N,i,r).width,i.textAlign){case"right":c=s-g-2;break;case"center":c=(s-g)/2;break;case"left":default:c=2}t+=_(c)+" "+_(f)+" Td\n",t+="("+S(N)+") Tj\n",t+=-_(c)+" 0 Td\n",f=-(r+2),g=0,p=d+1,y++,m=""}else;break}return n.text=t,n.fontSize=r,n},F=function(t,e,n){var r=A.internal.getFont(e.fontName,e.fontStyle),i=A.getStringUnitWidth(t,{font:r,fontSize:parseFloat(n),charSpace:0})*parseFloat(n);return{height:A.getStringUnitWidth("3",{font:r,fontSize:parseFloat(n),charSpace:0})*parseFloat(n)*1.5,width:i}},u={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},p=function(){A.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var t=A.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var e in t)if(t.hasOwnProperty(e)){var n=t[e];n.objId=void 0,n.hasAnnotation&&d.call(A,n)}},d=function(t){var e={type:"reference",object:t};void 0===A.internal.getPageInfo(t.page).pageContext.annotations.find(function(t){return t.type===e.type&&t.object===e.object})&&A.internal.getPageInfo(t.page).pageContext.annotations.push(e)},g=function(){if(void 0===A.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("putCatalogCallback: Root missing.");A.internal.write("/AcroForm "+A.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")},m=function(){A.internal.events.unsubscribe(A.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete A.internal.acroformPlugin.acroFormDictionaryRoot._eventID,A.internal.acroformPlugin.printedOut=!0},L=function(t){var e=!t;t||(A.internal.newObjectDeferredBegin(A.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),A.internal.acroformPlugin.acroFormDictionaryRoot.putStream());t=t||A.internal.acroformPlugin.acroFormDictionaryRoot.Kids;for(var n in t)if(t.hasOwnProperty(n)){var r=t[n],i=[],o=r.Rect;if(r.Rect&&(r.Rect=c.call(this,r.Rect)),A.internal.newObjectDeferredBegin(r.objId,!0),r.DA=Y.createDefaultAppearanceStream(r),"object"===se(r)&&"function"==typeof r.getKeyValueListForStream&&(i=r.getKeyValueListForStream()),r.Rect=o,r.hasAppearanceStream&&!r.appearanceStreamContent){var a=f.call(this,r);i.push({key:"AP",value:"<</N "+a+">>"}),A.internal.acroformPlugin.xForms.push(a)}if(r.appearanceStreamContent){var s="";for(var l in r.appearanceStreamContent)if(r.appearanceStreamContent.hasOwnProperty(l)){var h=r.appearanceStreamContent[l];if(s+="/"+l+" ",s+="<<",1<=Object.keys(h).length||Array.isArray(h))for(var n in h){var u;if(h.hasOwnProperty(n))"function"==typeof(u=h[n])&&(u=u.call(this,r)),s+="/"+n+" "+u+" ",0<=A.internal.acroformPlugin.xForms.indexOf(u)||A.internal.acroformPlugin.xForms.push(u)}else"function"==typeof(u=h)&&(u=u.call(this,r)),s+="/"+n+" "+u,0<=A.internal.acroformPlugin.xForms.indexOf(u)||A.internal.acroformPlugin.xForms.push(u);s+=">>"}i.push({key:"AP",value:"<<\n"+s+">>"})}A.internal.putStream({additionalKeyValues:i}),A.internal.out("endobj")}e&&P.call(this,A.internal.acroformPlugin.xForms)},P=function(t){for(var e in t)if(t.hasOwnProperty(e)){var n=e,r=t[e];A.internal.newObjectDeferredBegin(r&&r.objId,!0),"object"===se(r)&&"function"==typeof r.putStream&&r.putStream(),delete t[n]}},k=function(){if(void 0!==this.internal&&(void 0===this.internal.acroformPlugin||!1===this.internal.acroformPlugin.isInitialized)){if(A=this,M.FieldNum=0,this.internal.acroformPlugin=JSON.parse(JSON.stringify(u)),this.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");n=A.internal.scaleFactor,A.internal.acroformPlugin.acroFormDictionaryRoot=new E,A.internal.acroformPlugin.acroFormDictionaryRoot._eventID=A.internal.events.subscribe("postPutResources",m),A.internal.events.subscribe("buildDocument",p),A.internal.events.subscribe("putCatalog",g),A.internal.events.subscribe("postPutPages",L),A.internal.acroformPlugin.isInitialized=!0}},I=t.__acroform__.arrayToPdfArray=function(t){if(Array.isArray(t)){for(var e="[",n=0;n<t.length;n++)switch(0!==n&&(e+=" "),se(t[n])){case"boolean":case"number":case"object":e+=t[n].toString();break;case"string":"/"!==t[n].substr(0,1)?e+="("+S(t[n].toString())+")":e+=t[n].toString()}return e+="]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")};var C=function(t){return(t=t||"").toString(),t="("+S(t)+")"},B=function(){var e;Object.defineProperty(this,"objId",{configurable:!0,get:function(){if(e||(e=A.internal.newObjectDeferred()),!e)throw new Error("AcroFormPDFObject: Couldn't create Object ID");return e},set:function(t){e=t}})};B.prototype.toString=function(){return this.objId+" 0 R"},B.prototype.putStream=function(){var t=this.getKeyValueListForStream();A.internal.putStream({data:this.stream,additionalKeyValues:t}),A.internal.out("endobj")},B.prototype.getKeyValueListForStream=function(){return function(t){var e=[],n=Object.getOwnPropertyNames(t).filter(function(t){return"content"!=t&&"appearanceStreamContent"!=t&&"_"!=t.substring(0,1)});for(var r in n)if(!1===Object.getOwnPropertyDescriptor(t,n[r]).configurable){var i=n[r],o=t[i];o&&(Array.isArray(o)?e.push({key:i,value:I(o)}):o instanceof B?e.push({key:i,value:o.objId+" 0 R"}):"function"!=typeof o&&e.push({key:i,value:o}))}return e}(this)};var j=function(){B.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writeable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writeable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writeable:!0});var e,n=[];Object.defineProperty(this,"BBox",{configurable:!1,writeable:!0,get:function(){return n},set:function(t){n=t}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writeable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(t){e=t.trim()},get:function(){return e||null}})};r(j,B);var E=function(){B.call(this);var e,t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return 0<t.length?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return t}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(e)return"("+e+")"},set:function(t){e=t}})};r(E,B);var M=function t(){B.call(this);var e=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute F supplied.');e=t}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(e,3))},set:function(t){!0===Boolean(t)?this.F=x(e,3):this.F=N(e,3)}});var n=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return n},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute Ff supplied.');n=t}});var r=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(0!==r.length)return r},set:function(t){r=void 0!==t?t:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[0])?0:w(r[0])},set:function(t){r[0]=v(t)}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[1])?0:w(r[1])},set:function(t){r[1]=v(t)}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[2])?0:w(r[2])},set:function(t){r[2]=v(t)}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!r||isNaN(r[3])?0:w(r[3])},set:function(t){r[3]=v(t)}});var i="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return i},set:function(t){switch(t){case"/Btn":case"/Tx":case"/Ch":case"/Sig":i=t;break;default:throw new Error('Invalid value "'+t+'" for attribute FT supplied.')}}});var o=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!o||o.length<1){if(this instanceof H)return;o="FieldObject"+t.FieldNum++}return"("+S(o)+")"},set:function(t){o=t.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return o},set:function(t){o=t}});var a="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return a},set:function(t){a=t}});var s="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return s},set:function(t){s=t}});var l=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return w(l)},set:function(t){l=v(t)}});var h=50;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return w(h)},set:function(t){h=v(t)}});var u="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return u},set:function(t){u=t}});var c="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!c||this instanceof H||this instanceof V))return C(c)},set:function(t){t=t.toString(),c=t}});var f=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(f)return this instanceof D==!1?C(f):f},set:function(t){t=t.toString(),f=this instanceof D==!1?"("===t.substr(0,1)?y(t.substr(1,t.length-2)):y(t):t}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof D==!0?y(f.substr(1,f.length-1)):f},set:function(t){t=t.toString(),f=this instanceof D==!0?"/"+t:t}});var p=null;Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(p)return this instanceof D==!1?C(p):p},set:function(t){t=t.toString(),p=this instanceof D==!1?"("===t.substr(0,1)?y(t.substr(1,t.length-2)):y(t):t}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof D==!0?y(p.substr(1,p.length-1)):p},set:function(t){t=t.toString(),p=this instanceof D==!0?"/"+t:t}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var d,g=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,writeable:!0,get:function(){return g},set:function(t){t=Boolean(t),g=t}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,writeable:!0,get:function(){if(d)return d},set:function(t){d=t}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,1))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,1):this.Ff=N(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,2))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,2):this.Ff=N(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,3))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,3):this.Ff=N(this.Ff,3)}});var m=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(null!==m)return m},set:function(t){if(-1===[0,1,2].indexOf(t))throw new Error('Invalid value "'+t+'" for attribute Q supplied.');m=t}}),Object.defineProperty(this,"textAlign",{get:function(){var t="left";switch(m){case 0:default:t="left";break;case 1:t="center";break;case 2:t="right"}return t},configurable:!0,enumerable:!0,set:function(t){switch(t){case"right":case 2:m=2;break;case"center":case 1:m=1;break;case"left":case 0:default:m=0}}})};r(M,B);var O=function(){M.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var e=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){e=t}});var r=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return I(r)},set:function(t){var e,n;n=[],"string"==typeof(e=t)&&(n=function(t,e,n){n||(n=1);for(var r,i=[];r=e.exec(t);)i.push(r[n]);return i}(e,/\((.*?)\)/g)),r=n}}),this.getOptions=function(){return r},this.setOptions=function(t){r=t,this.sort&&r.sort()},this.addOption=function(t){t=(t=t||"").toString(),r.push(t),this.sort&&r.sort()},this.removeOption=function(t,e){for(e=e||!1,t=(t=t||"").toString();-1!==r.indexOf(t)&&(r.splice(r.indexOf(t),1),!1!==e););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,18))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,18):this.Ff=N(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,19))},set:function(t){!0===this.combo&&(!0===Boolean(t)?this.Ff=x(this.Ff,19):this.Ff=N(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,20))},set:function(t){!0===Boolean(t)?(this.Ff=x(this.Ff,20),r.sort()):this.Ff=N(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,22))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,22):this.Ff=N(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,23):this.Ff=N(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,27))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,27):this.Ff=N(this.Ff,27)}}),this.hasAppearanceStream=!1};r(O,M);var q=function(){O.call(this),this.fontName="helvetica",this.combo=!1};r(q,O);var T=function(){q.call(this),this.combo=!0};r(T,q);var R=function(){T.call(this),this.edit=!0};r(R,T);var D=function(){M.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,15))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,15):this.Ff=N(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,16))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,16):this.Ff=N(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,17))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,17):this.Ff=N(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,26):this.Ff=N(this.Ff,26)}});var e,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){if(0!==Object.keys(n).length){var t,e=[];for(t in e.push("<<"),n)e.push("/"+t+" ("+n[t]+")");return e.push(">>"),e.join("\n")}},set:function(t){"object"===se(t)&&(n=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(t){"string"==typeof t&&(n.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return e.substr(1,e.length-1)},set:function(t){e="/"+t}})};r(D,M);var U=function(){D.call(this),this.pushButton=!0};r(U,D);var z=function(){D.call(this),this.radio=!0,this.pushButton=!1;var e=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=void 0!==t?t:[]}})};r(z,D);var H=function(){var e,n;M.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t}});var r,i={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var t,e=[];for(t in e.push("<<"),i)e.push("/"+t+" ("+i[t]+")");return e.push(">>"),e.join("\n")},set:function(t){"object"===se(t)&&(i=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return i.CA||""},set:function(t){"string"==typeof t&&(i.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(t){r=t}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(t){r="/"+t}}),this.optionName=name,this.caption="l",this.appearanceState="Off",this._AppearanceType=Y.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(name)};r(H,M),z.prototype.setAppearance=function(t){if(!("createAppearanceStream"in t&&"getCA"in t))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var e in this.Kids)if(this.Kids.hasOwnProperty(e)){var n=this.Kids[e];n.appearanceStreamContent=t.createAppearanceStream(n.optionName),n.caption=t.getCA()}},z.prototype.createOption=function(t){this.Kids.length;var e=new H;return e.Parent=this,e.optionName=t,this.Kids.push(e),J.call(this,e),e};var W=function(){D.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Y.CheckBox.createAppearanceStream()};r(W,D);var V=function(){M.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,13))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,13):this.Ff=N(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,21))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,21):this.Ff=N(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,23):this.Ff=N(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,24))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,24):this.Ff=N(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,25))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,25):this.Ff=N(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,26):this.Ff=N(this.Ff,26)}});var e=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return e},set:function(t){Number.isInteger(t)&&(e=t)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};r(V,M);var G=function(){V.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return Boolean(b(this.Ff,14))},set:function(t){!0===Boolean(t)?this.Ff=x(this.Ff,14):this.Ff=N(this.Ff,14)}}),this.password=!0};r(G,V);var Y={CheckBox:{createAppearanceStream:function(){return{N:{On:Y.CheckBox.YesNormal},D:{On:Y.CheckBox.YesPushDown,Off:Y.CheckBox.OffPushDown}}},YesPushDown:function(t){var e=l(t),n=[],r=A.internal.getFont(t.fontName,t.fontStyle).id,i=A.__private__.encodeColorString(t.color),o=h(t,t.caption);return n.push("0.749023 g"),n.push("0 0 "+_(Y.internal.getWidth(t))+" "+_(Y.internal.getHeight(t))+" re"),n.push("f"),n.push("BMC"),n.push("q"),n.push("0 0 1 rg"),n.push("/"+r+" "+_(o.fontSize)+" Tf "+i),n.push("BT"),n.push(o.text),n.push("ET"),n.push("Q"),n.push("EMC"),e.stream=n.join("\n"),e},YesNormal:function(t){var e=l(t),n=A.internal.getFont(t.fontName,t.fontStyle).id,r=A.__private__.encodeColorString(t.color),i=[],o=Y.internal.getHeight(t),a=Y.internal.getWidth(t),s=h(t,t.caption);return i.push("1 g"),i.push("0 0 "+_(a)+" "+_(o)+" re"),i.push("f"),i.push("q"),i.push("0 0 1 rg"),i.push("0 0 "+_(a-1)+" "+_(o-1)+" re"),i.push("W"),i.push("n"),i.push("0 g"),i.push("BT"),i.push("/"+n+" "+_(s.fontSize)+" Tf "+r),i.push(s.text),i.push("ET"),i.push("Q"),e.stream=i.join("\n"),e},OffPushDown:function(t){var e=l(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+_(Y.internal.getWidth(t))+" "+_(Y.internal.getHeight(t))+" re"),n.push("f"),e.stream=n.join("\n"),e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:Y.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=Y.RadioButton.Circle.YesNormal,e.D[t]=Y.RadioButton.Circle.YesPushDown,e},getCA:function(){return"l"},YesNormal:function(t){var e=l(t),n=[],r=Y.internal.getWidth(t)<=Y.internal.getHeight(t)?Y.internal.getWidth(t)/4:Y.internal.getHeight(t)/4;r=Number((.9*r).toFixed(5));var i=Y.internal.Bezier_C,o=Number((r*i).toFixed(5));return n.push("q"),n.push("1 0 0 1 "+s(Y.internal.getWidth(t)/2)+" "+s(Y.internal.getHeight(t)/2)+" cm"),n.push(r+" 0 m"),n.push(r+" "+o+" "+o+" "+r+" 0 "+r+" c"),n.push("-"+o+" "+r+" -"+r+" "+o+" -"+r+" 0 c"),n.push("-"+r+" -"+o+" -"+o+" -"+r+" 0 -"+r+" c"),n.push(o+" -"+r+" "+r+" -"+o+" "+r+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e},YesPushDown:function(t){var e=l(t),n=[],r=Y.internal.getWidth(t)<=Y.internal.getHeight(t)?Y.internal.getWidth(t)/4:Y.internal.getHeight(t)/4,i=(r=Number((.9*r).toFixed(5)),Number((2*r).toFixed(5))),o=Number((i*Y.internal.Bezier_C).toFixed(5)),a=Number((r*Y.internal.Bezier_C).toFixed(5));return n.push("0.749023 g"),n.push("q"),n.push("1 0 0 1 "+s(Y.internal.getWidth(t)/2)+" "+s(Y.internal.getHeight(t)/2)+" cm"),n.push(i+" 0 m"),n.push(i+" "+o+" "+o+" "+i+" 0 "+i+" c"),n.push("-"+o+" "+i+" -"+i+" "+o+" -"+i+" 0 c"),n.push("-"+i+" -"+o+" -"+o+" -"+i+" 0 -"+i+" c"),n.push(o+" -"+i+" "+i+" -"+o+" "+i+" 0 c"),n.push("f"),n.push("Q"),n.push("0 g"),n.push("q"),n.push("1 0 0 1 "+s(Y.internal.getWidth(t)/2)+" "+s(Y.internal.getHeight(t)/2)+" cm"),n.push(r+" 0 m"),n.push(r+" "+a+" "+a+" "+r+" 0 "+r+" c"),n.push("-"+a+" "+r+" -"+r+" "+a+" -"+r+" 0 c"),n.push("-"+r+" -"+a+" -"+a+" -"+r+" 0 -"+r+" c"),n.push(a+" -"+r+" "+r+" -"+a+" "+r+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e},OffPushDown:function(t){var e=l(t),n=[],r=Y.internal.getWidth(t)<=Y.internal.getHeight(t)?Y.internal.getWidth(t)/4:Y.internal.getHeight(t)/4,i=(r=Number((.9*r).toFixed(5)),Number((2*r).toFixed(5))),o=Number((i*Y.internal.Bezier_C).toFixed(5));return n.push("0.749023 g"),n.push("q"),n.push("1 0 0 1 "+s(Y.internal.getWidth(t)/2)+" "+s(Y.internal.getHeight(t)/2)+" cm"),n.push(i+" 0 m"),n.push(i+" "+o+" "+o+" "+i+" 0 "+i+" c"),n.push("-"+o+" "+i+" -"+i+" "+o+" -"+i+" 0 c"),n.push("-"+i+" -"+o+" -"+o+" -"+i+" 0 -"+i+" c"),n.push(o+" -"+i+" "+i+" -"+o+" "+i+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:Y.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=Y.RadioButton.Cross.YesNormal,e.D[t]=Y.RadioButton.Cross.YesPushDown,e},getCA:function(){return"8"},YesNormal:function(t){var e=l(t),n=[],r=Y.internal.calculateCross(t);return n.push("q"),n.push("1 1 "+_(Y.internal.getWidth(t)-2)+" "+_(Y.internal.getHeight(t)-2)+" re"),n.push("W"),n.push("n"),n.push(_(r.x1.x)+" "+_(r.x1.y)+" m"),n.push(_(r.x2.x)+" "+_(r.x2.y)+" l"),n.push(_(r.x4.x)+" "+_(r.x4.y)+" m"),n.push(_(r.x3.x)+" "+_(r.x3.y)+" l"),n.push("s"),n.push("Q"),e.stream=n.join("\n"),e},YesPushDown:function(t){var e=l(t),n=Y.internal.calculateCross(t),r=[];return r.push("0.749023 g"),r.push("0 0 "+_(Y.internal.getWidth(t))+" "+_(Y.internal.getHeight(t))+" re"),r.push("f"),r.push("q"),r.push("1 1 "+_(Y.internal.getWidth(t)-2)+" "+_(Y.internal.getHeight(t)-2)+" re"),r.push("W"),r.push("n"),r.push(_(n.x1.x)+" "+_(n.x1.y)+" m"),r.push(_(n.x2.x)+" "+_(n.x2.y)+" l"),r.push(_(n.x4.x)+" "+_(n.x4.y)+" m"),r.push(_(n.x3.x)+" "+_(n.x3.y)+" l"),r.push("s"),r.push("Q"),e.stream=r.join("\n"),e},OffPushDown:function(t){var e=l(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+_(Y.internal.getWidth(t))+" "+_(Y.internal.getHeight(t))+" re"),n.push("f"),e.stream=n.join("\n"),e}}},createDefaultAppearanceStream:function(t){var e=A.internal.getFont(t.fontName,t.fontStyle).id,n=A.__private__.encodeColorString(t.color);return"/"+e+" "+t.fontSize+" Tf "+n}};Y.internal={Bezier_C:.551915024494,calculateCross:function(t){var e=Y.internal.getWidth(t),n=Y.internal.getHeight(t),r=Math.min(e,n);return{x1:{x:(e-r)/2,y:(n-r)/2+r},x2:{x:(e-r)/2+r,y:(n-r)/2},x3:{x:(e-r)/2,y:(n-r)/2},x4:{x:(e-r)/2+r,y:(n-r)/2+r}}}},Y.internal.getWidth=function(t){var e=0;return"object"===se(t)&&(e=v(t.Rect[2])),e},Y.internal.getHeight=function(t){var e=0;return"object"===se(t)&&(e=v(t.Rect[3])),e};var J=t.addField=function(t){if(k.call(this),!(t instanceof M))throw new Error("Invalid argument passed to jsPDF.addField.");return function(t){A.internal.acroformPlugin.printedOut&&(A.internal.acroformPlugin.printedOut=!1,A.internal.acroformPlugin.acroFormDictionaryRoot=null),A.internal.acroformPlugin.acroFormDictionaryRoot||k.call(A),A.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t)}.call(this,t),t.page=A.internal.getCurrentPageInfo().pageNumber,this};t.addButton=function(t){if(t instanceof D==!1)throw new Error("Invalid argument passed to jsPDF.addButton.");return J.call(this,t)},t.addTextField=function(t){if(t instanceof V==!1)throw new Error("Invalid argument passed to jsPDF.addTextField.");return J.call(this,t)},t.addChoiceField=function(t){if(t instanceof O==!1)throw new Error("Invalid argument passed to jsPDF.addChoiceField.");return J.call(this,t)};"object"==se(e)&&void 0===e.ChoiceField&&void 0===e.ListBox&&void 0===e.ComboBox&&void 0===e.EditBox&&void 0===e.Button&&void 0===e.PushButton&&void 0===e.RadioButton&&void 0===e.CheckBox&&void 0===e.TextField&&void 0===e.PasswordField?(e.ChoiceField=O,e.ListBox=q,e.ComboBox=T,e.EditBox=R,e.Button=D,e.PushButton=U,e.RadioButton=z,e.CheckBox=W,e.TextField=V,e.PasswordField=G,e.AcroForm={Appearance:Y}):console.warn("AcroForm-Classes are not populated into global-namespace, because the class-Names exist already."),t.AcroFormChoiceField=O,t.AcroFormListBox=q,t.AcroFormComboBox=T,t.AcroFormEditBox=R,t.AcroFormButton=D,t.AcroFormPushButton=U,t.AcroFormRadioButton=z,t.AcroFormCheckBox=W,t.AcroFormTextField=V,t.AcroFormPasswordField=G,t.AcroFormAppearance=Y,t.AcroForm={ChoiceField:O,ListBox:q,ComboBox:T,EditBox:R,Button:D,PushButton:U,RadioButton:z,CheckBox:W,TextField:V,PasswordField:G,Appearance:Y}})((window.tmp=lt).API,"undefined"!=typeof window&&window||"undefined"!=typeof global&&global),
/** @license
   * jsPDF addImage plugin
   * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
   *               2013 Chris Dowling, https://github.com/gingerchris
   *               2013 Trinh Ho, https://github.com/ineedfat
   *               2013 Edwin Alejandro Perez, https://github.com/eaparango
   *               2013 Norah Smith, https://github.com/burnburnrocket
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   */
function(x){var N="addImage_",l={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},h=x.getImageFileTypeByImageData=function(t,e){var n,r;e=e||"UNKNOWN";var i,o,a,s="UNKNOWN";for(a in x.isArrayBufferView(t)&&(t=x.arrayBufferToBinaryString(t)),l)for(i=l[a],n=0;n<i.length;n+=1){for(o=!0,r=0;r<i[n].length;r+=1)if(void 0!==i[n][r]&&i[n][r]!==t.charCodeAt(r)){o=!1;break}if(!0===o){s=a;break}}return"UNKNOWN"===s&&"UNKNOWN"!==e&&(console.warn('FileType of Image not recognized. Processing image as "'+e+'".'),s=e),s},n=function t(e){for(var n=this.internal.newObject(),r=this.internal.write,i=this.internal.putStream,o=(0,this.internal.getFilters)();-1!==o.indexOf("FlateEncode");)o.splice(o.indexOf("FlateEncode"),1);e.n=n;var a=[];if(a.push({key:"Type",value:"/XObject"}),a.push({key:"Subtype",value:"/Image"}),a.push({key:"Width",value:e.w}),a.push({key:"Height",value:e.h}),e.cs===this.color_spaces.INDEXED?a.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(e.pal.length/3-1)+" "+("smask"in e?n+2:n+1)+" 0 R]"}):(a.push({key:"ColorSpace",value:"/"+e.cs}),e.cs===this.color_spaces.DEVICE_CMYK&&a.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),a.push({key:"BitsPerComponent",value:e.bpc}),"dp"in e&&a.push({key:"DecodeParms",value:"<<"+e.dp+">>"}),"trns"in e&&e.trns.constructor==Array){for(var s="",l=0,h=e.trns.length;l<h;l++)s+=e.trns[l]+" "+e.trns[l]+" ";a.push({key:"Mask",value:"["+s+"]"})}"smask"in e&&a.push({key:"SMask",value:n+1+" 0 R"});var u=void 0!==e.f?["/"+e.f]:void 0;if(i({data:e.data,additionalKeyValues:a,alreadyAppliedFilters:u}),r("endobj"),"smask"in e){var c="/Predictor "+e.p+" /Colors 1 /BitsPerComponent "+e.bpc+" /Columns "+e.w,f={w:e.w,h:e.h,cs:"DeviceGray",bpc:e.bpc,dp:c,data:e.smask};"f"in e&&(f.f=e.f),t.call(this,f)}e.cs===this.color_spaces.INDEXED&&(this.internal.newObject(),i({data:this.arrayBufferToBinaryString(new Uint8Array(e.pal))}),r("endobj"))},L=function(){var t=this.internal.collections[N+"images"];for(var e in t)n.call(this,t[e])},A=function(){var t,e=this.internal.collections[N+"images"],n=this.internal.write;for(var r in e)n("/I"+(t=e[r]).i,t.n,"0","R")},S=function(t){return"function"==typeof x["process"+t.toUpperCase()]},_=function(t){return"object"===se(t)&&1===t.nodeType},F=function(t,e){if("IMG"===t.nodeName&&t.hasAttribute("src")){var n=""+t.getAttribute("src");if(0===n.indexOf("data:image/"))return unescape(n);var r=x.loadFile(n);if(void 0!==r)return btoa(r)}if("CANVAS"===t.nodeName){var i=t;return t.toDataURL("image/jpeg",1)}(i=document.createElement("canvas")).width=t.clientWidth||t.width,i.height=t.clientHeight||t.height;var o=i.getContext("2d");if(!o)throw"addImage requires canvas to be supported by browser.";return o.drawImage(t,0,0,i.width,i.height),i.toDataURL("png"==(""+e).toLowerCase()?"image/png":"image/jpeg")},P=function(t,e){var n;if(e)for(var r in e)if(t===e[r].alias){n=e[r];break}return n};x.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"},x.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"},x.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},x.sHashCode=function(t){var e,n=0;if(0===(t=t||"").length)return n;for(e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return n},x.isString=function(t){return"string"==typeof t},x.validateStringAsBase64=function(t){(t=t||"").toString().trim();var e=!0;return 0===t.length&&(e=!1),t.length%4!=0&&(e=!1),!1===/^[A-Za-z0-9+\/]+$/.test(t.substr(0,t.length-2))&&(e=!1),!1===/^[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==$/.test(t.substr(-2))&&(e=!1),e},x.extractInfoFromBase64DataURI=function(t){return/^data:([\w]+?\/([\w]+?));\S*;*base64,(.+)$/g.exec(t)},x.extractImageFromDataUrl=function(t){var e=(t=t||"").split("base64,"),n=null;if(2===e.length){var r=/^data:(\w*\/\w*);*(charset=[\w=-]*)*;*$/.exec(e[0]);Array.isArray(r)&&(n={mimeType:r[1],charset:r[2],data:e[1]})}return n},x.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array},x.isArrayBuffer=function(t){return!!this.supportsArrayBuffer()&&t instanceof ArrayBuffer},x.isArrayBufferView=function(t){return!!this.supportsArrayBuffer()&&("undefined"!=typeof Uint32Array&&(t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array))},x.binaryStringToUint8Array=function(t){for(var e=t.length,n=new Uint8Array(e),r=0;r<e;r++)n[r]=t.charCodeAt(r);return n},x.arrayBufferToBinaryString=function(t){if("function"==typeof atob)return atob(this.arrayBufferToBase64(t))},x.arrayBufferToBase64=function(t){for(var e,n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=new Uint8Array(t),o=i.byteLength,a=o%3,s=o-a,l=0;l<s;l+=3)n+=r[(16515072&(e=i[l]<<16|i[l+1]<<8|i[l+2]))>>18]+r[(258048&e)>>12]+r[(4032&e)>>6]+r[63&e];return 1==a?n+=r[(252&(e=i[s]))>>2]+r[(3&e)<<4]+"==":2==a&&(n+=r[(64512&(e=i[s]<<8|i[s+1]))>>10]+r[(1008&e)>>4]+r[(15&e)<<2]+"="),n},x.createImageInfo=function(t,e,n,r,i,o,a,s,l,h,u,c,f){var p={alias:s,w:e,h:n,cs:r,bpc:i,i:a,data:t};return o&&(p.f=o),l&&(p.dp=l),h&&(p.trns=h),u&&(p.pal=u),c&&(p.smask=c),f&&(p.p=f),p},x.addImage=function(t,e,n,r,i,o,a,s,l){var h="";if("string"!=typeof e){var u=o;o=i,i=r,r=n,n=e,e=u}if("object"===se(t)&&!_(t)&&"imageData"in t){var c=t;t=c.imageData,e=c.format||e||"UNKNOWN",n=c.x||n||0,r=c.y||r||0,i=c.w||i,o=c.h||o,a=c.alias||a,s=c.compression||s,l=c.rotation||c.angle||l}var f=this.internal.getFilters();if(void 0===s&&-1!==f.indexOf("FlateEncode")&&(s="SLOW"),"string"==typeof t&&(t=unescape(t)),isNaN(n)||isNaN(r))throw console.error("jsPDF.addImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addImage");var p,d,g,m,y,v,w,b=function(){var t=this.internal.collections[N+"images"];return t||(this.internal.collections[N+"images"]=t={},this.internal.events.subscribe("putResources",L),this.internal.events.subscribe("putXobjectDict",A)),t}.call(this);if(!((p=P(t,b))||(_(t)&&(t=F(t,e)),(null==(w=a)||0===w.length)&&(a="string"==typeof(v=t)?x.sHashCode(v):x.isArrayBufferView(v)?x.sHashCode(x.arrayBufferToBinaryString(v)):null),p=P(a,b)))){if(this.isString(t)&&(""!==(h=this.convertStringToImageData(t))?t=h:void 0!==(h=x.loadFile(t))&&(t=h)),e=this.getImageFileTypeByImageData(t,e),!S(e))throw new Error("addImage does not support files of type '"+e+"', please ensure that a plugin for '"+e+"' support is added.");if(this.supportsArrayBuffer()&&(t instanceof Uint8Array||(d=t,t=this.binaryStringToUint8Array(t))),!(p=this["process"+e.toUpperCase()](t,(y=0,(m=b)&&(y=Object.keys?Object.keys(m).length:function(t){var e=0;for(var n in t)t.hasOwnProperty(n)&&e++;return e}(m)),y),a,((g=s)&&"string"==typeof g&&(g=g.toUpperCase()),g in x.image_compression?g:x.image_compression.NONE),d)))throw new Error("An unknown error occurred whilst processing the image")}return function(t,e,n,r,i,o,a,s){var l=function(t,e,n){return t||e||(e=t=-96),t<0&&(t=-1*n.w*72/t/this.internal.scaleFactor),e<0&&(e=-1*n.h*72/e/this.internal.scaleFactor),0===t&&(t=e*n.w/n.h),0===e&&(e=t*n.h/n.w),[t,e]}.call(this,n,r,i),h=this.internal.getCoordinateString,u=this.internal.getVerticalCoordinateString;if(n=l[0],r=l[1],a[o]=i,s){s*=Math.PI/180;var c=Math.cos(s),f=Math.sin(s),p=function(t){return t.toFixed(4)},d=[p(c),p(f),p(-1*f),p(c),0,0,"cm"]}this.internal.write("q"),s?(this.internal.write([1,"0","0",1,h(t),u(e+r),"cm"].join(" ")),this.internal.write(d.join(" ")),this.internal.write([h(n),"0","0",h(r),"0","0","cm"].join(" "))):this.internal.write([h(n),"0","0",h(r),h(t),u(e+r),"cm"].join(" ")),this.internal.write("/I"+i.i+" Do"),this.internal.write("Q")}.call(this,n,r,i,o,p,p.i,b,l),this},x.convertStringToImageData=function(t){var e,n="";if(this.isString(t)){var r;e=null!==(r=this.extractImageFromDataUrl(t))?r.data:t;try{n=atob(e)}catch(t){throw x.validateStringAsBase64(e)?new Error("atob-Error in jsPDF.convertStringToImageData "+t.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertStringToImageData ")}}return n};var u=function(t,e){return t.subarray(e,e+5)};x.processJPEG=function(t,e,n,r,i,o){var a,s=this.decode.DCT_DECODE;if(!this.isString(t)&&!this.isArrayBuffer(t)&&!this.isArrayBufferView(t))return null;if(this.isString(t)&&(a=function(t){var e;if("JPEG"!==h(t))throw new Error("getJpegSize requires a binary string jpeg file");for(var n=256*t.charCodeAt(4)+t.charCodeAt(5),r=4,i=t.length;r<i;){if(r+=n,255!==t.charCodeAt(r))throw new Error("getJpegSize could not find the size of the image");if(192===t.charCodeAt(r+1)||193===t.charCodeAt(r+1)||194===t.charCodeAt(r+1)||195===t.charCodeAt(r+1)||196===t.charCodeAt(r+1)||197===t.charCodeAt(r+1)||198===t.charCodeAt(r+1)||199===t.charCodeAt(r+1))return e=256*t.charCodeAt(r+5)+t.charCodeAt(r+6),[256*t.charCodeAt(r+7)+t.charCodeAt(r+8),e,t.charCodeAt(r+9)];r+=2,n=256*t.charCodeAt(r)+t.charCodeAt(r+1)}}(t)),this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)&&(a=function(t){if(65496!=(t[0]<<8|t[1]))throw new Error("Supplied data is not a JPEG");for(var e,n=t.length,r=(t[4]<<8)+t[5],i=4;i<n;){if(r=((e=u(t,i+=r))[2]<<8)+e[3],(192===e[1]||194===e[1])&&255===e[0]&&7<r)return{width:((e=u(t,i+5))[2]<<8)+e[3],height:(e[0]<<8)+e[1],numcomponents:e[4]};i+=2}throw new Error("getJpegSizeFromBytes could not find the size of the image")}(t),t=i||this.arrayBufferToBinaryString(t)),void 0===o)switch(a.numcomponents){case 1:o=this.color_spaces.DEVICE_GRAY;break;case 4:o=this.color_spaces.DEVICE_CMYK;break;default:case 3:o=this.color_spaces.DEVICE_RGB}return this.createImageInfo(t,a.width,a.height,o,8,s,e,n)},x.processJPG=function(){return this.processJPEG.apply(this,arguments)},x.getImageProperties=function(t){var e,n,r="";if(_(t)&&(t=F(t)),this.isString(t)&&(""!==(r=this.convertStringToImageData(t))?t=r:void 0!==(r=x.loadFile(t))&&(t=r)),n=this.getImageFileTypeByImageData(t),!S(n))throw new Error("addImage does not support files of type '"+n+"', please ensure that a plugin for '"+n+"' support is added.");if(this.supportsArrayBuffer()&&(t instanceof Uint8Array||(t=this.binaryStringToUint8Array(t))),!(e=this["process"+n.toUpperCase()](t)))throw new Error("An unknown error occurred whilst processing the image");return{fileType:n,width:e.w,height:e.h,colorSpace:e.cs,compressionMode:e.f,bitsPerComponent:e.bpc}}}(lt.API),
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
t=lt.API,lt.API.events.push(["addPage",function(t){this.internal.getPageInfo(t.pageNumber).pageContext.annotations=[]}]),t.events.push(["putPage",function(t){for(var e=this.internal.getPageInfoByObjId(t.objId),n=t.pageContext.annotations,r=function(t){if(void 0!==t&&""!=t)return!0},i=!1,o=0;o<n.length&&!i;o++)switch((l=n[o]).type){case"link":if(r(l.options.url)||r(l.options.pageNumber)){i=!0;break}case"reference":case"text":case"freetext":i=!0}if(0!=i){this.internal.write("/Annots ["),this.internal.pageSize.height;var a=this.internal.getCoordinateString,s=this.internal.getVerticalCoordinateString;for(o=0;o<n.length;o++){var l;switch((l=n[o]).type){case"reference":this.internal.write(" "+l.object.objId+" 0 R ");break;case"text":var h=this.internal.newAdditionalObject(),u=this.internal.newAdditionalObject(),c=l.title||"Note";m="<</Type /Annot /Subtype /Text "+(p="/Rect ["+a(l.bounds.x)+" "+s(l.bounds.y+l.bounds.h)+" "+a(l.bounds.x+l.bounds.w)+" "+s(l.bounds.y)+"] ")+"/Contents ("+l.contents+")",m+=" /Popup "+u.objId+" 0 R",m+=" /P "+e.objId+" 0 R",m+=" /T ("+c+") >>",h.content=m;var f=h.objId+" 0 R";m="<</Type /Annot /Subtype /Popup "+(p="/Rect ["+a(l.bounds.x+30)+" "+s(l.bounds.y+l.bounds.h)+" "+a(l.bounds.x+l.bounds.w+30)+" "+s(l.bounds.y)+"] ")+" /Parent "+f,l.open&&(m+=" /Open true"),m+=" >>",u.content=m,this.internal.write(h.objId,"0 R",u.objId,"0 R");break;case"freetext":var p="/Rect ["+a(l.bounds.x)+" "+s(l.bounds.y)+" "+a(l.bounds.x+l.bounds.w)+" "+s(l.bounds.y+l.bounds.h)+"] ",d=l.color||"#000000";m="<</Type /Annot /Subtype /FreeText "+p+"/Contents ("+l.contents+")",m+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+d+")",m+=" /Border [0 0 0]",m+=" >>",this.internal.write(m);break;case"link":if(l.options.name){var g=this.annotations._nameMap[l.options.name];l.options.pageNumber=g.page,l.options.top=g.y}else l.options.top||(l.options.top=0);p="/Rect ["+a(l.x)+" "+s(l.y)+" "+a(l.x+l.w)+" "+s(l.y+l.h)+"] ";var m="";if(l.options.url)m="<</Type /Annot /Subtype /Link "+p+"/Border [0 0 0] /A <</S /URI /URI ("+l.options.url+") >>";else if(l.options.pageNumber)switch(m="<</Type /Annot /Subtype /Link "+p+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(l.options.pageNumber).objId+" 0 R",l.options.magFactor=l.options.magFactor||"XYZ",l.options.magFactor){case"Fit":m+=" /Fit]";break;case"FitH":m+=" /FitH "+l.options.top+"]";break;case"FitV":l.options.left=l.options.left||0,m+=" /FitV "+l.options.left+"]";break;case"XYZ":default:var y=s(l.options.top);l.options.left=l.options.left||0,void 0===l.options.zoom&&(l.options.zoom=0),m+=" /XYZ "+l.options.left+" "+y+" "+l.options.zoom+"]"}""!=m&&(m+=" >>",this.internal.write(m))}}this.internal.write("]")}}]),t.createAnnotation=function(t){var e=this.internal.getCurrentPageInfo();switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":e.pageContext.annotations.push(t)}},t.link=function(t,e,n,r,i){this.internal.getCurrentPageInfo().pageContext.annotations.push({x:t,y:e,w:n,h:r,options:i,type:"link"})},t.textWithLink=function(t,e,n,r){var i=this.getTextWidth(t),o=this.internal.getLineHeight()/this.internal.scaleFactor;return this.text(t,e,n),n+=.2*o,this.link(e,n-o,i,o,r),i},t.getTextWidth=function(t){var e=this.internal.getFontSize();return this.getStringUnitWidth(t)*e/this.internal.scaleFactor},
/**
   * @license
   * Copyright (c) 2017 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){var h={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},a={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},e={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},n=[1570,1571,1573,1575];t.__arabicParser__={};var r=t.__arabicParser__.isInArabicSubstitutionA=function(t){return void 0!==h[t.charCodeAt(0)]},u=t.__arabicParser__.isArabicLetter=function(t){return"string"==typeof t&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)},i=t.__arabicParser__.isArabicEndLetter=function(t){return u(t)&&r(t)&&h[t.charCodeAt(0)].length<=2},o=t.__arabicParser__.isArabicAlfLetter=function(t){return u(t)&&0<=n.indexOf(t.charCodeAt(0))},s=(t.__arabicParser__.arabicLetterHasIsolatedForm=function(t){return u(t)&&r(t)&&1<=h[t.charCodeAt(0)].length},t.__arabicParser__.arabicLetterHasFinalForm=function(t){return u(t)&&r(t)&&2<=h[t.charCodeAt(0)].length}),l=(t.__arabicParser__.arabicLetterHasInitialForm=function(t){return u(t)&&r(t)&&3<=h[t.charCodeAt(0)].length},t.__arabicParser__.arabicLetterHasMedialForm=function(t){return u(t)&&r(t)&&4==h[t.charCodeAt(0)].length}),c=t.__arabicParser__.resolveLigatures=function(t){var e=0,n=a,r=0,i="",o=0;for(e=0;e<t.length;e+=1)void 0!==n[t.charCodeAt(e)]?(o++,"number"==typeof(n=n[t.charCodeAt(e)])&&(r=-1!==(r=f(t.charAt(e),t.charAt(e-o),t.charAt(e+1)))?r:0,i+=String.fromCharCode(n),n=a,o=0),e===t.length-1&&(n=a,i+=t.charAt(e-(o-1)),e-=o-1,o=0)):(n=a,i+=t.charAt(e-o),e-=o,o=0);return i},f=(t.__arabicParser__.isArabicDiacritic=function(t){return void 0!==t&&void 0!==e[t.charCodeAt(0)]},t.__arabicParser__.getCorrectForm=function(t,e,n){return u(t)?!1===r(t)?-1:!s(t)||!u(e)&&!u(n)||!u(n)&&i(e)||i(t)&&!u(e)||i(t)&&o(e)||i(t)&&i(e)?0:l(t)&&u(e)&&!i(e)&&u(n)&&s(n)?3:i(t)||!u(n)?1:2:-1}),p=t.__arabicParser__.processArabic=t.processArabic=function(t){var e=0,n=0,r=0,i="",o="",a="",s=(t=t||"").split("\\s+"),l=[];for(e=0;e<s.length;e+=1){for(l.push(""),n=0;n<s[e].length;n+=1)i=s[e][n],o=s[e][n-1],a=s[e][n+1],u(i)?(r=f(i,o,a),l[e]+=-1!==r?String.fromCharCode(h[i.charCodeAt(0)][r]):i):l[e]+=i;l[e]=c(l[e])}return l.join(" ")};t.events.push(["preProcessText",function(t){var e=t.text,n=(t.x,t.y,t.options||{}),r=(t.mutex,n.lang,[]);if("[object Array]"===Object.prototype.toString.call(e)){var i=0;for(r=[],i=0;i<e.length;i+=1)"[object Array]"===Object.prototype.toString.call(e[i])?r.push([p(e[i][0]),e[i][1],e[i][2]]):r.push([p(e[i])]);t.text=r}else t.text=p(e)}])}(lt.API),lt.API.autoPrint=function(t){var e;switch((t=t||{}).variant=t.variant||"non-conform",t.variant){case"javascript":this.addJS("print({});");break;case"non-conform":default:this.internal.events.subscribe("postPutResources",function(){e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+e+" 0 R")})}return this},
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
e=lt.API,(n=function(){var e=void 0;Object.defineProperty(this,"pdf",{get:function(){return e},set:function(t){e=t}});var n=150;Object.defineProperty(this,"width",{get:function(){return n},set:function(t){n=isNaN(t)||!1===Number.isInteger(t)||t<0?150:t,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=n+1)}});var r=300;Object.defineProperty(this,"height",{get:function(){return r},set:function(t){r=isNaN(t)||!1===Number.isInteger(t)||t<0?300:t,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=r+1)}});var i=[];Object.defineProperty(this,"childNodes",{get:function(){return i},set:function(t){i=t}});var o={};Object.defineProperty(this,"style",{get:function(){return o},set:function(t){o=t}}),Object.defineProperty(this,"parentNode",{get:function(){return!1}})}).prototype.getContext=function(t,e){var n;if("2d"!==(t=t||"2d"))return null;for(n in e)this.pdf.context2d.hasOwnProperty(n)&&(this.pdf.context2d[n]=e[n]);return(this.pdf.context2d._canvas=this).pdf.context2d},n.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},e.events.push(["initialized",function(){this.canvas=new n,this.canvas.pdf=this}]),
/** 
   * @license
   * ====================================================================
   * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
   *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Hall, james@parall.ax
   *               2014 Diego Casorran, https://github.com/diegocr
   *
   * 
   * ====================================================================
   */
_=lt.API,F={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},P=1,p=function(t,e,n,r,i){F={x:t,y:e,w:n,h:r,ln:i}},d=function(){return F},k={left:0,top:0,bottom:0},_.setHeaderFunction=function(t){l=t},_.getTextDimensions=function(t,e){var n=this.table_font_size||this.internal.getFontSize(),r=(this.internal.getFont().fontStyle,(e=e||{}).scaleFactor||this.internal.scaleFactor),i=0,o=0,a=0;if("string"==typeof t)0!=(i=this.getStringUnitWidth(t)*n)&&(o=1);else{if("[object Array]"!==Object.prototype.toString.call(t))throw new Error("getTextDimensions expects text-parameter to be of type String or an Array of Strings.");for(var s=0;s<t.length;s++)i<(a=this.getStringUnitWidth(t[s])*n)&&(i=a);0!==i&&(o=t.length)}return{w:i/=r,h:Math.max((o*n*this.getLineHeightFactor()-n*(this.getLineHeightFactor()-1))/r,0)}},_.cellAddPage=function(){var t=this.margins||k;this.addPage(),p(t.left,t.top,void 0,void 0),P+=1},_.cellInitialize=function(){F={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},P=1},_.cell=function(t,e,n,r,i,o,a){var s=d(),l=!1;if(void 0!==s.ln)if(s.ln===o)t=s.x+s.w,e=s.y;else{var h=this.margins||k;s.y+s.h+r+13>=this.internal.pageSize.getHeight()-h.bottom&&(this.cellAddPage(),l=!0,this.printHeaders&&this.tableHeaderRow&&this.printHeaderRow(o,!0)),e=d().y+d().h,l&&(e=23)}if(void 0!==i[0])if(this.printingHeaderRow?this.rect(t,e,n,r,"FD"):this.rect(t,e,n,r),"right"===a){i instanceof Array||(i=[i]);for(var u=0;u<i.length;u++){var c=i[u],f=this.getStringUnitWidth(c)*this.internal.getFontSize()/this.internal.scaleFactor;this.text(c,t+n-f-3,e+this.internal.getLineHeight()*(u+1))}}else this.text(i,t+3,e+this.internal.getLineHeight());return p(t,e,n,r,o),this},_.arrayMax=function(t,e){var n,r,i,o=t[0];for(n=0,r=t.length;n<r;n+=1)i=t[n],e?-1===e(o,i)&&(o=i):o<i&&(o=i);return o},_.table=function(t,e,n,r,i){if(!n)throw"No data for PDF table";var o,a,s,l,h,u,c,f,p,d,g=[],m=[],y={},v={},w=[],b=[],x=!1,N=!0,L=12,A=k;if(A.width=this.internal.pageSize.getWidth(),i&&(!0===i.autoSize&&(x=!0),!1===i.printHeaders&&(N=!1),i.fontSize&&(L=i.fontSize),i.css&&void 0!==i.css["font-size"]&&(L=16*i.css["font-size"]),i.margins&&(A=i.margins)),this.lnMod=0,F={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},P=1,this.printHeaders=N,this.margins=A,this.setFontSize(L),this.table_font_size=L,null==r)g=Object.keys(n[0]);else if(r[0]&&"string"!=typeof r[0])for(a=0,s=r.length;a<s;a+=1)o=r[a],g.push(o.name),m.push(o.prompt),v[o.name]=o.width*(19.049976/25.4);else g=r;if(x)for(d=function(t){return t[o]},a=0,s=g.length;a<s;a+=1){for(y[o=g[a]]=n.map(d),w.push(this.getTextDimensions(m[a]||o,{scaleFactor:1}).w),c=0,l=(u=y[o]).length;c<l;c+=1)h=u[c],w.push(this.getTextDimensions(h,{scaleFactor:1}).w);v[o]=_.arrayMax(w),w=[]}if(N){var S=this.calculateLineHeight(g,v,m.length?m:g);for(a=0,s=g.length;a<s;a+=1)o=g[a],b.push([t,e,v[o],S,String(m.length?m[a]:o)]);this.setTableHeaderRow(b),this.printHeaderRow(1,!1)}for(a=0,s=n.length;a<s;a+=1)for(f=n[a],S=this.calculateLineHeight(g,v,f),c=0,p=g.length;c<p;c+=1)o=g[c],this.cell(t,e,v[o],S,f[o],a+2,o.align);return this.lastCellPos=F,this.table_x=t,this.table_y=e,this},_.calculateLineHeight=function(t,e,n){for(var r,i=0,o=0;o<t.length;o++){n[r=t[o]]=this.splitTextToSize(String(n[r]),e[r]-3);var a=this.internal.getLineHeight()*n[r].length+3;i<a&&(i=a)}return i},_.setTableHeaderRow=function(t){this.tableHeaderRow=t},_.printHeaderRow=function(t,e){if(!this.tableHeaderRow)throw"Property tableHeaderRow does not exist.";var n,r,i,o;if(this.printingHeaderRow=!0,void 0!==l){var a=l(this,P);p(a[0],a[1],a[2],a[3],-1)}this.setFontStyle("bold");var s=[];for(i=0,o=this.tableHeaderRow.length;i<o;i+=1)this.setFillColor(200,200,200),n=this.tableHeaderRow[i],e&&(this.margins.top=13,n[1]=this.margins&&this.margins.top||0,s.push(n)),r=[].concat(n),this.cell.apply(this,r.concat(t));0<s.length&&this.setTableHeaderRow(s),this.setFontStyle("normal"),this.printingHeaderRow=!1},
/**
   * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
   *
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
   */
function(t,e){var l,i,o,h,u,c=function(t){return t=t||{},this.isStrokeTransparent=t.isStrokeTransparent||!1,this.strokeOpacity=t.strokeOpacity||1,this.strokeStyle=t.strokeStyle||"#000000",this.fillStyle=t.fillStyle||"#000000",this.isFillTransparent=t.isFillTransparent||!1,this.fillOpacity=t.fillOpacity||1,this.font=t.font||"10px sans-serif",this.textBaseline=t.textBaseline||"alphabetic",this.textAlign=t.textAlign||"left",this.lineWidth=t.lineWidth||1,this.lineJoin=t.lineJoin||"miter",this.lineCap=t.lineCap||"butt",this.path=t.path||[],this.transform=void 0!==t.transform?t.transform.clone():new M,this.globalCompositeOperation=t.globalCompositeOperation||"normal",this.globalAlpha=t.globalAlpha||1,this.clip_path=t.clip_path||[],this.currentPoint=t.currentPoint||new j,this.miterLimit=t.miterLimit||10,this.lastPoint=t.lastPoint||new j,this.ignoreClearRect="boolean"!=typeof t.ignoreClearRect||t.ignoreClearRect,this};t.events.push(["initialized",function(){this.context2d=new n(this),l=this.internal.f2,this.internal.f3,i=this.internal.getCoordinateString,o=this.internal.getVerticalCoordinateString,h=this.internal.getHorizontalCoordinate,u=this.internal.getVerticalCoordinate}]);var n=function(t){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}}),Object.defineProperty(this,"pdf",{get:function(){return t}});var e=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return e},set:function(t){e=Boolean(t)}});var n=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return n},set:function(t){n=Boolean(t)}});var r=0;Object.defineProperty(this,"posX",{get:function(){return r},set:function(t){isNaN(t)||(r=t)}});var i=0;Object.defineProperty(this,"posY",{get:function(){return i},set:function(t){isNaN(t)||(i=t)}});var o=!1;Object.defineProperty(this,"autoPaging",{get:function(){return o},set:function(t){o=Boolean(t)}});var a=0;Object.defineProperty(this,"lastBreak",{get:function(){return a},set:function(t){a=t}});var s=[];Object.defineProperty(this,"pageBreaks",{get:function(){return s},set:function(t){s=t}});var l=new c;Object.defineProperty(this,"ctx",{get:function(){return l},set:function(t){t instanceof c&&(l=t)}}),Object.defineProperty(this,"path",{get:function(){return l.path},set:function(t){l.path=t}});var h=[];Object.defineProperty(this,"ctxStack",{get:function(){return h},set:function(t){h=t}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(t){var e;e=f(t),this.ctx.fillStyle=e.style,this.ctx.isFillTransparent=0===e.a,this.ctx.fillOpacity=e.a,this.pdf.setFillColor(e.r,e.g,e.b,{a:e.a}),this.pdf.setTextColor(e.r,e.g,e.b,{a:e.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(t){var e=f(t);this.ctx.strokeStyle=e.style,this.ctx.isStrokeTransparent=0===e.a,this.ctx.strokeOpacity=e.a,0===e.a?this.pdf.setDrawColor(255,255,255):(e.a,this.pdf.setDrawColor(e.r,e.g,e.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(t){-1!==["butt","round","square"].indexOf(t)&&(this.ctx.lineCap=t,this.pdf.setLineCap(t))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(t){isNaN(t)||(this.ctx.lineWidth=t,this.pdf.setLineWidth(t))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(t){-1!==["bevel","round","miter"].indexOf(t)&&(this.ctx.lineJoin=t,this.pdf.setLineJoin(t))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(t){isNaN(t)||(this.ctx.miterLimit=t,this.pdf.setMiterLimit(t))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(t){this.ctx.textBaseline=t}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(t){-1!==["right","end","center","left","start"].indexOf(t)&&(this.ctx.textAlign=t)}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(t){var e;if(this.ctx.font=t,null!==(e=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))){var n=e[1],r=(e[2],e[3]),i=e[4],o=e[5],a=e[6];i="px"===o?Math.floor(parseFloat(i)):"em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(i)),this.pdf.setFontSize(i);var s="";("bold"===r||700<=parseInt(r,10)||"bold"===n)&&(s="bold"),"italic"===n&&(s+="italic"),0===s.length&&(s="normal");for(var l="",h=a.toLowerCase().replace(/"|'/g,"").split(/\s*,\s*/),u={arial:"Helvetica",verdana:"Helvetica",helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",courier:"Courier",times:"Times",cursive:"Times",fantasy:"Times",serif:"Times"},c=0;c<h.length;c++){if(void 0!==this.pdf.internal.getFont(h[c],s,{noFallback:!0,disableWarning:!0})){l=h[c];break}if("bolditalic"===s&&void 0!==this.pdf.internal.getFont(h[c],"bold",{noFallback:!0,disableWarning:!0}))l=h[c],s="bold";else if(void 0!==this.pdf.internal.getFont(h[c],"normal",{noFallback:!0,disableWarning:!0})){l=h[c],s="normal";break}}if(""===l)for(c=0;c<h.length;c++)if(u[h[c]]){l=u[h[c]];break}l=""===l?"Times":l,this.pdf.setFont(l,s)}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(t){this.ctx.globalCompositeOperation=t}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(t){this.ctx.globalAlpha=t}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(t){this.ctx.ignoreClearRect=Boolean(t)}})};n.prototype.fill=function(){r.call(this,"fill",!1)},n.prototype.stroke=function(){r.call(this,"stroke",!1)},n.prototype.beginPath=function(){this.path=[{type:"begin"}]},n.prototype.moveTo=function(t,e){if(isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var n=this.ctx.transform.applyToPoint(new j(t,e));this.path.push({type:"mt",x:n.x,y:n.y}),this.ctx.lastPoint=new j(t,e)},n.prototype.closePath=function(){var t=new j(0,0),e=0;for(e=this.path.length-1;-1!==e;e--)if("begin"===this.path[e].type&&"object"===se(this.path[e+1])&&"number"==typeof this.path[e+1].x){t=new j(this.path[e+1].x,this.path[e+1].y),this.path.push({type:"lt",x:t.x,y:t.y});break}"object"===se(this.path[e+2])&&"number"==typeof this.path[e+2].x&&this.path.push(JSON.parse(JSON.stringify(this.path[e+2]))),this.path.push({type:"close"}),this.ctx.lastPoint=new j(t.x,t.y)},n.prototype.lineTo=function(t,e){if(isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var n=this.ctx.transform.applyToPoint(new j(t,e));this.path.push({type:"lt",x:n.x,y:n.y}),this.ctx.lastPoint=new j(n.x,n.y)},n.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),r.call(this,null,!0)},n.prototype.quadraticCurveTo=function(t,e,n,r){if(isNaN(n)||isNaN(r)||isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var i=this.ctx.transform.applyToPoint(new j(n,r)),o=this.ctx.transform.applyToPoint(new j(t,e));this.path.push({type:"qct",x1:o.x,y1:o.y,x:i.x,y:i.y}),this.ctx.lastPoint=new j(i.x,i.y)},n.prototype.bezierCurveTo=function(t,e,n,r,i,o){if(isNaN(i)||isNaN(o)||isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var a=this.ctx.transform.applyToPoint(new j(i,o)),s=this.ctx.transform.applyToPoint(new j(t,e)),l=this.ctx.transform.applyToPoint(new j(n,r));this.path.push({type:"bct",x1:s.x,y1:s.y,x2:l.x,y2:l.y,x:a.x,y:a.y}),this.ctx.lastPoint=new j(a.x,a.y)},n.prototype.arc=function(t,e,n,r,i,o){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i))throw console.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(o=Boolean(o),!this.ctx.transform.isIdentity){var a=this.ctx.transform.applyToPoint(new j(t,e));t=a.x,e=a.y;var s=this.ctx.transform.applyToPoint(new j(0,n)),l=this.ctx.transform.applyToPoint(new j(0,0));n=Math.sqrt(Math.pow(s.x-l.x,2)+Math.pow(s.y-l.y,2))}Math.abs(i-r)>=2*Math.PI&&(r=0,i=2*Math.PI),this.path.push({type:"arc",x:t,y:e,radius:n,startAngle:r,endAngle:i,counterclockwise:o})},n.prototype.arcTo=function(t,e,n,r,i){throw new Error("arcTo not implemented.")},n.prototype.rect=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(t,e),this.lineTo(t+n,e),this.lineTo(t+n,e+r),this.lineTo(t,e+r),this.lineTo(t,e),this.lineTo(t+n,e),this.lineTo(t,e)},n.prototype.fillRect=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!N.call(this)){var i={};"butt"!==this.lineCap&&(i.lineCap=this.lineCap,this.lineCap="butt"),"miter"!==this.lineJoin&&(i.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(t,e,n,r),this.fill(),i.hasOwnProperty("lineCap")&&(this.lineCap=i.lineCap),i.hasOwnProperty("lineJoin")&&(this.lineJoin=i.lineJoin)}},n.prototype.strokeRect=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");L.call(this)||(this.beginPath(),this.rect(t,e,n,r),this.stroke())},n.prototype.clearRect=function(t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r))throw console.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(t,e,n,r))},n.prototype.save=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,n=0;n<this.pdf.internal.getNumberOfPages();n++)this.pdf.setPage(n+1),this.pdf.internal.out("q");if(this.pdf.setPage(e),t){this.ctx.fontSize=this.pdf.internal.getFontSize();var r=new c(this.ctx);this.ctxStack.push(this.ctx),this.ctx=r}},n.prototype.restore=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,n=0;n<this.pdf.internal.getNumberOfPages();n++)this.pdf.setPage(n+1),this.pdf.internal.out("Q");this.pdf.setPage(e),t&&0!==this.ctxStack.length&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin)},n.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var f=function(t){var e,n,r,i;if(!0===t.isCanvasGradient&&(t=t.getColor()),!t)return{r:0,g:0,b:0,a:0,style:t};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t))i=r=n=e=0;else{var o=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);if(null!==o)e=parseInt(o[1]),n=parseInt(o[2]),r=parseInt(o[3]),i=1;else if(null!==(o=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/.exec(t)))e=parseInt(o[1]),n=parseInt(o[2]),r=parseInt(o[3]),i=parseFloat(o[4]);else{if(i=1,"string"==typeof t&&"#"!==t.charAt(0)){var a=new RGBColor(t);t=a.ok?a.toHex():"#000000"}4===t.length?(e=t.substring(1,2),e+=e,n=t.substring(2,3),n+=n,r=t.substring(3,4),r+=r):(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7)),e=parseInt(e,16),n=parseInt(n,16),r=parseInt(r,16)}}return{r:e,g:n,b:r,a:i,style:t}},N=function(){return this.ctx.isFillTransparent||0==this.globalAlpha},L=function(){return Boolean(this.ctx.isStrokeTransparent||0==this.globalAlpha)};n.prototype.fillText=function(t,e,n,r){if(isNaN(e)||isNaN(n)||"string"!=typeof t)throw console.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(r=isNaN(r)?void 0:r,!N.call(this)){n=a.call(this,n);var i=B(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;s.call(this,{text:t,x:e,y:n,scale:o,angle:i,align:this.textAlign,maxWidth:r})}},n.prototype.strokeText=function(t,e,n,r){if(isNaN(e)||isNaN(n)||"string"!=typeof t)throw console.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!L.call(this)){r=isNaN(r)?void 0:r,n=a.call(this,n);var i=B(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;s.call(this,{text:t,x:e,y:n,scale:o,renderingMode:"stroke",angle:i,align:this.textAlign,maxWidth:r})}},n.prototype.measureText=function(t){if("string"!=typeof t)throw console.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var e=this.pdf,n=this.pdf.internal.scaleFactor,r=e.internal.getFontSize(),i=e.getStringUnitWidth(t)*r/e.internal.scaleFactor;return new function(t){var e=(t=t||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return e}}),this}({width:i*=Math.round(96*n/72*1e4)/1e4})},n.prototype.scale=function(t,e){if(isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var n=new M(t,0,0,e,0,0);this.ctx.transform=this.ctx.transform.multiply(n)},n.prototype.rotate=function(t){if(isNaN(t))throw console.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var e=new M(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0);this.ctx.transform=this.ctx.transform.multiply(e)},n.prototype.translate=function(t,e){if(isNaN(t)||isNaN(e))throw console.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var n=new M(1,0,0,1,t,e);this.ctx.transform=this.ctx.transform.multiply(n)},n.prototype.transform=function(t,e,n,r,i,o){if(isNaN(t)||isNaN(e)||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(o))throw console.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var a=new M(t,e,n,r,i,o);this.ctx.transform=this.ctx.transform.multiply(a)},n.prototype.setTransform=function(t,e,n,r,i,o){t=isNaN(t)?1:t,e=isNaN(e)?0:e,n=isNaN(n)?0:n,r=isNaN(r)?1:r,i=isNaN(i)?0:i,o=isNaN(o)?0:o,this.ctx.transform=new M(t,e,n,r,i,o)},n.prototype.drawImage=function(t,e,n,r,i,o,a,s,l){var h=this.pdf.getImageProperties(t),u=1,c=1,f=1,p=1;void 0!==r&&void 0!==s&&(f=s/r,p=l/i,u=h.width/r*s/r,c=h.height/i*l/i),void 0===o&&(o=e,a=n,n=e=0),void 0!==r&&void 0===s&&(s=r,l=i),void 0===r&&void 0===s&&(s=h.width,l=h.height);var d=this.ctx.transform.decompose(),g=B(d.rotate.shx);d.scale.sx,d.scale.sy;for(var m,y=new M,v=((y=(y=(y=y.multiply(d.translate)).multiply(d.skew)).multiply(d.scale)).applyToPoint(new j(s,l)),y.applyToRectangle(new E(o-e*f,a-n*p,r*u,i*c))),w=F.call(this,v),b=[],x=0;x<w.length;x+=1)-1===b.indexOf(w[x])&&b.push(w[x]);if(b.sort(),this.autoPaging)for(var N=b[0],L=b[b.length-1],A=N;A<L+1;A++){if(this.pdf.setPage(A),0!==this.ctx.clip_path.length){var S=this.path;m=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=P(m,this.posX,-1*this.pdf.internal.pageSize.height*(A-1)+this.posY),k.call(this,"fill",!0),this.path=S}var _=JSON.parse(JSON.stringify(v));_=P([_],this.posX,-1*this.pdf.internal.pageSize.height*(A-1)+this.posY)[0],this.pdf.addImage(t,"jpg",_.x,_.y,_.w,_.h,null,null,g)}else this.pdf.addImage(t,"jpg",v.x,v.y,v.w,v.h,null,null,g)};var F=function(t,e,n){var r=[];switch(e=e||this.pdf.internal.pageSize.width,n=n||this.pdf.internal.pageSize.height,t.type){default:case"mt":case"lt":r.push(Math.floor((t.y+this.posY)/n)+1);break;case"arc":r.push(Math.floor((t.y+this.posY-t.radius)/n)+1),r.push(Math.floor((t.y+this.posY+t.radius)/n)+1);break;case"qct":var i=w(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x,t.y);r.push(Math.floor(i.y/n)+1),r.push(Math.floor((i.y+i.h)/n)+1);break;case"bct":var o=b(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x2,t.y2,t.x,t.y);r.push(Math.floor(o.y/n)+1),r.push(Math.floor((o.y+o.h)/n)+1);break;case"rect":r.push(Math.floor((t.y+this.posY)/n)+1),r.push(Math.floor((t.y+t.h+this.posY)/n)+1)}for(var a=0;a<r.length;a+=1)for(;this.pdf.internal.getNumberOfPages()<r[a];)v.call(this);return r},v=function(){var t=this.fillStyle,e=this.strokeStyle,n=this.font,r=this.lineCap,i=this.lineWidth,o=this.lineJoin;this.pdf.addPage(),this.fillStyle=t,this.strokeStyle=e,this.font=n,this.lineCap=r,this.lineWidth=i,this.lineJoin=o},P=function(t,e,n){for(var r=0;r<t.length;r++)switch(t[r].type){case"bct":t[r].x2+=e,t[r].y2+=n;case"qct":t[r].x1+=e,t[r].y1+=n;case"mt":case"lt":case"arc":default:t[r].x+=e,t[r].y+=n}return t},r=function(t,e){for(var n,r,i=this.fillStyle,o=this.strokeStyle,a=(this.font,this.lineCap),s=this.lineWidth,l=this.lineJoin,h=JSON.parse(JSON.stringify(this.path)),u=JSON.parse(JSON.stringify(this.path)),c=[],f=0;f<u.length;f++)if(void 0!==u[f].x)for(var p=F.call(this,u[f]),d=0;d<p.length;d+=1)-1===c.indexOf(p[d])&&c.push(p[d]);for(f=0;f<c.length;f++)for(;this.pdf.internal.getNumberOfPages()<c[f];)v.call(this);if(c.sort(),this.autoPaging){var g=c[0],m=c[c.length-1];for(f=g;f<m+1;f++){if(this.pdf.setPage(f),this.fillStyle=i,this.strokeStyle=o,this.lineCap=a,this.lineWidth=s,this.lineJoin=l,0!==this.ctx.clip_path.length){var y=this.path;n=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=P(n,this.posX,-1*this.pdf.internal.pageSize.height*(f-1)+this.posY),k.call(this,t,!0),this.path=y}r=JSON.parse(JSON.stringify(h)),this.path=P(r,this.posX,-1*this.pdf.internal.pageSize.height*(f-1)+this.posY),!1!==e&&0!==f||k.call(this,t,e)}}else k.call(this,t,e);this.path=h},k=function(t,e){if(("stroke"!==t||e||!L.call(this))&&("stroke"===t||e||!N.call(this))){var n=[];this.ctx.globalAlpha;this.ctx.fillOpacity<1&&this.ctx.fillOpacity;for(var r,i=this.path,o=0;o<i.length;o++){var a=i[o];switch(a.type){case"begin":n.push({begin:!0});break;case"close":n.push({close:!0});break;case"mt":n.push({start:a,deltas:[],abs:[]});break;case"lt":var s=n.length;if(!isNaN(i[o-1].x)){var l=[a.x-i[o-1].x,a.y-i[o-1].y];if(0<s)for(;0<=s;s--)if(!0!==n[s-1].close&&!0!==n[s-1].begin){n[s-1].deltas.push(l),n[s-1].abs.push(a);break}}break;case"bct":l=[a.x1-i[o-1].x,a.y1-i[o-1].y,a.x2-i[o-1].x,a.y2-i[o-1].y,a.x-i[o-1].x,a.y-i[o-1].y];n[n.length-1].deltas.push(l);break;case"qct":var h=i[o-1].x+2/3*(a.x1-i[o-1].x),u=i[o-1].y+2/3*(a.y1-i[o-1].y),c=a.x+2/3*(a.x1-a.x),f=a.y+2/3*(a.y1-a.y),p=a.x,d=a.y;l=[h-i[o-1].x,u-i[o-1].y,c-i[o-1].x,f-i[o-1].y,p-i[o-1].x,d-i[o-1].y];n[n.length-1].deltas.push(l);break;case"arc":n.push({deltas:[],abs:[],arc:!0}),Array.isArray(n[n.length-1].abs)&&n[n.length-1].abs.push(a)}}r=e?null:"stroke"===t?"stroke":"fill";for(o=0;o<n.length;o++){if(n[o].arc)for(var g=n[o].abs,m=0;m<g.length;m++){var y=g[m];if(void 0!==y.startAngle){var v=B(y.startAngle),w=B(y.endAngle),b=y.x,x=y.y;A.call(this,b,x,y.radius,v,w,y.counterclockwise,r,e)}else I.call(this,y.x,y.y)}if(!n[o].arc&&!0!==n[o].close&&!0!==n[o].begin){b=n[o].start.x,x=n[o].start.y;C.call(this,n[o].deltas,b,x,null,null)}}r&&S.call(this,r),e&&_.call(this)}},a=function(t){var e=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,n=e*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return t-n;case"top":return t+e-n;case"hanging":return t+e-2*n;case"middle":return t+e/2-n;case"ideographic":return t;case"alphabetic":default:return t}};n.prototype.createLinearGradient=function(){var t=function(){};return t.colorStops=[],t.addColorStop=function(t,e){this.colorStops.push([t,e])},t.getColor=function(){return 0===this.colorStops.length?"#000000":this.colorStops[0][1]},t.isCanvasGradient=!0,t},n.prototype.createPattern=function(){return this.createLinearGradient()},n.prototype.createRadialGradient=function(){return this.createLinearGradient()};var A=function(t,e,n,r,i,o,a,s){this.pdf.internal.scaleFactor;for(var l=y(r),h=y(i),u=g.call(this,n,l,h,o),c=0;c<u.length;c++){var f=u[c];0===c&&p.call(this,f.x1+t,f.y1+e),d.call(this,t,e,f.x2,f.y2,f.x3,f.y3,f.x4,f.y4)}s?_.call(this):S.call(this,a)},S=function(t){switch(t){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},_=function(){this.pdf.clip()},p=function(t,e){this.pdf.internal.out(i(t)+" "+o(e)+" m")},s=function(t){var e;switch(t.align){case"right":case"end":e="right";break;case"center":e="center";break;case"left":case"start":default:e="left"}var n=this.ctx.transform.applyToPoint(new j(t.x,t.y)),r=this.ctx.transform.decompose(),i=new M;i=(i=(i=i.multiply(r.translate)).multiply(r.skew)).multiply(r.scale);for(var o,a=this.pdf.getTextDimensions(t.text),s=this.ctx.transform.applyToRectangle(new E(t.x,t.y,a.w,a.h)),l=i.applyToRectangle(new E(t.x,t.y-a.h,a.w,a.h)),h=F.call(this,l),u=[],c=0;c<h.length;c+=1)-1===u.indexOf(h[c])&&u.push(h[c]);if(u.sort(),!0===this.autoPaging)for(var f=u[0],p=u[u.length-1],d=f;d<p+1;d++){if(this.pdf.setPage(d),0!==this.ctx.clip_path.length){var g=this.path;o=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=P(o,this.posX,-1*this.pdf.internal.pageSize.height*(d-1)+this.posY),k.call(this,"fill",!0),this.path=g}var m=JSON.parse(JSON.stringify(s));if(m=P([m],this.posX,-1*this.pdf.internal.pageSize.height*(d-1)+this.posY)[0],.01<=t.scale){var y=this.pdf.internal.getFontSize();this.pdf.setFontSize(y*t.scale)}this.pdf.text(t.text,m.x,m.y,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),.01<=t.scale&&this.pdf.setFontSize(y)}else{if(.01<=t.scale){y=this.pdf.internal.getFontSize();this.pdf.setFontSize(y*t.scale)}this.pdf.text(t.text,n.x+this.posX,n.y+this.posY,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),.01<=t.scale&&this.pdf.setFontSize(y)}},I=function(t,e,n,r){n=n||0,r=r||0,this.pdf.internal.out(i(t+n)+" "+o(e+r)+" l")},C=function(t,e,n){return this.pdf.lines(t,e,n,null,null)},d=function(t,e,n,r,i,o,a,s){this.pdf.internal.out([l(h(n+t)),l(u(r+e)),l(h(i+t)),l(u(o+e)),l(h(a+t)),l(u(s+e)),"c"].join(" "))},g=function(t,e,n,r){var i=2*Math.PI,o=e;(o<i||i<o)&&(o%=i);var a=n;(a<i||i<a)&&(a%=i);for(var s=[],l=Math.PI/2,h=r?-1:1,u=e,c=Math.min(i,Math.abs(a-o));1e-5<c;){var f=u+h*Math.min(c,l);s.push(m.call(this,t,u,f)),c-=Math.abs(f-u),u=f}return s},m=function(t,e,n){var r=(n-e)/2,i=t*Math.cos(r),o=t*Math.sin(r),a=i,s=-o,l=a*a+s*s,h=l+a*i+s*o,u=4/3*(Math.sqrt(2*l*h)-h)/(a*o-s*i),c=a-u*s,f=s+u*a,p=c,d=-f,g=r+e,m=Math.cos(g),y=Math.sin(g);return{x1:t*Math.cos(e),y1:t*Math.sin(e),x2:c*m-f*y,y2:c*y+f*m,x3:p*m-d*y,y3:p*y+d*m,x4:t*Math.cos(n),y4:t*Math.sin(n)}},B=function(t){return 180*t/Math.PI},y=function(t){return t*Math.PI/180},w=function(t,e,n,r,i,o){var a=t+.5*(n-t),s=e+.5*(r-e),l=i+.5*(n-i),h=o+.5*(r-o),u=Math.min(t,i,a,l),c=Math.max(t,i,a,l),f=Math.min(e,o,s,h),p=Math.max(e,o,s,h);return new E(u,f,c-u,p-f)},b=function(t,e,n,r,i,o,a,s){for(var l,h,u,c,f,p,d,g,m,y,v,w,b,x=n-t,N=r-e,L=i-n,A=o-r,S=a-i,_=s-o,F=0;F<41;F++)g=(p=(h=t+(l=F/40)*x)+l*((c=n+l*L)-h))+l*(c+l*(i+l*S-c)-p),m=(d=(u=e+l*N)+l*((f=r+l*A)-u))+l*(f+l*(o+l*_-f)-d),b=0==F?(w=y=g,v=m):(y=Math.min(y,g),v=Math.min(v,m),w=Math.max(w,g),Math.max(b,m));return new E(Math.round(y),Math.round(v),Math.round(w-y),Math.round(b-v))},j=function(t,e){var n=t||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return n},set:function(t){isNaN(t)||(n=parseFloat(t))}});var r=e||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return r},set:function(t){isNaN(t)||(r=parseFloat(t))}});var i="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return i},set:function(t){i=t.toString()}}),this},E=function(t,e,n,r){j.call(this,t,e),this.type="rect";var i=n||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return i},set:function(t){isNaN(t)||(i=parseFloat(t))}});var o=r||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return o},set:function(t){isNaN(t)||(o=parseFloat(t))}}),this},M=function(t,e,n,r,i,o){var a=[];return Object.defineProperty(this,"sx",{get:function(){return a[0]},set:function(t){a[0]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"shy",{get:function(){return a[1]},set:function(t){a[1]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"shx",{get:function(){return a[2]},set:function(t){a[2]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"sy",{get:function(){return a[3]},set:function(t){a[3]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"tx",{get:function(){return a[4]},set:function(t){a[4]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"ty",{get:function(){return a[5]},set:function(t){a[5]=Math.round(1e5*t)/1e5}}),Object.defineProperty(this,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(this,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(this,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(this,"isIdentity",{get:function(){return 1===this.sx&&(0===this.shy&&(0===this.shx&&(1===this.sy&&(0===this.tx&&0===this.ty))))}}),this.sx=isNaN(t)?1:t,this.shy=isNaN(e)?0:e,this.shx=isNaN(n)?0:n,this.sy=isNaN(r)?1:r,this.tx=isNaN(i)?0:i,this.ty=isNaN(o)?0:o,this};M.prototype.multiply=function(t){var e=t.sx*this.sx+t.shy*this.shx,n=t.sx*this.shy+t.shy*this.sy,r=t.shx*this.sx+t.sy*this.shx,i=t.shx*this.shy+t.sy*this.sy,o=t.tx*this.sx+t.ty*this.shx+this.tx,a=t.tx*this.shy+t.ty*this.sy+this.ty;return new M(e,n,r,i,o,a)},M.prototype.decompose=function(){var t=this.sx,e=this.shy,n=this.shx,r=this.sy,i=this.tx,o=this.ty,a=Math.sqrt(t*t+e*e),s=(t/=a)*n+(e/=a)*r;n-=t*s,r-=e*s;var l=Math.sqrt(n*n+r*r);return s/=l,t*(r/=l)<e*(n/=l)&&(t=-t,e=-e,s=-s,a=-a),{scale:new M(a,0,0,l,0,0),translate:new M(1,0,0,1,i,o),rotate:new M(t,e,-e,t,0,0),skew:new M(1,0,s,1,0,0)}},M.prototype.applyToPoint=function(t){var e=t.x*this.sx+t.y*this.shx+this.tx,n=t.x*this.shy+t.y*this.sy+this.ty;return new j(e,n)},M.prototype.applyToRectangle=function(t){var e=this.applyToPoint(t),n=this.applyToPoint(new j(t.x+t.w,t.y+t.h));return new E(e.x,e.y,n.x-e.x,n.y-e.y)},M.prototype.clone=function(){var t=this.sx,e=this.shy,n=this.shx,r=this.sy,i=this.tx,o=this.ty;return new M(t,e,n,r,i,o)}}(lt.API,"undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")()),
/**
   * jsPDF filters PlugIn
   * Copyright (c) 2014 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
a=lt.API,o=function(t){var r,e,n,i,o,a,s,l,h,u;for(/[^\x00-\xFF]/.test(t),e=[],n=0,i=(t+=r="\0\0\0\0".slice(t.length%4||4)).length;n<i;n+=4)0!==(o=(t.charCodeAt(n)<<24)+(t.charCodeAt(n+1)<<16)+(t.charCodeAt(n+2)<<8)+t.charCodeAt(n+3))?(a=(o=((o=((o=((o=(o-(u=o%85))/85)-(h=o%85))/85)-(l=o%85))/85)-(s=o%85))/85)%85,e.push(a+33,s+33,l+33,h+33,u+33)):e.push(122);return function(t,e){for(var n=r.length;0<n;n--)t.pop()}(e),String.fromCharCode.apply(String,e)+"~>"},s=function(t){var r,e,n,i,o,a=String,s="length",l="charCodeAt",h="slice",u="replace";for(t[h](-2),t=t[h](0,-2)[u](/\s/g,"")[u]("z","!!!!!"),n=[],i=0,o=(t+=r="uuuuu"[h](t[s]%5||5))[s];i<o;i+=5)e=52200625*(t[l](i)-33)+614125*(t[l](i+1)-33)+7225*(t[l](i+2)-33)+85*(t[l](i+3)-33)+(t[l](i+4)-33),n.push(255&e>>24,255&e>>16,255&e>>8,255&e);return function(t,e){for(var n=r[s];0<n;n--)t.pop()}(n),a.fromCharCode.apply(a,n)},h=function(t){for(var e="",n=0;n<t.length;n+=1)e+=("0"+t.charCodeAt(n).toString(16)).slice(-2);return e+=">"},u=function(t){var e=new RegExp(/^([0-9A-Fa-f]{2})+$/);if(-1!==(t=t.replace(/\s/g,"")).indexOf(">")&&(t=t.substr(0,t.indexOf(">"))),t.length%2&&(t+="0"),!1===e.test(t))return"";for(var n="",r=0;r<t.length;r+=2)n+=String.fromCharCode("0x"+(t[r]+t[r+1]));return n},c=function(t,e){e=Object.assign({predictor:1,colors:1,bitsPerComponent:8,columns:1},e);for(var n,r,i=[],o=t.length;o--;)i[o]=t.charCodeAt(o);return n=a.adler32cs.from(t),(r=new Deflater(6)).append(new Uint8Array(i)),t=r.flush(),(i=new Uint8Array(t.length+6)).set(new Uint8Array([120,156])),i.set(t,2),i.set(new Uint8Array([255&n,n>>8&255,n>>16&255,n>>24&255]),t.length+2),t=String.fromCharCode.apply(null,i)},a.processDataByFilters=function(t,e){var n=0,r=t||"",i=[];for("string"==typeof(e=e||[])&&(e=[e]),n=0;n<e.length;n+=1)switch(e[n]){case"ASCII85Decode":case"/ASCII85Decode":r=s(r),i.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":r=o(r),i.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":r=u(r),i.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":r=h(r),i.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":r=c(r),i.push("/FlateDecode");break;default:throw'The filter: "'+e[n]+'" is not implemented'}return{data:r,reverseChain:i.reverse().join(" ")}},(
/**
   * jsPDF fileloading PlugIn
   * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
r=lt.API).loadFile=function(t,e,n){var r;e=e||!0,n=n||function(){};try{r=function(t,e,n){var r=new XMLHttpRequest,i=[],o=0,a=function(t){var e=t.length,n=String.fromCharCode;for(o=0;o<e;o+=1)i.push(n(255&t.charCodeAt(o)));return i.join("")};if(r.open("GET",t,!e),r.overrideMimeType("text/plain; charset=x-user-defined"),!1===e&&(r.onload=function(){return a(this.responseText)}),r.send(null),200===r.status)return e?a(r.responseText):void 0;console.warn('Unable to load file "'+t+'"')}(t,e)}catch(t){r=void 0}return r},r.loadImageFile=r.loadFile,
/**
   * Copyright (c) 2018 Erik Koopmans
   * Released under the MIT License.
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
i=lt.API,f="undefined"!=typeof window&&window||"undefined"!=typeof global&&global,g=function(t){var e=se(t);return"undefined"===e?"undefined":"string"===e||t instanceof String?"string":"number"===e||t instanceof Number?"number":"function"===e||t instanceof Function?"function":t&&t.constructor===Array?"array":t&&1===t.nodeType?"element":"object"===e?"object":"unknown"},m=function(t,e){var n=document.createElement(t);if(e.className&&(n.className=e.className),e.innerHTML){n.innerHTML=e.innerHTML;for(var r=n.getElementsByTagName("script"),i=r.length;0<i--;null)r[i].parentNode.removeChild(r[i])}for(var o in e.style)n.style[o]=e.style[o];return n},(((y=function t(e){var n=Object.assign(t.convert(Promise.resolve()),JSON.parse(JSON.stringify(t.template))),r=t.convert(Promise.resolve(),n);return r=(r=r.setProgress(1,t,1,[t])).set(e)}).prototype=Object.create(Promise.prototype)).constructor=y).convert=function(t,e){return t.__proto__=e||y.prototype,t},y.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{}}},y.prototype.from=function(t,e){return this.then(function(){switch(e=e||function(t){switch(g(t)){case"string":return"string";case"element":return"canvas"===t.nodeName.toLowerCase?"canvas":"element";default:return"unknown"}}(t)){case"string":return this.set({src:m("div",{innerHTML:t})});case"element":return this.set({src:t});case"canvas":return this.set({canvas:t});case"img":return this.set({img:t});default:return this.error("Unknown source type.")}})},y.prototype.to=function(t){switch(t){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},y.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var t={position:"relative",display:"inline-block",width:Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:"white"},e=function t(e,n){for(var r=3===e.nodeType?document.createTextNode(e.nodeValue):e.cloneNode(!1),i=e.firstChild;i;i=i.nextSibling)!0!==n&&1===i.nodeType&&"SCRIPT"===i.nodeName||r.appendChild(t(i,n));return 1===e.nodeType&&("CANVAS"===e.nodeName?(r.width=e.width,r.height=e.height,r.getContext("2d").drawImage(e,0,0)):"TEXTAREA"!==e.nodeName&&"SELECT"!==e.nodeName||(r.value=e.value),r.addEventListener("load",function(){r.scrollTop=e.scrollTop,r.scrollLeft=e.scrollLeft},!0)),r}(this.prop.src,this.opt.html2canvas.javascriptEnabled);"BODY"===e.tagName&&(t.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=m("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=m("div",{className:"html2pdf__container",style:t}),this.prop.container.appendChild(e),this.prop.container.firstChild.appendChild(m("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},y.prototype.toCanvas=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(function(){var t=Object.assign({},this.opt.html2canvas);if(delete t.onrendered,this.isHtml2CanvasLoaded())return html2canvas(this.prop.container,t)}).then(function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)})},y.prototype.toContext2d=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(function(){var t=this.opt.jsPDF,e=Object.assign({async:!0,allowTaint:!0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete e.onrendered,t.context2d.autoPaging=!0,t.context2d.posX=this.opt.x,t.context2d.posY=this.opt.y,e.windowHeight=e.windowHeight||0,e.windowHeight=0==e.windowHeight?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):e.windowHeight,this.isHtml2CanvasLoaded())return html2canvas(this.prop.container,e)}).then(function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)})},y.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var t=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=t})},y.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},y.prototype.output=function(t,e,n){return"img"===(n=n||"pdf").toLowerCase()||"image"===n.toLowerCase()?this.outputImg(t,e):this.outputPdf(t,e)},y.prototype.outputPdf=function(t,e){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(t,e)})},y.prototype.outputImg=function(t,e){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(t){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+t+'" is not supported.'}})},y.prototype.isHtml2CanvasLoaded=function(){var t=void 0!==f.html2canvas;return t||console.error("html2canvas not loaded."),t},y.prototype.save=function(t){if(this.isHtml2CanvasLoaded())return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(t?{filename:t}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},y.prototype.doCallback=function(t){if(this.isHtml2CanvasLoaded())return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},y.prototype.set=function(e){if("object"!==g(e))return this;var t=Object.keys(e||{}).map(function(t){if(t in y.template.prop)return function(){this.prop[t]=e[t]};switch(t){case"margin":return this.setMargin.bind(this,e.margin);case"jsPDF":return function(){return this.opt.jsPDF=e.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,e.pageSize);default:return function(){this.opt[t]=e[t]}}},this);return this.then(function(){return this.thenList(t)})},y.prototype.get=function(e,n){return this.then(function(){var t=e in y.template.prop?this.prop[e]:this.opt[e];return n?n(t):t})},y.prototype.setMargin=function(t){return this.then(function(){switch(g(t)){case"number":t=[t,t,t,t];case"array":if(2===t.length&&(t=[t[0],t[1],t[0],t[1]]),4===t.length)break;default:return this.error("Invalid margin array.")}this.opt.margin=t}).then(this.setPageSize)},y.prototype.setPageSize=function(t){function e(t,e){return Math.floor(t*e/72*96)}return this.then(function(){(t=t||lt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(t.inner={width:t.width-this.opt.margin[1]-this.opt.margin[3],height:t.height-this.opt.margin[0]-this.opt.margin[2]},t.inner.px={width:e(t.inner.width,t.k),height:e(t.inner.height,t.k)},t.inner.ratio=t.inner.height/t.inner.width),this.prop.pageSize=t})},y.prototype.setProgress=function(t,e,n,r){return null!=t&&(this.progress.val=t),null!=e&&(this.progress.state=e),null!=n&&(this.progress.n=n),null!=r&&(this.progress.stack=r),this.progress.ratio=this.progress.val/this.progress.state,this},y.prototype.updateProgress=function(t,e,n,r){return this.setProgress(t?this.progress.val+t:null,e||null,n?this.progress.n+n:null,r?this.progress.stack.concat(r):null)},y.prototype.then=function(t,e){var n=this;return this.thenCore(t,e,function(e,t){return n.updateProgress(null,null,1,[e]),Promise.prototype.then.call(this,function(t){return n.updateProgress(null,e),t}).then(e,t).then(function(t){return n.updateProgress(1),t})})},y.prototype.thenCore=function(t,e,n){n=n||Promise.prototype.then;var r=this;t&&(t=t.bind(r)),e&&(e=e.bind(r));var i=-1!==Promise.toString().indexOf("[native code]")&&"Promise"===Promise.name?r:y.convert(Object.assign({},r),Promise.prototype),o=n.call(i,t,e);return y.convert(o,r.__proto__)},y.prototype.thenExternal=function(t,e){return Promise.prototype.then.call(this,t,e)},y.prototype.thenList=function(t){var e=this;return t.forEach(function(t){e=e.thenCore(t)}),e},y.prototype.catch=function(t){t&&(t=t.bind(this));var e=Promise.prototype.catch.call(this,t);return y.convert(e,this)},y.prototype.catchExternal=function(t){return Promise.prototype.catch.call(this,t)},y.prototype.error=function(t){return this.then(function(){throw new Error(t)})},y.prototype.using=y.prototype.set,y.prototype.saveAs=y.prototype.save,y.prototype.export=y.prototype.output,y.prototype.run=y.prototype.then,lt.getPageSize=function(t,e,n){if("object"===se(t)){var r=t;t=r.orientation,e=r.unit||e,n=r.format||n}e=e||"mm",n=n||"a4",t=(""+(t||"P")).toLowerCase();var i=(""+n).toLowerCase(),o={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(e){case"pt":var a=1;break;case"mm":a=72/25.4;break;case"cm":a=72/2.54;break;case"in":a=72;break;case"px":a=.75;break;case"pc":case"em":a=12;break;case"ex":a=6;break;default:throw"Invalid unit: "+e}if(o.hasOwnProperty(i))var s=o[i][1]/a,l=o[i][0]/a;else try{s=n[1],l=n[0]}catch(t){throw new Error("Invalid format: "+n)}if("p"===t||"portrait"===t){if(t="p",s<l){var h=l;l=s,s=h}}else{if("l"!==t&&"landscape"!==t)throw"Invalid orientation: "+t;t="l",l<s&&(h=l,l=s,s=h)}return{width:l,height:s,unit:e,k:a}},i.html=function(t,e){(e=e||{}).callback=e.callback||function(){},e.html2canvas=e.html2canvas||{},e.html2canvas.canvas=e.html2canvas.canvas||this.canvas,e.jsPDF=e.jsPDF||this,e.jsPDF;var n=new y(e);return e.worker?n:n.from(t).doCallback()},lt.API.addJS=function(t){return b=t,this.internal.events.subscribe("postPutResources",function(t){v=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(v+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),w=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+b+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){void 0!==v&&void 0!==w&&this.internal.out("/Names <</JavaScript "+v+" 0 R>>")}),this},(
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
x=lt.API).events.push(["postPutResources",function(){var t=this,e=/^(\d+) 0 obj$/;if(0<this.outline.root.children.length)for(var n=t.outline.render().split(/\r\n/),r=0;r<n.length;r++){var i=n[r],o=e.exec(i);if(null!=o){var a=o[1];t.internal.newObjectDeferredBegin(a,!1)}t.internal.write(i)}if(this.outline.createNamedDestinations){var s=this.internal.pages.length,l=[];for(r=0;r<s;r++){var h=t.internal.newObject();l.push(h);var u=t.internal.getPageInfo(r+1);t.internal.write("<< /D["+u.objId+" 0 R /XYZ null null null]>> endobj")}var c=t.internal.newObject();for(t.internal.write("<< /Names [ "),r=0;r<l.length;r++)t.internal.write("(page_"+(r+1)+")"+l[r]+" 0 R");t.internal.write(" ] >>","endobj"),t.internal.newObject(),t.internal.write("<< /Dests "+c+" 0 R"),t.internal.write(">>","endobj")}}]),x.events.push(["putCatalog",function(){0<this.outline.root.children.length&&(this.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&this.internal.write("/Names "+namesOid+" 0 R"))}]),x.events.push(["initialized",function(){var a=this;a.outline={createNamedDestinations:!1,root:{children:[]}},a.outline.add=function(t,e,n){var r={title:e,options:n,children:[]};return null==t&&(t=this.root),t.children.push(r),r},a.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=a,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},a.outline.genIds_r=function(t){t.id=a.internal.newObjectDeferred();for(var e=0;e<t.children.length;e++)this.genIds_r(t.children[e])},a.outline.renderRoot=function(t){this.objStart(t),this.line("/Type /Outlines"),0<t.children.length&&(this.line("/First "+this.makeRef(t.children[0])),this.line("/Last "+this.makeRef(t.children[t.children.length-1]))),this.line("/Count "+this.count_r({count:0},t)),this.objEnd()},a.outline.renderItems=function(t){this.ctx.pdf.internal.getCoordinateString;for(var e=this.ctx.pdf.internal.getVerticalCoordinateString,n=0;n<t.children.length;n++){var r=t.children[n];this.objStart(r),this.line("/Title "+this.makeString(r.title)),this.line("/Parent "+this.makeRef(t)),0<n&&this.line("/Prev "+this.makeRef(t.children[n-1])),n<t.children.length-1&&this.line("/Next "+this.makeRef(t.children[n+1])),0<r.children.length&&(this.line("/First "+this.makeRef(r.children[0])),this.line("/Last "+this.makeRef(r.children[r.children.length-1])));var i=this.count=this.count_r({count:0},r);if(0<i&&this.line("/Count "+i),r.options&&r.options.pageNumber){var o=a.internal.getPageInfo(r.options.pageNumber);this.line("/Dest ["+o.objId+" 0 R /XYZ 0 "+e(0)+" 0]")}this.objEnd()}for(n=0;n<t.children.length;n++)r=t.children[n],this.renderItems(r)},a.outline.line=function(t){this.ctx.val+=t+"\r\n"},a.outline.makeRef=function(t){return t.id+" 0 R"},a.outline.makeString=function(t){return"("+a.internal.pdfEscape(t)+")"},a.outline.objStart=function(t){this.ctx.val+="\r\n"+t.id+" 0 obj\r\n<<\r\n"},a.outline.objEnd=function(t){this.ctx.val+=">> \r\nendobj\r\n"},a.outline.count_r=function(t,e){for(var n=0;n<e.children.length;n++)t.count++,this.count_r(t,e.children[n]);return t.count}}]),
/**
   * @license
   * 
   * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   * ====================================================================
   */
I=lt.API,C=function(){var t="function"==typeof Deflater;if(!t)throw new Error("requires deflate.js for compression");return t},B=function(t,e,n,r){var i=5,o=E;switch(r){case I.image_compression.FAST:i=3,o=j;break;case I.image_compression.MEDIUM:i=6,o=M;break;case I.image_compression.SLOW:i=9,o=O}t=A(t,e,n,o);var a=new Uint8Array(N(i)),s=L(t),l=new Deflater(i),h=l.append(t),u=l.flush(),c=a.length+h.length+u.length,f=new Uint8Array(c+4);return f.set(a),f.set(h,a.length),f.set(u,a.length+h.length),f[c++]=s>>>24&255,f[c++]=s>>>16&255,f[c++]=s>>>8&255,f[c++]=255&s,I.arrayBufferToBinaryString(f)},N=function(t,e){var n=Math.LOG2E*Math.log(32768)-8<<4|8,r=n<<8;return r|=Math.min(3,(e-1&255)>>1)<<6,r|=0,[n,255&(r+=31-r%31)]},L=function(t,e){for(var n,r=1,i=0,o=t.length,a=0;0<o;){for(o-=n=e<o?e:o;i+=r+=t[a++],--n;);r%=65521,i%=65521}return(i<<16|r)>>>0},A=function(t,e,n,r){for(var i,o,a,s=t.length/e,l=new Uint8Array(t.length+s),h=T(),u=0;u<s;u++){if(a=u*e,i=t.subarray(a,a+e),r)l.set(r(i,n,o),a+u);else{for(var c=0,f=h.length,p=[];c<f;c++)p[c]=h[c](i,n,o);var d=R(p.concat());l.set(p[d],a+u)}o=i}return l},S=function(t,e,n){var r=Array.apply([],t);return r.unshift(0),r},j=function(t,e,n){var r,i=[],o=0,a=t.length;for(i[0]=1;o<a;o++)r=t[o-e]||0,i[o+1]=t[o]-r+256&255;return i},E=function(t,e,n){var r,i=[],o=0,a=t.length;for(i[0]=2;o<a;o++)r=n&&n[o]||0,i[o+1]=t[o]-r+256&255;return i},M=function(t,e,n){var r,i,o=[],a=0,s=t.length;for(o[0]=3;a<s;a++)r=t[a-e]||0,i=n&&n[a]||0,o[a+1]=t[a]+256-(r+i>>>1)&255;return o},O=function(t,e,n){var r,i,o,a,s=[],l=0,h=t.length;for(s[0]=4;l<h;l++)r=t[l-e]||0,i=n&&n[l]||0,o=n&&n[l-e]||0,a=q(r,i,o),s[l+1]=t[l]-a+256&255;return s},q=function(t,e,n){var r=t+e-n,i=Math.abs(r-t),o=Math.abs(r-e),a=Math.abs(r-n);return i<=o&&i<=a?t:o<=a?e:n},T=function(){return[S,j,E,M,O]},R=function(t){for(var e,n,r,i=0,o=t.length;i<o;)((e=D(t[i].slice(1)))<n||!n)&&(n=e,r=i),i++;return r},D=function(t){for(var e=0,n=t.length,r=0;e<n;)r+=Math.abs(t[e++]);return r},I.processPNG=function(t,e,n,r,i){var o,a,s,l,h,u,c=this.color_spaces.DEVICE_RGB,f=this.decode.FLATE_DECODE,p=8;if(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)){if("function"!=typeof PNG||"function"!=typeof kt)throw new Error("PNG support requires png.js and zlib.js");if(t=(o=new PNG(t)).imgData,p=o.bits,c=o.colorSpace,l=o.colors,-1!==[4,6].indexOf(o.colorType)){if(8===o.bits)for(var d,g=(_=32==o.pixelBitlength?new Uint32Array(o.decodePixels().buffer):16==o.pixelBitlength?new Uint16Array(o.decodePixels().buffer):new Uint8Array(o.decodePixels().buffer)).length,m=new Uint8Array(g*o.colors),y=new Uint8Array(g),v=o.pixelBitlength-o.bits,w=0,b=0;w<g;w++){for(x=_[w],d=0;d<v;)m[b++]=x>>>d&255,d+=o.bits;y[w]=x>>>d&255}if(16===o.bits){g=(_=new Uint32Array(o.decodePixels().buffer)).length,m=new Uint8Array(g*(32/o.pixelBitlength)*o.colors),y=new Uint8Array(g*(32/o.pixelBitlength));for(var x,N=1<o.colors,L=b=w=0;w<g;)x=_[w++],m[b++]=x>>>0&255,N&&(m[b++]=x>>>16&255,x=_[w++],m[b++]=x>>>0&255),y[L++]=x>>>16&255;p=8}r!==I.image_compression.NONE&&C()?(t=B(m,o.width*o.colors,o.colors,r),u=B(y,o.width,1,r)):(t=m,u=y,f=null)}if(3===o.colorType&&(c=this.color_spaces.INDEXED,h=o.palette,o.transparency.indexed)){var A=o.transparency.indexed,S=0;for(w=0,g=A.length;w<g;++w)S+=A[w];if((S/=255)==g-1&&-1!==A.indexOf(0))s=[A.indexOf(0)];else if(S!==g){var _=o.decodePixels();for(y=new Uint8Array(_.length),w=0,g=_.length;w<g;w++)y[w]=A[_[w]];u=B(y,o.width,1)}}var F=function(t){var e;switch(t){case I.image_compression.FAST:e=11;break;case I.image_compression.MEDIUM:e=13;break;case I.image_compression.SLOW:e=14;break;default:e=12}return e}(r);return a=f===this.decode.FLATE_DECODE?"/Predictor "+F+" /Colors "+l+" /BitsPerComponent "+p+" /Columns "+o.width:"/Colors "+l+" /BitsPerComponent "+p+" /Columns "+o.width,(this.isArrayBuffer(t)||this.isArrayBufferView(t))&&(t=this.arrayBufferToBinaryString(t)),(u&&this.isArrayBuffer(u)||this.isArrayBufferView(u))&&(u=this.arrayBufferToBinaryString(u)),this.createImageInfo(t,o.width,o.height,c,p,f,e,n,a,s,h,u,F)}throw new Error("Unsupported PNG image data, try using JPEG instead.")},(
/**
   * @license
   * Copyright (c) 2017 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
U=lt.API).processGIF89A=function(t,e,n,r,i){var o=new At(t),a=o.width,s=o.height,l=[];o.decodeAndBlitFrameRGBA(0,l);var h={data:l,width:a,height:s},u=new _t(100).encode(h,100);return U.processJPEG.call(this,u,e,n,r)},U.processGIF87A=U.processGIF89A,(
/**
   * Copyright (c) 2018 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
z=lt.API).processBMP=function(t,e,n,r,i){var o=new Ft(t,!1),a=o.width,s=o.height,l={data:o.getData(),width:a,height:s},h=new _t(100).encode(l,100);return z.processJPEG.call(this,h,e,n,r)},lt.API.setLanguage=function(t){return void 0===this.internal.languageSettings&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),void 0!=={af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"FYRO Macedonian",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[t]&&(this.internal.languageSettings.languageCode=t,!1===this.internal.languageSettings.isSubscribed&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},
/** @license
   * MIT license.
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *               2014 Diego Casorran, https://github.com/diegocr
   *
   * 
   * ====================================================================
   */
H=lt.API,W=H.getCharWidthsArray=function(t,e){var n,r,i,o=(e=e||{}).font||this.internal.getFont(),a=e.fontSize||this.internal.getFontSize(),s=e.charSpace||this.internal.getCharSpace(),l=e.widths?e.widths:o.metadata.Unicode.widths,h=l.fof?l.fof:1,u=e.kerning?e.kerning:o.metadata.Unicode.kerning,c=u.fof?u.fof:1,f=0,p=l[0]||h,d=[];for(n=0,r=t.length;n<r;n++)i=t.charCodeAt(n),"function"==typeof o.metadata.widthOfString?d.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(i))+s*(1e3/a)||0)/1e3):d.push((l[i]||p)/h+(u[i]&&u[i][f]||0)/c),f=i;return d},V=H.getArraySum=function(t){for(var e=t.length,n=0;e;)n+=t[--e];return n},G=H.getStringUnitWidth=function(t,e){var n=(e=e||{}).fontSize||this.internal.getFontSize(),r=e.font||this.internal.getFont(),i=e.charSpace||this.internal.getCharSpace();return"function"==typeof r.metadata.widthOfString?r.metadata.widthOfString(t,n,i)/n:V(W.apply(this,arguments))},Y=function(t,e,n,r){for(var i=[],o=0,a=t.length,s=0;o!==a&&s+e[o]<n;)s+=e[o],o++;i.push(t.slice(0,o));var l=o;for(s=0;o!==a;)s+e[o]>r&&(i.push(t.slice(l,o)),s=0,l=o),s+=e[o],o++;return l!==o&&i.push(t.slice(l,o)),i},J=function(t,e,n){n||(n={});var r,i,o,a,s,l,h=[],u=[h],c=n.textIndent||0,f=0,p=0,d=t.split(" "),g=W.apply(this,[" ",n])[0];if(l=-1===n.lineIndent?d[0].length+2:n.lineIndent||0){var m=Array(l).join(" "),y=[];d.map(function(t){1<(t=t.split(/\s*\n/)).length?y=y.concat(t.map(function(t,e){return(e&&t.length?"\n":"")+t})):y.push(t[0])}),d=y,l=G.apply(this,[m,n])}for(o=0,a=d.length;o<a;o++){var v=0;if(r=d[o],l&&"\n"==r[0]&&(r=r.substr(1),v=1),i=W.apply(this,[r,n]),e<c+f+(p=V(i))||v){if(e<p){for(s=Y.apply(this,[r,i,e-(c+f),e]),h.push(s.shift()),h=[s.pop()];s.length;)u.push([s.shift()]);p=V(i.slice(r.length-(h[0]?h[0].length:0)))}else h=[r];u.push(h),c=p+l,f=g}else h.push(r),c+=f+p,f=g}if(l)var w=function(t,e){return(e?m:"")+t.join(" ")};else w=function(t){return t.join(" ")};return u.map(w)},H.splitTextToSize=function(t,e,n){var r,i=(n=n||{}).fontSize||this.internal.getFontSize(),o=function(t){var e={0:1},n={};if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var r=this.internal.getFont(t.fontName,t.fontStyle),i="Unicode";return r.metadata[i]?{widths:r.metadata[i].widths||e,kerning:r.metadata[i].kerning||n}:{font:r.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}.call(this,n);r=Array.isArray(t)?t:t.split(/\r?\n/);var a=1*this.internal.scaleFactor*e/i;o.textIndent=n.textIndent?1*n.textIndent*this.internal.scaleFactor/i:0,o.lineIndent=n.lineIndent;var s,l,h=[];for(s=0,l=r.length;s<l;s++)h=h.concat(J.apply(this,[r[s],a,o]));return h},
/** @license
   jsPDF standard_fonts_metrics plugin
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   * MIT license.
   * 
   * ====================================================================
   */
X=lt.API,Z={codePages:["WinAnsiEncoding"],WinAnsiEncoding:(K=function(t){for(var e="klmnopqrstuvwxyz",n={},r=0;r<e.length;r++)n[e[r]]="0123456789abcdef"[r];var i,o,a,s,l,h={},u=1,c=h,f=[],p="",d="",g=t.length-1;for(r=1;r!=g;)l=t[r],r+=1,"'"==l?o=o?(s=o.join(""),i):[]:o?o.push(l):"{"==l?(f.push([c,s]),c={},s=i):"}"==l?((a=f.pop())[0][a[1]]=c,s=i,c=a[0]):"-"==l?u=-1:s===i?n.hasOwnProperty(l)?(p+=n[l],s=parseInt(p,16)*u,u=1,p=""):p+=l:n.hasOwnProperty(l)?(d+=n[l],c[s]=parseInt(d,16)*u,u=1,s=i,d=""):d+=l;return h})("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},Q={Unicode:{Courier:Z,"Courier-Bold":Z,"Courier-BoldOblique":Z,"Courier-Oblique":Z,Helvetica:Z,"Helvetica-Bold":Z,"Helvetica-BoldOblique":Z,"Helvetica-Oblique":Z,"Times-Roman":Z,"Times-Bold":Z,"Times-BoldItalic":Z,"Times-Italic":Z}},$={Unicode:{"Courier-Oblique":K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":K("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":K("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":K("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:K("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:K("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":K("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:K("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":K("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":K("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":K("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":K("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}},X.events.push(["addFont",function(t){var e,n,r,i=t.font,o="Unicode";(e=$[o][i.postScriptName])&&((n=i.metadata[o]?i.metadata[o]:i.metadata[o]={}).widths=e.widths,n.kerning=e.kerning),(r=Q[o][i.postScriptName])&&((n=i.metadata[o]?i.metadata[o]:i.metadata[o]={}).encoding=r).codePages&&r.codePages.length&&(i.encoding=r.codePages[0])}]),
/**
   * @license
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
tt=lt,"undefined"!=typeof self&&self||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window||Function("return this")(),tt.API.events.push(["addFont",function(t){var e=t.font,n=t.instance;if(void 0!==n&&n.existsFileInVFS(e.postScriptName)){var r=n.getFileFromVFS(e.postScriptName);if("string"!=typeof r)throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+e.postScriptName+"').");e.metadata=tt.API.TTFFont.open(e.postScriptName,e.fontName,r,e.encoding),e.metadata.Unicode=e.metadata.Unicode||{encoding:{},kerning:{},widths:[]},e.metadata.glyIdsUsed=[0]}else if(!1===e.isStandardFont)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+e.postScriptName+"').")}]),(
/** @license
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   * 
   * 
   * ====================================================================
   */
et=lt.API).addSvg=function(t,e,n,r,i){if(void 0===e||void 0===n)throw new Error("addSVG needs values for 'x' and 'y'");function o(t){for(var e=parseFloat(t[1]),n=parseFloat(t[2]),r=[],i=3,o=t.length;i<o;)"c"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2]),parseFloat(t[i+3]),parseFloat(t[i+4]),parseFloat(t[i+5]),parseFloat(t[i+6])]),i+=7):"l"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2])]),i+=3):i+=1;return[e,n,r]}var a,s,l,h,u,c,f,p,d=(h=document,p=h.createElement("iframe"),u=".jsPDF_sillysvg_iframe {display:none;position:absolute;}",(f=(c=h).createElement("style")).type="text/css",f.styleSheet?f.styleSheet.cssText=u:f.appendChild(c.createTextNode(u)),c.getElementsByTagName("head")[0].appendChild(f),p.name="childframe",p.setAttribute("width",0),p.setAttribute("height",0),p.setAttribute("frameborder","0"),p.setAttribute("scrolling","no"),p.setAttribute("seamless","seamless"),p.setAttribute("class","jsPDF_sillysvg_iframe"),h.body.appendChild(p),p),g=(a=t,(l=((s=d).contentWindow||s.contentDocument).document).write(a),l.close(),l.getElementsByTagName("svg")[0]),m=[1,1],y=parseFloat(g.getAttribute("width")),v=parseFloat(g.getAttribute("height"));y&&v&&(r&&i?m=[r/y,i/v]:r?m=[r/y,r/y]:i&&(m=[i/v,i/v]));var w,b,x,N,L=g.childNodes;for(w=0,b=L.length;w<b;w++)(x=L[w]).tagName&&"PATH"===x.tagName.toUpperCase()&&((N=o(x.getAttribute("d").split(" ")))[0]=N[0]*m[0]+e,N[1]=N[1]*m[1]+n,this.lines.call(this,N[2],N[0],N[1],m));return this},et.addSVG=et.addSvg,et.addSvgAsImage=function(t,e,n,r,i,o,a,s){if(isNaN(e)||isNaN(n))throw console.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(r)||isNaN(i))throw console.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var l=document.createElement("canvas");l.width=r,l.height=i;var h=l.getContext("2d");return h.fillStyle="#fff",h.fillRect(0,0,l.width,l.height),canvg(l,t,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0}),this.addImage(l.toDataURL("image/jpeg",1),e,n,r,i,a,s),this},lt.API.putTotalPages=function(t){var e,n=0;n=parseInt(this.internal.getFont().id.substr(1),10)<15?(e=new RegExp(t,"g"),this.internal.getNumberOfPages()):(e=new RegExp(this.pdfEscape16(t,this.internal.getFont()),"g"),this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var r=1;r<=this.internal.getNumberOfPages();r++)for(var i=0;i<this.internal.pages[r].length;i++)this.internal.pages[r][i]=this.internal.pages[r][i].replace(e,n);return this},lt.API.viewerPreferences=function(t,e){var n;t=t||{},e=e||!1;var r,i,o={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},a=Object.keys(o),s=[],l=0,h=0,u=0,c=!0;function f(t,e){var n,r=!1;for(n=0;n<t.length;n+=1)t[n]===e&&(r=!0);return r}if(void 0===this.internal.viewerpreferences&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(o)),this.internal.viewerpreferences.isSubscribed=!1),n=this.internal.viewerpreferences.configuration,"reset"===t||!0===e){var p=a.length;for(u=0;u<p;u+=1)n[a[u]].value=n[a[u]].defaultValue,n[a[u]].explicitSet=!1}if("object"===se(t))for(r in t)if(i=t[r],f(a,r)&&void 0!==i){if("boolean"===n[r].type&&"boolean"==typeof i)n[r].value=i;else if("name"===n[r].type&&f(n[r].valueSet,i))n[r].value=i;else if("integer"===n[r].type&&Number.isInteger(i))n[r].value=i;else if("array"===n[r].type){for(l=0;l<i.length;l+=1)if(c=!0,1===i[l].length&&"number"==typeof i[l][0])s.push(String(i[l]-1));else if(1<i[l].length){for(h=0;h<i[l].length;h+=1)"number"!=typeof i[l][h]&&(c=!1);!0===c&&s.push([i[l][0]-1,i[l][1]-1].join(" "))}n[r].value="["+s.join(" ")+"]"}else n[r].value=n[r].defaultValue;n[r].explicitSet=!0}return!1===this.internal.viewerpreferences.isSubscribed&&(this.internal.events.subscribe("putCatalog",function(){var t,e=[];for(t in n)!0===n[t].explicitSet&&("name"===n[t].type?e.push("/"+t+" /"+n[t].value):e.push("/"+t+" "+n[t].value));0!==e.length&&this.internal.write("/ViewerPreferences\n<<\n"+e.join("\n")+"\n>>")}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=n,this},
/** ==================================================================== 
   * jsPDF XMP metadata plugin
   * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
   * 
   * 
   * ====================================================================
   */
nt=lt.API,ot=it=rt="",nt.addMetadata=function(t,e){return it=e||"http://jspdf.default.namespaceuri/",rt=t,this.internal.events.subscribe("postPutResources",function(){if(rt){var t='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+it+'"><jspdf:metadata>',e=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),n=unescape(encodeURIComponent(t)),r=unescape(encodeURIComponent(rt)),i=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),o=unescape(encodeURIComponent("</x:xmpmeta>")),a=n.length+r.length+i.length+e.length+o.length;ot=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+a+" >>"),this.internal.write("stream"),this.internal.write(e+n+r+i+o),this.internal.write("endstream"),this.internal.write("endobj")}else ot=""}),this.internal.events.subscribe("putCatalog",function(){ot&&this.internal.write("/Metadata "+ot+" 0 R")}),this},function(f,t){var e=f.API;var m=e.pdfEscape16=function(t,e){for(var n,r=e.metadata.Unicode.widths,i=["","0","00","000","0000"],o=[""],a=0,s=t.length;a<s;++a){if(n=e.metadata.characterToGlyph(t.charCodeAt(a)),e.metadata.glyIdsUsed.push(n),e.metadata.toUnicode[n]=t.charCodeAt(a),-1==r.indexOf(n)&&(r.push(n),r.push([parseInt(e.metadata.widthOfGlyph(n),10)])),"0"==n)return o.join("");n=n.toString(16),o.push(i[4-n.length],n)}return o.join("")},p=function(t){var e,n,r,i,o,a,s;for(o="/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",r=[],a=0,s=(n=Object.keys(t).sort(function(t,e){return t-e})).length;a<s;a++)e=n[a],100<=r.length&&(o+="\n"+r.length+" beginbfchar\n"+r.join("\n")+"\nendbfchar",r=[]),i=("0000"+t[e].toString(16)).slice(-4),e=("0000"+(+e).toString(16)).slice(-4),r.push("<"+e+"><"+i+">");return r.length&&(o+="\n"+r.length+" beginbfchar\n"+r.join("\n")+"\nendbfchar\n"),o+="endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"};e.events.push(["putFont",function(t){!function(t,e,n,r){if(t.metadata instanceof f.API.TTFFont&&"Identity-H"===t.encoding){for(var i=t.metadata.Unicode.widths,o=t.metadata.subset.encode(t.metadata.glyIdsUsed,1),a="",s=0;s<o.length;s++)a+=String.fromCharCode(o[s]);var l=n();r({data:a,addLength1:!0}),e("endobj");var h=n();r({data:p(t.metadata.toUnicode),addLength1:!0}),e("endobj");var u=n();e("<<"),e("/Type /FontDescriptor"),e("/FontName /"+t.fontName),e("/FontFile2 "+l+" 0 R"),e("/FontBBox "+f.API.PDFObject.convert(t.metadata.bbox)),e("/Flags "+t.metadata.flags),e("/StemV "+t.metadata.stemV),e("/ItalicAngle "+t.metadata.italicAngle),e("/Ascent "+t.metadata.ascender),e("/Descent "+t.metadata.decender),e("/CapHeight "+t.metadata.capHeight),e(">>"),e("endobj");var c=n();e("<<"),e("/Type /Font"),e("/BaseFont /"+t.fontName),e("/FontDescriptor "+u+" 0 R"),e("/W "+f.API.PDFObject.convert(i)),e("/CIDToGIDMap /Identity"),e("/DW 1000"),e("/Subtype /CIDFontType2"),e("/CIDSystemInfo"),e("<<"),e("/Supplement 0"),e("/Registry (Adobe)"),e("/Ordering ("+t.encoding+")"),e(">>"),e(">>"),e("endobj"),t.objectNumber=n(),e("<<"),e("/Type /Font"),e("/Subtype /Type0"),e("/ToUnicode "+h+" 0 R"),e("/BaseFont /"+t.fontName),e("/Encoding /"+t.encoding),e("/DescendantFonts ["+c+" 0 R]"),e(">>"),e("endobj"),t.isAlreadyPutted=!0}}(t.font,t.out,t.newObject,t.putStream)}]);e.events.push(["putFont",function(t){!function(t,e,n,r){if(t.metadata instanceof f.API.TTFFont&&"WinAnsiEncoding"===t.encoding){t.metadata.Unicode.widths;for(var i=t.metadata.rawData,o="",a=0;a<i.length;a++)o+=String.fromCharCode(i[a]);var s=n();r({data:o,addLength1:!0}),e("endobj");var l=n();r({data:p(t.metadata.toUnicode),addLength1:!0}),e("endobj");var h=n();for(e("<<"),e("/Descent "+t.metadata.decender),e("/CapHeight "+t.metadata.capHeight),e("/StemV "+t.metadata.stemV),e("/Type /FontDescriptor"),e("/FontFile2 "+s+" 0 R"),e("/Flags 96"),e("/FontBBox "+f.API.PDFObject.convert(t.metadata.bbox)),e("/FontName /"+t.fontName),e("/ItalicAngle "+t.metadata.italicAngle),e("/Ascent "+t.metadata.ascender),e(">>"),e("endobj"),t.objectNumber=n(),a=0;a<t.metadata.hmtx.widths.length;a++)t.metadata.hmtx.widths[a]=parseInt(t.metadata.hmtx.widths[a]*(1e3/t.metadata.head.unitsPerEm));e("<</Subtype/TrueType/Type/Font/ToUnicode "+l+" 0 R/BaseFont/"+t.fontName+"/FontDescriptor "+h+" 0 R/Encoding/"+t.encoding+" /FirstChar 29 /LastChar 255 /Widths "+f.API.PDFObject.convert(t.metadata.hmtx.widths)+">>"),e("endobj"),t.isAlreadyPutted=!0}}(t.font,t.out,t.newObject,t.putStream)}]);var h=function(t){var e,n,r=t.text||"",i=t.x,o=t.y,a=t.options||{},s=t.mutex||{},l=s.pdfEscape,h=s.activeFontKey,u=s.fonts,c=(s.activeFontSize,""),f=0,p="",d=u[n=h].encoding;if("Identity-H"!==u[n].encoding)return{text:r,x:i,y:o,options:a,mutex:s};for(p=r,n=h,"[object Array]"===Object.prototype.toString.call(r)&&(p=r[0]),f=0;f<p.length;f+=1)u[n].metadata.hasOwnProperty("cmap")&&(e=u[n].metadata.cmap.unicode.codeMap[p[f].charCodeAt(0)]),e?c+=p[f]:p[f].charCodeAt(0)<256&&u[n].metadata.hasOwnProperty("Unicode")?c+=p[f]:c+="";var g="";return parseInt(n.slice(1))<14||"WinAnsiEncoding"===d?g=function(t){for(var e="",n=0;n<t.length;n++)e+=""+t.charCodeAt(n).toString(16);return e}(l(c,n)):"Identity-H"===d&&(g=m(c,u[n])),s.isHex=!0,{text:g,x:i,y:o,options:a,mutex:s}};e.events.push(["postProcessText",function(t){var e=t.text||"",n=t.x,r=t.y,i=t.options,o=t.mutex,a=(i.lang,[]),s={text:e,x:n,y:r,options:i,mutex:o};if("[object Array]"===Object.prototype.toString.call(e)){var l=0;for(l=0;l<e.length;l+=1)"[object Array]"===Object.prototype.toString.call(e[l])&&3===e[l].length?a.push([h(Object.assign({},s,{text:e[l][0]})).text,e[l][1],e[l][2]]):a.push(h(Object.assign({},s,{text:e[l]})).text);t.text=a}else t.text=h(Object.assign({},s,{text:e})).text}])}(lt,"undefined"!=typeof self&&self||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window||Function("return this")()),at=lt.API,st=function(t){return void 0!==t&&(void 0===t.vFS&&(t.vFS={}),!0)},at.existsFileInVFS=function(t){return!!st(this.internal)&&void 0!==this.internal.vFS[t]},at.addFileToVFS=function(t,e){return st(this.internal),this.internal.vFS[t]=e,this},at.getFileFromVFS=function(t){return st(this.internal),void 0!==this.internal.vFS[t]?this.internal.vFS[t]:null},lt.API.addHTML=function(t,d,g,s,m){if("undefined"==typeof html2canvas&&"undefined"==typeof rasterizeHTML)throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");"number"!=typeof d&&(s=d,m=g),"function"==typeof s&&(m=s,s=null),"function"!=typeof m&&(m=function(){});var e=this.internal,y=e.scaleFactor,v=e.pageSize.getWidth(),w=e.pageSize.getHeight();if((s=s||{}).onrendered=function(l){d=parseInt(d)||0,g=parseInt(g)||0;var t=s.dim||{},h=Object.assign({top:0,right:0,bottom:0,left:0,useFor:"content"},s.margin),e=t.h||Math.min(w,l.height/y),u=t.w||Math.min(v,l.width/y)-d,c=s.format||"JPEG",f=s.imageCompression||"SLOW";if(l.height>w-h.top-h.bottom&&s.pagesplit){var p=function(t,e,n,r,i){var o=document.createElement("canvas");o.height=i,o.width=r;var a=o.getContext("2d");return a.mozImageSmoothingEnabled=!1,a.webkitImageSmoothingEnabled=!1,a.msImageSmoothingEnabled=!1,a.imageSmoothingEnabled=!1,a.fillStyle=s.backgroundColor||"#ffffff",a.fillRect(0,0,r,i),a.drawImage(t,e,n,r,i,0,0,r,i),o},n=function(){for(var t,e,n=0,r=0,i={},o=!1;;){var a;if(r=0,i.top=0!==n?h.top:g,i.left=0!==n?h.left:d,o=(v-h.left-h.right)*y<l.width,"content"===h.useFor?0===n?(t=Math.min((v-h.left)*y,l.width),e=Math.min((w-h.top)*y,l.height-n)):(t=Math.min(v*y,l.width),e=Math.min(w*y,l.height-n),i.top=0):(t=Math.min((v-h.left-h.right)*y,l.width),e=Math.min((w-h.bottom-h.top)*y,l.height-n)),o)for(;;){"content"===h.useFor&&(0===r?t=Math.min((v-h.left)*y,l.width):(t=Math.min(v*y,l.width-r),i.left=0));var s=[a=p(l,r,n,t,e),i.left,i.top,a.width/y,a.height/y,c,null,f];if(this.addImage.apply(this,s),(r+=t)>=l.width)break;this.addPage()}else s=[a=p(l,0,n,t,e),i.left,i.top,a.width/y,a.height/y,c,null,f],this.addImage.apply(this,s);if((n+=e)>=l.height)break;this.addPage()}m(u,n,null,s)}.bind(this);if("CANVAS"===l.nodeName){var r=new Image;r.onload=n,r.src=l.toDataURL("image/png"),l=r}else n()}else{var i=Math.random().toString(35),o=[l,d,g,u,e,c,i,f];this.addImage.apply(this,o),m(u,e,i,o)}}.bind(this),"undefined"!=typeof html2canvas&&!s.rstz)return html2canvas(t,s);if("undefined"==typeof rasterizeHTML)return null;var n="drawDocument";return"string"==typeof t&&(n=/^http/.test(t)?"drawURL":"drawHTML"),s.width=s.width||v*y,rasterizeHTML[n](t,void 0,s).then(function(t){s.onrendered(t.image)},function(t){m(null,t)})},
/**
   * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Daniel Husar, https://github.com/danielhusar
   *               2014 Wolfgang Gassler, https://github.com/woolfg
   *               2014 Steven Spungin, https://github.com/flamenco
   *
   * @license
   * 
   * ====================================================================
   */
function(t){var P,k,i,a,s,l,h,u,I,w,f,c,p,n,C,B,d,g,m,j;P=function(){return function(t){return e.prototype=t,new e};function e(){}}(),w=function(t){var e,n,r,i,o,a,s;for(n=0,r=t.length,e=void 0,a=i=!1;!i&&n!==r;)(e=t[n]=t[n].trimLeft())&&(i=!0),n++;for(n=r-1;r&&!a&&-1!==n;)(e=t[n]=t[n].trimRight())&&(a=!0),n--;for(o=/\s+$/g,s=!0,n=0;n!==r;)"\u2028"!=t[n]&&(e=t[n].replace(/\s+/g," "),s&&(e=e.trimLeft()),e&&(s=o.test(e)),t[n]=e),n++;return t},c=function(t){var e,n,r;for(e=void 0,n=(r=t.split(",")).shift();!e&&n;)e=i[n.trim().toLowerCase()],n=r.shift();return e},p=function(t){var e;return-1<(t="auto"===t?"0px":t).indexOf("em")&&!isNaN(Number(t.replace("em","")))&&(t=18.719*Number(t.replace("em",""))+"px"),-1<t.indexOf("pt")&&!isNaN(Number(t.replace("pt","")))&&(t=1.333*Number(t.replace("pt",""))+"px"),void 0,16,(e=n[t])?e:void 0!==(e={"xx-small":9,"x-small":11,small:13,medium:16,large:19,"x-large":23,"xx-large":28,auto:0}[t])?n[t]=e/16:(e=parseFloat(t))?n[t]=e/16:(e=t.match(/([\d\.]+)(px)/),Array.isArray(e)&&3===e.length?n[t]=parseFloat(e[1])/16:n[t]=1)},I=function(t){var e,n,r,i,o;return o=t,i=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(o,null):o.currentStyle?o.currentStyle:o.style,n=void 0,(e={})["font-family"]=c((r=function(t){return t=t.replace(/-\D/g,function(t){return t.charAt(1).toUpperCase()}),i[t]})("font-family"))||"times",e["font-style"]=a[r("font-style")]||"normal",e["text-align"]=s[r("text-align")]||"left","bold"===(n=l[r("font-weight")]||"normal")&&("normal"===e["font-style"]?e["font-style"]=n:e["font-style"]=n+e["font-style"]),e["font-size"]=p(r("font-size"))||1,e["line-height"]=p(r("line-height"))||1,e.display="inline"===r("display")?"inline":"block",n="block"===e.display,e["margin-top"]=n&&p(r("margin-top"))||0,e["margin-bottom"]=n&&p(r("margin-bottom"))||0,e["padding-top"]=n&&p(r("padding-top"))||0,e["padding-bottom"]=n&&p(r("padding-bottom"))||0,e["margin-left"]=n&&p(r("margin-left"))||0,e["margin-right"]=n&&p(r("margin-right"))||0,e["padding-left"]=n&&p(r("padding-left"))||0,e["padding-right"]=n&&p(r("padding-right"))||0,e["page-break-before"]=r("page-break-before")||"auto",e.float=h[r("cssFloat")]||"none",e.clear=u[r("clear")]||"none",e.color=r("color"),e},C=function(t,e,n){var r,i,o,a,s;if(o=!1,a=i=void 0,r=n["#"+t.id])if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;if(r=n[t.nodeName],!o&&r)if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;for(s="string"==typeof t.className?t.className.split(" "):[],i=0;i<s.length;i++)if(r=n["."+s[i]],!o&&r)if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;return o},j=function(t,e){var n,r,i,o,a,s,l,h,u;for(n=[],r=[],i=0,u=t.rows[0].cells.length,l=t.clientWidth;i<u;)h=t.rows[0].cells[i],r[i]={name:h.textContent.toLowerCase().replace(/\s+/g,""),prompt:h.textContent.replace(/\r?\n/g,""),width:h.clientWidth/l*e.pdf.internal.pageSize.getWidth()},i++;for(i=1;i<t.rows.length;){for(s=t.rows[i],a={},o=0;o<s.cells.length;)a[r[o].name]=s.cells[o].textContent.replace(/\r?\n/g,""),o++;n.push(a),i++}return{rows:n,headers:r}};var E={SCRIPT:1,STYLE:1,NOSCRIPT:1,OBJECT:1,EMBED:1,SELECT:1},M=1;k=function(t,i,e){var n,r,o,a,s,l,h,u;for(r=t.childNodes,n=void 0,(s="block"===(o=I(t)).display)&&(i.setBlockBoundary(),i.setBlockStyle(o)),a=0,l=r.length;a<l;){if("object"===se(n=r[a])){if(i.executeWatchFunctions(n),1===n.nodeType&&"HEADER"===n.nodeName){var c=n,f=i.pdf.margins_doc.top;i.pdf.internal.events.subscribe("addPage",function(t){i.y=f,k(c,i,e),i.pdf.margins_doc.top=i.y+10,i.y+=10},!1)}if(8===n.nodeType&&"#comment"===n.nodeName)~n.textContent.indexOf("ADD_PAGE")&&(i.pdf.addPage(),i.y=i.pdf.margins_doc.top);else if(1!==n.nodeType||E[n.nodeName])if(3===n.nodeType){var p=n.nodeValue;if(n.nodeValue&&"LI"===n.parentNode.nodeName)if("OL"===n.parentNode.parentNode.nodeName)p=M+++". "+p;else{var d=o["font-size"],g=(3-.75*d)*i.pdf.internal.scaleFactor,m=.75*d*i.pdf.internal.scaleFactor,y=1.74*d/i.pdf.internal.scaleFactor;u=function(t,e){this.pdf.circle(t+g,e+m,y,"FD")}}16&n.ownerDocument.body.compareDocumentPosition(n)&&i.addText(p,o)}else"string"==typeof n&&i.addText(n,o);else{var v;if("IMG"===n.nodeName){var w=n.getAttribute("src");v=B[i.pdf.sHashCode(w)||w]}if(v){i.pdf.internal.pageSize.getHeight()-i.pdf.margins_doc.bottom<i.y+n.height&&i.y>i.pdf.margins_doc.top&&(i.pdf.addPage(),i.y=i.pdf.margins_doc.top,i.executeWatchFunctions(n));var b=I(n),x=i.x,N=12/i.pdf.internal.scaleFactor,L=(b["margin-left"]+b["padding-left"])*N,A=(b["margin-right"]+b["padding-right"])*N,S=(b["margin-top"]+b["padding-top"])*N,_=(b["margin-bottom"]+b["padding-bottom"])*N;void 0!==b.float&&"right"===b.float?x+=i.settings.width-n.width-A:x+=L,i.pdf.addImage(v,x,i.y+S,n.width,n.height),v=void 0,"right"===b.float||"left"===b.float?(i.watchFunctions.push(function(t,e,n,r){return i.y>=e?(i.x+=t,i.settings.width+=n,!0):!!(r&&1===r.nodeType&&!E[r.nodeName]&&i.x+r.width>i.pdf.margins_doc.left+i.pdf.margins_doc.width)&&(i.x+=t,i.y=e,i.settings.width+=n,!0)}.bind(this,"left"===b.float?-n.width-L-A:0,i.y+n.height+S+_,n.width)),i.watchFunctions.push(function(t,e,n){return!(i.y<t&&e===i.pdf.internal.getNumberOfPages())||1===n.nodeType&&"both"===I(n).clear&&(i.y=t,!0)}.bind(this,i.y+n.height,i.pdf.internal.getNumberOfPages())),i.settings.width-=n.width+L+A,"left"===b.float&&(i.x+=n.width+L+A)):i.y+=n.height+S+_}else if("TABLE"===n.nodeName)h=j(n,i),i.y+=10,i.pdf.table(i.x,i.y,h.rows,h.headers,{autoSize:!1,printHeaders:e.printHeaders,margins:i.pdf.margins_doc,css:I(n)}),i.y=i.pdf.lastCellPos.y+i.pdf.lastCellPos.h+20;else if("OL"===n.nodeName||"UL"===n.nodeName)M=1,C(n,i,e)||k(n,i,e),i.y+=10;else if("LI"===n.nodeName){var F=i.x;i.x+=20/i.pdf.internal.scaleFactor,i.y+=3,C(n,i,e)||k(n,i,e),i.x=F}else"BR"===n.nodeName?(i.y+=o["font-size"]*i.pdf.internal.scaleFactor,i.addText("\u2028",P(o))):C(n,i,e)||k(n,i,e)}}a++}if(e.outY=i.y,s)return i.setBlockBoundary(u)},B={},d=function(t,o,e,n){var a,r=t.getElementsByTagName("img"),i=r.length,s=0;function l(){o.pdf.internal.events.publish("imagesLoaded"),n(a)}function h(e,n,r){if(e){var i=new Image;a=++s,i.crossOrigin="",i.onerror=i.onload=function(){if(i.complete&&(0===i.src.indexOf("data:image/")&&(i.width=n||i.width||0,i.height=r||i.height||0),i.width+i.height)){var t=o.pdf.sHashCode(e)||e;B[t]=B[t]||i}--s||l()},i.src=e}}for(;i--;)h(r[i].getAttribute("src"),r[i].width,r[i].height);return s||l()},g=function(t,o,a){var s=t.getElementsByTagName("footer");if(0<s.length){s=s[0];var e=o.pdf.internal.write,n=o.y;o.pdf.internal.write=function(){},k(s,o,a);var l=Math.ceil(o.y-n)+5;o.y=n,o.pdf.internal.write=e,o.pdf.margins_doc.bottom+=l;for(var r=function(t){var e=void 0!==t?t.pageNumber:1,n=o.y;o.y=o.pdf.internal.pageSize.getHeight()-o.pdf.margins_doc.bottom,o.pdf.margins_doc.bottom-=l;for(var r=s.getElementsByTagName("span"),i=0;i<r.length;++i)-1<(" "+r[i].className+" ").replace(/[\n\t]/g," ").indexOf(" pageCounter ")&&(r[i].innerHTML=e),-1<(" "+r[i].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")&&(r[i].innerHTML="###jsPDFVarTotalPages###");k(s,o,a),o.pdf.margins_doc.bottom+=l,o.y=n},i=s.getElementsByTagName("span"),h=0;h<i.length;++h)-1<(" "+i[h].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")&&o.pdf.internal.events.subscribe("htmlRenderingFinished",o.pdf.putTotalPages.bind(o.pdf,"###jsPDFVarTotalPages###"),!0);o.pdf.internal.events.subscribe("addPage",r,!1),r(),E.FOOTER=1}},m=function(t,e,n,r,i,o){if(!e)return!1;var a,s,l,h;"string"==typeof e||e.parentNode||(e=""+e.innerHTML),"string"==typeof e&&(a=e.replace(/<\/?script[^>]*?>/gi,""),h="jsPDFhtmlText"+Date.now().toString()+(1e3*Math.random()).toFixed(0),(l=document.createElement("div")).style.cssText="position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",l.innerHTML='<iframe style="height:1px;width:1px" name="'+h+'" />',document.body.appendChild(l),(s=window.frames[h]).document.open(),s.document.writeln(a),s.document.close(),e=s.document.body);var u,c=new f(t,n,r,i);return d.call(this,e,c,i.elementHandlers,function(t){g(e,c,i.elementHandlers),k(e,c,i.elementHandlers),c.pdf.internal.events.publish("htmlRenderingFinished"),u=c.dispose(),"function"==typeof o?o(u):t&&console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!")}),u||{x:c.x,y:c.y}},(f=function(t,e,n,r){return this.pdf=t,this.x=e,this.y=n,this.settings=r,this.watchFunctions=[],this.init(),this}).prototype.init=function(){return this.paragraph={text:[],style:[]},this.pdf.internal.write("q")},f.prototype.dispose=function(){return this.pdf.internal.write("Q"),{x:this.x,y:this.y,ready:!0}},f.prototype.executeWatchFunctions=function(t){var e=!1,n=[];if(0<this.watchFunctions.length){for(var r=0;r<this.watchFunctions.length;++r)!0===this.watchFunctions[r](t)?e=!0:n.push(this.watchFunctions[r]);this.watchFunctions=n}return e},f.prototype.splitFragmentsIntoLines=function(t,e){var n,r,i,o,a,s,l,h,u,c,f,p,d,g;for(12,c=this.pdf.internal.scaleFactor,o={},s=l=h=g=a=i=u=r=void 0,p=[f=[]],n=0,d=this.settings.width;t.length;)if(a=t.shift(),g=e.shift(),a)if((i=o[(r=g["font-family"])+(u=g["font-style"])])||(i=this.pdf.internal.getFont(r,u).metadata.Unicode,o[r+u]=i),h={widths:i.widths,kerning:i.kerning,fontSize:12*g["font-size"],textIndent:n},l=this.pdf.getStringUnitWidth(a,h)*h.fontSize/c,"\u2028"==a)f=[],p.push(f);else if(d<n+l){for(s=this.pdf.splitTextToSize(a,d,h),f.push([s.shift(),g]);s.length;)f=[[s.shift(),g]],p.push(f);n=this.pdf.getStringUnitWidth(f[0][0],h)*h.fontSize/c}else f.push([a,g]),n+=l;if(void 0!==g["text-align"]&&("center"===g["text-align"]||"right"===g["text-align"]||"justify"===g["text-align"]))for(var m=0;m<p.length;++m){var y=this.pdf.getStringUnitWidth(p[m][0][0],h)*h.fontSize/c;0<m&&(p[m][0][1]=P(p[m][0][1]));var v=d-y;if("right"===g["text-align"])p[m][0][1]["margin-left"]=v;else if("center"===g["text-align"])p[m][0][1]["margin-left"]=v/2;else if("justify"===g["text-align"]){var w=p[m][0][0].split(" ").length-1;p[m][0][1]["word-spacing"]=v/w,m===p.length-1&&(p[m][0][1]["word-spacing"]=0)}}return p},f.prototype.RenderTextFragment=function(t,e){var n,r;r=0,this.pdf.internal.pageSize.getHeight()-this.pdf.margins_doc.bottom<this.y+this.pdf.internal.getFontSize()&&(this.pdf.internal.write("ET","Q"),this.pdf.addPage(),this.y=this.pdf.margins_doc.top,this.pdf.internal.write("q","BT",this.getPdfColor(e.color),this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td"),r=Math.max(r,e["line-height"],e["font-size"]),this.pdf.internal.write(0,(-12*r).toFixed(2),"Td")),n=this.pdf.internal.getFont(e["font-family"],e["font-style"]);var i=this.getPdfColor(e.color);i!==this.lastTextColor&&(this.pdf.internal.write(i),this.lastTextColor=i),void 0!==e["word-spacing"]&&0<e["word-spacing"]&&this.pdf.internal.write(e["word-spacing"].toFixed(2),"Tw"),this.pdf.internal.write("/"+n.id,(12*e["font-size"]).toFixed(2),"Tf","("+this.pdf.internal.pdfEscape(t)+") Tj"),void 0!==e["word-spacing"]&&this.pdf.internal.write(0,"Tw")},f.prototype.getPdfColor=function(t){var e,n,r,i=/rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);if(null!=i)e=parseInt(i[1]),n=parseInt(i[2]),r=parseInt(i[3]);else{if("string"==typeof t&&"#"!=t.charAt(0)){var o=new RGBColor(t);t=o.ok?o.toHex():"#000000"}e=t.substring(1,3),e=parseInt(e,16),n=t.substring(3,5),n=parseInt(n,16),r=t.substring(5,7),r=parseInt(r,16)}if("string"==typeof e&&/^#[0-9A-Fa-f]{6}$/.test(e)){var a=parseInt(e.substr(1),16);e=a>>16&255,n=a>>8&255,r=255&a}var s=this.f3;return 0===e&&0===n&&0===r||void 0===n?s(e/255)+" g":[s(e/255),s(n/255),s(r/255),"rg"].join(" ")},f.prototype.f3=function(t){return t.toFixed(3)},f.prototype.renderParagraph=function(t){var e,n,r,i,o,a,s,l,h,u,c,f,p;if(r=w(this.paragraph.text),f=this.paragraph.style,e=this.paragraph.blockstyle,this.paragraph.priorblockstyle||{},this.paragraph={text:[],style:[],blockstyle:{},priorblockstyle:e},r.join("").trim()){s=this.splitFragmentsIntoLines(r,f),l=a=void 0,n=12/this.pdf.internal.scaleFactor,this.priorMarginBottom=this.priorMarginBottom||0,c=(Math.max((e["margin-top"]||0)-this.priorMarginBottom,0)+(e["padding-top"]||0))*n,u=((e["margin-bottom"]||0)+(e["padding-bottom"]||0))*n,this.priorMarginBottom=e["margin-bottom"]||0,"always"===e["page-break-before"]&&(this.pdf.addPage(),this.y=0,c=((e["margin-top"]||0)+(e["padding-top"]||0))*n),h=this.pdf.internal.write,o=i=void 0,this.y+=c,h("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td");for(var d=0;s.length;){for(i=l=0,o=(a=s.shift()).length;i!==o;)a[i][0].trim()&&(l=Math.max(l,a[i][1]["line-height"],a[i][1]["font-size"]),p=7*a[i][1]["font-size"]),i++;var g=0,m=0;for(void 0!==a[0][1]["margin-left"]&&0<a[0][1]["margin-left"]&&(g=(m=this.pdf.internal.getCoordinateString(a[0][1]["margin-left"]))-d,d=m),h(g+Math.max(e["margin-left"]||0,0)*n,(-12*l).toFixed(2),"Td"),i=0,o=a.length;i!==o;)a[i][0]&&this.RenderTextFragment(a[i][0],a[i][1]),i++;if(this.y+=l*n,this.executeWatchFunctions(a[0][1])&&0<s.length){var y=[],v=[];s.forEach(function(t){for(var e=0,n=t.length;e!==n;)t[e][0]&&(y.push(t[e][0]+" "),v.push(t[e][1])),++e}),s=this.splitFragmentsIntoLines(w(y),v),h("ET","Q"),h("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td")}}return t&&"function"==typeof t&&t.call(this,this.x-9,this.y-p/2),h("ET","Q"),this.y+=u}},f.prototype.setBlockBoundary=function(t){return this.renderParagraph(t)},f.prototype.setBlockStyle=function(t){return this.paragraph.blockstyle=t},f.prototype.addText=function(t,e){return this.paragraph.text.push(t),this.paragraph.style.push(e)},i={helvetica:"helvetica","sans-serif":"helvetica","times new roman":"times",serif:"times",times:"times",monospace:"courier",courier:"courier"},l={100:"normal",200:"normal",300:"normal",400:"normal",500:"bold",600:"bold",700:"bold",800:"bold",900:"bold",normal:"normal",bold:"bold",bolder:"bold",lighter:"normal"},a={normal:"normal",italic:"italic",oblique:"italic"},s={left:"left",right:"right",center:"center",justify:"justify"},h={none:"none",right:"right",left:"left"},u={none:"none",both:"both"},n={normal:1},t.fromHTML=function(t,e,n,r,i,o){return this.margins_doc=o||{top:0,bottom:0},r||(r={}),r.elementHandlers||(r.elementHandlers={}),m(this,t,isNaN(e)?4:e,isNaN(n)?4:n,r,i)}}(lt.API),lt.API,("undefined"!=typeof window&&window||"undefined"!=typeof global&&global).html2pdf=function(t,a,e){var n=a.canvas;if(n){var r,i;if((n.pdf=a).annotations={_nameMap:[],createAnnotation:function(t,e){var n,r=a.context2d._wrapX(e.left),i=a.context2d._wrapY(e.top),o=(a.context2d._page(e.top),t.indexOf("#"));n=0<=o?{name:t.substring(o+1)}:{url:t},a.link(r,i,e.right-e.left,e.bottom-e.top,n)},setName:function(t,e){var n=a.context2d._wrapX(e.left),r=a.context2d._wrapY(e.top),i=a.context2d._page(e.top);this._nameMap[t]={page:i,x:n,y:r}}},n.annotations=a.annotations,a.context2d._pageBreakAt=function(t){this.pageBreaks.push(t)},a.context2d._gotoPage=function(t){for(;a.internal.getNumberOfPages()<t;)a.addPage();a.setPage(t)},"string"==typeof t){t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");var o,s,l=document.createElement("iframe");document.body.appendChild(l),null!=(o=l.contentDocument)&&null!=o||(o=l.contentWindow.document),o.open(),o.write(t),o.close(),r=o.body,s=o.body||{},t=o.documentElement||{},i=Math.max(s.scrollHeight,s.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}else s=(r=t).body||{},i=Math.max(s.scrollHeight,s.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight);var h={async:!0,allowTaint:!0,backgroundColor:"#ffffff",canvas:n,imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1,windowHeight:i=a.internal.pageSize.getHeight(),scrollY:i};a.context2d.pageWrapYEnabled=!0,a.context2d.pageWrapY=a.internal.pageSize.getHeight(),html2canvas(r,h).then(function(t){e&&(l&&l.parentElement.removeChild(l),e(a))})}else alert("jsPDF canvas plugin not installed")},window.tmp=html2pdf,function(f){var r=f.BlobBuilder||f.WebKitBlobBuilder||f.MSBlobBuilder||f.MozBlobBuilder;f.URL=f.URL||f.webkitURL||function(t,e){return(e=document.createElement("a")).href=t,e};var n=f.Blob,p=URL.createObjectURL,d=URL.revokeObjectURL,o=f.Symbol&&f.Symbol.toStringTag,t=!1,e=!1,g=!!f.ArrayBuffer,i=r&&r.prototype.append&&r.prototype.getBlob;try{t=2===new Blob(["ä"]).size,e=2===new Blob([new Uint8Array([1,2])]).size}catch(t){}function a(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t})}function s(t,e){e=e||{};var n=new r;return a(t).forEach(function(t){n.append(t)}),e.type?n.getBlob(e.type):n.getBlob()}function l(t,e){return new n(a(t),e||{})}if(f.Blob&&(s.prototype=Blob.prototype,l.prototype=Blob.prototype),o)try{File.prototype[o]="File",Blob.prototype[o]="Blob",FileReader.prototype[o]="FileReader"}catch(t){}function h(){var t=!!f.ActiveXObject||"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,e=f.XMLHttpRequest&&f.XMLHttpRequest.prototype.send;t&&e&&(XMLHttpRequest.prototype.send=function(t){t instanceof Blob&&this.setRequestHeader("Content-Type",t.type),e.call(this,t)});try{new File([],"")}catch(t){try{var n=new Function('class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name;this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date;this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File')();f.File=n}catch(t){n=function(t,e,n){var r=new Blob(t,n),i=n&&void 0!==n.lastModified?new Date(n.lastModified):new Date;return r.name=e,r.lastModifiedDate=i,r.lastModified=+i,r.toString=function(){return"[object File]"},o&&(r[o]="File"),r};f.File=n}}}t?(h(),f.Blob=e?f.Blob:l):i?(h(),f.Blob=s):function(){function a(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e.push(r):r<2048?e.push(192|r>>6,128|63&r):r<55296||57344<=r?e.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&t.charCodeAt(n)),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return e}function e(t){var e,n,r,i,o,a;for(e="",r=t.length,n=0;n<r;)switch((i=t[n++])>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e+=String.fromCharCode(i);break;case 12:case 13:o=t[n++],e+=String.fromCharCode((31&i)<<6|63&o);break;case 14:o=t[n++],a=t[n++],e+=String.fromCharCode((15&i)<<12|(63&o)<<6|(63&a)<<0)}return e}function s(t){for(var e=new Array(t.byteLength),n=new Uint8Array(t),r=e.length;r--;)e[r]=n[r];return e}function n(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[],r=0;r<t.length;r+=3){var i=t[r],o=r+1<t.length,a=o?t[r+1]:0,s=r+2<t.length,l=s?t[r+2]:0,h=i>>2,u=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,f=63&l;s||(f=64,o||(c=64)),n.push(e[h],e[u],e[c],e[f])}return n.join("")}var t=Object.create||function(t){function e(){}return e.prototype=t,new e};if(g)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(t){return t&&-1<r.indexOf(Object.prototype.toString.call(t))};function h(t,e){for(var n=0,r=(t=t||[]).length;n<r;n++){var i=t[n];i instanceof h?t[n]=i._buffer:"string"==typeof i?t[n]=a(i):g&&(ArrayBuffer.prototype.isPrototypeOf(i)||l(i))?t[n]=s(i):g&&(o=i)&&DataView.prototype.isPrototypeOf(o)?t[n]=s(i.buffer):t[n]=a(String(i))}var o;this._buffer=[].concat.apply([],t),this.size=this._buffer.length,this.type=e&&e.type||""}function i(t,e,n){var r=h.call(this,t,n=n||{})||this;return r.name=e,r.lastModifiedDate=n.lastModified?new Date(n.lastModified):new Date,r.lastModified=+r.lastModifiedDate,r}if(h.prototype.slice=function(t,e,n){return new h([this._buffer.slice(t||0,e||this._buffer.length)],{type:n})},h.prototype.toString=function(){return"[object Blob]"},(i.prototype=t(h.prototype)).constructor=i,Object.setPrototypeOf)Object.setPrototypeOf(i,h);else try{i.__proto__=h}catch(t){}function o(){if(!(this instanceof o))throw new TypeError("Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");var n=document.createDocumentFragment();this.addEventListener=n.addEventListener,this.dispatchEvent=function(t){var e=this["on"+t.type];"function"==typeof e&&e(t),n.dispatchEvent(t)},this.removeEventListener=n.removeEventListener}function u(t,e,n){if(!(e instanceof h))throw new TypeError("Failed to execute '"+n+"' on 'FileReader': parameter 1 is not of type 'Blob'.");t.result="",setTimeout(function(){this.readyState=o.LOADING,t.dispatchEvent(new Event("load")),t.dispatchEvent(new Event("loadend"))})}i.prototype.toString=function(){return"[object File]"},o.EMPTY=0,o.LOADING=1,o.DONE=2,o.prototype.error=null,o.prototype.onabort=null,o.prototype.onerror=null,o.prototype.onload=null,o.prototype.onloadend=null,o.prototype.onloadstart=null,o.prototype.onprogress=null,o.prototype.readAsDataURL=function(t){u(this,t,"readAsDataURL"),this.result="data:"+t.type+";base64,"+n(t._buffer)},o.prototype.readAsText=function(t){u(this,t,"readAsText"),this.result=e(t._buffer)},o.prototype.readAsArrayBuffer=function(t){u(this,t,"readAsText"),this.result=t._buffer.slice()},o.prototype.abort=function(){},URL.createObjectURL=function(t){return t instanceof h?"data:"+t.type+";base64,"+n(t._buffer):p.call(URL,t)},URL.revokeObjectURL=function(t){d&&d.call(URL,t)};var c=f.XMLHttpRequest&&f.XMLHttpRequest.prototype.send;c&&(XMLHttpRequest.prototype.send=function(t){t instanceof h?(this.setRequestHeader("Content-Type",t.type),c.call(this,e(t._buffer))):c.call(this,t)}),f.FileReader=o,f.File=i,f.Blob=h}()}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")());var ht,ut,ct,ft,pt,dt,gt,mt,yt,vt,wt,bt,xt,Nt,Lt,le=le||function(s){if(!(void 0===s||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=s.document,l=function(){return s.URL||s.webkitURL||s},h=t.createElementNS("http://www.w3.org/1999/xhtml","a"),u="download"in h,c=/constructor/i.test(s.HTMLElement)||s.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),p=s.setImmediate||s.setTimeout,d=function(t){p(function(){throw t},0)},g=function(t){setTimeout(function(){"string"==typeof t?l().revokeObjectURL(t):t.remove()},4e4)},m=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},r=function(t,n,e){e||(t=m(t));var r,i=this,o="application/octet-stream"===t.type,a=function(){!function(t,e,n){for(var r=(e=[].concat(e)).length;r--;){var i=t["on"+e[r]];if("function"==typeof i)try{i.call(t,n||t)}catch(t){d(t)}}}(i,"writestart progress write writeend".split(" "))};if(i.readyState=i.INIT,u)return r=l().createObjectURL(t),void p(function(){var t,e;h.href=r,h.download=n,t=h,e=new MouseEvent("click"),t.dispatchEvent(e),a(),g(r),i.readyState=i.DONE},0);!function(){if((f||o&&c)&&s.FileReader){var e=new FileReader;return e.onloadend=function(){var t=f?e.result:e.result.replace(/^data:[^;]*;/,"data:attachment/file;");s.open(t,"_blank")||(s.location.href=t),t=void 0,i.readyState=i.DONE,a()},e.readAsDataURL(t),i.readyState=i.INIT}r||(r=l().createObjectURL(t)),o?s.location.href=r:s.open(r,"_blank")||(s.location.href=r);i.readyState=i.DONE,a(),g(r)}()},e=r.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=m(t)),navigator.msSaveOrOpenBlob(t,e)}:(e.abort=function(){},e.readyState=e.INIT=0,e.WRITING=1,e.DONE=2,e.error=e.onwritestart=e.onprogress=e.onwrite=e.onabort=e.onerror=e.onwriteend=null,function(t,e,n){return new r(t,e||t.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||void 0);function At(x){var t=0;if(71!==x[t++]||73!==x[t++]||70!==x[t++]||56!==x[t++]||56!=(x[t++]+1&253)||97!==x[t++])throw"Invalid GIF 87a/89a header.";var N=x[t++]|x[t++]<<8,e=x[t++]|x[t++]<<8,n=x[t++],r=n>>7,i=1<<(7&n)+1;x[t++];x[t++];var o=null;r&&(o=t,t+=3*i);var a=!0,s=[],l=0,h=null,u=0,c=null;for(this.width=N,this.height=e;a&&t<x.length;)switch(x[t++]){case 33:switch(x[t++]){case 255:if(11!==x[t]||78==x[t+1]&&69==x[t+2]&&84==x[t+3]&&83==x[t+4]&&67==x[t+5]&&65==x[t+6]&&80==x[t+7]&&69==x[t+8]&&50==x[t+9]&&46==x[t+10]&&48==x[t+11]&&3==x[t+12]&&1==x[t+13]&&0==x[t+16])t+=14,c=x[t++]|x[t++]<<8,t++;else for(t+=12;;){if(0===(A=x[t++]))break;t+=A}break;case 249:if(4!==x[t++]||0!==x[t+4])throw"Invalid graphics extension block.";var f=x[t++];l=x[t++]|x[t++]<<8,h=x[t++],0==(1&f)&&(h=null),u=f>>2&7,t++;break;case 254:for(;;){if(0===(A=x[t++]))break;t+=A}break;default:throw"Unknown graphic control label: 0x"+x[t-1].toString(16)}break;case 44:var p=x[t++]|x[t++]<<8,d=x[t++]|x[t++]<<8,g=x[t++]|x[t++]<<8,m=x[t++]|x[t++]<<8,y=x[t++],v=y>>6&1,w=o,b=!1;if(y>>7){b=!0;w=t,t+=3*(1<<(7&y)+1)}var L=t;for(t++;;){var A;if(0===(A=x[t++]))break;t+=A}s.push({x:p,y:d,width:g,height:m,has_local_palette:b,palette_offset:w,data_offset:L,data_length:t-L,transparent_index:h,interlaced:!!v,delay:l,disposal:u});break;case 59:a=!1;break;default:throw"Unknown gif block: 0x"+x[t-1].toString(16)}this.numFrames=function(){return s.length},this.loopCount=function(){return c},this.frameInfo=function(t){if(t<0||t>=s.length)throw"Frame index out of range.";return s[t]},this.decodeAndBlitFrameBGRA=function(t,e){var n=this.frameInfo(t),r=n.width*n.height,i=new Uint8Array(r);St(x,n.data_offset,i,r);var o=n.palette_offset,a=n.transparent_index;null===a&&(a=256);var s=n.width,l=N-s,h=s,u=4*(n.y*N+n.x),c=4*((n.y+n.height)*N+n.x),f=u,p=4*l;!0===n.interlaced&&(p+=4*(s+l)*7);for(var d=8,g=0,m=i.length;g<m;++g){var y=i[g];if(0===h&&(h=s,c<=(f+=p)&&(p=l+4*(s+l)*(d-1),f=u+(s+l)*(d<<1),d>>=1)),y===a)f+=4;else{var v=x[o+3*y],w=x[o+3*y+1],b=x[o+3*y+2];e[f++]=b,e[f++]=w,e[f++]=v,e[f++]=255}--h}},this.decodeAndBlitFrameRGBA=function(t,e){var n=this.frameInfo(t),r=n.width*n.height,i=new Uint8Array(r);St(x,n.data_offset,i,r);var o=n.palette_offset,a=n.transparent_index;null===a&&(a=256);var s=n.width,l=N-s,h=s,u=4*(n.y*N+n.x),c=4*((n.y+n.height)*N+n.x),f=u,p=4*l;!0===n.interlaced&&(p+=4*(s+l)*7);for(var d=8,g=0,m=i.length;g<m;++g){var y=i[g];if(0===h&&(h=s,c<=(f+=p)&&(p=l+4*(s+l)*(d-1),f=u+(s+l)*(d<<1),d>>=1)),y===a)f+=4;else{var v=x[o+3*y],w=x[o+3*y+1],b=x[o+3*y+2];e[f++]=v,e[f++]=w,e[f++]=b,e[f++]=255}--h}}}function St(t,e,n,r){for(var i=t[e++],o=1<<i,a=o+1,s=a+1,l=i+1,h=(1<<l)-1,u=0,c=0,f=0,p=t[e++],d=new Int32Array(4096),g=null;;){for(;u<16&&0!==p;)c|=t[e++]<<u,u+=8,1===p?p=t[e++]:--p;if(u<l)break;var m=c&h;if(c>>=l,u-=l,m!==o){if(m===a)break;for(var y=m<s?m:g,v=0,w=y;o<w;)w=d[w]>>8,++v;var b=w;if(r<f+v+(y!==m?1:0))return void console.log("Warning, gif stream longer than expected.");n[f++]=b;var x=f+=v;for(y!==m&&(n[f++]=b),w=y;v--;)w=d[w],n[--x]=255&w,w>>=8;null!==g&&s<4096&&(d[s++]=g<<8|b,h+1<=s&&l<12&&(++l,h=h<<1|1)),g=m}else s=a+1,h=(1<<(l=i+1))-1,g=null}return f!==r&&console.log("Warning, gif stream shorter than expected."),n}try{exports.GifWriter=function(y,t,e,n){var v=0,r=void 0===(n=void 0===n?{}:n).loop?null:n.loop,w=void 0===n.palette?null:n.palette;if(t<=0||e<=0||65535<t||65535<e)throw"Width/Height invalid.";function b(t){var e=t.length;if(e<2||256<e||e&e-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return e}y[v++]=71,y[v++]=73,y[v++]=70,y[v++]=56,y[v++]=57,y[v++]=97;var i=0,o=0;if(null!==w){for(var a=b(w);a>>=1;)++i;if(a=1<<i,--i,void 0!==n.background){if(a<=(o=n.background))throw"Background index out of range.";if(0===o)throw"Background index explicitly passed as 0."}}if(y[v++]=255&t,y[v++]=t>>8&255,y[v++]=255&e,y[v++]=e>>8&255,y[v++]=(null!==w?128:0)|i,y[v++]=o,y[v++]=0,null!==w)for(var s=0,l=w.length;s<l;++s){var h=w[s];y[v++]=h>>16&255,y[v++]=h>>8&255,y[v++]=255&h}if(null!==r){if(r<0||65535<r)throw"Loop count invalid.";y[v++]=33,y[v++]=255,y[v++]=11,y[v++]=78,y[v++]=69,y[v++]=84,y[v++]=83,y[v++]=67,y[v++]=65,y[v++]=80,y[v++]=69,y[v++]=50,y[v++]=46,y[v++]=48,y[v++]=3,y[v++]=1,y[v++]=255&r,y[v++]=r>>8&255,y[v++]=0}var x=!1;this.addFrame=function(t,e,n,r,i,o){if(!0===x&&(--v,x=!1),o=void 0===o?{}:o,t<0||e<0||65535<t||65535<e)throw"x/y invalid.";if(n<=0||r<=0||65535<n||65535<r)throw"Width/Height invalid.";if(i.length<n*r)throw"Not enough pixels for the frame size.";var a=!0,s=o.palette;if(null==s&&(a=!1,s=w),null==s)throw"Must supply either a local or global palette.";for(var l=b(s),h=0;l>>=1;)++h;l=1<<h;var u=void 0===o.delay?0:o.delay,c=void 0===o.disposal?0:o.disposal;if(c<0||3<c)throw"Disposal out of range.";var f=!1,p=0;if(void 0!==o.transparent&&null!==o.transparent&&(f=!0,(p=o.transparent)<0||l<=p))throw"Transparent color index.";if((0!==c||f||0!==u)&&(y[v++]=33,y[v++]=249,y[v++]=4,y[v++]=c<<2|(!0===f?1:0),y[v++]=255&u,y[v++]=u>>8&255,y[v++]=p,y[v++]=0),y[v++]=44,y[v++]=255&t,y[v++]=t>>8&255,y[v++]=255&e,y[v++]=e>>8&255,y[v++]=255&n,y[v++]=n>>8&255,y[v++]=255&r,y[v++]=r>>8&255,y[v++]=!0===a?128|h-1:0,!0===a)for(var d=0,g=s.length;d<g;++d){var m=s[d];y[v++]=m>>16&255,y[v++]=m>>8&255,y[v++]=255&m}v=function(e,n,t,r){e[n++]=t;var i=n++,o=1<<t,a=o-1,s=o+1,l=s+1,h=t+1,u=0,c=0;function f(t){for(;t<=u;)e[n++]=255&c,c>>=8,u-=8,n===i+256&&(e[i]=255,i=n++)}function p(t){c|=t<<u,u+=h,f(8)}var d=r[0]&a,g={};p(o);for(var m=1,y=r.length;m<y;++m){var v=r[m]&a,w=d<<8|v,b=g[w];if(void 0===b){for(c|=d<<u,u+=h;8<=u;)e[n++]=255&c,c>>=8,u-=8,n===i+256&&(e[i]=255,i=n++);4096===l?(p(o),l=s+1,h=t+1,g={}):(1<<h<=l&&++h,g[w]=l++),d=v}else d=b}return p(d),p(s),f(1),i+1===n?e[i]=0:(e[i]=n-i-1,e[n++]=0),n}(y,v,h<2?2:h,i)},this.end=function(){return!1===x&&(y[v++]=59,x=!0),v}},exports.GifReader=At}catch(t){}
/*
    Copyright (c) 2008, Adobe Systems Incorporated
    All rights reserved.

    Redistribution and use in source and binary forms, with or without 
    modification, are permitted provided that the following conditions are
    met:

    * Redistributions of source code must retain the above copyright notice, 
      this list of conditions and the following disclaimer.
    
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the 
      documentation and/or other materials provided with the distribution.
    
    * Neither the name of Adobe Systems Incorporated nor the names of its 
      contributors may be used to endorse or promote products derived from 
      this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
    IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
    THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
function _t(t){var N,L,A,S,e,c=Math.floor,_=new Array(64),F=new Array(64),P=new Array(64),k=new Array(64),y=new Array(65535),v=new Array(65535),Z=new Array(64),w=new Array(64),I=[],C=0,B=7,j=new Array(64),E=new Array(64),M=new Array(64),n=new Array(256),O=new Array(2048),b=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],q=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],T=[0,1,2,3,4,5,6,7,8,9,10,11],R=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],D=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],U=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],z=[0,1,2,3,4,5,6,7,8,9,10,11],H=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],W=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function r(t,e){for(var n=0,r=0,i=new Array,o=1;o<=16;o++){for(var a=1;a<=t[o];a++)i[e[r]]=[],i[e[r]][0]=n,i[e[r]][1]=o,r++,n++;n*=2}return i}function V(t){for(var e=t[0],n=t[1]-1;0<=n;)e&1<<n&&(C|=1<<B),n--,--B<0&&(255==C?(G(255),G(0)):G(C),B=7,C=0)}function G(t){I.push(t)}function Y(t){G(t>>8&255),G(255&t)}function J(t,e,n,r,i){for(var o,a=i[0],s=i[240],l=function(t,e){var n,r,i,o,a,s,l,h,u,c,f=0;for(u=0;u<8;++u){n=t[f],r=t[f+1],i=t[f+2],o=t[f+3],a=t[f+4],s=t[f+5],l=t[f+6];var p=n+(h=t[f+7]),d=n-h,g=r+l,m=r-l,y=i+s,v=i-s,w=o+a,b=o-a,x=p+w,N=p-w,L=g+y,A=g-y;t[f]=x+L,t[f+4]=x-L;var S=.707106781*(A+N);t[f+2]=N+S,t[f+6]=N-S;var _=.382683433*((x=b+v)-(A=m+d)),F=.5411961*x+_,P=1.306562965*A+_,k=.707106781*(L=v+m),I=d+k,C=d-k;t[f+5]=C+F,t[f+3]=C-F,t[f+1]=I+P,t[f+7]=I-P,f+=8}for(u=f=0;u<8;++u){n=t[f],r=t[f+8],i=t[f+16],o=t[f+24],a=t[f+32],s=t[f+40],l=t[f+48];var B=n+(h=t[f+56]),j=n-h,E=r+l,M=r-l,O=i+s,q=i-s,T=o+a,R=o-a,D=B+T,U=B-T,z=E+O,H=E-O;t[f]=D+z,t[f+32]=D-z;var W=.707106781*(H+U);t[f+16]=U+W,t[f+48]=U-W;var V=.382683433*((D=R+q)-(H=M+j)),G=.5411961*D+V,Y=1.306562965*H+V,J=.707106781*(z=q+M),X=j+J,K=j-J;t[f+40]=K+G,t[f+24]=K-G,t[f+8]=X+Y,t[f+56]=X-Y,f++}for(u=0;u<64;++u)c=t[u]*e[u],Z[u]=0<c?c+.5|0:c-.5|0;return Z}(t,e),h=0;h<64;++h)w[b[h]]=l[h];var u=w[0]-n;n=w[0],0==u?V(r[0]):(V(r[v[o=32767+u]]),V(y[o]));for(var c=63;0<c&&0==w[c];c--);if(0==c)return V(a),n;for(var f,p=1;p<=c;){for(var d=p;0==w[p]&&p<=c;++p);var g=p-d;if(16<=g){f=g>>4;for(var m=1;m<=f;++m)V(s);g&=15}o=32767+w[p],V(i[(g<<4)+v[o]]),V(y[o]),p++}return 63!=c&&V(a),n}function X(t){if(t<=0&&(t=1),100<t&&(t=100),e!=t){(function(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;n<64;n++){var r=c((e[n]*t+50)/100);r<1?r=1:255<r&&(r=255),_[b[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;o<64;o++){var a=c((i[o]*t+50)/100);a<1?a=1:255<a&&(a=255),F[b[o]]=a}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],l=0,h=0;h<8;h++)for(var u=0;u<8;u++)P[l]=1/(_[b[l]]*s[h]*s[u]*8),k[l]=1/(F[b[l]]*s[h]*s[u]*8),l++})(t<50?Math.floor(5e3/t):Math.floor(200-2*t)),e=t}}this.encode=function(t,e){var n,r;(new Date).getTime();e&&X(e),I=new Array,C=0,B=7,Y(65496),Y(65504),Y(16),G(74),G(70),G(73),G(70),G(0),G(1),G(1),G(0),Y(1),Y(1),G(0),G(0),function(){Y(65499),Y(132),G(0);for(var t=0;t<64;t++)G(_[t]);G(1);for(var e=0;e<64;e++)G(F[e])}(),n=t.width,r=t.height,Y(65472),Y(17),G(8),Y(r),Y(n),G(3),G(1),G(17),G(0),G(2),G(17),G(1),G(3),G(17),G(1),function(){Y(65476),Y(418),G(0);for(var t=0;t<16;t++)G(q[t+1]);for(var e=0;e<=11;e++)G(T[e]);G(16);for(var n=0;n<16;n++)G(R[n+1]);for(var r=0;r<=161;r++)G(D[r]);G(1);for(var i=0;i<16;i++)G(U[i+1]);for(var o=0;o<=11;o++)G(z[o]);G(17);for(var a=0;a<16;a++)G(H[a+1]);for(var s=0;s<=161;s++)G(W[s])}(),Y(65498),Y(12),G(3),G(1),G(0),G(2),G(17),G(3),G(17),G(0),G(63),G(0);var i=0,o=0,a=0;C=0,B=7,this.encode.displayName="_encode_";for(var s,l,h,u,c,f,p,d,g,m=t.data,y=t.width,v=t.height,w=4*y,b=0;b<v;){for(s=0;s<w;){for(f=c=w*b+s,p=-1,g=d=0;g<64;g++)f=c+(d=g>>3)*w+(p=4*(7&g)),v<=b+d&&(f-=w*(b+1+d-v)),w<=s+p&&(f-=s+p-w+4),l=m[f++],h=m[f++],u=m[f++],j[g]=(O[l]+O[h+256>>0]+O[u+512>>0]>>16)-128,E[g]=(O[l+768>>0]+O[h+1024>>0]+O[u+1280>>0]>>16)-128,M[g]=(O[l+1280>>0]+O[h+1536>>0]+O[u+1792>>0]>>16)-128;i=J(j,P,i,N,A),o=J(E,k,o,L,S),a=J(M,k,a,L,S),s+=32}b+=8}if(0<=B){var x=[];x[1]=B+1,x[0]=(1<<B+1)-1,V(x)}return Y(65497),new Uint8Array(I)},function(){(new Date).getTime();t||(t=50),function(){for(var t=String.fromCharCode,e=0;e<256;e++)n[e]=t(e)}(),N=r(q,T),L=r(U,z),A=r(R,D),S=r(H,W),function(){for(var t=1,e=2,n=1;n<=15;n++){for(var r=t;r<e;r++)v[32767+r]=n,y[32767+r]=[],y[32767+r][1]=n,y[32767+r][0]=r;for(var i=-(e-1);i<=-t;i++)v[32767+i]=n,y[32767+i]=[],y[32767+i][1]=n,y[32767+i][0]=e-1+i;t<<=1,e<<=1}}(),function(){for(var t=0;t<256;t++)O[t]=19595*t,O[t+256>>0]=38470*t,O[t+512>>0]=7471*t+32768,O[t+768>>0]=-11059*t,O[t+1024>>0]=-21709*t,O[t+1280>>0]=32768*t+8421375,O[t+1536>>0]=-27439*t,O[t+1792>>0]=-5329*t}(),X(t),(new Date).getTime()}()}function Ft(t,e){if(this.pos=0,this.buffer=t,this.datav=new DataView(t.buffer),this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,-1===["BM","BA","CI","CP","IC","PT"].indexOf(this.flag))throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}window.tmp=At,lt.API.adler32cs=(dt="function"==typeof ArrayBuffer&&"function"==typeof Uint8Array,gt=null,mt=function(){if(!dt)return function(){return!1};try{var t={};"function"==typeof t.Buffer&&(gt=t.Buffer)}catch(t){}return function(t){return t instanceof ArrayBuffer||null!==gt&&t instanceof gt}}(),yt=null!==gt?function(t){return new gt(t,"utf8").toString("binary")}:function(t){return unescape(encodeURIComponent(t))},vt=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;i<o;i++)n=(n+(255&e.charCodeAt(i)))%65521,r=(r+n)%65521;return(r<<16|n)>>>0},wt=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;i<o;i++)n=(n+e[i])%65521,r=(r+n)%65521;return(r<<16|n)>>>0},xt=(bt={}).Adler32=(((pt=(ft=function(t){if(!(this instanceof ft))throw new TypeError("Constructor cannot called be as a function.");if(!isFinite(t=null==t?1:+t))throw new Error("First arguments needs to be a finite number.");this.checksum=t>>>0}).prototype={}).constructor=ft).from=((ht=function(t){if(!(this instanceof ft))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");this.checksum=vt(1,t.toString())}).prototype=pt,ht),ft.fromUtf8=((ut=function(t){if(!(this instanceof ft))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");var e=yt(t.toString());this.checksum=vt(1,e)}).prototype=pt,ut),dt&&(ft.fromBuffer=((ct=function(t){if(!(this instanceof ft))throw new TypeError("Constructor cannot called be as a function.");if(!mt(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=wt(1,e)}).prototype=pt,ct)),pt.update=function(t){if(null==t)throw new Error("First argument needs to be a string.");return t=t.toString(),this.checksum=vt(this.checksum,t)},pt.updateUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=yt(t.toString());return this.checksum=vt(this.checksum,e)},dt&&(pt.updateBuffer=function(t){if(!mt(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=wt(this.checksum,e)}),pt.clone=function(){return new xt(this.checksum)},ft),bt.from=function(t){if(null==t)throw new Error("First argument needs to be a string.");return vt(1,t.toString())},bt.fromUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=yt(t.toString());return vt(1,e)},dt&&(bt.fromBuffer=function(t){if(!mt(t))throw new Error("First argument need to be ArrayBuffer.");var e=new Uint8Array(t);return wt(1,e)}),bt),function(t){t.__bidiEngine__=t.prototype.__bidiEngine__=function(t){var d,g,c,f,i,o,a,s=e,m=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],y=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],v={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},l={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},h=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],u=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),w=!1,b=0;this.__bidiEngine__={};var x=function(t){var e=t.charCodeAt(),n=e>>8,r=l[n];return void 0!==r?s[256*r+(255&e)]:252===n||253===n?"AL":u.test(n)?"L":8===n?"R":"N"},p=function(t){for(var e,n=0;n<t.length;n++){if("L"===(e=x(t.charAt(n))))return!1;if("R"===e)return!0}return!1},N=function(t,e,n,r){var i,o,a,s,l=e[r];switch(l){case"L":case"R":w=!1;break;case"N":case"AN":break;case"EN":w&&(l="AN");break;case"AL":w=!0,l="R";break;case"WS":l="N";break;case"CS":r<1||r+1>=e.length||"EN"!==(i=n[r-1])&&"AN"!==i||"EN"!==(o=e[r+1])&&"AN"!==o?l="N":w&&(o="AN"),l=o===i?o:"N";break;case"ES":l="EN"===(i=0<r?n[r-1]:"B")&&r+1<e.length&&"EN"===e[r+1]?"EN":"N";break;case"ET":if(0<r&&"EN"===n[r-1]){l="EN";break}if(w){l="N";break}for(a=r+1,s=e.length;a<s&&"ET"===e[a];)a++;l=a<s&&"EN"===e[a]?"EN":"N";break;case"NSM":if(c&&!f){for(s=e.length,a=r+1;a<s&&"NSM"===e[a];)a++;if(a<s){var h=t[r],u=1425<=h&&h<=2303||64286===h;if(i=e[a],u&&("R"===i||"AL"===i)){l="R";break}}}l=r<1||"B"===(i=e[r-1])?"N":n[r-1];break;case"B":d=!(w=!1),l=b;break;case"S":g=!0,l="N";break;case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":w=!1;break;case"BN":l="N"}return l},L=function(t,e,n){var r=t.split("");return n&&A(r,n,{hiLevel:b}),r.reverse(),e&&e.reverse(),r.join("")},A=function(t,e,n){var r,i,o,a,s,l=-1,h=t.length,u=0,c=[],f=b?y:m,p=[];for(g=d=w=!1,i=0;i<h;i++)p[i]=x(t[i]);for(o=0;o<h;o++){if(s=u,c[o]=N(t,p,c,o),r=240&(u=f[s][v[c[o]]]),u&=15,e[o]=a=f[u][5],0<r)if(16===r){for(i=l;i<o;i++)e[i]=1;l=-1}else l=-1;if(f[u][6])-1===l&&(l=o);else if(-1<l){for(i=l;i<o;i++)e[i]=a;l=-1}"B"===p[o]&&(e[o]=0),n.hiLevel|=a}g&&function(t,e,n){for(var r=0;r<n;r++)if("S"===t[r]){e[r]=b;for(var i=r-1;0<=i&&"WS"===t[i];i--)e[i]=b}}(p,e,h)},S=function(t,e,n,r,i){if(!(i.hiLevel<t)){if(1===t&&1===b&&!d)return e.reverse(),void(n&&n.reverse());for(var o,a,s,l,h=e.length,u=0;u<h;){if(r[u]>=t){for(s=u+1;s<h&&r[s]>=t;)s++;for(l=u,a=s-1;l<a;l++,a--)o=e[l],e[l]=e[a],e[a]=o,n&&(o=n[l],n[l]=n[a],n[a]=o);u=s}u++}}},_=function(t,e,n){var r=t.split(""),i={hiLevel:b};return n||(n=[]),A(r,n,i),function(t,e,n){if(0!==n.hiLevel&&a)for(var r,i=0;i<t.length;i++)1===e[i]&&0<=(r=h.indexOf(t[i]))&&(t[i]=h[r+1])}(r,n,i),S(2,r,e,n,i),S(1,r,e,n,i),r.join("")};return this.__bidiEngine__.doBidiReorder=function(t,e,n){if(function(t,e){if(e)for(var n=0;n<t.length;n++)e[n]=n;void 0===f&&(f=p(t)),void 0===o&&(o=p(t))}(t,e),c||!i||o)if(c&&i&&f^o)b=f?1:0,t=L(t,e,n);else if(!c&&i&&o)b=f?1:0,t=_(t,e,n),t=L(t,e);else if(!c||f||i||o){if(c&&!i&&f^o)t=L(t,e),t=f?(b=0,_(t,e,n)):(b=1,t=_(t,e,n),L(t,e));else if(c&&f&&!i&&o)b=1,t=_(t,e,n),t=L(t,e);else if(!c&&!i&&f^o){var r=a;f?(b=1,t=_(t,e,n),b=0,a=!1,t=_(t,e,n),a=r):(b=0,t=_(t,e,n),t=L(t,e),a=!(b=1),t=_(t,e,n),a=r,t=L(t,e))}}else b=0,t=_(t,e,n);else b=f?1:0,t=_(t,e,n);return t},this.__bidiEngine__.setOptions=function(t){t&&(c=t.isInputVisual,i=t.isOutputVisual,f=t.isInputRtl,o=t.isOutputRtl,a=t.isSymmetricSwapping)},this.__bidiEngine__.setOptions(t),this.__bidiEngine__};var e=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],o=new t.__bidiEngine__({isInputVisual:!0});t.API.events.push(["postProcessText",function(t){var e=t.text,n=(t.x,t.y,t.options||{}),r=(t.mutex,n.lang,[]);if("[object Array]"===Object.prototype.toString.call(e)){var i=0;for(r=[],i=0;i<e.length;i+=1)"[object Array]"===Object.prototype.toString.call(e[i])?r.push([o.doBidiReorder(e[i][0]),e[i][1],e[i][2]]):r.push([o.doBidiReorder(e[i])]);t.text=r}else t.text=o.doBidiReorder(e)}])}(lt),window.tmp=_t,Ft.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=0===this.colors?1<<this.bitPP:this.colors;this.palette=new Array(t);for(var e=0;e<t;e++){var n=this.datav.getUint8(this.pos++,!0),r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0);this.palette[e]={red:i,green:r,blue:n,quad:o}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},Ft.prototype.parseBGR=function(){this.pos=this.offset;try{var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new Uint8Array(e),this[t]()}catch(t){console.log("bit decode error:"+t)}},Ft.prototype.bit1=function(){var t=Math.ceil(this.width/8),e=t%4,n=0<=this.height?this.height-1:-this.height;for(n=this.height-1;0<=n;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<t;i++)for(var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+8*i*4,s=0;s<8&&8*i+s<this.width;s++){var l=this.palette[o>>7-s&1];this.data[a+4*s]=l.blue,this.data[a+4*s+1]=l.green,this.data[a+4*s+2]=l.red,this.data[a+4*s+3]=255}0!=e&&(this.pos+=4-e)}},Ft.prototype.bit4=function(){for(var t=Math.ceil(this.width/2),e=t%4,n=this.height-1;0<=n;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<t;i++){var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+2*i*4,s=o>>4,l=15&o,h=this.palette[s];if(this.data[a]=h.blue,this.data[a+1]=h.green,this.data[a+2]=h.red,this.data[a+3]=255,2*i+1>=this.width)break;h=this.palette[l],this.data[a+4]=h.blue,this.data[a+4+1]=h.green,this.data[a+4+2]=h.red,this.data[a+4+3]=255}0!=e&&(this.pos+=4-e)}},Ft.prototype.bit8=function(){for(var t=this.width%4,e=this.height-1;0<=e;e--){for(var n=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var i=this.datav.getUint8(this.pos++,!0),o=n*this.width*4+4*r;if(i<this.palette.length){var a=this.palette[i];this.data[o]=a.red,this.data[o+1]=a.green,this.data[o+2]=a.blue,this.data[o+3]=255}else this.data[o]=255,this.data[o+1]=255,this.data[o+2]=255,this.data[o+3]=255}0!=t&&(this.pos+=4-t)}},Ft.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),n=this.height-1;0<=n;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<this.width;i++){var o=this.datav.getUint16(this.pos,!0);this.pos+=2;var a=(o&e)/e*255|0,s=(o>>5&e)/e*255|0,l=(o>>10&e)/e*255|0,h=o>>15?255:0,u=r*this.width*4+4*i;this.data[u]=l,this.data[u+1]=s,this.data[u+2]=a,this.data[u+3]=h}this.pos+=t}},Ft.prototype.bit16=function(){for(var t=this.width%3,e=parseInt("11111",2),n=parseInt("111111",2),r=this.height-1;0<=r;r--){for(var i=this.bottom_up?r:this.height-1-r,o=0;o<this.width;o++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var s=(a&e)/e*255|0,l=(a>>5&n)/n*255|0,h=(a>>11)/e*255|0,u=i*this.width*4+4*o;this.data[u]=h,this.data[u+1]=l,this.data[u+2]=s,this.data[u+3]=255}this.pos+=t}},Ft.prototype.bit24=function(){for(var t=this.height-1;0<=t;t--){for(var e=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=e*this.width*4+4*n;this.data[a]=o,this.data[a+1]=i,this.data[a+2]=r,this.data[a+3]=255}this.pos+=this.width%4}},Ft.prototype.bit32=function(){for(var t=this.height-1;0<=t;t--)for(var e=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),s=e*this.width*4+4*n;this.data[s]=o,this.data[s+1]=i,this.data[s+2]=r,this.data[s+3]=a}},Ft.prototype.getData=function(){return this.data},window.tmp=Ft,
/*
   Copyright (c) 2013 Gildas Lormeau. All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright 
   notice, this list of conditions and the following disclaimer in 
   the documentation and/or other materials provided with the distribution.

   3. The names of the authors may not be used to endorse or promote products
   derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
   INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
   FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
   INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
   INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
   OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */
function(t){var d=15,g=573,e=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];function ct(){var p=this;function l(t,e){for(var n=0;n|=1&t,t>>>=1,n<<=1,0<--e;);return n>>>1}p.build_tree=function(t){var e,n,r,i=p.dyn_tree,o=p.stat_desc.static_tree,a=p.stat_desc.elems,s=-1;for(t.heap_len=0,t.heap_max=g,e=0;e<a;e++)0!==i[2*e]?(t.heap[++t.heap_len]=s=e,t.depth[e]=0):i[2*e+1]=0;for(;t.heap_len<2;)i[2*(r=t.heap[++t.heap_len]=s<2?++s:0)]=1,t.depth[r]=0,t.opt_len--,o&&(t.static_len-=o[2*r+1]);for(p.max_code=s,e=Math.floor(t.heap_len/2);1<=e;e--)t.pqdownheap(i,e);for(r=a;e=t.heap[1],t.heap[1]=t.heap[t.heap_len--],t.pqdownheap(i,1),n=t.heap[1],t.heap[--t.heap_max]=e,t.heap[--t.heap_max]=n,i[2*r]=i[2*e]+i[2*n],t.depth[r]=Math.max(t.depth[e],t.depth[n])+1,i[2*e+1]=i[2*n+1]=r,t.heap[1]=r++,t.pqdownheap(i,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t){var e,n,r,i,o,a,s=p.dyn_tree,l=p.stat_desc.static_tree,h=p.stat_desc.extra_bits,u=p.stat_desc.extra_base,c=p.stat_desc.max_length,f=0;for(i=0;i<=d;i++)t.bl_count[i]=0;for(s[2*t.heap[t.heap_max]+1]=0,e=t.heap_max+1;e<g;e++)c<(i=s[2*s[2*(n=t.heap[e])+1]+1]+1)&&(i=c,f++),s[2*n+1]=i,n>p.max_code||(t.bl_count[i]++,o=0,u<=n&&(o=h[n-u]),a=s[2*n],t.opt_len+=a*(i+o),l&&(t.static_len+=a*(l[2*n+1]+o)));if(0!==f){do{for(i=c-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[c]--,f-=2}while(0<f);for(i=c;0!==i;i--)for(n=t.bl_count[i];0!==n;)(r=t.heap[--e])>p.max_code||(s[2*r+1]!=i&&(t.opt_len+=(i-s[2*r+1])*s[2*r],s[2*r+1]=i),n--)}}(t),function(t,e,n){var r,i,o,a=[],s=0;for(r=1;r<=d;r++)a[r]=s=s+n[r-1]<<1;for(i=0;i<=e;i++)0!==(o=t[2*i+1])&&(t[2*i]=l(a[o]++,o))}(i,p.max_code,t.bl_count)}}function ft(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i}ct._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],ct.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],ct.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],ct.d_code=function(t){return t<256?e[t]:e[256+(t>>>7)]},ct.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ct.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ct.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ct.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ft.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],ft.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],ft.static_l_desc=new ft(ft.static_ltree,ct.extra_lbits,257,286,d),ft.static_d_desc=new ft(ft.static_dtree,ct.extra_dbits,0,30,d),ft.static_bl_desc=new ft(null,ct.extra_blbits,0,19,7);function n(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i}var pt=[new n(0,0,0,0,0),new n(4,4,8,4,1),new n(4,5,16,8,1),new n(4,6,32,32,1),new n(4,4,16,16,2),new n(8,16,32,32,2),new n(8,16,128,128,2),new n(8,32,128,256,2),new n(32,128,258,1024,2),new n(32,258,258,4096,2)],dt=["need dictionary","stream end","","","stream error","data error","","buffer error","",""];function gt(t,e,n,r){var i=t[2*e],o=t[2*n];return i<o||i==o&&r[e]<=r[n]}function r(){var l,h,u,c,f,p,d,g,i,m,y,v,w,a,b,x,N,L,A,S,_,F,P,k,I,C,B,j,E,M,s,O,q,T,R,D,U,o,z,H,W,V=this,G=new ct,Y=new ct,J=new ct;function X(){var t;for(t=0;t<286;t++)s[2*t]=0;for(t=0;t<30;t++)O[2*t]=0;for(t=0;t<19;t++)q[2*t]=0;s[512]=1,V.opt_len=V.static_len=0,D=o=0}function K(t,e){var n,r,i=-1,o=t[1],a=0,s=7,l=4;for(0===o&&(s=138,l=3),t[2*(e+1)+1]=65535,n=0;n<=e;n++)r=o,o=t[2*(n+1)+1],++a<s&&r==o||(a<l?q[2*r]+=a:0!==r?(r!=i&&q[2*r]++,q[32]++):a<=10?q[34]++:q[36]++,i=r,l=(a=0)===o?(s=138,3):r==o?(s=6,3):(s=7,4))}function Z(t){V.pending_buf[V.pending++]=t}function Q(t){Z(255&t),Z(t>>>8&255)}function $(t,e){var n,r=e;16-r<W?(Q(H|=(n=t)<<W&65535),H=n>>>16-W,W+=r-16):(H|=t<<W&65535,W+=r)}function tt(t,e){var n=2*t;$(65535&e[n],65535&e[n+1])}function et(t,e){var n,r,i=-1,o=t[1],a=0,s=7,l=4;for(0===o&&(s=138,l=3),n=0;n<=e;n++)if(r=o,o=t[2*(n+1)+1],!(++a<s&&r==o)){if(a<l)for(;tt(r,q),0!=--a;);else 0!==r?(r!=i&&(tt(r,q),a--),tt(16,q),$(a-3,2)):a<=10?(tt(17,q),$(a-3,3)):(tt(18,q),$(a-11,7));i=r,l=(a=0)===o?(s=138,3):r==o?(s=6,3):(s=7,4)}}function nt(){16==W?(Q(H),W=H=0):8<=W&&(Z(255&H),H>>>=8,W-=8)}function rt(t,e){var n,r,i;if(V.pending_buf[U+2*D]=t>>>8&255,V.pending_buf[U+2*D+1]=255&t,V.pending_buf[T+D]=255&e,D++,0===t?s[2*e]++:(o++,t--,s[2*(ct._length_code[e]+256+1)]++,O[2*ct.d_code(t)]++),0==(8191&D)&&2<B){for(n=8*D,r=_-N,i=0;i<30;i++)n+=O[2*i]*(5+ct.extra_dbits[i]);if(n>>>=3,o<Math.floor(D/2)&&n<Math.floor(r/2))return!0}return D==R-1}function it(t,e){var n,r,i,o,a=0;if(0!==D)for(;n=V.pending_buf[U+2*a]<<8&65280|255&V.pending_buf[U+2*a+1],r=255&V.pending_buf[T+a],a++,0===n?tt(r,t):(tt((i=ct._length_code[r])+256+1,t),0!==(o=ct.extra_lbits[i])&&$(r-=ct.base_length[i],o),tt(i=ct.d_code(--n),e),0!==(o=ct.extra_dbits[i])&&$(n-=ct.base_dist[i],o)),a<D;);tt(256,t),z=t[513]}function ot(){8<W?Q(H):0<W&&Z(255&H),W=H=0}function at(t,e,n){var r,i,o;$(0+(n?1:0),3),r=t,i=e,o=!0,ot(),z=8,o&&(Q(i),Q(~i)),V.pending_buf.set(g.subarray(r,r+i),V.pending),V.pending+=i}function e(t,e,n){var r,i,o=0;0<B?(G.build_tree(V),Y.build_tree(V),o=function(){var t;for(K(s,G.max_code),K(O,Y.max_code),J.build_tree(V),t=18;3<=t&&0===q[2*ct.bl_order[t]+1];t--);return V.opt_len+=3*(t+1)+5+5+4,t}(),r=V.opt_len+3+7>>>3,(i=V.static_len+3+7>>>3)<=r&&(r=i)):r=i=e+5,e+4<=r&&-1!=t?at(t,e,n):i==r?($(2+(n?1:0),3),it(ft.static_ltree,ft.static_dtree)):($(4+(n?1:0),3),function(t,e,n){var r;for($(t-257,5),$(e-1,5),$(n-4,4),r=0;r<n;r++)$(q[2*ct.bl_order[r]+1],3);et(s,t-1),et(O,e-1)}(G.max_code+1,Y.max_code+1,o+1),it(s,O)),X(),n&&ot()}function st(t){e(0<=N?N:-1,_-N,t),N=_,l.flush_pending()}function lt(){var t,e,n,r;do{if(0===(r=i-P-_)&&0===_&&0===P)r=f;else if(-1==r)r--;else if(f+f-262<=_){for(g.set(g.subarray(f,f+f),0),F-=f,_-=f,N-=f,n=t=w;e=65535&y[--n],y[n]=f<=e?e-f:0,0!=--t;);for(n=t=f;e=65535&m[--n],m[n]=f<=e?e-f:0,0!=--t;);r+=f}if(0===l.avail_in)return;t=l.read_buf(g,_+P,r),3<=(P+=t)&&(v=((v=255&g[_])<<x^255&g[_+1])&b)}while(P<262&&0!==l.avail_in)}function ht(t){var e,n,r=I,i=_,o=k,a=f-262<_?_-(f-262):0,s=M,l=d,h=_+258,u=g[i+o-1],c=g[i+o];E<=k&&(r>>=2),P<s&&(s=P);do{if(g[(e=t)+o]==c&&g[e+o-1]==u&&g[e]==g[i]&&g[++e]==g[i+1]){i+=2,e++;do{}while(g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&i<h);if(n=258-(h-i),i=h-258,o<n){if(F=t,s<=(o=n))break;u=g[i+o-1],c=g[i+o]}}}while((t=65535&m[t&l])>a&&0!=--r);return o<=P?o:P}function ut(t){return t.total_in=t.total_out=0,t.msg=null,V.pending=0,V.pending_out=0,h=113,c=0,G.dyn_tree=s,G.stat_desc=ft.static_l_desc,Y.dyn_tree=O,Y.stat_desc=ft.static_d_desc,J.dyn_tree=q,J.stat_desc=ft.static_bl_desc,W=H=0,z=8,X(),function(){var t;for(i=2*f,t=y[w-1]=0;t<w-1;t++)y[t]=0;C=pt[B].max_lazy,E=pt[B].good_length,M=pt[B].nice_length,I=pt[B].max_chain,L=k=2,v=S=P=N=_=0}(),0}V.depth=[],V.bl_count=[],V.heap=[],s=[],O=[],q=[],V.pqdownheap=function(t,e){for(var n=V.heap,r=n[e],i=e<<1;i<=V.heap_len&&(i<V.heap_len&&gt(t,n[i+1],n[i],V.depth)&&i++,!gt(t,r,n[i],V.depth));)n[e]=n[i],e=i,i<<=1;n[e]=r},V.deflateInit=function(t,e,n,r,i,o){return r||(r=8),i||(i=8),o||(o=0),t.msg=null,-1==e&&(e=6),i<1||9<i||8!=r||n<9||15<n||e<0||9<e||o<0||2<o?-2:(t.dstate=V,d=(f=1<<(p=n))-1,b=(w=1<<(a=i+7))-1,x=Math.floor((a+3-1)/3),g=new Uint8Array(2*f),m=[],y=[],R=1<<i+6,V.pending_buf=new Uint8Array(4*R),u=4*R,U=Math.floor(R/2),T=3*R,B=e,j=o,ut(t))},V.deflateEnd=function(){return 42!=h&&113!=h&&666!=h?-2:(V.pending_buf=null,g=m=y=null,V.dstate=null,113==h?-3:0)},V.deflateParams=function(t,e,n){var r=0;return-1==e&&(e=6),e<0||9<e||n<0||2<n?-2:(pt[B].func!=pt[e].func&&0!==t.total_in&&(r=t.deflate(1)),B!=e&&(C=pt[B=e].max_lazy,E=pt[B].good_length,M=pt[B].nice_length,I=pt[B].max_chain),j=n,r)},V.deflateSetDictionary=function(t,e,n){var r,i=n,o=0;if(!e||42!=h)return-2;if(i<3)return 0;for(f-262<i&&(o=n-(i=f-262)),g.set(e.subarray(o,o+i),0),N=_=i,v=((v=255&g[0])<<x^255&g[1])&b,r=0;r<=i-3;r++)v=(v<<x^255&g[r+2])&b,m[r&d]=y[v],y[v]=r;return 0},V.deflate=function(t,e){var n,r,i,o,a,s;if(4<e||e<0)return-2;if(!t.next_out||!t.next_in&&0!==t.avail_in||666==h&&4!=e)return t.msg=dt[4],-2;if(0===t.avail_out)return t.msg=dt[7],-5;if(l=t,o=c,c=e,42==h&&(r=8+(p-8<<4)<<8,3<(i=(B-1&255)>>1)&&(i=3),r|=i<<6,0!==_&&(r|=32),h=113,Z((s=r+=31-r%31)>>8&255),Z(255&s)),0!==V.pending){if(l.flush_pending(),0===l.avail_out)return c=-1,0}else if(0===l.avail_in&&e<=o&&4!=e)return l.msg=dt[7],-5;if(666==h&&0!==l.avail_in)return t.msg=dt[7],-5;if(0!==l.avail_in||0!==P||0!=e&&666!=h){switch(a=-1,pt[B].func){case 0:a=function(t){var e,n=65535;for(u-5<n&&(n=u-5);;){if(P<=1){if(lt(),0===P&&0==t)return 0;if(0===P)break}if(_+=P,e=N+n,((P=0)===_||e<=_)&&(P=_-e,_=e,st(!1),0===l.avail_out))return 0;if(f-262<=_-N&&(st(!1),0===l.avail_out))return 0}return st(4==t),0===l.avail_out?4==t?2:0:4==t?3:1}(e);break;case 1:a=function(t){for(var e,n=0;;){if(P<262){if(lt(),P<262&&0==t)return 0;if(0===P)break}if(3<=P&&(v=(v<<x^255&g[_+2])&b,n=65535&y[v],m[_&d]=y[v],y[v]=_),0!==n&&(_-n&65535)<=f-262&&2!=j&&(L=ht(n)),3<=L)if(e=rt(_-F,L-3),P-=L,L<=C&&3<=P){for(L--;v=(v<<x^255&g[++_+2])&b,n=65535&y[v],m[_&d]=y[v],y[v]=_,0!=--L;);_++}else _+=L,L=0,v=((v=255&g[_])<<x^255&g[_+1])&b;else e=rt(0,255&g[_]),P--,_++;if(e&&(st(!1),0===l.avail_out))return 0}return st(4==t),0===l.avail_out?4==t?2:0:4==t?3:1}(e);break;case 2:a=function(t){for(var e,n,r=0;;){if(P<262){if(lt(),P<262&&0==t)return 0;if(0===P)break}if(3<=P&&(v=(v<<x^255&g[_+2])&b,r=65535&y[v],m[_&d]=y[v],y[v]=_),k=L,A=F,L=2,0!==r&&k<C&&(_-r&65535)<=f-262&&(2!=j&&(L=ht(r)),L<=5&&(1==j||3==L&&4096<_-F)&&(L=2)),3<=k&&L<=k){for(n=_+P-3,e=rt(_-1-A,k-3),P-=k-1,k-=2;++_<=n&&(v=(v<<x^255&g[_+2])&b,r=65535&y[v],m[_&d]=y[v],y[v]=_),0!=--k;);if(S=0,L=2,_++,e&&(st(!1),0===l.avail_out))return 0}else if(0!==S){if((e=rt(0,255&g[_-1]))&&st(!1),_++,P--,0===l.avail_out)return 0}else S=1,_++,P--}return 0!==S&&(e=rt(0,255&g[_-1]),S=0),st(4==t),0===l.avail_out?4==t?2:0:4==t?3:1}(e)}if(2!=a&&3!=a||(h=666),0==a||2==a)return 0===l.avail_out&&(c=-1),0;if(1==a){if(1==e)$(2,3),tt(256,ft.static_ltree),nt(),1+z+10-W<9&&($(2,3),tt(256,ft.static_ltree),nt()),z=7;else if(at(0,0,!1),3==e)for(n=0;n<w;n++)y[n]=0;if(l.flush_pending(),0===l.avail_out)return c=-1,0}}return 4!=e?0:1}}function i(){this.next_in_index=0,this.next_out_index=0,this.avail_in=0,this.total_in=0,this.avail_out=0,this.total_out=0}i.prototype={deflateInit:function(t,e){return this.dstate=new r,e||(e=d),this.dstate.deflateInit(this,t,e)},deflate:function(t){return this.dstate?this.dstate.deflate(this,t):-2},deflateEnd:function(){if(!this.dstate)return-2;var t=this.dstate.deflateEnd();return this.dstate=null,t},deflateParams:function(t,e){return this.dstate?this.dstate.deflateParams(this,t,e):-2},deflateSetDictionary:function(t,e){return this.dstate?this.dstate.deflateSetDictionary(this,t,e):-2},read_buf:function(t,e,n){var r=this.avail_in;return n<r&&(r=n),0===r?0:(this.avail_in-=r,t.set(this.next_in.subarray(this.next_in_index,this.next_in_index+r),e),this.next_in_index+=r,this.total_in+=r,r)},flush_pending:function(){var t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0))}};var o=t.zip||t;o.Deflater=o._jzlib_Deflater=function(t){var s=new i,l=new Uint8Array(512),e=t?t.level:-1;void 0===e&&(e=-1),s.deflateInit(e),s.next_out=l,this.append=function(t,e){var n,r=[],i=0,o=0,a=0;if(t.length){s.next_in_index=0,s.next_in=t,s.avail_in=t.length;do{if(s.next_out_index=0,s.avail_out=512,0!=s.deflate(0))throw new Error("deflating: "+s.msg);s.next_out_index&&(512==s.next_out_index?r.push(new Uint8Array(l)):r.push(new Uint8Array(l.subarray(0,s.next_out_index)))),a+=s.next_out_index,e&&0<s.next_in_index&&s.next_in_index!=i&&(e(s.next_in_index),i=s.next_in_index)}while(0<s.avail_in||0===s.avail_out);return n=new Uint8Array(a),r.forEach(function(t){n.set(t,o),o+=t.length}),n}},this.flush=function(){var t,e,n=[],r=0,i=0;do{if(s.next_out_index=0,s.avail_out=512,1!=(t=s.deflate(4))&&0!=t)throw new Error("deflating: "+s.msg);0<512-s.avail_out&&n.push(new Uint8Array(l.subarray(0,s.next_out_index))),i+=s.next_out_index}while(0<s.avail_in||0===s.avail_out);return s.deflateEnd(),e=new Uint8Array(i),n.forEach(function(t){e.set(t,r),r+=t.length}),e}}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")()),("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")()).RGBColor=function(t){var e;t=t||"",this.ok=!1,"#"==t.charAt(0)&&(t=t.substr(1,6)),t=(t=t.replace(/ /g,"")).toLowerCase();var n={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(var r in n)t==r&&(t=n[r]);for(var i=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],o=0;o<i.length;o++){var a=i[o].re,s=i[o].process,l=a.exec(t);l&&(e=s(l),this.r=e[0],this.g=e[1],this.b=e[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:255<this.r?255:this.r,this.g=this.g<0||isNaN(this.g)?0:255<this.g?255:this.g,this.b=this.b<0||isNaN(this.b)?0:255<this.b?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),n=this.b.toString(16);return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==n.length&&(n="0"+n),"#"+t+e+n}},function(t){var n="+".charCodeAt(0),r="/".charCodeAt(0),i="0".charCodeAt(0),o="a".charCodeAt(0),a="A".charCodeAt(0),s="-".charCodeAt(0),l="_".charCodeAt(0),u=function(t){var e=t.charCodeAt(0);return e===n||e===s?62:e===r||e===l?63:e<i?-1:e<i+10?e-i+26+26:e<a+26?e-a:e<o+26?e-o+26:void 0};t.API.TTFFont=function(){function i(t,e,n){var r;if(this.rawData=t,r=this.contents=new J(t),this.contents.pos=4,"ttcf"===r.readString(4)){if(!e)throw new Error("Must specify a font name for TTC files.");throw new Error("Font "+e+" not found in TTC file.")}r.pos=0,this.parse(),this.subset=new P(this),this.registerTTF()}return i.open=function(t,e,n,r){if("string"!=typeof n)throw new Error("Invalid argument supplied in TTFFont.open");return new i(function(t){var e,n,r,i,o,a;if(0<t.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var s=t.length;o="="===t.charAt(s-2)?2:"="===t.charAt(s-1)?1:0,a=new Uint8Array(3*t.length/4-o),r=0<o?t.length-4:t.length;var l=0;function h(t){a[l++]=t}for(n=e=0;e<r;e+=4,n+=3)h((16711680&(i=u(t.charAt(e))<<18|u(t.charAt(e+1))<<12|u(t.charAt(e+2))<<6|u(t.charAt(e+3))))>>16),h((65280&i)>>8),h(255&i);return 2===o?h(255&(i=u(t.charAt(e))<<2|u(t.charAt(e+1))>>4)):1===o&&(h((i=u(t.charAt(e))<<10|u(t.charAt(e+1))<<4|u(t.charAt(e+2))>>2)>>8&255),h(255&i)),a}(n),e,r)},i.prototype.parse=function(){return this.directory=new e(this.contents),this.head=new p(this),this.name=new b(this),this.cmap=new y(this),this.toUnicode=new Map,this.hhea=new g(this),this.maxp=new x(this),this.hmtx=new N(this),this.post=new v(this),this.os2=new m(this),this.loca=new F(this),this.glyf=new A(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},i.prototype.registerTTF=function(){var i,t,e,n,r;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=function(){var t,e,n,r;for(r=[],t=0,e=(n=this.bbox).length;t<e;t++)i=n[t],r.push(Math.round(i*this.scaleFactor));return r}.call(this),this.stemV=0,this.post.exists?(e=255&(n=this.post.italic_angle),!0&(t=n>>16)&&(t=-(1+(65535^t))),this.italicAngle=+(t+"."+e)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=1===(r=this.familyClass)||2===r||3===r||4===r||5===r||7===r,this.isScript=10===this.familyClass,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),0!==this.italicAngle&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},i.prototype.characterToGlyph=function(t){var e;return(null!=(e=this.cmap.unicode)?e.codeMap[t]:void 0)||0},i.prototype.widthOfGlyph=function(t){var e;return e=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*e},i.prototype.widthOfString=function(t,e,n){var r,i,o,a,s;for(i=a=o=0,s=(t=""+t).length;0<=s?a<s:s<a;i=0<=s?++a:--a)r=t.charCodeAt(i),o+=this.widthOfGlyph(this.characterToGlyph(r))+n*(1e3/e)||0;return o*(e/1e3)},i.prototype.lineHeight=function(t,e){var n;return null==e&&(e=!1),n=e?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},i}();var h,J=function(){function t(t){this.data=null!=t?t:[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(t){return this.data[this.pos++]=t},t.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},t.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt32=function(){var t;return 2147483648<=(t=this.readUInt32())?t-4294967296:t},t.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},t.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},t.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt16=function(){var t;return 32768<=(t=this.readUInt16())?t-65536:t},t.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},t.prototype.readString=function(t){var e,n,r;for(n=[],e=r=0;0<=t?r<t:t<r;e=0<=t?++r:--r)n[e]=String.fromCharCode(this.readByte());return n.join("")},t.prototype.writeString=function(t){var e,n,r,i;for(i=[],e=n=0,r=t.length;0<=r?n<r:r<n;e=0<=r?++n:--n)i.push(this.writeByte(t.charCodeAt(e)));return i},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(t){return this.writeInt16(t)},t.prototype.readLongLong=function(){var t,e,n,r,i,o,a,s;return t=this.readByte(),e=this.readByte(),n=this.readByte(),r=this.readByte(),i=this.readByte(),o=this.readByte(),a=this.readByte(),s=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^n)+4294967296*(255^r)+16777216*(255^i)+65536*(255^o)+256*(255^a)+(255^s)+1):72057594037927940*t+281474976710656*e+1099511627776*n+4294967296*r+16777216*i+65536*o+256*a+s},t.prototype.writeLongLong=function(t){var e,n;return e=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(e>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(t){return this.writeInt32(t)},t.prototype.read=function(t){var e,n;for(e=[],n=0;0<=t?n<t:t<n;0<=t?++n:--n)e.push(this.readByte());return e},t.prototype.write=function(t){var e,n,r,i;for(i=[],n=0,r=t.length;n<r;n++)e=t[n],i.push(this.writeByte(e));return i},t}(),e=function(){var d;function t(t){var e,n,r;for(this.scalarType=t.readInt(),this.tableCount=t.readShort(),this.searchRange=t.readShort(),this.entrySelector=t.readShort(),this.rangeShift=t.readShort(),this.tables={},n=0,r=this.tableCount;0<=r?n<r:r<n;0<=r?++n:--n)e={tag:t.readString(4),checksum:t.readInt(),offset:t.readInt(),length:t.readInt()},this.tables[e.tag]=e}return t.prototype.encode=function(t){var e,n,r,i,o,a,s,l,h,u,c,f,p;for(p in c=Object.keys(t).length,a=Math.log(2),h=16*Math.floor(Math.log(c)/a),i=Math.floor(h/a),l=16*c-h,(n=new J).writeInt(this.scalarType),n.writeShort(c),n.writeShort(h),n.writeShort(i),n.writeShort(l),r=16*c,s=n.pos+r,o=null,f=[],t)for(u=t[p],n.writeString(p),n.writeInt(d(u)),n.writeInt(s),n.writeInt(u.length),f=f.concat(u),"head"===p&&(o=s),s+=u.length;s%4;)f.push(0),s++;return n.write(f),e=2981146554-d(n.data),n.pos=o+8,n.writeUInt32(e),n.data},d=function(t){var e,n,r,i;for(t=L.call(t);t.length%4;)t.push(0);for(n=new J(t),r=e=0,i=t.length;r<i;r+=4)e+=n.readUInt32();return 4294967295&e},t}(),c={}.hasOwnProperty,f=function(t,e){for(var n in e)c.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t};h=function(){function t(t){var e;this.file=t,e=this.file.directory.tables[this.tag],this.exists=!!e,e&&(this.offset=e.offset,this.length=e.length,this.parse(this.file.contents))}return t.prototype.parse=function(){},t.prototype.encode=function(){},t.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},t}();var p=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var e;return(e=new J).writeInt(this.version),e.writeInt(this.revision),e.writeInt(this.checkSumAdjustment),e.writeInt(this.magicNumber),e.writeShort(this.flags),e.writeShort(this.unitsPerEm),e.writeLongLong(this.created),e.writeLongLong(this.modified),e.writeShort(this.xMin),e.writeShort(this.yMin),e.writeShort(this.xMax),e.writeShort(this.yMax),e.writeShort(this.macStyle),e.writeShort(this.lowestRecPPEM),e.writeShort(this.fontDirectionHint),e.writeShort(t),e.writeShort(this.glyphDataFormat),e.data},e}(),d=function(){function t(n,t){var e,r,i,o,a,s,l,h,u,c,f,p,d,g,m,y,v,w;switch(this.platformID=n.readUInt16(),this.encodingID=n.readShort(),this.offset=t+n.readInt(),u=n.pos,n.pos=this.offset,this.format=n.readUInt16(),this.length=n.readUInt16(),this.language=n.readUInt16(),this.isUnicode=3===this.platformID&&1===this.encodingID&&4===this.format||0===this.platformID&&4===this.format,this.codeMap={},this.format){case 0:for(s=m=0;m<256;s=++m)this.codeMap[s]=n.readByte();break;case 4:for(f=n.readUInt16(),c=f/2,n.pos+=6,i=function(){var t,e;for(e=[],s=t=0;0<=c?t<c:c<t;s=0<=c?++t:--t)e.push(n.readUInt16());return e}(),n.pos+=2,d=function(){var t,e;for(e=[],s=t=0;0<=c?t<c:c<t;s=0<=c?++t:--t)e.push(n.readUInt16());return e}(),l=function(){var t,e;for(e=[],s=t=0;0<=c?t<c:c<t;s=0<=c?++t:--t)e.push(n.readUInt16());return e}(),h=function(){var t,e;for(e=[],s=t=0;0<=c?t<c:c<t;s=0<=c?++t:--t)e.push(n.readUInt16());return e}(),r=(this.length-n.pos+this.offset)/2,a=function(){var t,e;for(e=[],s=t=0;0<=r?t<r:r<t;s=0<=r?++t:--t)e.push(n.readUInt16());return e}(),s=y=0,w=i.length;y<w;s=++y)for(g=i[s],e=v=p=d[s];p<=g?v<=g:g<=v;e=p<=g?++v:--v)0===h[s]?o=e+l[s]:0!==(o=a[h[s]/2+(e-p)-(c-s)]||0)&&(o+=l[s]),this.codeMap[e]=65535&o}n.pos=u}return t.encode=function(t,e){var n,r,i,o,a,s,l,h,u,c,f,p,d,g,m,y,v,w,b,x,N,L,A,S,_,F,P,k,I,C,B,j,E,M,O,q,T,R,D,U,z,H,W,V,G,Y;switch(k=new J,o=Object.keys(t).sort(function(t,e){return t-e}),e){case"macroman":for(d=0,g=function(){var t,e;for(e=[],p=t=0;t<256;p=++t)e.push(0);return e}(),y={0:0},i={},I=0,E=o.length;I<E;I++)null==y[W=t[r=o[I]]]&&(y[W]=++d),i[r]={old:t[r],new:y[t[r]]},g[r]=y[t[r]];return k.writeUInt16(1),k.writeUInt16(0),k.writeUInt32(12),k.writeUInt16(0),k.writeUInt16(262),k.writeUInt16(0),k.write(g),{charMap:i,subtable:k.data,maxGlyphID:d+1};case"unicode":for(F=[],u=[],y={},n={},m=l=null,C=v=0,M=o.length;C<M;C++)null==y[b=t[r=o[C]]]&&(y[b]=++v),n[r]={old:b,new:y[b]},a=y[b]-r,null!=m&&a===l||(m&&u.push(m),F.push(r),l=a),m=r;for(m&&u.push(m),u.push(65535),F.push(65535),S=2*(A=F.length),L=2*Math.pow(Math.log(A)/Math.LN2,2),c=Math.log(L/2)/Math.LN2,N=2*A-L,s=[],x=[],f=[],p=B=0,O=F.length;B<O;p=++B){if(_=F[p],h=u[p],65535===_){s.push(0),x.push(0);break}if(32768<=_-(P=n[_].new))for(s.push(0),x.push(2*(f.length+A-p)),r=j=_;_<=h?j<=h:h<=j;r=_<=h?++j:--j)f.push(n[r].new);else s.push(P-_),x.push(0)}for(k.writeUInt16(3),k.writeUInt16(1),k.writeUInt32(12),k.writeUInt16(4),k.writeUInt16(16+8*A+2*f.length),k.writeUInt16(0),k.writeUInt16(S),k.writeUInt16(L),k.writeUInt16(c),k.writeUInt16(N),z=0,q=u.length;z<q;z++)r=u[z],k.writeUInt16(r);for(k.writeUInt16(0),H=0,T=F.length;H<T;H++)r=F[H],k.writeUInt16(r);for(V=0,R=s.length;V<R;V++)a=s[V],k.writeUInt16(a);for(G=0,D=x.length;G<D;G++)w=x[G],k.writeUInt16(w);for(Y=0,U=f.length;Y<U;Y++)d=f[Y],k.writeUInt16(d);return{charMap:n,subtable:k.data,maxGlyphID:v+1}}},t}(),y=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="cmap",e.prototype.parse=function(t){var e,n,r;for(t.pos=this.offset,this.version=t.readUInt16(),n=t.readUInt16(),this.tables=[],this.unicode=null,r=0;0<=n?r<n:n<r;0<=n?++r:--r)e=new d(t,this.offset),this.tables.push(e),e.isUnicode&&null==this.unicode&&(this.unicode=e);return!0},e.encode=function(t,e){var n,r;return null==e&&(e="macroman"),n=d.encode(t,e),(r=new J).writeUInt16(0),r.writeUInt16(1),n.table=r.data.concat(n.subtable),n},e}(),g=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),m=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="OS/2",e.prototype.parse=function(n){if(n.pos=this.offset,this.version=n.readUInt16(),this.averageCharWidth=n.readShort(),this.weightClass=n.readUInt16(),this.widthClass=n.readUInt16(),this.type=n.readShort(),this.ySubscriptXSize=n.readShort(),this.ySubscriptYSize=n.readShort(),this.ySubscriptXOffset=n.readShort(),this.ySubscriptYOffset=n.readShort(),this.ySuperscriptXSize=n.readShort(),this.ySuperscriptYSize=n.readShort(),this.ySuperscriptXOffset=n.readShort(),this.ySuperscriptYOffset=n.readShort(),this.yStrikeoutSize=n.readShort(),this.yStrikeoutPosition=n.readShort(),this.familyClass=n.readShort(),this.panose=function(){var t,e;for(e=[],t=0;t<10;++t)e.push(n.readByte());return e}(),this.charRange=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(n.readInt());return e}(),this.vendorID=n.readString(4),this.selection=n.readShort(),this.firstCharIndex=n.readShort(),this.lastCharIndex=n.readShort(),0<this.version&&(this.ascent=n.readShort(),this.descent=n.readShort(),this.lineGap=n.readShort(),this.winAscent=n.readShort(),this.winDescent=n.readShort(),this.codePageRange=function(){var t,e;for(e=[],t=0;t<2;++t)e.push(n.readInt());return e}(),1<this.version))return this.xHeight=n.readShort(),this.capHeight=n.readShort(),this.defaultChar=n.readShort(),this.breakChar=n.readShort(),this.maxContext=n.readShort()},e}(),v=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="post",e.prototype.parse=function(r){var t,e,n,i;switch(r.pos=this.offset,this.format=r.readInt(),this.italicAngle=r.readInt(),this.underlinePosition=r.readShort(),this.underlineThickness=r.readShort(),this.isFixedPitch=r.readInt(),this.minMemType42=r.readInt(),this.maxMemType42=r.readInt(),this.minMemType1=r.readInt(),this.maxMemType1=r.readInt(),this.format){case 65536:break;case 131072:for(e=r.readUInt16(),this.glyphNameIndex=[],n=0;0<=e?n<e:e<n;0<=e?++n:--n)this.glyphNameIndex.push(r.readUInt16());for(this.names=[],i=[];r.pos<this.offset+this.length;)t=r.readByte(),i.push(this.names.push(r.readString(t)));return i;case 151552:return e=r.readUInt16(),this.offsets=r.read(e);case 196608:break;case 262144:return this.map=function(){var t,e,n;for(n=[],t=0,e=this.file.maxp.numGlyphs;0<=e?t<e:e<t;0<=e?++t:--t)n.push(r.readUInt32());return n}.call(this)}},e}(),w=function(t,e){this.raw=t,this.length=t.length,this.platformID=e.platformID,this.encodingID=e.encodingID,this.languageID=e.languageID},b=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="name",e.prototype.parse=function(t){var e,n,r,i,o,a,s,l,h,u,c,f;for(t.pos=this.offset,t.readShort(),e=t.readShort(),a=t.readShort(),n=[],i=h=0;0<=e?h<e:e<h;i=0<=e?++h:--h)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+a+t.readShort()});for(s={},i=u=0,c=n.length;u<c;i=++u)r=n[i],t.pos=r.offset,l=t.readString(r.length),o=new w(l,r),null==s[f=r.nameID]&&(s[f]=[]),s[r.nameID].push(o);this.strings=s,this.copyright=s[0],this.fontFamily=s[1],this.fontSubfamily=s[2],this.uniqueSubfamily=s[3],this.fontName=s[4],this.version=s[5];try{this.postscriptName=s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch(t){this.postscriptName=s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=s[7],this.manufacturer=s[8],this.designer=s[9],this.description=s[10],this.vendorUrl=s[11],this.designerUrl=s[12],this.license=s[13],this.licenseUrl=s[14],this.preferredFamily=s[15],this.preferredSubfamily=s[17],this.compatibleFull=s[18],this.sampleText=s[19]},e}(),x=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),N=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="hmtx",e.prototype.parse=function(n){var t,r,i,e,o,a,s;for(n.pos=this.offset,this.metrics=[],e=0,a=this.file.hhea.numberOfMetrics;0<=a?e<a:a<e;0<=a?++e:--e)this.metrics.push({advance:n.readUInt16(),lsb:n.readInt16()});for(r=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var t,e;for(e=[],t=0;0<=r?t<r:r<t;0<=r?++t:--t)e.push(n.readInt16());return e}(),this.widths=function(){var t,e,n,r;for(r=[],t=0,e=(n=this.metrics).length;t<e;t++)i=n[t],r.push(i.advance);return r}.call(this),t=this.widths[this.widths.length-1],s=[],o=0;0<=r?o<r:r<o;0<=r?++o:--o)s.push(this.widths.push(t));return s},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),L=[].slice,A=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="glyf",e.prototype.parse=function(t){return this.cache={}},e.prototype.glyphFor=function(t){var e,n,r,i,o,a,s,l,h,u;return(t=t)in this.cache?this.cache[t]:(i=this.file.loca,e=this.file.contents,n=i.indexOf(t),0===(r=i.lengthOf(t))?this.cache[t]=null:(e.pos=this.offset+n,o=(a=new J(e.read(r))).readShort(),l=a.readShort(),u=a.readShort(),s=a.readShort(),h=a.readShort(),this.cache[t]=-1===o?new _(a,l,u,s,h):new S(a,o,l,u,s,h),this.cache[t]))},e.prototype.encode=function(t,e,n){var r,i,o,a,s;for(o=[],i=[],a=0,s=e.length;a<s;a++)r=t[e[a]],i.push(o.length),r&&(o=o.concat(r.encode(n)));return i.push(o.length),{table:o,offsets:i}},e}(),S=function(){function t(t,e,n,r,i,o){this.raw=t,this.numberOfContours=e,this.xMin=n,this.yMin=r,this.xMax=i,this.yMax=o,this.compound=!1}return t.prototype.encode=function(){return this.raw.data},t}(),_=function(){function t(t,e,n,r,i){var o,a;for(this.raw=t,this.xMin=e,this.yMin=n,this.xMax=r,this.yMax=i,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],o=this.raw;a=o.readShort(),this.glyphOffsets.push(o.pos),this.glyphIDs.push(o.readShort()),32&a;)o.pos+=1&a?4:2,128&a?o.pos+=8:64&a?o.pos+=4:8&a&&(o.pos+=2)}return 1,8,32,64,128,t.prototype.encode=function(t){var e,n,r,i,o;for(n=new J(L.call(this.raw.data)),e=r=0,i=(o=this.glyphIDs).length;r<i;e=++r)o[e],n.pos=this.glyphOffsets[e];return n.data},t}(),F=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,h),e.prototype.tag="loca",e.prototype.parse=function(r){var t;return r.pos=this.offset,t=this.file.head.indexToLocFormat,this.offsets=0===t?function(){var t,e,n;for(n=[],t=0,e=this.length;t<e;t+=2)n.push(2*r.readUInt16());return n}.call(this):function(){var t,e,n;for(n=[],t=0,e=this.length;t<e;t+=4)n.push(r.readUInt32());return n}.call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,e){for(var n=new Uint32Array(this.offsets.length),r=0,i=0,o=0;o<n.length;++o)if(n[o]=r,i<e.length&&e[i]==o){++i,n[o]=r;var a=this.offsets[o],s=this.offsets[o+1]-a;0<s&&(r+=s)}for(var l=new Array(4*n.length),h=0;h<n.length;++h)l[4*h+3]=255&n[h],l[4*h+2]=(65280&n[h])>>8,l[4*h+1]=(16711680&n[h])>>16,l[4*h]=(4278190080&n[h])>>24;return l},e}(),P=function(){function t(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return t.prototype.generateCmap=function(){var t,e,n,r,i;for(e in r=this.font.cmap.tables[0].codeMap,t={},i=this.subset)n=i[e],t[e]=r[n];return t},t.prototype.glyphsFor=function(t){var e,n,r,i,o,a,s;for(r={},o=0,a=t.length;o<a;o++)r[i=t[o]]=this.font.glyf.glyphFor(i);for(i in e=[],r)(null!=(n=r[i])?n.compound:void 0)&&e.push.apply(e,n.glyphIDs);if(0<e.length)for(i in s=this.glyphsFor(e))n=s[i],r[i]=n;return r},t.prototype.encode=function(t,e){var n,r,i,o,a,s,l,h,u,c,f,p,d,g,m;for(r in n=y.encode(this.generateCmap(),"unicode"),o=this.glyphsFor(t),f={0:0},m=n.charMap)f[(s=m[r]).old]=s.new;for(p in c=n.maxGlyphID,o)p in f||(f[p]=c++);return h=function(t){var e,n;for(e in n={},t)n[t[e]]=e;return n}(f),u=Object.keys(h).sort(function(t,e){return t-e}),d=function(){var t,e,n;for(n=[],t=0,e=u.length;t<e;t++)a=u[t],n.push(h[a]);return n}(),i=this.font.glyf.encode(o,d,f),l=this.font.loca.encode(i.offsets,d),g={cmap:this.font.cmap.raw(),glyf:i.table,loca:l,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(e)},this.font.os2.exists&&(g["OS/2"]=this.font.os2.raw()),this.font.directory.encode(g)},t}();t.API.PDFObject=function(){var o;function a(){}return o=function(t,e){return(Array(e+1).join("0")+t).slice(-e)},a.convert=function(r){var i,t,e,n;if(Array.isArray(r))return"["+function(){var t,e,n;for(n=[],t=0,e=r.length;t<e;t++)i=r[t],n.push(a.convert(i));return n}().join(" ")+"]";if("string"==typeof r)return"/"+r;if(null!=r?r.isString:void 0)return"("+r+")";if(r instanceof Date)return"(D:"+o(r.getUTCFullYear(),4)+o(r.getUTCMonth(),2)+o(r.getUTCDate(),2)+o(r.getUTCHours(),2)+o(r.getUTCMinutes(),2)+o(r.getUTCSeconds(),2)+"Z)";if("[object Object]"!=={}.toString.call(r))return""+r;for(t in e=["<<"],r)n=r[t],e.push("/"+t+" "+a.convert(n));return e.push(">>"),e.join("\n")},a}()}(lt),
/*
  # PNG.js
  # Copyright (c) 2011 Devon Govett
  # MIT LICENSE
  # 
  # 
  */
Nt="undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof global&&global||Function('return typeof this === "object" && this.content')()||Function("return this")(),Lt=function(){var h,n,r;function i(t){var e,n,r,i,o,a,s,l,h,u,c,f,p,d;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},a=null;;){switch(e=this.readUInt32(),h=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":a&&this.animation.frames.push(a),this.pos+=4,a={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},o=this.readUInt16(),i=this.readUInt16()||100,a.delay=1e3*o/i,a.disposeOp=this.data[this.pos++],a.blendOp=this.data[this.pos++],a.data=[];break;case"IDAT":case"fdAT":for("fdAT"===h&&(this.pos+=4,e-=4),t=(null!=a?a.data:void 0)||this.imgData,f=0;0<=e?f<e:e<f;0<=e?++f:--f)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(r=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>r)throw new Error("More transparent colors than palette size");if(0<(u=r-this.transparency.indexed.length))for(p=0;0<=u?p<u:u<p;0<=u?++p:--p)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":s=(c=this.read(e)).indexOf(0),l=String.fromCharCode.apply(String,c.slice(0,s)),this.text[l]=String.fromCharCode.apply(String,c.slice(s+1));break;case"IEND":return a&&this.animation.frames.push(a),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(d=this.colorType)||6===d,n=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*n,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}i.load=function(t,e,n){var r;return"function"==typeof e&&(n=e),(r=new XMLHttpRequest).open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){var t;return t=new i(new Uint8Array(r.response||r.mozResponseArrayBuffer)),"function"==typeof(null!=e?e.getContext:void 0)&&t.render(e),"function"==typeof n?n(t):void 0},r.send(null)},i.prototype.read=function(t){var e,n;for(n=[],e=0;0<=t?e<t:t<e;0<=t?++e:--e)n.push(this.data[this.pos++]);return n},i.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.decodePixels=function(C){var B=this.pixelBitlength/8,j=new Uint8Array(this.width*this.height*B),E=0,M=this;if(null==C&&(C=this.imgData),0===C.length)return new Uint8Array(0);function t(t,e,n,r){var i,o,a,s,l,h,u,c,f,p,d,g,m,y,v,w,b,x,N,L,A,S=Math.ceil((M.width-t)/n),_=Math.ceil((M.height-e)/r),F=M.width==S&&M.height==_;for(y=B*S,g=F?j:new Uint8Array(y*_),h=C.length,o=m=0;m<_&&E<h;){switch(C[E++]){case 0:for(s=b=0;b<y;s=b+=1)g[o++]=C[E++];break;case 1:for(s=x=0;x<y;s=x+=1)i=C[E++],l=s<B?0:g[o-B],g[o++]=(i+l)%256;break;case 2:for(s=N=0;N<y;s=N+=1)i=C[E++],a=(s-s%B)/B,v=m&&g[(m-1)*y+a*B+s%B],g[o++]=(v+i)%256;break;case 3:for(s=L=0;L<y;s=L+=1)i=C[E++],a=(s-s%B)/B,l=s<B?0:g[o-B],v=m&&g[(m-1)*y+a*B+s%B],g[o++]=(i+Math.floor((l+v)/2))%256;break;case 4:for(s=A=0;A<y;s=A+=1)i=C[E++],a=(s-s%B)/B,l=s<B?0:g[o-B],0===m?v=w=0:(v=g[(m-1)*y+a*B+s%B],w=a&&g[(m-1)*y+(a-1)*B+s%B]),u=l+v-w,c=Math.abs(u-l),p=Math.abs(u-v),d=Math.abs(u-w),f=c<=p&&c<=d?l:p<=d?v:w,g[o++]=(i+f)%256;break;default:throw new Error("Invalid filter algorithm: "+C[E-1])}if(!F){var P=((e+m*r)*M.width+t)*B,k=m*y;for(s=0;s<S;s+=1){for(var I=0;I<B;I+=1)j[P++]=g[k++];P+=(n-1)*B}}m++}}return C=(C=new kt(C)).getBytes(),1==M.interlaceMethod?(t(0,0,8,8),t(4,0,8,8),t(0,4,4,8),t(2,0,4,4),t(0,2,2,4),t(1,0,2,2),t(0,1,1,2)):t(0,0,1,1),j},i.prototype.decodePalette=function(){var t,e,n,r,i,o,a,s,l;for(n=this.palette,o=this.transparency.indexed||[],i=new Uint8Array((o.length||0)+n.length),r=0,n.length,e=a=t=0,s=n.length;a<s;e=a+=3)i[r++]=n[e],i[r++]=n[e+1],i[r++]=n[e+2],i[r++]=null!=(l=o[t++])?l:255;return i},i.prototype.copyToImageData=function(t,e){var n,r,i,o,a,s,l,h,u,c,f;if(r=this.colors,u=null,n=this.hasAlphaChannel,this.palette.length&&(u=null!=(f=this._decodedPalette)?f:this._decodedPalette=this.decodePalette(),r=4,n=!0),h=(i=t.data||t).length,a=u||e,o=s=0,1===r)for(;o<h;)l=u?4*e[o/4]:s,c=a[l++],i[o++]=c,i[o++]=c,i[o++]=c,i[o++]=n?a[l++]:255,s=l;else for(;o<h;)l=u?4*e[o/4]:s,i[o++]=a[l++],i[o++]=a[l++],i[o++]=a[l++],i[o++]=n?a[l++]:255,s=l},i.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};try{n=Nt.document.createElement("canvas"),r=n.getContext("2d")}catch(t){return-1}return h=function(t){var e;return r.width=t.width,r.height=t.height,r.clearRect(0,0,t.width,t.height),r.putImageData(t,0,0),(e=new Image).src=n.toDataURL(),e},i.prototype.decodeFrames=function(t){var e,n,r,i,o,a,s,l;if(this.animation){for(l=[],n=o=0,a=(s=this.animation.frames).length;o<a;n=++o)e=s[n],r=t.createImageData(e.width,e.height),i=this.decodePixels(new Uint8Array(e.data)),this.copyToImageData(r,i),e.imageData=r,l.push(e.image=h(r));return l}},i.prototype.renderFrame=function(t,e){var n,r,i;return n=(r=this.animation.frames)[e],i=r[e-1],0===e&&t.clearRect(0,0,this.width,this.height),1===(null!=i?i.disposeOp:void 0)?t.clearRect(i.xOffset,i.yOffset,i.width,i.height):2===(null!=i?i.disposeOp:void 0)&&t.putImageData(i.imageData,i.xOffset,i.yOffset),0===n.blendOp&&t.clearRect(n.xOffset,n.yOffset,n.width,n.height),t.drawImage(n.image,n.xOffset,n.yOffset)},i.prototype.animate=function(n){var r,i,o,a,s,t,l=this;return i=0,t=this.animation,a=t.numFrames,o=t.frames,s=t.numPlays,(r=function(){var t,e;if(t=i++%a,e=o[t],l.renderFrame(n,t),1<a&&i/a<s)return l.animation._timeout=setTimeout(r,e.delay)})()},i.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},i.prototype.render=function(t){var e,n;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(n=e.createImageData(this.width,this.height),this.copyToImageData(n,this.decodePixels()),e.putImageData(n,0,0))},i}(),Nt.PNG=Lt;
/*
   * Extracted from pdf.js
   * https://github.com/andreasgal/pdf.js
   *
   * Copyright (c) 2011 Mozilla Foundation
   *
   * Contributors: Andreas Gal <gal@mozilla.com>
   *               Chris G Jones <cjones@mozilla.com>
   *               Shaon Barman <shaon.barman@gmail.com>
   *               Vivien Nicolas <21@vingtetun.org>
   *               Justin D'Arcangelo <justindarc@gmail.com>
   *               Yury Delendik
   *
   * 
   */
var Pt=function(){function t(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return t.prototype={ensureBuffer:function(t){var e=this.buffer,n=e?e.byteLength:0;if(t<n)return e;for(var r=512;r<t;)r<<=1;for(var i=new Uint8Array(r),o=0;o<n;++o)i[o]=e[o];return this.buffer=i},getByte:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(t){var e=this.pos;if(t){this.ensureBuffer(e+t);for(var n=e+t;!this.eof&&this.bufferLength<n;)this.readBlock();var r=this.bufferLength;r<n&&(n=r)}else{for(;!this.eof;)this.readBlock();n=this.bufferLength}return this.pos=n,this.buffer.subarray(e,n)},lookChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(t,e,n){for(var r=t+e;this.bufferLength<=r&&!this.eof;)this.readBlock();return new Stream(this.buffer,t,e,n)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=0}},t}(),kt=function(){if("undefined"!=typeof Uint32Array){var k=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),I=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),C=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),B=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],j=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];return(t.prototype=Object.create(Pt.prototype)).getBits=function(t){for(var e,n=this.codeSize,r=this.codeBuf,i=this.bytes,o=this.bytesPos;n<t;)void 0===(e=i[o++])&&E("Bad encoding in flate stream"),r|=e<<n,n+=8;return e=r&(1<<t)-1,this.codeBuf=r>>t,this.codeSize=n-=t,this.bytesPos=o,e},t.prototype.getCode=function(t){for(var e=t[0],n=t[1],r=this.codeSize,i=this.codeBuf,o=this.bytes,a=this.bytesPos;r<n;){var s;void 0===(s=o[a++])&&E("Bad encoding in flate stream"),i|=s<<r,r+=8}var l=e[i&(1<<n)-1],h=l>>16,u=65535&l;return(0==r||r<h||0==h)&&E("Bad encoding in flate stream"),this.codeBuf=i>>h,this.codeSize=r-h,this.bytesPos=a,u},t.prototype.generateHuffmanTable=function(t){for(var e=t.length,n=0,r=0;r<e;++r)t[r]>n&&(n=t[r]);for(var i=1<<n,o=new Uint32Array(i),a=1,s=0,l=2;a<=n;++a,s<<=1,l<<=1)for(var h=0;h<e;++h)if(t[h]==a){var u=0,c=s;for(r=0;r<a;++r)u=u<<1|1&c,c>>=1;for(r=u;r<i;r+=l)o[r]=a<<16|h;++s}return[o,n]},t.prototype.readBlock=function(){function t(t,e,n,r,i){for(var o=t.getBits(n)+r;0<o--;)e[l++]=i}var e=this.getBits(3);if(1&e&&(this.eof=!0),0!=(e>>=1)){var n,r;if(1==e)n=B,r=j;else if(2==e){for(var i=this.getBits(5)+257,o=this.getBits(5)+1,a=this.getBits(4)+4,s=Array(k.length),l=0;l<a;)s[k[l++]]=this.getBits(3);for(var h=this.generateHuffmanTable(s),u=0,c=(l=0,i+o),f=new Array(c);l<c;){var p=this.getCode(h);16==p?t(this,f,2,3,u):17==p?t(this,f,3,3,u=0):18==p?t(this,f,7,11,u=0):f[l++]=u=p}n=this.generateHuffmanTable(f.slice(0,i)),r=this.generateHuffmanTable(f.slice(i,c))}else E("Unknown block type in flate stream");for(var d=(_=this.buffer)?_.length:0,g=this.bufferLength;;){var m=this.getCode(n);if(m<256)d<=g+1&&(d=(_=this.ensureBuffer(g+1)).length),_[g++]=m;else{if(256==m)return void(this.bufferLength=g);var y=(m=I[m-=257])>>16;0<y&&(y=this.getBits(y));u=(65535&m)+y;m=this.getCode(r),0<(y=(m=C[m])>>16)&&(y=this.getBits(y));var v=(65535&m)+y;d<=g+u&&(d=(_=this.ensureBuffer(g+u)).length);for(var w=0;w<u;++w,++g)_[g]=_[g-v]}}}else{var b,x=this.bytes,N=this.bytesPos;void 0===(b=x[N++])&&E("Bad block header in flate stream");var L=b;void 0===(b=x[N++])&&E("Bad block header in flate stream"),L|=b<<8,void 0===(b=x[N++])&&E("Bad block header in flate stream");var A=b;void 0===(b=x[N++])&&E("Bad block header in flate stream"),(A|=b<<8)!=(65535&~L)&&E("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var S=this.bufferLength,_=this.ensureBuffer(S+L),F=S+L;this.bufferLength=F;for(var P=S;P<F;++P){if(void 0===(b=x[N++])){this.eof=!0;break}_[P]=b}this.bytesPos=N}},t}function E(t){throw new Error(t)}function t(t){var e=0,n=t[e++],r=t[e++];-1!=n&&-1!=r||E("Invalid header in flate stream"),8!=(15&n)&&E("Unknown compression method in flate stream"),((n<<8)+r)%31!=0&&E("Bad FCHECK in flate stream"),32&r&&E("FDICT bit set in flate stream"),this.bytes=t,this.bytesPos=2,this.codeSize=0,this.codeBuf=0,Pt.call(this)}}();window.tmp=kt});try{module.exports=jsPDF}catch(t){}
;/*!
 * 
 *             jsPDF AutoTable plugin v3.5.13
 *             
 *             Copyright (c) 2020 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *             Licensed under the MIT License.
 *             http://opensource.org/licenses/mit-license
 *         
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("jspdf"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["jspdf"], factory);
	else {
		var a = typeof exports === 'object' ? factory((function webpackLoadOptionalExternalModule() { try { return require("jspdf"); } catch(e) {} }())) : factory(root["jspdf"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof this !== 'undefined' ? this : window, function(__WEBPACK_EXTERNAL_MODULE__16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSpacing = exports.getFillStyle = exports.addTableBorder = exports.getStringWidth = void 0;
function getStringWidth(text, styles, doc) {
    doc.applyStyles(styles, true);
    var textArr = Array.isArray(text) ? text : [text];
    var widestLineWidth = textArr
        .map(function (text) { return doc.getTextWidth(text); })
        .reduce(function (a, b) { return Math.max(a, b); }, 0);
    return widestLineWidth;
}
exports.getStringWidth = getStringWidth;
function addTableBorder(doc, table, startPos, cursor) {
    var lineWidth = table.settings.tableLineWidth;
    var lineColor = table.settings.tableLineColor;
    doc.applyStyles({ lineWidth: lineWidth, lineColor: lineColor });
    var fillStyle = getFillStyle(lineWidth, false);
    if (fillStyle) {
        doc.rect(startPos.x, startPos.y, table.getWidth(doc.pageSize().width), cursor.y - startPos.y, fillStyle);
    }
}
exports.addTableBorder = addTableBorder;
function getFillStyle(lineWidth, fillColor) {
    var drawLine = lineWidth > 0;
    var drawBackground = fillColor || fillColor === 0;
    if (drawLine && drawBackground) {
        return 'DF'; // Fill then stroke
    }
    else if (drawLine) {
        return 'S'; // Only stroke (transparent background)
    }
    else if (drawBackground) {
        return 'F'; // Only fill, no stroke
    }
    else {
        return null;
    }
}
exports.getFillStyle = getFillStyle;
function parseSpacing(value, defaultValue) {
    var _a, _b, _c, _d;
    value = value || defaultValue;
    if (Array.isArray(value)) {
        if (value.length >= 4) {
            return {
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[3],
            };
        }
        else if (value.length === 3) {
            return {
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[1],
            };
        }
        else if (value.length === 2) {
            return {
                top: value[0],
                right: value[1],
                bottom: value[0],
                left: value[1],
            };
        }
        else if (value.length === 1) {
            value = value[0];
        }
        else {
            value = defaultValue;
        }
    }
    if (typeof value === 'object') {
        if (typeof value.vertical === 'number') {
            value.top = value.vertical;
            value.bottom = value.vertical;
        }
        if (typeof value.horizontal === 'number') {
            value.right = value.horizontal;
            value.left = value.horizontal;
        }
        return {
            left: (_a = value.left) !== null && _a !== void 0 ? _a : defaultValue,
            top: (_b = value.top) !== null && _b !== void 0 ? _b : defaultValue,
            right: (_c = value.right) !== null && _c !== void 0 ? _c : defaultValue,
            bottom: (_d = value.bottom) !== null && _d !== void 0 ? _d : defaultValue,
        };
    }
    if (typeof value !== 'number') {
        value = defaultValue;
    }
    return { top: value, right: value, bottom: value, left: value };
}
exports.parseSpacing = parseSpacing;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheme = exports.defaultStyles = exports.HtmlRowInput = exports.FONT_ROW_RATIO = void 0;
/**
 * Ratio between font size and font height. The number comes from jspdf's source code
 */
exports.FONT_ROW_RATIO = 1.15;
var HtmlRowInput = /** @class */ (function (_super) {
    __extends(HtmlRowInput, _super);
    function HtmlRowInput(element) {
        var _this = _super.call(this) || this;
        _this._element = element;
        return _this;
    }
    return HtmlRowInput;
}(Array));
exports.HtmlRowInput = HtmlRowInput;
// Base style for all themes
function defaultStyles(scaleFactor) {
    return {
        font: 'helvetica',
        fontStyle: 'normal',
        overflow: 'linebreak',
        fillColor: false,
        textColor: 20,
        halign: 'left',
        valign: 'top',
        fontSize: 10,
        cellPadding: 5 / scaleFactor,
        lineColor: 200,
        lineWidth: 0,
        cellWidth: 'auto',
        minCellHeight: 0,
        minCellWidth: 0,
    };
}
exports.defaultStyles = defaultStyles;
function getTheme(name) {
    var themes = {
        striped: {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal' },
            head: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            body: {},
            foot: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            alternateRow: { fillColor: 245 },
        },
        grid: {
            table: {
                fillColor: 255,
                textColor: 80,
                fontStyle: 'normal',
                lineWidth: 0.1,
            },
            head: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: 'bold',
                lineWidth: 0,
            },
            body: {},
            foot: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: 'bold',
                lineWidth: 0,
            },
            alternateRow: {},
        },
        plain: {
            head: { fontStyle: 'bold' },
            foot: { fontStyle: 'bold' },
        },
    };
    return themes[name];
}
exports.getTheme = getTheme;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DocHandler = void 0;
var globalDefaults = {};
var DocHandler = /** @class */ (function () {
    function DocHandler(jsPDFDocument) {
        this.jsPDFDocument = jsPDFDocument;
        this.userStyles = {
            // Black for versions of jspdf without getTextColor
            textColor: jsPDFDocument.getTextColor
                ? this.jsPDFDocument.getTextColor()
                : 0,
            fontSize: jsPDFDocument.internal.getFontSize(),
            fontStyle: jsPDFDocument.internal.getFont().fontStyle,
            font: jsPDFDocument.internal.getFont().fontName,
        };
    }
    DocHandler.setDefaults = function (defaults, doc) {
        if (doc === void 0) { doc = null; }
        if (doc) {
            doc.__autoTableDocumentDefaults = defaults;
        }
        else {
            globalDefaults = defaults;
        }
    };
    DocHandler.unifyColor = function (c) {
        if (Array.isArray(c)) {
            return c;
        }
        else if (typeof c === 'number') {
            return [c, c, c];
        }
        else if (typeof c === 'string') {
            return [c];
        }
        else {
            return null;
        }
    };
    DocHandler.prototype.applyStyles = function (styles, fontOnly) {
        // Font style needs to be applied before font
        // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/632
        var _a, _b, _c;
        if (fontOnly === void 0) { fontOnly = false; }
        if (styles.fontStyle)
            this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(styles.fontStyle);
        var _d = this.jsPDFDocument.internal.getFont(), fontStyle = _d.fontStyle, fontName = _d.fontName;
        if (styles.font)
            fontName = styles.font;
        if (styles.fontStyle) {
            fontStyle = styles.fontStyle;
            var availableFontStyles = this.getFontList()[fontName];
            if (availableFontStyles && availableFontStyles.indexOf(fontStyle) === -1) {
                // Common issue was that the default bold in headers
                // made custom fonts not work. For example:
                // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/653
                this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(availableFontStyles[0]);
                fontStyle = availableFontStyles[0];
            }
        }
        this.jsPDFDocument.setFont(fontName, fontStyle);
        if (styles.fontSize)
            this.jsPDFDocument.setFontSize(styles.fontSize);
        if (fontOnly) {
            return; // Performance improvement
        }
        var color = DocHandler.unifyColor(styles.fillColor);
        if (color)
            (_a = this.jsPDFDocument).setFillColor.apply(_a, color);
        color = DocHandler.unifyColor(styles.textColor);
        if (color)
            (_b = this.jsPDFDocument).setTextColor.apply(_b, color);
        color = DocHandler.unifyColor(styles.lineColor);
        if (color)
            (_c = this.jsPDFDocument).setDrawColor.apply(_c, color);
        if (typeof styles.lineWidth === 'number') {
            this.jsPDFDocument.setLineWidth(styles.lineWidth);
        }
    };
    DocHandler.prototype.splitTextToSize = function (text, size, opts) {
        return this.jsPDFDocument.splitTextToSize(text, size, opts);
    };
    DocHandler.prototype.rect = function (x, y, width, height, fillStyle) {
        return this.jsPDFDocument.rect(x, y, width, height, fillStyle);
    };
    DocHandler.prototype.getLastAutoTable = function () {
        return this.jsPDFDocument.lastAutoTable || null;
    };
    DocHandler.prototype.getTextWidth = function (text) {
        return this.jsPDFDocument.getTextWidth(text);
    };
    DocHandler.prototype.getDocument = function () {
        return this.jsPDFDocument;
    };
    DocHandler.prototype.setPage = function (page) {
        this.jsPDFDocument.setPage(page);
    };
    DocHandler.prototype.addPage = function () {
        return this.jsPDFDocument.addPage();
    };
    DocHandler.prototype.getFontList = function () {
        return this.jsPDFDocument.getFontList();
    };
    DocHandler.prototype.getGlobalOptions = function () {
        return globalDefaults || {};
    };
    DocHandler.prototype.getDocumentOptions = function () {
        return this.jsPDFDocument.__autoTableDocumentDefaults || {};
    };
    DocHandler.prototype.pageSize = function () {
        var pageSize = this.jsPDFDocument.internal.pageSize;
        // JSPDF 1.4 uses get functions instead of properties on pageSize
        if (pageSize.width == null) {
            pageSize = {
                width: pageSize.getWidth(),
                height: pageSize.getHeight(),
            };
        }
        return pageSize;
    };
    DocHandler.prototype.scaleFactor = function () {
        return this.jsPDFDocument.internal.scaleFactor;
    };
    DocHandler.prototype.pageNumber = function () {
        var pageInfo = this.jsPDFDocument.internal.getCurrentPageInfo();
        if (!pageInfo) {
            // Only recent versions of jspdf has pageInfo
            return this.jsPDFDocument.internal.getNumberOfPages();
        }
        return pageInfo.pageNumber;
    };
    return DocHandler;
}());
exports.DocHandler = DocHandler;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.assign = void 0;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target, s, s1, s2, s3) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        // eslint-disable-next-line prefer-rest-params
        var nextSource = arguments[index];
        if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
exports.assign = assign;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtml = void 0;
var cssParser_1 = __webpack_require__(12);
var config_1 = __webpack_require__(1);
function parseHtml(doc, input, window, includeHiddenHtml, useCss) {
    var _a, _b;
    if (includeHiddenHtml === void 0) { includeHiddenHtml = false; }
    if (useCss === void 0) { useCss = false; }
    var tableElement;
    if (typeof input === 'string') {
        tableElement = window.document.querySelector(input);
    }
    else {
        tableElement = input;
    }
    var supportedFonts = Object.keys(doc.getFontList());
    var scaleFactor = doc.scaleFactor();
    var head = [], body = [], foot = [];
    if (!tableElement) {
        console.error('Html table could not be found with input: ', input);
        return { head: head, body: body, foot: foot };
    }
    for (var i = 0; i < tableElement.rows.length; i++) {
        var element = tableElement.rows[i];
        var tagName = (_b = (_a = element === null || element === void 0 ? void 0 : element.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase();
        var row = parseRowContent(supportedFonts, scaleFactor, window, element, includeHiddenHtml, useCss);
        if (!row)
            continue;
        if (tagName === 'thead') {
            head.push(row);
        }
        else if (tagName === 'tfoot') {
            foot.push(row);
        }
        else {
            // Add to body both if parent is tbody or table
            body.push(row);
        }
    }
    return { head: head, body: body, foot: foot };
}
exports.parseHtml = parseHtml;
function parseRowContent(supportedFonts, scaleFactor, window, row, includeHidden, useCss) {
    var resultRow = new config_1.HtmlRowInput(row);
    for (var i = 0; i < row.cells.length; i++) {
        var cell = row.cells[i];
        var style_1 = window.getComputedStyle(cell);
        if (includeHidden || style_1.display !== 'none') {
            var cellStyles = void 0;
            if (useCss) {
                cellStyles = cssParser_1.parseCss(supportedFonts, cell, scaleFactor, style_1, window);
            }
            resultRow.push({
                rowSpan: cell.rowSpan,
                colSpan: cell.colSpan,
                styles: cellStyles,
                _element: cell,
                content: parseCellContent(cell),
            });
        }
    }
    var style = window.getComputedStyle(row);
    if (resultRow.length > 0 && (includeHidden || style.display !== 'none')) {
        return resultRow;
    }
}
function parseCellContent(orgCell) {
    // Work on cloned node to make sure no changes are applied to html table
    var cell = orgCell.cloneNode(true);
    // Remove extra space and line breaks in markup to make it more similar to
    // what would be shown in html
    cell.innerHTML = cell.innerHTML.replace(/\n/g, '').replace(/ +/g, ' ');
    // Preserve <br> tags as line breaks in the pdf
    cell.innerHTML = cell.innerHTML
        .split('<br>')
        .map(function (part) { return part.trim(); })
        .join('\n');
    // innerText for ie
    return cell.innerText || cell.textContent || '';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Improved text function with halign and valign support
 * Inspiration from: http://stackoverflow.com/questions/28327510/align-text-right-using-jspdf/28433113#28433113
 */
function default_1(text, x, y, styles, doc) {
    styles = styles || {};
    var FONT_ROW_RATIO = 1.15;
    var k = doc.internal.scaleFactor;
    var fontSize = doc.internal.getFontSize() / k;
    var splitRegex = /\r\n|\r|\n/g;
    var splitText = '';
    var lineCount = 1;
    if (styles.valign === 'middle' ||
        styles.valign === 'bottom' ||
        styles.halign === 'center' ||
        styles.halign === 'right') {
        splitText = typeof text === 'string' ? text.split(splitRegex) : text;
        lineCount = splitText.length || 1;
    }
    // Align the top
    y += fontSize * (2 - FONT_ROW_RATIO);
    if (styles.valign === 'middle')
        y -= (lineCount / 2) * fontSize * FONT_ROW_RATIO;
    else if (styles.valign === 'bottom')
        y -= lineCount * fontSize * FONT_ROW_RATIO;
    if (styles.halign === 'center' || styles.halign === 'right') {
        var alignSize = fontSize;
        if (styles.halign === 'center')
            alignSize *= 0.5;
        if (splitText && lineCount >= 1) {
            for (var iLine = 0; iLine < splitText.length; iLine++) {
                doc.text(splitText[iLine], x - doc.getStringUnitWidth(splitText[iLine]) * alignSize, y);
                y += fontSize * FONT_ROW_RATIO;
            }
            return doc;
        }
        x -= doc.getStringUnitWidth(text) * alignSize;
    }
    if (styles.halign === 'justify') {
        doc.text(text, x, y, {
            maxWidth: styles.maxWidth || 100,
            align: 'justify',
        });
    }
    else {
        doc.text(text, x, y);
    }
    return doc;
}
exports.default = default_1;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInput = void 0;
var htmlParser_1 = __webpack_require__(4);
var polyfills_1 = __webpack_require__(3);
var common_1 = __webpack_require__(0);
var documentHandler_1 = __webpack_require__(2);
var inputValidator_1 = __webpack_require__(13);
function parseInput(d, current) {
    var doc = new documentHandler_1.DocHandler(d);
    var document = doc.getDocumentOptions();
    var global = doc.getGlobalOptions();
    inputValidator_1.default(doc, global, document, current);
    var options = polyfills_1.assign({}, global, document, current);
    var win;
    if (typeof window !== 'undefined') {
        win = window;
    }
    var styles = parseStyles(global, document, current);
    var hooks = parseHooks(global, document, current);
    var settings = parseSettings(doc, options);
    var content = parseContent(doc, options, win);
    return {
        id: current.tableId,
        content: content,
        hooks: hooks,
        styles: styles,
        settings: settings,
    };
}
exports.parseInput = parseInput;
function parseStyles(gInput, dInput, cInput) {
    var styleOptions = {
        styles: {},
        headStyles: {},
        bodyStyles: {},
        footStyles: {},
        alternateRowStyles: {},
        columnStyles: {},
    };
    var _loop_1 = function (prop) {
        if (prop === 'columnStyles') {
            var global_1 = gInput[prop];
            var document_1 = dInput[prop];
            var current = cInput[prop];
            styleOptions.columnStyles = polyfills_1.assign({}, global_1, document_1, current);
        }
        else {
            var allOptions = [gInput, dInput, cInput];
            var styles = allOptions.map(function (opts) { return opts[prop] || {}; });
            styleOptions[prop] = polyfills_1.assign({}, styles[0], styles[1], styles[2]);
        }
    };
    for (var _i = 0, _a = Object.keys(styleOptions); _i < _a.length; _i++) {
        var prop = _a[_i];
        _loop_1(prop);
    }
    return styleOptions;
}
function parseHooks(global, document, current) {
    var allOptions = [global, document, current];
    var result = {
        didParseCell: [],
        willDrawCell: [],
        didDrawCell: [],
        didDrawPage: [],
    };
    for (var _i = 0, allOptions_1 = allOptions; _i < allOptions_1.length; _i++) {
        var options = allOptions_1[_i];
        if (options.didParseCell)
            result.didParseCell.push(options.didParseCell);
        if (options.willDrawCell)
            result.willDrawCell.push(options.willDrawCell);
        if (options.didDrawCell)
            result.didDrawCell.push(options.didDrawCell);
        if (options.didDrawPage)
            result.didDrawPage.push(options.didDrawPage);
    }
    return result;
}
function parseSettings(doc, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var margin = common_1.parseSpacing(options.margin, 40 / doc.scaleFactor());
    var startY = (_a = getStartY(doc, options.startY)) !== null && _a !== void 0 ? _a : margin.top;
    var showFoot;
    if (options.showFoot === true) {
        showFoot = 'everyPage';
    }
    else if (options.showFoot === false) {
        showFoot = 'never';
    }
    else {
        showFoot = (_b = options.showFoot) !== null && _b !== void 0 ? _b : 'everyPage';
    }
    var showHead;
    if (options.showHead === true) {
        showHead = 'everyPage';
    }
    else if (options.showHead === false) {
        showHead = 'never';
    }
    else {
        showHead = (_c = options.showHead) !== null && _c !== void 0 ? _c : 'everyPage';
    }
    var useCss = (_d = options.useCss) !== null && _d !== void 0 ? _d : false;
    var theme = options.theme || (useCss ? 'plain' : 'striped');
    return {
        includeHiddenHtml: (_e = options.includeHiddenHtml) !== null && _e !== void 0 ? _e : false,
        useCss: useCss,
        theme: theme,
        startY: startY,
        margin: margin,
        pageBreak: (_f = options.pageBreak) !== null && _f !== void 0 ? _f : 'auto',
        rowPageBreak: (_g = options.rowPageBreak) !== null && _g !== void 0 ? _g : 'auto',
        tableWidth: (_h = options.tableWidth) !== null && _h !== void 0 ? _h : 'auto',
        showHead: showHead,
        showFoot: showFoot,
        tableLineWidth: (_j = options.tableLineWidth) !== null && _j !== void 0 ? _j : 0,
        tableLineColor: (_k = options.tableLineColor) !== null && _k !== void 0 ? _k : 200,
    };
}
function getStartY(doc, userStartY) {
    var previous = doc.getLastAutoTable();
    var sf = doc.scaleFactor();
    var currentPage = doc.pageNumber();
    var isSamePageAsPreviousTable = false;
    if (previous && previous.startPageNumber) {
        var endingPage = previous.startPageNumber + previous.pageNumber - 1;
        isSamePageAsPreviousTable = endingPage === currentPage;
    }
    if (typeof userStartY === 'number') {
        return userStartY;
    }
    else if (userStartY == null || userStartY === false) {
        if (isSamePageAsPreviousTable && (previous === null || previous === void 0 ? void 0 : previous.finalY) != null) {
            // Some users had issues with overlapping tables when they used multiple
            // tables without setting startY so setting it here to a sensible default.
            return previous.finalY + 20 / sf;
        }
    }
    return null;
}
function parseContent(doc, options, window) {
    var head = options.head || [];
    var body = options.body || [];
    var foot = options.foot || [];
    if (options.html) {
        var hidden = options.includeHiddenHtml;
        if (window) {
            var htmlContent = htmlParser_1.parseHtml(doc, options.html, window, hidden, options.useCss) || {};
            head = htmlContent.head || head;
            body = htmlContent.body || head;
            foot = htmlContent.foot || head;
        }
        else {
            console.error('Cannot parse html in non browser environment');
        }
    }
    var columns = options.columns || parseColumns(head, body, foot);
    return {
        columns: columns,
        head: head,
        body: body,
        foot: foot,
    };
}
function parseColumns(head, body, foot) {
    var firstRow = head[0] || body[0] || foot[0] || [];
    var result = [];
    Object.keys(firstRow)
        .filter(function (key) { return key !== '_element'; })
        .forEach(function (key) {
        var colSpan = 1;
        var input;
        if (Array.isArray(firstRow)) {
            input = firstRow[parseInt(key)];
        }
        else {
            input = firstRow[key];
        }
        if (typeof input === 'object' && !Array.isArray(input)) {
            colSpan = (input === null || input === void 0 ? void 0 : input.colSpan) || 1;
        }
        for (var i = 0; i < colSpan; i++) {
            var id = void 0;
            if (Array.isArray(firstRow)) {
                id = result.length;
            }
            else {
                id = key + (i > 0 ? "_" + i : '');
            }
            var rowResult = { dataKey: id };
            result.push(rowResult);
        }
    });
    return result;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addPage = exports.drawTable = void 0;
var config_1 = __webpack_require__(1);
var common_1 = __webpack_require__(0);
var models_1 = __webpack_require__(8);
var documentHandler_1 = __webpack_require__(2);
var polyfills_1 = __webpack_require__(3);
var autoTableText_1 = __webpack_require__(5);
function drawTable(jsPDFDoc, table) {
    var settings = table.settings;
    var startY = settings.startY;
    var margin = settings.margin;
    var cursor = {
        x: margin.left,
        y: startY,
    };
    var sectionsHeight = table.getHeadHeight(table.columns) + table.getFootHeight(table.columns);
    var minTableBottomPos = startY + margin.bottom + sectionsHeight;
    if (settings.pageBreak === 'avoid') {
        var rows = table.allRows();
        var tableHeight = rows.reduce(function (acc, row) { return acc + row.height; }, 0);
        minTableBottomPos += tableHeight;
    }
    var doc = new documentHandler_1.DocHandler(jsPDFDoc);
    if (settings.pageBreak === 'always' ||
        (settings.startY != null && minTableBottomPos > doc.pageSize().height)) {
        nextPage(doc);
        cursor.y = margin.top;
    }
    var startPos = polyfills_1.assign({}, cursor);
    table.startPageNumber = doc.pageNumber();
    doc.applyStyles(doc.userStyles);
    if (settings.showHead === 'firstPage' || settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
    doc.applyStyles(doc.userStyles);
    table.body.forEach(function (row, index) {
        var isLastRow = index === table.body.length - 1;
        printFullRow(doc, table, row, isLastRow, startPos, cursor);
    });
    doc.applyStyles(doc.userStyles);
    if (settings.showFoot === 'lastPage' || settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
    common_1.addTableBorder(doc, table, startPos, cursor);
    table.callEndPageHooks(doc, cursor);
    table.finalY = cursor.y;
    jsPDFDoc.lastAutoTable = table;
    jsPDFDoc.previousAutoTable = table; // Deprecated
    if (jsPDFDoc.autoTable)
        jsPDFDoc.autoTable.previous = table; // Deprecated
    doc.applyStyles(doc.userStyles);
}
exports.drawTable = drawTable;
function getRemainingLineCount(cell, remainingPageSpace, doc) {
    var fontHeight = (cell.styles.fontSize / doc.scaleFactor()) * config_1.FONT_ROW_RATIO;
    var vPadding = cell.padding('vertical');
    var remainingLines = Math.floor((remainingPageSpace - vPadding) / fontHeight);
    return Math.max(0, remainingLines);
}
function modifyRowToFit(row, remainingPageSpace, table, doc) {
    var cells = {};
    row.spansMultiplePages = true;
    var rowHeight = 0;
    for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
        var column = _a[_i];
        var cell = row.cells[column.index];
        if (!cell)
            continue;
        if (!Array.isArray(cell.text)) {
            cell.text = [cell.text];
        }
        var remainderCell = new models_1.Cell(cell.raw, cell.styles, cell.section);
        remainderCell = polyfills_1.assign(remainderCell, cell);
        remainderCell.text = [];
        var remainingLineCount = getRemainingLineCount(cell, remainingPageSpace, doc);
        if (cell.text.length > remainingLineCount) {
            remainderCell.text = cell.text.splice(remainingLineCount, cell.text.length);
        }
        var scaleFactor = doc.scaleFactor();
        cell.contentHeight = cell.getContentHeight(scaleFactor);
        if (cell.contentHeight >= remainingPageSpace) {
            cell.contentHeight = remainingPageSpace;
            remainderCell.styles.minCellHeight -= remainingPageSpace;
        }
        if (cell.contentHeight > row.height) {
            row.height = cell.contentHeight;
        }
        remainderCell.contentHeight = remainderCell.getContentHeight(scaleFactor);
        if (remainderCell.contentHeight > rowHeight) {
            rowHeight = remainderCell.contentHeight;
        }
        cells[column.index] = remainderCell;
    }
    var remainderRow = new models_1.Row(row.raw, -1, row.section, cells, true);
    remainderRow.height = rowHeight;
    for (var _b = 0, _c = table.columns; _b < _c.length; _b++) {
        var column = _c[_b];
        var remainderCell = remainderRow.cells[column.index];
        if (remainderCell) {
            remainderCell.height = remainderRow.height;
        }
        var cell = row.cells[column.index];
        if (cell) {
            cell.height = row.height;
        }
    }
    return remainderRow;
}
function shouldPrintOnCurrentPage(doc, row, remainingPageSpace, table) {
    var pageHeight = doc.pageSize().height;
    var margin = table.settings.margin;
    var marginHeight = margin.top + margin.bottom;
    var maxRowHeight = pageHeight - marginHeight;
    if (row.section === 'body') {
        // Should also take into account that head and foot is not
        // on every page with some settings
        maxRowHeight -=
            table.getHeadHeight(table.columns) + table.getFootHeight(table.columns);
    }
    var minRowHeight = row.getMinimumRowHeight(table.columns, doc);
    var minRowFits = minRowHeight < remainingPageSpace;
    if (minRowHeight > maxRowHeight) {
        console.error("Will not be able to print row " + row.index + " correctly since it's minimum height is larger than page height");
        return true;
    }
    if (!minRowFits) {
        return false;
    }
    var rowHasRowSpanCell = row.hasRowSpan(table.columns);
    var rowHigherThanPage = row.getMaxCellHeight(table.columns) > maxRowHeight;
    if (rowHigherThanPage) {
        if (rowHasRowSpanCell) {
            console.error("The content of row " + row.index + " will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.");
        }
        return true;
    }
    if (rowHasRowSpanCell) {
        // Currently a new page is required whenever a rowspan row don't fit a page.
        return false;
    }
    if (table.settings.rowPageBreak === 'avoid') {
        return false;
    }
    // In all other cases print the row on current page
    return true;
}
function printFullRow(doc, table, row, isLastRow, startPos, cursor) {
    var remainingSpace = getRemainingPageSpace(doc, table, isLastRow, cursor);
    if (row.canEntireRowFit(remainingSpace, table.columns)) {
        printRow(doc, table, row, cursor);
    }
    else {
        if (shouldPrintOnCurrentPage(doc, row, remainingSpace, table)) {
            var remainderRow = modifyRowToFit(row, remainingSpace, table, doc);
            printRow(doc, table, row, cursor);
            addPage(doc, table, startPos, cursor);
            printFullRow(doc, table, remainderRow, isLastRow, startPos, cursor);
        }
        else {
            addPage(doc, table, startPos, cursor);
            printFullRow(doc, table, row, isLastRow, startPos, cursor);
        }
    }
}
function printRow(doc, table, row, cursor) {
    cursor.x = table.settings.margin.left;
    for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
        var column = _a[_i];
        var cell = row.cells[column.index];
        if (!cell) {
            cursor.x += column.width;
            continue;
        }
        doc.applyStyles(cell.styles);
        cell.x = cursor.x;
        cell.y = cursor.y;
        var result = table.callCellHooks(doc, table.hooks.willDrawCell, cell, row, column, cursor);
        if (result === false) {
            cursor.x += column.width;
            continue;
        }
        var cellStyles = cell.styles;
        var fillStyle = common_1.getFillStyle(cellStyles.lineWidth, cellStyles.fillColor);
        if (fillStyle) {
            doc.rect(cell.x, cursor.y, cell.width, cell.height, fillStyle);
        }
        var textPos = cell.getTextPos();
        autoTableText_1.default(cell.text, textPos.x, textPos.y, {
            halign: cell.styles.halign,
            valign: cell.styles.valign,
            maxWidth: Math.ceil(cell.width - cell.padding('left') - cell.padding('right')),
        }, doc.getDocument());
        table.callCellHooks(doc, table.hooks.didDrawCell, cell, row, column, cursor);
        cursor.x += column.width;
    }
    cursor.y += row.height;
}
function getRemainingPageSpace(doc, table, isLastRow, cursor) {
    var bottomContentHeight = table.settings.margin.bottom;
    var showFoot = table.settings.showFoot;
    if (showFoot === 'everyPage' || (showFoot === 'lastPage' && isLastRow)) {
        bottomContentHeight += table.getFootHeight(table.columns);
    }
    return doc.pageSize().height - cursor.y - bottomContentHeight;
}
function addPage(doc, table, startPos, cursor) {
    doc.applyStyles(doc.userStyles);
    if (table.settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
    // Add user content just before adding new page ensure it will
    // be drawn above other things on the page
    table.callEndPageHooks(doc, cursor);
    var margin = table.settings.margin;
    common_1.addTableBorder(doc, table, startPos, cursor);
    nextPage(doc);
    table.pageNumber++;
    table.pageCount++;
    cursor.x = margin.left;
    cursor.y = margin.top;
    if (table.settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(doc, table, row, cursor); });
    }
}
exports.addPage = addPage;
function nextPage(doc) {
    var current = doc.pageNumber();
    doc.setPage(current + 1);
    var newCurrent = doc.pageNumber();
    if (newCurrent === current) {
        doc.addPage();
    }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = exports.Cell = exports.Row = exports.Table = void 0;
var config_1 = __webpack_require__(1);
var HookData_1 = __webpack_require__(14);
var common_1 = __webpack_require__(0);
var Table = /** @class */ (function () {
    function Table(input, content) {
        this.pageNumber = 1;
        // Deprecated, use pageNumber instead
        // Not using getter since:
        // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/596
        this.pageCount = 1;
        this.id = input.id;
        this.settings = input.settings;
        this.styles = input.styles;
        this.hooks = input.hooks;
        this.columns = content.columns;
        this.head = content.head;
        this.body = content.body;
        this.foot = content.foot;
    }
    Table.prototype.getHeadHeight = function (columns) {
        return this.head.reduce(function (acc, row) { return acc + row.getMaxCellHeight(columns); }, 0);
    };
    Table.prototype.getFootHeight = function (columns) {
        return this.foot.reduce(function (acc, row) { return acc + row.getMaxCellHeight(columns); }, 0);
    };
    Table.prototype.allRows = function () {
        return this.head.concat(this.body).concat(this.foot);
    };
    Table.prototype.callCellHooks = function (doc, handlers, cell, row, column, cursor) {
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            var data = new HookData_1.CellHookData(doc, this, cell, row, column, cursor);
            var result = handler(data) === false;
            // Make sure text is always string[] since user can assign string
            cell.text = Array.isArray(cell.text) ? cell.text : [cell.text];
            if (result) {
                return false;
            }
        }
        return true;
    };
    Table.prototype.callEndPageHooks = function (doc, cursor) {
        doc.applyStyles(doc.userStyles);
        for (var _i = 0, _a = this.hooks.didDrawPage; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(new HookData_1.HookData(doc, this, cursor));
        }
    };
    Table.prototype.getWidth = function (pageWidth) {
        if (typeof this.settings.tableWidth === 'number') {
            return this.settings.tableWidth;
        }
        else if (this.settings.tableWidth === 'wrap') {
            var wrappedWidth = this.columns.reduce(function (total, col) { return total + col.wrappedWidth; }, 0);
            return wrappedWidth;
        }
        else {
            var margin = this.settings.margin;
            return pageWidth - margin.left - margin.right;
        }
    };
    return Table;
}());
exports.Table = Table;
var Row = /** @class */ (function () {
    function Row(raw, index, section, cells, spansMultiplePages) {
        if (spansMultiplePages === void 0) { spansMultiplePages = false; }
        this.height = 0;
        this.raw = raw;
        if (raw instanceof config_1.HtmlRowInput) {
            this.raw = raw._element;
            this.element = raw._element;
        }
        this.index = index;
        this.section = section;
        this.cells = cells;
        this.spansMultiplePages = spansMultiplePages;
    }
    Row.prototype.getMaxCellHeight = function (columns) {
        var _this = this;
        return columns.reduce(function (acc, column) { var _a; return Math.max(acc, ((_a = _this.cells[column.index]) === null || _a === void 0 ? void 0 : _a.height) || 0); }, 0);
    };
    Row.prototype.hasRowSpan = function (columns) {
        var _this = this;
        return (columns.filter(function (column) {
            var cell = _this.cells[column.index];
            if (!cell)
                return false;
            return cell.rowSpan > 1;
        }).length > 0);
    };
    Row.prototype.canEntireRowFit = function (height, columns) {
        return this.getMaxCellHeight(columns) <= height;
    };
    Row.prototype.getMinimumRowHeight = function (columns, doc) {
        var _this = this;
        return columns.reduce(function (acc, column) {
            var cell = _this.cells[column.index];
            if (!cell)
                return 0;
            var fontHeight = (cell.styles.fontSize / doc.scaleFactor()) * config_1.FONT_ROW_RATIO;
            var vPadding = cell.padding('vertical');
            var oneRowHeight = vPadding + fontHeight;
            return oneRowHeight > acc ? oneRowHeight : acc;
        }, 0);
    };
    return Row;
}());
exports.Row = Row;
var Cell = /** @class */ (function () {
    function Cell(raw, styles, section) {
        var _a, _b;
        this.contentHeight = 0;
        this.contentWidth = 0;
        this.wrappedWidth = 0;
        this.minReadableWidth = 0;
        this.minWidth = 0;
        this.width = 0;
        this.height = 0;
        this.x = 0;
        this.y = 0;
        this.styles = styles;
        this.section = section;
        this.raw = raw;
        var content = raw;
        if (raw != null && typeof raw === 'object' && !Array.isArray(raw)) {
            this.rowSpan = raw.rowSpan || 1;
            this.colSpan = raw.colSpan || 1;
            content = (_b = (_a = raw.content) !== null && _a !== void 0 ? _a : raw.title) !== null && _b !== void 0 ? _b : raw;
            if (raw._element) {
                this.raw = raw._element;
            }
        }
        else {
            this.rowSpan = 1;
            this.colSpan = 1;
        }
        // Stringify 0 and false, but not undefined or null
        var text = content != null ? '' + content : '';
        var splitRegex = /\r\n|\r|\n/g;
        this.text = text.split(splitRegex);
    }
    Cell.prototype.getTextPos = function () {
        var y;
        if (this.styles.valign === 'top') {
            y = this.y + this.padding('top');
        }
        else if (this.styles.valign === 'bottom') {
            y = this.y + this.height - this.padding('bottom');
        }
        else {
            var netHeight = this.height - this.padding('vertical');
            y = this.y + netHeight / 2 + this.padding('top');
        }
        var x;
        if (this.styles.halign === 'right') {
            x = this.x + this.width - this.padding('right');
        }
        else if (this.styles.halign === 'center') {
            var netWidth = this.width - this.padding('horizontal');
            x = this.x + netWidth / 2 + this.padding('left');
        }
        else {
            x = this.x + this.padding('left');
        }
        return { x: x, y: y };
    };
    Cell.prototype.getContentHeight = function (scaleFactor) {
        var lineCount = Array.isArray(this.text) ? this.text.length : 1;
        var fontHeight = (this.styles.fontSize / scaleFactor) * config_1.FONT_ROW_RATIO;
        var height = lineCount * fontHeight + this.padding('vertical');
        return Math.max(height, this.styles.minCellHeight);
    };
    Cell.prototype.padding = function (name) {
        var padding = common_1.parseSpacing(this.styles.cellPadding, 0);
        if (name === 'vertical') {
            return padding.top + padding.bottom;
        }
        else if (name === 'horizontal') {
            return padding.left + padding.right;
        }
        else {
            return padding[name];
        }
    };
    return Cell;
}());
exports.Cell = Cell;
var Column = /** @class */ (function () {
    function Column(dataKey, raw, index) {
        this.wrappedWidth = 0;
        this.minReadableWidth = 0;
        this.minWidth = 0;
        this.width = 0;
        this.dataKey = dataKey;
        this.raw = raw;
        this.index = index;
    }
    Column.prototype.getMaxCustomCellWidth = function (table) {
        var max = 0;
        for (var _i = 0, _a = table.allRows(); _i < _a.length; _i++) {
            var row = _a[_i];
            var cell = row.cells[this.index];
            if (cell && typeof cell.styles.cellWidth === 'number') {
                max = Math.max(max, cell.styles.cellWidth);
            }
        }
        return max;
    };
    return Column;
}());
exports.Column = Column;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
var documentHandler_1 = __webpack_require__(2);
var models_1 = __webpack_require__(8);
var widthCalculator_1 = __webpack_require__(15);
var config_1 = __webpack_require__(1);
var polyfills_1 = __webpack_require__(3);
function createTable(jsPDFDoc, input) {
    var doc = new documentHandler_1.DocHandler(jsPDFDoc);
    var content = parseContent(input, doc.scaleFactor());
    var table = new models_1.Table(input, content);
    widthCalculator_1.calculateWidths(doc, table);
    doc.applyStyles(doc.userStyles);
    return table;
}
exports.createTable = createTable;
function parseContent(input, sf) {
    var content = input.content;
    var columns = createColumns(content.columns);
    // If no head or foot is set, try generating it with content from columns
    if (content.head.length === 0) {
        var sectionRow = generateSectionRow(columns, 'head');
        if (sectionRow)
            content.head.push(sectionRow);
    }
    if (content.foot.length === 0) {
        var sectionRow = generateSectionRow(columns, 'foot');
        if (sectionRow)
            content.foot.push(sectionRow);
    }
    var theme = input.settings.theme;
    var styles = input.styles;
    return {
        columns: columns,
        head: parseSection('head', content.head, columns, styles, theme, sf),
        body: parseSection('body', content.body, columns, styles, theme, sf),
        foot: parseSection('foot', content.foot, columns, styles, theme, sf),
    };
}
function parseSection(sectionName, sectionRows, columns, styleProps, theme, scaleFactor) {
    var rowSpansLeftForColumn = {};
    var result = sectionRows.map(function (rawRow, rowIndex) {
        var skippedRowForRowSpans = 0;
        var cells = {};
        var colSpansAdded = 0;
        var columnSpansLeft = 0;
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            if (rowSpansLeftForColumn[column.index] == null ||
                rowSpansLeftForColumn[column.index].left === 0) {
                if (columnSpansLeft === 0) {
                    var rawCell = void 0;
                    if (Array.isArray(rawRow)) {
                        rawCell =
                            rawRow[column.index - colSpansAdded - skippedRowForRowSpans];
                    }
                    else {
                        rawCell = rawRow[column.dataKey];
                    }
                    var cellInputStyles = {};
                    if (typeof rawCell === 'object' && !Array.isArray(rawCell)) {
                        cellInputStyles = (rawCell === null || rawCell === void 0 ? void 0 : rawCell.styles) || {};
                    }
                    var styles = cellStyles(sectionName, column, rowIndex, theme, styleProps, scaleFactor, cellInputStyles);
                    var cell = new models_1.Cell(rawCell, styles, sectionName);
                    // dataKey is not used internally no more but keep for
                    // backwards compat in hooks
                    cells[column.dataKey] = cell;
                    cells[column.index] = cell;
                    columnSpansLeft = cell.colSpan - 1;
                    rowSpansLeftForColumn[column.index] = {
                        left: cell.rowSpan - 1,
                        times: columnSpansLeft,
                    };
                }
                else {
                    columnSpansLeft--;
                    colSpansAdded++;
                }
            }
            else {
                rowSpansLeftForColumn[column.index].left--;
                columnSpansLeft = rowSpansLeftForColumn[column.index].times;
                skippedRowForRowSpans++;
            }
        }
        return new models_1.Row(rawRow, rowIndex, sectionName, cells);
    });
    return result;
}
function generateSectionRow(columns, section) {
    var sectionRow = {};
    columns.forEach(function (col) {
        if (col.raw != null) {
            var title = getSectionTitle(section, col.raw);
            if (title != null)
                sectionRow[col.dataKey] = title;
        }
    });
    return Object.keys(sectionRow).length > 0 ? sectionRow : null;
}
function getSectionTitle(section, column) {
    if (section === 'head') {
        if (typeof column === 'object') {
            return column.header || column.title || null;
        }
        else if (typeof column === 'string' || typeof column === 'number') {
            return column;
        }
    }
    else if (section === 'foot' && typeof column === 'object') {
        return column.footer;
    }
    return null;
}
function createColumns(columns) {
    return columns.map(function (input, index) {
        var _a, _b;
        var key;
        if (typeof input === 'object') {
            key = (_b = (_a = input.dataKey) !== null && _a !== void 0 ? _a : input.key) !== null && _b !== void 0 ? _b : index;
        }
        else {
            key = index;
        }
        return new models_1.Column(key, input, index);
    });
}
function cellStyles(sectionName, column, rowIndex, themeName, styles, scaleFactor, cellInputStyles) {
    var theme = config_1.getTheme(themeName);
    var sectionStyles;
    if (sectionName === 'head') {
        sectionStyles = styles.headStyles;
    }
    else if (sectionName === 'body') {
        sectionStyles = styles.bodyStyles;
    }
    else if (sectionName === 'foot') {
        sectionStyles = styles.footStyles;
    }
    var otherStyles = polyfills_1.assign({}, theme.table, theme[sectionName], styles.styles, sectionStyles);
    var columnStyles = styles.columnStyles[column.dataKey] ||
        styles.columnStyles[column.index] ||
        {};
    var colStyles = sectionName === 'body' ? columnStyles : {};
    var rowStyles = sectionName === 'body' && rowIndex % 2 === 0
        ? polyfills_1.assign({}, theme.alternateRow, styles.alternateRowStyles)
        : {};
    var defaultStyle = config_1.defaultStyles(scaleFactor);
    var themeStyles = polyfills_1.assign({}, defaultStyle, otherStyles, rowStyles, colStyles);
    return polyfills_1.assign(themeStyles, cellInputStyles);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.__drawTable = exports.__createTable = exports.applyPlugin = void 0;
var applyPlugin_1 = __webpack_require__(11);
var inputParser_1 = __webpack_require__(6);
var tableDrawer_1 = __webpack_require__(7);
var tableCalculator_1 = __webpack_require__(9);
// export { applyPlugin } didn't export applyPlugin
// to index.d.ts for some reason
function applyPlugin(jsPDF) {
    applyPlugin_1.default(jsPDF);
}
exports.applyPlugin = applyPlugin;
function autoTable(d, options) {
    var input = inputParser_1.parseInput(d, options);
    var table = tableCalculator_1.createTable(d, input);
    tableDrawer_1.drawTable(d, table);
}
exports.default = autoTable;
// Experimental export
function __createTable(d, options) {
    var input = inputParser_1.parseInput(d, options);
    return tableCalculator_1.createTable(d, input);
}
exports.__createTable = __createTable;
function __drawTable(d, table) {
    tableDrawer_1.drawTable(d, table);
}
exports.__drawTable = __drawTable;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var jsPDF = __webpack_require__(16);
    // Webpack imported jspdf instead of jsPDF for some reason 
    // while it seemed to work everywhere else.
    if (jsPDF.jsPDF)
        jsPDF = jsPDF.jsPDF;
    applyPlugin(jsPDF);
}
catch (error) {
    // Importing jspdf in nodejs environments does not work as of jspdf
    // 1.5.3 so we need to silence potential errors to support using for example
    // the nodejs jspdf dist files with the exported applyPlugin
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var htmlParser_1 = __webpack_require__(4);
var autoTableText_1 = __webpack_require__(5);
var documentHandler_1 = __webpack_require__(2);
var inputParser_1 = __webpack_require__(6);
var tableDrawer_1 = __webpack_require__(7);
var tableCalculator_1 = __webpack_require__(9);
function default_1(jsPDF) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jsPDF.API.autoTable = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var options;
        if (args.length === 1) {
            options = args[0];
        }
        else {
            console.error('Use of deprecated autoTable initiation');
            options = args[2] || {};
            options.columns = args[0];
            options.body = args[1];
        }
        var input = inputParser_1.parseInput(this, options);
        var table = tableCalculator_1.createTable(this, input);
        tableDrawer_1.drawTable(this, table);
        return this;
    };
    // Assign false to enable `doc.lastAutoTable.finalY || 40` sugar
    jsPDF.API.lastAutoTable = false;
    jsPDF.API.previousAutoTable = false; // deprecated in v3
    jsPDF.API.autoTable.previous = false; // deprecated in v3
    jsPDF.API.autoTableText = function (text, x, y, styles) {
        autoTableText_1.default(text, x, y, styles, this);
    };
    jsPDF.API.autoTableSetDefaults = function (defaults) {
        documentHandler_1.DocHandler.setDefaults(defaults, this);
        return this;
    };
    jsPDF.autoTableSetDefaults = function (defaults, doc) {
        documentHandler_1.DocHandler.setDefaults(defaults, doc);
    };
    jsPDF.API.autoTableHtmlToJson = function (tableElem, includeHiddenElements) {
        if (includeHiddenElements === void 0) { includeHiddenElements = false; }
        if (typeof window === 'undefined') {
            console.error('Cannot run autoTableHtmlToJson in non browser environment');
            return null;
        }
        var doc = new documentHandler_1.DocHandler(this);
        var _a = htmlParser_1.parseHtml(doc, tableElem, window, includeHiddenElements, false), head = _a.head, body = _a.body;
        var columns = head[0].map(function (c) { return c.content; });
        return { columns: columns, rows: body, data: body };
    };
    /**
     * @deprecated
     */
    jsPDF.API.autoTableEndPosY = function () {
        console.error('Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.');
        var prev = this.lastAutoTable;
        if (prev && prev.finalY) {
            return prev.finalY;
        }
        else {
            return 0;
        }
    };
    /**
     * @deprecated
     */
    jsPDF.API.autoTableAddPageContent = function (hook) {
        console.error('Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead.');
        if (!jsPDF.API.autoTable.globalDefaults) {
            jsPDF.API.autoTable.globalDefaults = {};
        }
        jsPDF.API.autoTable.globalDefaults.addPageContent = hook;
        return this;
    };
    /**
     * @deprecated
     */
    jsPDF.API.autoTableAddPage = function () {
        console.error('Use of deprecated function: autoTableAddPage. Use doc.addPage()');
        this.addPage();
        return this;
    };
}
exports.default = default_1;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCss = void 0;
// Limitations
// - No support for border spacing
// - No support for transparency
var common_1 = __webpack_require__(0);
function parseCss(supportedFonts, element, scaleFactor, style, window) {
    var result = {};
    var pxScaleFactor = 96 / 72;
    var color = parseColor(element, function (elem) {
        return window.getComputedStyle(elem)['backgroundColor'];
    });
    if (color != null)
        result.fillColor = color;
    color = parseColor(element, function (elem) {
        return window.getComputedStyle(elem)['color'];
    });
    if (color != null)
        result.textColor = color;
    color = parseColor(element, function (elem) {
        return window.getComputedStyle(elem)['borderTopColor'];
    });
    if (color != null)
        result.lineColor = color;
    var padding = parsePadding(style, scaleFactor);
    if (padding)
        result.cellPadding = padding;
    // style.borderWidth only works in chrome (borderTopWidth etc works in firefox and ie as well)
    var bw = parseInt(style.borderTopWidth || '');
    bw = bw / pxScaleFactor / scaleFactor;
    if (bw)
        result.lineWidth = bw;
    var accepted = ['left', 'right', 'center', 'justify'];
    if (accepted.indexOf(style.textAlign) !== -1) {
        result.halign = style.textAlign;
    }
    accepted = ['middle', 'bottom', 'top'];
    if (accepted.indexOf(style.verticalAlign) !== -1) {
        result.valign = style.verticalAlign;
    }
    var res = parseInt(style.fontSize || '');
    if (!isNaN(res))
        result.fontSize = res / pxScaleFactor;
    var fontStyle = parseFontStyle(style);
    if (fontStyle)
        result.fontStyle = fontStyle;
    var font = (style.fontFamily || '').toLowerCase();
    if (supportedFonts.indexOf(font) !== -1) {
        result.font = font;
    }
    return result;
}
exports.parseCss = parseCss;
function parseFontStyle(style) {
    var res = '';
    if (style.fontWeight === 'bold' ||
        style.fontWeight === 'bolder' ||
        parseInt(style.fontWeight) >= 700) {
        res = 'bold';
    }
    if (style.fontStyle === 'italic' || style.fontStyle === 'oblique') {
        res += 'italic';
    }
    return res;
}
function parseColor(element, styleGetter) {
    var cssColor = realColor(element, styleGetter);
    if (!cssColor)
        return null;
    var rgba = cssColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
    if (!rgba || !Array.isArray(rgba)) {
        return null;
    }
    var color = [
        parseInt(rgba[1]),
        parseInt(rgba[2]),
        parseInt(rgba[3]),
    ];
    var alpha = parseInt(rgba[4]);
    if (alpha === 0 || isNaN(color[0]) || isNaN(color[1]) || isNaN(color[2])) {
        return null;
    }
    return color;
}
function realColor(elem, styleGetter) {
    var bg = styleGetter(elem);
    if (bg === 'rgba(0, 0, 0, 0)' ||
        bg === 'transparent' ||
        bg === 'initial' ||
        bg === 'inherit') {
        if (elem.parentElement == null) {
            return null;
        }
        return realColor(elem.parentElement, styleGetter);
    }
    else {
        return bg;
    }
}
function parsePadding(style, scaleFactor) {
    var val = [
        style.paddingTop,
        style.paddingRight,
        style.paddingBottom,
        style.paddingLeft,
    ];
    var pxScaleFactor = 96 / (72 / scaleFactor);
    var linePadding = (parseInt(style.lineHeight) - parseInt(style.fontSize)) / scaleFactor / 2;
    var inputPadding = val.map(function (n) {
        return parseInt(n) / pxScaleFactor;
    });
    var padding = common_1.parseSpacing(inputPadding, 0);
    if (linePadding > padding.top) {
        padding.top = linePadding;
    }
    if (linePadding > padding.bottom) {
        padding.bottom = linePadding;
    }
    return padding;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(doc, global, document, current) {
    var _loop_1 = function (options) {
        if (options && typeof options !== 'object') {
            console.error('The options parameter should be of type object, is: ' + typeof options);
        }
        if (typeof options.extendWidth !== 'undefined') {
            options.tableWidth = options.extendWidth ? 'auto' : 'wrap';
            console.error('Use of deprecated option: extendWidth, use tableWidth instead.');
        }
        if (typeof options.margins !== 'undefined') {
            if (typeof options.margin === 'undefined')
                options.margin = options.margins;
            console.error('Use of deprecated option: margins, use margin instead.');
        }
        if (options.startY && typeof options.startY !== 'number') {
            console.error('Invalid value for startY option', options.startY);
            delete options.startY;
        }
        if (!options.didDrawPage &&
            (options.afterPageContent ||
                options.beforePageContent ||
                options.afterPageAdd)) {
            console.error('The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead');
            options.didDrawPage = function (data) {
                doc.applyStyles(doc.userStyles);
                if (options.beforePageContent)
                    options.beforePageContent(data);
                doc.applyStyles(doc.userStyles);
                if (options.afterPageContent)
                    options.afterPageContent(data);
                doc.applyStyles(doc.userStyles);
                if (options.afterPageAdd && data.pageNumber > 1) {
                    ;
                    data.afterPageAdd(data);
                }
                doc.applyStyles(doc.userStyles);
            };
        }
        ;
        [
            'createdHeaderCell',
            'drawHeaderRow',
            'drawRow',
            'drawHeaderCell',
        ].forEach(function (name) {
            if (options[name]) {
                console.error("The \"" + name + "\" hook has changed in version 3.0, check the changelog for how to migrate.");
            }
        });
        [
            ['showFoot', 'showFooter'],
            ['showHead', 'showHeader'],
            ['didDrawPage', 'addPageContent'],
            ['didParseCell', 'createdCell'],
            ['headStyles', 'headerStyles'],
        ].forEach(function (_a) {
            var current = _a[0], deprecated = _a[1];
            if (options[deprecated]) {
                console.error("Use of deprecated option " + deprecated + ". Use " + current + " instead");
                options[current] = options[deprecated];
            }
        });
        [
            ['padding', 'cellPadding'],
            ['lineHeight', 'rowHeight'],
            'fontSize',
            'overflow',
        ].forEach(function (o) {
            var deprecatedOption = typeof o === 'string' ? o : o[0];
            var style = typeof o === 'string' ? o : o[1];
            if (typeof options[deprecatedOption] !== 'undefined') {
                if (typeof options.styles[style] === 'undefined') {
                    options.styles[style] = options[deprecatedOption];
                }
                console.error('Use of deprecated option: ' +
                    deprecatedOption +
                    ', use the style ' +
                    style +
                    ' instead.');
            }
        });
        for (var _i = 0, _a = [
            'styles',
            'bodyStyles',
            'headStyles',
            'footStyles',
        ]; _i < _a.length; _i++) {
            var styleProp = _a[_i];
            checkStyles(options[styleProp] || {});
        }
        var columnStyles = options['columnStyles'] || {};
        for (var _b = 0, _c = Object.keys(columnStyles); _b < _c.length; _b++) {
            var key = _c[_b];
            checkStyles(columnStyles[key] || {});
        }
    };
    for (var _i = 0, _a = [global, document, current]; _i < _a.length; _i++) {
        var options = _a[_i];
        _loop_1(options);
    }
}
exports.default = default_1;
function checkStyles(styles) {
    if (styles.rowHeight) {
        console.error('Use of deprecated style rowHeight. It is renamed to minCellHeight.');
        if (!styles.minCellHeight) {
            styles.minCellHeight = styles.rowHeight;
        }
    }
    else if (styles.columnWidth) {
        console.error('Use of deprecated style columnWidth. It is renamed to cellWidth.');
        if (!styles.cellWidth) {
            styles.cellWidth = styles.columnWidth;
        }
    }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellHookData = exports.HookData = void 0;
var HookData = /** @class */ (function () {
    function HookData(doc, table, cursor) {
        this.table = table;
        this.pageNumber = table.pageNumber;
        this.pageCount = this.pageNumber;
        this.settings = table.settings;
        this.cursor = cursor;
        this.doc = doc.getDocument();
    }
    return HookData;
}());
exports.HookData = HookData;
var CellHookData = /** @class */ (function (_super) {
    __extends(CellHookData, _super);
    function CellHookData(doc, table, cell, row, column, cursor) {
        var _this = _super.call(this, doc, table, cursor) || this;
        _this.cell = cell;
        _this.row = row;
        _this.column = column;
        _this.section = row.section;
        return _this;
    }
    return CellHookData;
}(HookData));
exports.CellHookData = CellHookData;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ellipsize = exports.resizeColumns = exports.calculateWidths = void 0;
var common_1 = __webpack_require__(0);
/**
 * Calculate the column widths
 */
function calculateWidths(doc, table) {
    calculate(doc, table);
    var resizableColumns = [];
    var initialTableWidth = 0;
    table.columns.forEach(function (column) {
        var customWidth = column.getMaxCustomCellWidth(table);
        if (customWidth) {
            // final column width
            column.width = customWidth;
        }
        else {
            // initial column width (will be resized)
            column.width = column.wrappedWidth;
            resizableColumns.push(column);
        }
        initialTableWidth += column.width;
    });
    // width difference that needs to be distributed
    var resizeWidth = table.getWidth(doc.pageSize().width) - initialTableWidth;
    // first resize attempt: with respect to minReadableWidth and minWidth
    if (resizeWidth) {
        resizeWidth = resizeColumns(resizableColumns, resizeWidth, function (column) {
            return Math.max(column.minReadableWidth, column.minWidth);
        });
    }
    // second resize attempt: ignore minReadableWidth but respect minWidth
    if (resizeWidth) {
        resizeWidth = resizeColumns(resizableColumns, resizeWidth, function (column) { return column.minWidth; });
    }
    resizeWidth = Math.abs(resizeWidth);
    if (resizeWidth > 0.1 / doc.scaleFactor()) {
        // Table can't get smaller due to custom-width or minWidth restrictions
        // We can't really do much here. Up to user to for example
        // reduce font size, increase page size or remove custom cell widths
        // to allow more columns to be reduced in size
        resizeWidth = resizeWidth < 1 ? resizeWidth : Math.round(resizeWidth);
        console.error("Of the table content, " + resizeWidth + " units width could not fit page");
    }
    applyColSpans(table);
    fitContent(table, doc);
    applyRowSpans(table);
}
exports.calculateWidths = calculateWidths;
function calculate(doc, table) {
    var sf = doc.scaleFactor();
    table.allRows().forEach(function (row) {
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = row.cells[column.index];
            if (!cell)
                continue;
            var hooks = table.hooks.didParseCell;
            table.callCellHooks(doc, hooks, cell, row, column, null);
            var padding = cell.padding('horizontal');
            cell.contentWidth = common_1.getStringWidth(cell.text, cell.styles, doc) + padding;
            var longestWordWidth = common_1.getStringWidth(cell.text.join(' ').split(/\s+/), cell.styles, doc);
            cell.minReadableWidth = longestWordWidth + cell.padding('horizontal');
            if (typeof cell.styles.cellWidth === 'number') {
                cell.minWidth = cell.styles.cellWidth;
                cell.wrappedWidth = cell.styles.cellWidth;
            }
            else if (cell.styles.cellWidth === 'wrap') {
                cell.minWidth = cell.contentWidth;
                cell.wrappedWidth = cell.contentWidth;
            }
            else {
                // auto
                var defaultMinWidth = 10 / sf;
                cell.minWidth = cell.styles.minCellWidth || defaultMinWidth;
                cell.wrappedWidth = cell.contentWidth;
                if (cell.minWidth > cell.wrappedWidth) {
                    cell.wrappedWidth = cell.minWidth;
                }
            }
        }
    });
    table.allRows().forEach(function (row) {
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = row.cells[column.index];
            // For now we ignore the minWidth and wrappedWidth of colspan cells when calculating colspan widths.
            // Could probably be improved upon however.
            if (cell && cell.colSpan === 1) {
                column.wrappedWidth = Math.max(column.wrappedWidth, cell.wrappedWidth);
                column.minWidth = Math.max(column.minWidth, cell.minWidth);
                column.minReadableWidth = Math.max(column.minReadableWidth, cell.minReadableWidth);
            }
            else {
                // Respect cellWidth set in columnStyles even if there is no cells for this column
                // or if the column only have colspan cells. Since the width of colspan cells
                // does not affect the width of columns, setting columnStyles cellWidth enables the
                // user to at least do it manually.
                // Note that this is not perfect for now since for example row and table styles are
                // not accounted for
                var columnStyles = table.styles.columnStyles[column.dataKey] ||
                    table.styles.columnStyles[column.index] ||
                    {};
                var cellWidth = columnStyles.cellWidth || columnStyles.minCellWidth;
                if (cellWidth && typeof cellWidth === 'number') {
                    column.minWidth = cellWidth;
                    column.wrappedWidth = cellWidth;
                }
            }
            if (cell) {
                // Make sure all columns get at least min width even though width calculations are not based on them
                if (cell.colSpan > 1 && !column.minWidth) {
                    column.minWidth = cell.minWidth;
                }
                if (cell.colSpan > 1 && !column.wrappedWidth) {
                    column.wrappedWidth = cell.minWidth;
                }
            }
        }
    });
}
/**
 * Distribute resizeWidth on passed resizable columns
 */
function resizeColumns(columns, resizeWidth, getMinWidth) {
    var initialResizeWidth = resizeWidth;
    var sumWrappedWidth = columns.reduce(function (acc, column) { return acc + column.wrappedWidth; }, 0);
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var ratio = column.wrappedWidth / sumWrappedWidth;
        var suggestedChange = initialResizeWidth * ratio;
        var suggestedWidth = column.width + suggestedChange;
        var minWidth = getMinWidth(column);
        var newWidth = suggestedWidth < minWidth ? minWidth : suggestedWidth;
        resizeWidth -= newWidth - column.width;
        column.width = newWidth;
    }
    resizeWidth = Math.round(resizeWidth * 1e10) / 1e10;
    // Run the resizer again if there's remaining width needs
    // to be distributed and there're columns that can be resized
    if (resizeWidth) {
        var resizableColumns = columns.filter(function (column) {
            return resizeWidth < 0
                ? column.width > getMinWidth(column) // check if column can shrink
                : true; // check if column can grow
        });
        if (resizableColumns.length) {
            resizeWidth = resizeColumns(resizableColumns, resizeWidth, getMinWidth);
        }
    }
    return resizeWidth;
}
exports.resizeColumns = resizeColumns;
function applyRowSpans(table) {
    var rowSpanCells = {};
    var colRowSpansLeft = 1;
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var data = rowSpanCells[column.index];
            if (colRowSpansLeft > 1) {
                colRowSpansLeft--;
                delete row.cells[column.index];
            }
            else if (data) {
                data.cell.height += row.height;
                colRowSpansLeft = data.cell.colSpan;
                delete row.cells[column.index];
                data.left--;
                if (data.left <= 1) {
                    delete rowSpanCells[column.index];
                }
            }
            else {
                var cell = row.cells[column.index];
                if (!cell) {
                    continue;
                }
                cell.height = row.height;
                if (cell.rowSpan > 1) {
                    var remaining = all.length - rowIndex;
                    var left = cell.rowSpan > remaining ? remaining : cell.rowSpan;
                    rowSpanCells[column.index] = { cell: cell, left: left, row: row };
                }
            }
        }
    }
}
function applyColSpans(table) {
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        var colSpanCell = null;
        var combinedColSpanWidth = 0;
        var colSpansLeft = 0;
        for (var columnIndex = 0; columnIndex < table.columns.length; columnIndex++) {
            var column = table.columns[columnIndex];
            // Width and colspan
            colSpansLeft -= 1;
            if (colSpansLeft > 1 && table.columns[columnIndex + 1]) {
                combinedColSpanWidth += column.width;
                delete row.cells[column.index];
            }
            else if (colSpanCell) {
                var cell = colSpanCell;
                delete row.cells[column.index];
                colSpanCell = null;
                cell.width = column.width + combinedColSpanWidth;
            }
            else {
                var cell = row.cells[column.index];
                if (!cell)
                    continue;
                colSpansLeft = cell.colSpan;
                combinedColSpanWidth = 0;
                if (cell.colSpan > 1) {
                    colSpanCell = cell;
                    combinedColSpanWidth += column.width;
                    continue;
                }
                cell.width = column.width + combinedColSpanWidth;
            }
        }
    }
}
function fitContent(table, doc) {
    var rowSpanHeight = { count: 0, height: 0 };
    for (var _i = 0, _a = table.allRows(); _i < _a.length; _i++) {
        var row = _a[_i];
        for (var _b = 0, _c = table.columns; _b < _c.length; _b++) {
            var column = _c[_b];
            var cell = row.cells[column.index];
            if (!cell)
                continue;
            doc.applyStyles(cell.styles, true);
            var textSpace = cell.width - cell.padding('horizontal');
            if (cell.styles.overflow === 'linebreak') {
                // Add one pt to textSpace to fix rounding error
                cell.text = doc.splitTextToSize(cell.text, textSpace + 1 / doc.scaleFactor(), { fontSize: cell.styles.fontSize });
            }
            else if (cell.styles.overflow === 'ellipsize') {
                cell.text = ellipsize(cell.text, textSpace, cell.styles, doc, '...');
            }
            else if (cell.styles.overflow === 'hidden') {
                cell.text = ellipsize(cell.text, textSpace, cell.styles, doc, '');
            }
            else if (typeof cell.styles.overflow === 'function') {
                cell.text = cell.styles.overflow(cell.text, textSpace);
            }
            cell.contentHeight = cell.getContentHeight(doc.scaleFactor());
            var realContentHeight = cell.contentHeight / cell.rowSpan;
            if (cell.rowSpan > 1 &&
                rowSpanHeight.count * rowSpanHeight.height <
                    realContentHeight * cell.rowSpan) {
                rowSpanHeight = { height: realContentHeight, count: cell.rowSpan };
            }
            else if (rowSpanHeight && rowSpanHeight.count > 0) {
                if (rowSpanHeight.height > realContentHeight) {
                    realContentHeight = rowSpanHeight.height;
                }
            }
            if (realContentHeight > row.height) {
                row.height = realContentHeight;
            }
        }
        rowSpanHeight.count--;
    }
}
function ellipsize(text, width, styles, doc, overflow) {
    return text.map(function (str) { return ellipsizeStr(str, width, styles, doc, overflow); });
}
exports.ellipsize = ellipsize;
function ellipsizeStr(text, width, styles, doc, overflow) {
    var precision = 10000 * doc.scaleFactor();
    width = Math.ceil(width * precision) / precision;
    if (width >= common_1.getStringWidth(text, styles, doc)) {
        return text;
    }
    while (width < common_1.getStringWidth(text + overflow, styles, doc)) {
        if (text.length <= 1) {
            break;
        }
        text = text.substring(0, text.length - 1);
    }
    return text.trim() + overflow;
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE__16__ === 'undefined') {var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ })
/******/ ]);
});
;