function remove_character(str){ 
if (str.length >1) 
{
  part1 = str.substring(0,1);
  part3 = str.substring(str.length - 1, str.length);
	part2 = str.substring(1, str.length -1);
  return (part3 + part2 + part1);
 }
else return str;
}
console.log(remove_character("Pa",0));