'use strict';
const baseUrl = "http://10.0.2.2:30000/api/"; 

class RestClient {
    /**
    GET API
    **/
    static async get(url) {
        
        return new Promise(function (resolve, reject) {
            fetch(baseUrl + url, {
                method: 'GET',
                timeout: 10000,
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                },
            })
            .then((response) => response.json())
            .then((responseJson) => {
                    resolve(responseJson);
            })
            .catch((error) => {
                console.log('get:'+error.message);
                reject({
                    statusCode: 403,
                    message: "Server not responding !\n"+error.message
                });
            });
        });
    };

    /**
    POST API
    **/
    static async post(url, params) {
        return new Promise(function (resolve, reject) {
            //console.log(baseUrl + url, '===', params)
            fetch(baseUrl + url, {
                method: 'POST',
                timeout: 10000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject({
                    statusCode: 403,
                    message: "Server not responding !\n"+ error.message
                });
            });
        });
    };
    

    /**
    POST API to include Images
    **/
    static async postImageData(url, params) {
        return new Promise(function (resolve, reject) {
            //console.log(baseUrl + url, '===', params)
            fetch(baseUrl + url, {
                method: 'POST',
                timeout: 10000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body : params
            })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {

                //it seems it thows an error on multipart over http, it should work on https
                reject({
                    statusCode: 403,
                    message: "Server not responding !\n"+ error.message
                });

                //this to be used only on test , 
                // resolve (
                //     {Status :true}
                // );
            });
        });
    };


    /**
    PUT API 
    **/
    static async put(url, params, headers) {
        return new Promise(function (resolve, reject) {
            fetch(baseUrl + url, {
                method: 'PUT',
                timeout: 10000,
                headers: headers,
                body: JSON.stringify(params)
            })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                fulfill({
                    statusCode: 403,
                    message: "Server not responding"
                });
            });
        });
    };


    /**
    DELETE API
    **/
    static async del(url) {
        return new Promise(function (resolve, reject) {
            fetch(baseUrl + url, {
                method: 'DELETE',
                timeout: 10000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.json())
            .then((responseJson) => {
                    resolve(responseJson);
            })
            .catch((error) => {
                console.log('get:'+error.message);
                reject({
                    statusCode: 403,
                    message: "Server not responding !\n"+error.message
                });
            });
        });
    };

}

module.exports = RestClient;
