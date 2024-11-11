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

/**
 * The GrantedAuthorityReportView model module.
 * @module model/GrantedAuthorityReportView
 * @version v1
 */
class GrantedAuthorityReportView {
    /**
     * Constructs a new <code>GrantedAuthorityReportView</code>.
     * @alias module:model/GrantedAuthorityReportView
     */
    constructor() { 
        
        GrantedAuthorityReportView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GrantedAuthorityReportView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GrantedAuthorityReportView} obj Optional instance to populate.
     * @return {module:model/GrantedAuthorityReportView} The populated <code>GrantedAuthorityReportView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GrantedAuthorityReportView();

            if (data.hasOwnProperty('authority')) {
                obj['authority'] = ApiClient.convertToType(data['authority'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GrantedAuthorityReportView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GrantedAuthorityReportView</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['authority'] && !(typeof data['authority'] === 'string' || data['authority'] instanceof String)) {
            throw new Error("Expected the field `authority` to be a primitive type in the JSON string but got " + data['authority']);
        }

        return true;
    }


}



/**
 * @member {String} authority
 */
GrantedAuthorityReportView.prototype['authority'] = undefined;






export default GrantedAuthorityReportView;

