exports.getTodaysDate = function(){
    return new Date().getDate();
}

exports.getMonth = function(){
    return (new Date().getMonth()+1);
}