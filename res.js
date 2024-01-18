'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values,
        'message':'OK'
    };

     res.json(data);
     res.end();
}