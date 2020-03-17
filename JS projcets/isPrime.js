function isPrime(x){
    var i;
    var prime = true;
    for(i = 2; i <= Math.ceil(Math.sqrt(x)); i++){
        if(x % i == 0){prime = false}
    }
    return prime;
};