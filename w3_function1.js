// odwracanie słowa
function odwracanie(x) {
x = x.toString();
return x.split("").reverse().join("");
}
console.log(odwracanie(305));