
const aleatorio = () => ("" + Math.floor(Math.random() * 999)).padStart(3, '0');

function gerar() {
   document.getElementById('result').value =  cpf();
}
function dig(n1, n2, n3, n4) { 
  console.log([n4]);
  let nums = n1.split("").concat(n2.split(""), n3.split(""), [n4]), x = 0;  
  for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) x += parseInt(nums[j])  * i;
  return (y = x % 11) < 2 ? 0 : 11 - (y = x % 11); 
}

function cpf() {
  const n1 = aleatorio(), n2 = aleatorio(), n3 = aleatorio(), d1 = dig(n1, n2, n3);
  if (document.form_submit.dotsAndDashes.value === 'sim') {
    return `${n1}.${n2}.${n3}-${d1}${dig(n1, n2, n3, d1)}`;
  } else {
    return `${n1}${n2}${n3}${d1}${dig(n1, n2, n3, d1)}`;
  }
}
