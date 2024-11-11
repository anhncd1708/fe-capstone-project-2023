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
import LessonViewUsedQuestionDoQuiz from './LessonViewUsedQuestionDoQuiz';

/**
 * The QuizViewUsedQuestionDoQuiz model module.
 * @module model/QuizViewUsedQuestionDoQuiz
 * @version v1
 */
class QuizViewUsedQuestionDoQuiz {
    /**
     * Constructs a new <code>QuizViewUsedQuestionDoQuiz</code>.
     * @alias module:model/QuizViewUsedQuestionDoQuiz
     */
    constructor() { 
        
        QuizViewUsedQuestionDoQuiz.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuizViewUsedQuestionDoQuiz</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuizViewUsedQuestionDoQuiz} obj Optional instance to populate.
     * @return {module:model/QuizViewUsedQuestionDoQuiz} The populated <code>QuizViewUsedQuestionDoQuiz</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuizViewUsedQuestionDoQuiz();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('passScore')) {
                obj['passScore'] = ApiClient.convertToType(data['passScore'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('dateCreate')) {
                obj['dateCreate'] = ApiClient.convertToType(data['dateCreate'], 'Date');
            }
            if (data.hasOwnProperty('dateRange')) {
                obj['dateRange'] = ApiClient.convertToType(data['dateRange'], 'Number');
            }
            if (data.hasOwnProperty('allowAttempt')) {
                obj['allowAttempt'] = ApiClient.convertToType(data['allowAttempt'], 'Number');
            }
            if (data.hasOwnProperty('proportion')) {
                obj['proportion'] = ApiClient.convertToType(data['proportion'], 'Number');
            }
            if (data.hasOwnProperty('lesson')) {
                obj['lesson'] = LessonViewUsedQuestionDoQuiz.constructFromObject(data['lesson']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuizViewUsedQuestionDoQuiz</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuizViewUsedQuestionDoQuiz</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `lesson`
        if (data['lesson']) { // data not null
          LessonViewUsedQuestionDoQuiz.validateJSON(data['lesson']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
QuizViewUsedQuestionDoQuiz.prototype['id'] = undefined;

/**
 * @member {Number} passScore
 */
QuizViewUsedQuestionDoQuiz.prototype['passScore'] = undefined;

/**
 * @member {String} status
 */
QuizViewUsedQuestionDoQuiz.prototype['status'] = undefined;

/**
 * @member {Number} duration
 */
QuizViewUsedQuestionDoQuiz.prototype['duration'] = undefined;

/**
 * @member {Date} dateCreate
 */
QuizViewUsedQuestionDoQuiz.prototype['dateCreate'] = undefined;

/**
 * @member {Number} dateRange
 */
QuizViewUsedQuestionDoQuiz.prototype['dateRange'] = undefined;

/**
 * @member {Number} allowAttempt
 */
QuizViewUsedQuestionDoQuiz.prototype['allowAttempt'] = undefined;

/**
 * @member {Number} proportion
 */
QuizViewUsedQuestionDoQuiz.prototype['proportion'] = undefined;

/**
 * @member {module:model/LessonViewUsedQuestionDoQuiz} lesson
 */
QuizViewUsedQuestionDoQuiz.prototype['lesson'] = undefined;






export default QuizViewUsedQuestionDoQuiz;

