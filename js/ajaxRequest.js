function request(type, url, data, callback) {
    $.ajax({
        url: 'php/' + url + '.php',
        type: type,
        data: data,
        success: function(res) {
            callback(JSON.parse(res));
        },
        error: function(res) { 
            console.log('Error ' + res) ;
        }
    });
}