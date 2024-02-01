const add = (n1:number,n2:number,flag:boolean,phrase:string)=>{
    const result = n1+n2;
    if(flag){
        console.log(phrase+result);
    }
    else{
        return result
    }
}


const number1 =2;
const number2 = 45;
const flagValue=true;
const resultphrase = 'Result is: ';

add(number1,number2,flagValue,resultphrase)