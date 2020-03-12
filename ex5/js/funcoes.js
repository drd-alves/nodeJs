
soma = (n1,n2) =>{
    return n1+ n2
}

subtrai = (n1,n2) =>{
    return n1- n2
}

multiplica = (n1,n2) =>{
    return n1* n2
}

divide = (n1,n2) =>{
    if(n2 != 0){
        return n1/ n2
    }
}         

module.exports = {
    soma,
    subtrai,
    multiplica,
    divide
}