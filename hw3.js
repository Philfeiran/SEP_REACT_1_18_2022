// implement you own map, filter, reduce, some, every

Array.prototype.map=function(callback){
    let maparry=[]
    for (let i = 0; i < this.length; i++) {
        maparry.push(callback(this[i], i, this));
     }
     return maparry
};

Array.prototype.filter=function(callback){
    let result=[]
    for(let i of this){
        if(callback(i)){
            result.push(i)
        }
    }
    return result
}

Array.prototype.reduce=function(callback){
    var result=this[0]
    for (let i = 1; i < this.length; i++) {
        result=callback(result,this[i])
     }
     return result

}

Array.prototype.some=function(callback){
    if(this.length==0)
    {
        return false
    }
    for(var i of this){
        if(callback(i)){
            return true
        }
    }
    return false
}

Array.prototype.every=function(callback){
    if(this.length==0)
    {
        return true
    }
    for(var i of this){
        if(!callback(i)){
            return false
        }
    }
    return true
}




