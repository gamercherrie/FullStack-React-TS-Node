//Any Type
// let val: any = 22;
// val = "string value";
// val = new Array();
// val.doesnotexist(33);
// console.log(val);

//Uknown Type
let val: unknown = 22;
val = "string value";
val = new Array();
if (val instanceof Array){
    val.push(33);
}
console.log(val);