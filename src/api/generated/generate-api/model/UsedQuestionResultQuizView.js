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
import QuizResultQuizView from './QuizResultQuizView';
import UsedAnswerResultQuizView from './UsedAnswerResultQuizView';

/**
 * The UsedQuestionResultQuizView model module.
 * @module model/UsedQuestionResultQuizView
 * @version v1
 */
class UsedQuestionResultQuizView {
    /**
     * Constructs a new <code>UsedQuestionResultQuizView</code>.
     * @alias module:model/UsedQuestionResultQuizView
     */
    constructor() { 
        
        UsedQuestionResultQuizView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsedQuestionResultQuizView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsedQuestionResultQuizView} obj Optional instance to populate.
     * @return {module:model/UsedQuestionResultQuizView} The populated <code>UsedQuestionResultQuizView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsedQuestionResultQuizView();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('quiz')) {
                obj['quiz'] = QuizResultQuizView.constructFromObject(data['quiz']);
            }
            if (data.hasOwnProperty('usedAnswers')) {
                obj['usedAnswers'] = ApiClient.convertToType(data['usedAnswers'], [UsedAnswerResultQuizView]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsedQuestionResultQuizView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsedQuestionResultQuizView</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // validate the optional field `quiz`
        if (data['quiz']) { // data not null
          QuizResultQuizView.validateJSON(data['quiz']);
        }
        if (data['usedAnswers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['usedAnswers'])) {
                throw new Error("Expected the field `usedAnswers` to be an array in the JSON data but got " + data['usedAnswers']);
            }
            // validate the optional field `usedAnswers` (array)
            for (const item of data['usedAnswers']) {
                UsedAnswerResultQuizView.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
UsedQuestionResultQuizView.prototype['id'] = undefined;

/**
 * @member {String} content
 */
UsedQuestionResultQuizView.prototype['content'] = undefined;

/**
 * @member {Boolean} status
 */
UsedQuestionResultQuizView.prototype['status'] = undefined;

/**
 * @member {module:model/QuizResultQuizView} quiz
 */
UsedQuestionResultQuizView.prototype['quiz'] = undefined;

/**
 * @member {Array.<module:model/UsedAnswerResultQuizView>} usedAnswers
 */
UsedQuestionResultQuizView.prototype['usedAnswers'] = undefined;






export default UsedQuestionResultQuizView;

