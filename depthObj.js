// given depth Obj data and a string value, string value contain the path of the obj to get value 
// create function to get value of the obj based on the path
const data = {a: { b : {c :{ d :10}}}};
const str = "a.b.c.d";

function sol(data, str){
    const strArr = str.split('.');
    for(let i = 0; i<strArr.length; i++){
        data = data[strArr[i]];
    }
    return data;
}

console.log(sol(data, str));

