function twoInOne(a, b){
    var marged = [];
    fArry = a[0]; /* this like how I used pointers in C */
    sArry = b[0];
    i = 1;
    j = 1;

    if (a.length == 0)
        return b;

    if (b.length == 0)
        return a;

    while(fArry || sArry){
        if((fArry && !sArry) || (fArry < sArry)){
            marged.push(fArry);
            fArry = a[i++];
        }    
        else {
            marged.push(sArry);
            sArry = b[j++];
        }
        
    }
    return marged;
}

twoInOne([1,2,3,4], [4,5,6,7])