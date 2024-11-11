/**
 * FPT SE OnLearn management API
 * FPT OnLearn Management API
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FirebaseMessagingExceptionCause from './FirebaseMessagingExceptionCause';
import FirebaseMessagingExceptionCauseStackTraceInner from './FirebaseMessagingExceptionCauseStackTraceInner';

/**
 * The FirebaseMessagingException model module.
 * @module model/FirebaseMessagingException
 * @version v1
 */
class FirebaseMessagingException {
    /**
     * Constructs a new <code>FirebaseMessagingException</code>.
     * @alias module:model/FirebaseMessagingException
     */
    constructor() { 
        
        FirebaseMessagingException.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FirebaseMessagingException</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FirebaseMessagingException} obj Optional instance to populate.
     * @return {module:model/FirebaseMessagingException} The populated <code>FirebaseMessagingException</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FirebaseMessagingException();

            if (data.hasOwnProperty('cause')) {
                obj['cause'] = FirebaseMessagingExceptionCause.constructFromObject(data['cause']);
            }
            if (data.hasOwnProperty('stackTrace')) {
                obj['stackTrace'] = ApiClient.convertToType(data['stackTrace'], [FirebaseMessagingExceptionCauseStackTraceInner]);
            }
            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('suppressed')) {
                obj['suppressed'] = ApiClient.convertToType(data['suppressed'], [FirebaseMessagingExceptionCause]);
            }
            if (data.hasOwnProperty('localizedMessage')) {
                obj['localizedMessage'] = ApiClient.convertToType(data['localizedMessage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FirebaseMessagingException</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FirebaseMessagingException</code>.
     */
    static validateJSON(data) {
        // validate the optional field `cause`
        if (data['cause']) { // data not null
          FirebaseMessagingExceptionCause.validateJSON(data['cause']);
        }
        if (data['stackTrace']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stackTrace'])) {
                throw new Error("Expected the field `stackTrace` to be an array in the JSON data but got " + data['stackTrace']);
            }
            // validate the optional field `stackTrace` (array)
            for (const item of data['stackTrace']) {
                FirebaseMessagingExceptionCauseStackTraceInner.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['errorCode'] && !(typeof data['errorCode'] === 'string' || data['errorCode'] instanceof String)) {
            throw new Error("Expected the field `errorCode` to be a primitive type in the JSON string but got " + data['errorCode']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['suppressed']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['suppressed'])) {
                throw new Error("Expected the field `suppressed` to be an array in the JSON data but got " + data['suppressed']);
            }
            // validate the optional field `suppressed` (array)
            for (const item of data['suppressed']) {
                FirebaseMessagingExceptionCause.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['localizedMessage'] && !(typeof data['localizedMessage'] === 'string' || data['localizedMessage'] instanceof String)) {
            throw new Error("Expected the field `localizedMessage` to be a primitive type in the JSON string but got " + data['localizedMessage']);
        }

        return true;
    }


}



/**
 * @member {module:model/FirebaseMessagingExceptionCause} cause
 */
FirebaseMessagingException.prototype['cause'] = undefined;

/**
 * @member {Array.<module:model/FirebaseMessagingExceptionCauseStackTraceInner>} stackTrace
 */
FirebaseMessagingException.prototype['stackTrace'] = undefined;

/**
 * @member {String} errorCode
 */
FirebaseMessagingException.prototype['errorCode'] = undefined;

/**
 * @member {String} message
 */
FirebaseMessagingException.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/FirebaseMessagingExceptionCause>} suppressed
 */
FirebaseMessagingException.prototype['suppressed'] = undefined;

/**
 * @member {String} localizedMessage
 */
FirebaseMessagingException.prototype['localizedMessage'] = undefined;






export default FirebaseMessagingException;

