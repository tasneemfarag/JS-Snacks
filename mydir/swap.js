function noTemp(a,b){
    a +=b; /* trying to swap variables without using a temp variable */
    b = a -b;
    a -=b; 
}
noTemp(5,2);