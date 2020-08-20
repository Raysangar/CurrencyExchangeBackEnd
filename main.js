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
    return JSON.parse(response)["results"];
};

handlers.GetExchangeRate = function (args, context) {
    var headers = {
    };
    
    var body = {
    };

    var currencyFrom = args.from;
    var currencyTo = args.to;

    var conversion = currencyFrom + "_" + currencyTo;

    
    var url = "https://free.currconv.com/api/v7//api/v7/convert?q=" + conversion + "&compact=ultra&apiKey=a37ce2f41e2fecf090a2";
    if (args.hasOwnProperty("date"))
    {
        debug.log(args["date"];
        //url += "&date=[yyyy-mm-dd]";
    }
    var content = JSON.stringify(body);
    var httpMethod = "get";
    var contentType = "application/json";

    // The pre-defined http object makes synchronous HTTP requests
    var response = http.request(url, httpMethod, content, contentType, headers);
    return JSON.parse(response)[conversion]["val"];
};
