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
import PaymentMethodsPaymentMethodsView from '../model/PaymentMethodsPaymentMethodsView';
import PaymentMethodsRequestPaymentMethodsView from '../model/PaymentMethodsRequestPaymentMethodsView';

/**
* PaymentMethodController service.
* @module api/PaymentMethodControllerApi
* @version v1
*/
export default class PaymentMethodControllerApi {

    /**
    * Constructs a new PaymentMethodControllerApi. 
    * @alias module:api/PaymentMethodControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deletePaymentMethod operation.
     * @callback module:api/PaymentMethodControllerApi~deletePaymentMethodCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} methodId 
     * @param {module:api/PaymentMethodControllerApi~deletePaymentMethodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deletePaymentMethod(methodId, callback) {
      let postBody = null;
      // verify the required parameter 'methodId' is set
      if (methodId === undefined || methodId === null) {
        throw new Error("Missing the required parameter 'methodId' when calling deletePaymentMethod");
      }

      let pathParams = {
      };
      let queryParams = {
        'method_id': methodId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v1/payment_method/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByAccount operation.
     * @callback module:api/PaymentMethodControllerApi~getByAccountCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PaymentMethodsPaymentMethodsView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} accountId 
     * @param {module:api/PaymentMethodControllerApi~getByAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PaymentMethodsPaymentMethodsView>}
     */
    getByAccount(accountId, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getByAccount");
      }

      let pathParams = {
      };
      let queryParams = {
        'account_id': accountId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [PaymentMethodsPaymentMethodsView];
      return this.apiClient.callApi(
        '/api/v1/payment_method/by-account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the savePaymentMethod operation.
     * @callback module:api/PaymentMethodControllerApi~savePaymentMethodCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentMethodsPaymentMethodsView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/PaymentMethodsRequestPaymentMethodsView} paymentMethodsRequestPaymentMethodsView 
     * @param {module:api/PaymentMethodControllerApi~savePaymentMethodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentMethodsPaymentMethodsView}
     */
    savePaymentMethod(paymentMethodsRequestPaymentMethodsView, callback) {
      let postBody = paymentMethodsRequestPaymentMethodsView;
      // verify the required parameter 'paymentMethodsRequestPaymentMethodsView' is set
      if (paymentMethodsRequestPaymentMethodsView === undefined || paymentMethodsRequestPaymentMethodsView === null) {
        throw new Error("Missing the required parameter 'paymentMethodsRequestPaymentMethodsView' when calling savePaymentMethod");
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
      let returnType = PaymentMethodsPaymentMethodsView;
      return this.apiClient.callApi(
        '/api/v1/payment_method/save', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
