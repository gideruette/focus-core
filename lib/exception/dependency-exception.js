'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomException = require('./custom-exception');
/**
* Class standing for the NotImplemented exceptions.
*/

var DependencyException = (function (_CustomException) {
    _inherits(DependencyException, _CustomException);

    /**
    * Exception constructor..
    * @param message {string} - Exception message.
    * @param options {object} - Object to add to the exception.
    */

    function DependencyException(message, options) {
        _classCallCheck(this, DependencyException);

        _CustomException.call(this, 'DependencyException', message, options);
    }

    return DependencyException;
})(CustomException);

module.exports = DependencyException;