handlers.GetCurrencyList = function (args, context) {
    var headers = {
    };
    
    var body = {
    };

    var url = "https://free.currconv.com/api/v7/currencies?apiKey=a37ce2f41e2fecf090a2";
    var content = JSON.stringify(body);
    var httpMethod = "get";
    var contentType = "application/json";

    // The pre-defined http object makes synchronous HTTP requests
    var response = http.request(url, httpMethod, content, contentType, headers);
    return JSON.stringify(JSON.parse(response)["results"]);
};
