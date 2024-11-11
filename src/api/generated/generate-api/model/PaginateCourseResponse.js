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
import CourseResponse from './CourseResponse';

/**
 * The PaginateCourseResponse model module.
 * @module model/PaginateCourseResponse
 * @version v1
 */
class PaginateCourseResponse {
    /**
     * Constructs a new <code>PaginateCourseResponse</code>.
     * @alias module:model/PaginateCourseResponse
     */
    constructor() { 
        
        PaginateCourseResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginateCourseResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginateCourseResponse} obj Optional instance to populate.
     * @return {module:model/PaginateCourseResponse} The populated <code>PaginateCourseResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginateCourseResponse();

            if (data.hasOwnProperty('contents')) {
                obj['contents'] = ApiClient.convertToType(data['contents'], [CourseResponse]);
            }
            if (data.hasOwnProperty('current')) {
                obj['current'] = ApiClient.convertToType(data['current'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('totalPage')) {
                obj['totalPage'] = ApiClient.convertToType(data['totalPage'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaginateCourseResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaginateCourseResponse</code>.
     */
    static validateJSON(data) {
        if (data['contents']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['contents'])) {
                throw new Error("Expected the field `contents` to be an array in the JSON data but got " + data['contents']);
            }
            // validate the optional field `contents` (array)
            for (const item of data['contents']) {
                CourseResponse.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/CourseResponse>} contents
 */
PaginateCourseResponse.prototype['contents'] = undefined;

/**
 * @member {Number} current
 */
PaginateCourseResponse.prototype['current'] = undefined;

/**
 * @member {Number} pageSize
 */
PaginateCourseResponse.prototype['pageSize'] = undefined;

/**
 * @member {Number} total
 */
PaginateCourseResponse.prototype['total'] = undefined;

/**
 * @member {Number} totalPage
 */
PaginateCourseResponse.prototype['totalPage'] = undefined;






export default PaginateCourseResponse;

