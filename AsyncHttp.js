'use strict';

var AsyncHttpClient = require('react-native').NativeModules.AsyncHttp;

var AsyncHttp = {
   	get(url, callback) {
        AsyncHttpClient.get(url, callback);
    },
    post(url, params, callback){
    	var postparams = {};
        for(var key in params){
            var attrName = key;
            var attrValue = String(params[key]);
            postparams[attrName] = attrValue;
        }
    	AsyncHttpClient.post(url, postparams, callback);
    },
    out(){
        AsyncHttpClient.clearcookie();
    }
};
module.exports = AsyncHttp;