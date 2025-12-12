let b=12;
function greet()
{
    let a=29;
    function meet(){
    console.log(a);
    }
  return meet();
}
const num=greet();
console.log(num);