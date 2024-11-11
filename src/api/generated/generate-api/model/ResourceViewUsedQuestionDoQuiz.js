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
 * The ResourceViewUsedQuestionDoQuiz model module.
 * @module model/ResourceViewUsedQuestionDoQuiz
 * @version v1
 */
class ResourceViewUsedQuestionDoQuiz {
    /**
     * Constructs a new <code>ResourceViewUsedQuestionDoQuiz</code>.
     * @alias module:model/ResourceViewUsedQuestionDoQuiz
     */
    constructor() { 
        
        ResourceViewUsedQuestionDoQuiz.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResourceViewUsedQuestionDoQuiz</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceViewUsedQuestionDoQuiz} obj Optional instance to populate.
     * @return {module:model/ResourceViewUsedQuestionDoQuiz} The populated <code>ResourceViewUsedQuestionDoQuiz</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceViewUsedQuestionDoQuiz();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('resourceType')) {
                obj['resourceType'] = ApiClient.convertToType(data['resourceType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResourceViewUsedQuestionDoQuiz</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResourceViewUsedQuestionDoQuiz</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['resourceType'] && !(typeof data['resourceType'] === 'string' || data['resourceType'] instanceof String)) {
            throw new Error("Expected the field `resourceType` to be a primitive type in the JSON string but got " + data['resourceType']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {String} content
 */
ResourceViewUsedQuestionDoQuiz.prototype['content'] = undefined;

/**
 * @member {String} resourceType
 */
ResourceViewUsedQuestionDoQuiz.prototype['resourceType'] = undefined;

/**
 * @member {String} name
 */
ResourceViewUsedQuestionDoQuiz.prototype['name'] = undefined;






export default ResourceViewUsedQuestionDoQuiz;

