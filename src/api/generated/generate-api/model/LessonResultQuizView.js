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
import CourseResultQuizView from './CourseResultQuizView';
import ResourceResultQuizView from './ResourceResultQuizView';
import SyllabusResultQuizView from './SyllabusResultQuizView';

/**
 * The LessonResultQuizView model module.
 * @module model/LessonResultQuizView
 * @version v1
 */
class LessonResultQuizView {
    /**
     * Constructs a new <code>LessonResultQuizView</code>.
     * @alias module:model/LessonResultQuizView
     */
    constructor() { 
        
        LessonResultQuizView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LessonResultQuizView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LessonResultQuizView} obj Optional instance to populate.
     * @return {module:model/LessonResultQuizView} The populated <code>LessonResultQuizView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LessonResultQuizView();

            if (data.hasOwnProperty('course')) {
                obj['course'] = CourseResultQuizView.constructFromObject(data['course']);
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = ApiClient.convertToType(data['resources'], [ResourceResultQuizView]);
            }
            if (data.hasOwnProperty('syllabuses')) {
                obj['syllabuses'] = ApiClient.convertToType(data['syllabuses'], [SyllabusResultQuizView]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LessonResultQuizView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LessonResultQuizView</code>.
     */
    static validateJSON(data) {
        // validate the optional field `course`
        if (data['course']) { // data not null
          CourseResultQuizView.validateJSON(data['course']);
        }
        if (data['resources']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['resources'])) {
                throw new Error("Expected the field `resources` to be an array in the JSON data but got " + data['resources']);
            }
            // validate the optional field `resources` (array)
            for (const item of data['resources']) {
                ResourceResultQuizView.validateJsonObject(item);
            };
        }
        if (data['syllabuses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['syllabuses'])) {
                throw new Error("Expected the field `syllabuses` to be an array in the JSON data but got " + data['syllabuses']);
            }
            // validate the optional field `syllabuses` (array)
            for (const item of data['syllabuses']) {
                SyllabusResultQuizView.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/CourseResultQuizView} course
 */
LessonResultQuizView.prototype['course'] = undefined;

/**
 * @member {Array.<module:model/ResourceResultQuizView>} resources
 */
LessonResultQuizView.prototype['resources'] = undefined;

/**
 * @member {Array.<module:model/SyllabusResultQuizView>} syllabuses
 */
LessonResultQuizView.prototype['syllabuses'] = undefined;






export default LessonResultQuizView;
