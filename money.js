function idgenerate(id){
  const callId = document.getElementById(id).value;
  const callValue = parseFloat(callId)
  return callValue;
}
document.getElementById('calculate-btn').addEventListener('click',function(){
 const income = idgenerate('income');
 const food = idgenerate('food');
 const rent = idgenerate('rent');
 const clothes = idgenerate ('clothes');

 if(income<0 || food<0 || rent<0 || clothes<0)
 {
  alert ('please enter the positive value')
  return;
 }

 const totalExpense =document.getElementById('total-expense');
 const totalExpenseInnerTextString = totalExpense.innerText;
 const totalExpenseInnerText = parseFloat(totalExpenseInnerTextString)

 const totalExpenseValue = food + rent + clothes;
 const balanceTotal = income - totalExpenseValue;



 
 if(totalExpenseValue >income){
  alert ("is not possible your cleareance")
 }

 else{
  totalExpense.innerText = totalExpenseValue;
  const balance = document.getElementById('balance');
  const  balanceStaring = balance.innerText;
  balance.innerText = balanceTotal;

 }

})

document.getElementById('saving-btn').addEventListener('click',function(){
  const income = idgenerate('income');
  const save = idgenerate('save');

  const saving = save /100;
  const totalSaving  = saving * income;

  const savingAmount = document.getElementById('saving-amount');
  const stringsaving = savingAmount.innerText;
  savingAmount.innerText = totalSaving;

 const balance = document.getElementById('balance');
 const  balanceStaring = balance.innerText;
 const balanceTotal = balanceStaring - totalSaving;
 document.getElementById('remaining-balance').innerText = balanceTotal;
 



})