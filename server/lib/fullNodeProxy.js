// Constructor
var fullNodeProxy = function() {
    
    this.target = null;

}

fullNodeProxy.prototype.createProxyServer = function(options) {

	if(options.target) this.target = options.target;

    function clone(obj){
        if(obj == null || typeof(obj) != 'object')
            return obj;

        var temp = new obj.constructor(); 
        for(var key in obj)
            temp[key] = clone(obj[key]);

        return temp;
    }
    
    return clone(this);

}

fullNodeProxy.prototype.web = function(req, res) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
	if(this.target) {
        var headers = {'content-type': 'application/x-www-form-urlencoded', 'rejectUnauthorized': 'false'};
        if (req.headers.authorization) {
            headers = {'content-type': 'application/x-www-form-urlencoded', 'Authorization': req.headers.authorization, 'rejectUnauthorized': 'false'};
        }
        
        if(req.method=='GET'){
            require('request').get({
                uri:this.target+req.url,
                headers:headers,
                },function(err,response,body){
            }).pipe(res);
        } else {
            if (req.method === 'POST' || req.method === "PUT" || req.method === "DELETE") {
                require('request').post({
                    uri:this.target+req.url,
                    headers: headers,
                    form:req.body
                    },function(err,response,body){
                }).pipe(res);
            } 
        }
    }
}

module.exports = new fullNodeProxy();