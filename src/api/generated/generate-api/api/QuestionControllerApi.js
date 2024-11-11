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


import ApiClient from "../ApiClient";
import QuestionQuestionView from '../model/QuestionQuestionView';
import QuestionRequestQuestionView from '../model/QuestionRequestQuestionView';

/**
* QuestionController service.
* @module api/QuestionControllerApi
* @version v1
*/
export default class QuestionControllerApi {

    /**
    * Constructs a new QuestionControllerApi. 
    * @alias module:api/QuestionControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the findAllQuestionByTeacher operation.
     * @callback module:api/QuestionControllerApi~findAllQuestionByTeacherCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuestionQuestionView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} teacherId 
     * @param {module:api/QuestionControllerApi~findAllQuestionByTeacherCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuestionQuestionView>}
     */
    findAllQuestionByTeacher(teacherId, callback) {
      let postBody = null;
      // verify the required parameter 'teacherId' is set
      if (teacherId === undefined || teacherId === null) {
        throw new Error("Missing the required parameter 'teacherId' when calling findAllQuestionByTeacher");
      }

      let pathParams = {
      };
      let queryParams = {
        'teacher_id': teacherId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [QuestionQuestionView];
      return this.apiClient.callApi(
        '/api/v1/question/by-teacher', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllQuestions operation.
     * @callback module:api/QuestionControllerApi~findAllQuestionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuestionQuestionView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/QuestionControllerApi~findAllQuestionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuestionQuestionView>}
     */
    findAllQuestions(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [QuestionQuestionView];
      return this.apiClient.callApi(
        '/api/v1/question/questions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findQuestionById operation.
     * @callback module:api/QuestionControllerApi~findQuestionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuestionQuestionView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/QuestionControllerApi~findQuestionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuestionQuestionView}
     */
    findQuestionById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findQuestionById");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = QuestionQuestionView;
      return this.apiClient.callApi(
        '/api/v1/question/by-id', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findQuestionByLessonId operation.
     * @callback module:api/QuestionControllerApi~findQuestionByLessonIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/QuestionQuestionView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} lessonId 
     * @param {module:api/QuestionControllerApi~findQuestionByLessonIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/QuestionQuestionView>}
     */
    findQuestionByLessonId(lessonId, callback) {
      let postBody = null;
      // verify the required parameter 'lessonId' is set
      if (lessonId === undefined || lessonId === null) {
        throw new Error("Missing the required parameter 'lessonId' when calling findQuestionByLessonId");
      }

      let pathParams = {
      };
      let queryParams = {
        'lesson_id': lessonId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [QuestionQuestionView];
      return this.apiClient.callApi(
        '/api/v1/question/byLessonId', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuestionById operation.
     * @callback module:api/QuestionControllerApi~getQuestionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuestionQuestionView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/QuestionControllerApi~getQuestionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuestionQuestionView}
     */
    getQuestionById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getQuestionById");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = QuestionQuestionView;
      return this.apiClient.callApi(
        '/api/v1/question/byId', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveQuestion operation.
     * @callback module:api/QuestionControllerApi~saveQuestionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuestionQuestionView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/QuestionRequestQuestionView} questionRequestQuestionView 
     * @param {module:api/QuestionControllerApi~saveQuestionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuestionQuestionView}
     */
    saveQuestion(questionRequestQuestionView, callback) {
      let postBody = questionRequestQuestionView;
      // verify the required parameter 'questionRequestQuestionView' is set
      if (questionRequestQuestionView === undefined || questionRequestQuestionView === null) {
        throw new Error("Missing the required parameter 'questionRequestQuestionView' when calling saveQuestion");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = QuestionQuestionView;
      return this.apiClient.callApi(
        '/api/v1/question/save', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}