function add (a,b){
    return a+b;
}



function sub(a,b){
    return a-b;
}


// module.exports = {
//     addFn: add,
//     subFn: sub
// }

module.exports = {
    add,
    sub
}


exports.add = (a,b) =>{
    return a+b;
}

exports.sub = (a,b) =>{
    return a-b;
}
