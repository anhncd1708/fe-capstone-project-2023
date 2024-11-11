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
import OrderResponse from './OrderResponse';

/**
 * The ResponseDTOOrderResponse model module.
 * @module model/ResponseDTOOrderResponse
 * @version v1
 */
class ResponseDTOOrderResponse {
    /**
     * Constructs a new <code>ResponseDTOOrderResponse</code>.
     * @alias module:model/ResponseDTOOrderResponse
     */
    constructor() { 
        
        ResponseDTOOrderResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseDTOOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseDTOOrderResponse} obj Optional instance to populate.
     * @return {module:model/ResponseDTOOrderResponse} The populated <code>ResponseDTOOrderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseDTOOrderResponse();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('responseObject')) {
                obj['responseObject'] = OrderResponse.constructFromObject(data['responseObject']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseDTOOrderResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseDTOOrderResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `responseObject`
        if (data['responseObject']) { // data not null
          OrderResponse.validateJSON(data['responseObject']);
        }

        return true;
    }


}



/**
 * @member {Number} code
 */
ResponseDTOOrderResponse.prototype['code'] = undefined;

/**
 * @member {String} message
 */
ResponseDTOOrderResponse.prototype['message'] = undefined;

/**
 * @member {module:model/OrderResponse} responseObject
 */
ResponseDTOOrderResponse.prototype['responseObject'] = undefined;






export default ResponseDTOOrderResponse;

