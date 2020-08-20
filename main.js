handlers.GetCurrencyList = function (args, context) {
    var headers = {
    };
    
    var body = {
    };

    var url = "https://free.currconv.com/api/v7/currencies?apiKey=" + args["key"];
    var content = JSON.stringify(body);
    var httpMethod = "get";
    var contentType = "application/json";

    // The pre-defined http object makes synchronous HTTP requests
    var response = http.request(url, httpMethod, content, contentType, headers);
    return JSON.parse(response);
};

handlers.GetExchangeRate = function (args, context) {
    var headers = {
    };
    
    var body = {
    };

    console.log(args);

    var currencyFrom = args.from;
    var currencyTo = args.to;

    var conversion = currencyFrom + "_" + currencyTo;

    var url = "https://free.currconv.com/api/v7/convert?q=" + conversion + "&compact=ultra&apiKey=" + args["key"];
    if (args.hasOwnProperty("date"))
    {
        url += "&date=" + args["date"];
    }
    var content = JSON.stringify(body);
    var httpMethod = "get";
    var contentType = "application/json";

    // The pre-defined http object makes synchronous HTTP requests
    var response = http.request(url, httpMethod, content, contentType, headers);
    return JSON.parse(response);
};


