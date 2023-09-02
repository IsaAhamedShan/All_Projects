// step1-get the value from deposit and withdraw input ,
// when click at deposit or withdraw button
// USE CTRL+ALT+L TO USE TURBO CONSOLE LOG
function inputToValue(id) {
  const nameOfId = id;

  const moneyElement = document.getElementById(nameOfId);
  const moneyValue = parseInt(moneyElement.value);
  return moneyValue;
}
function inputToValueinnerHTML(id) {
  const nameOfIdD = id;
  const moneyElementT = document.getElementById(nameOfIdD);
  const moneyValueE = parseInt(moneyElementT.innerHTML);
  return moneyValueE;
}

function totalCalculator(currentvalue, total, totalId) {
  const totalDepOrCre = (document.getElementById(totalId).innerHTML =
    currentvalue + total);
  return totalDepOrCre;
}

const btnDeposit = document.getElementById("btn-deposit");
const btnWithdraw = document.getElementById("btn-withdraw");
const total = document.getElementById("account-total");
btnDeposit.addEventListener("click", e => {
  e.preventDefault();
  const depositValue = inputToValue("deposit");
  const depositTotal = inputToValueinnerHTML("deposit-total");
  totalCalculator(depositValue, depositTotal, "deposit-total");

  const accountTotal = parseInt(total.innerHTML);
  total.innerHTML = accountTotal + depositValue;
  deposit.value = "";
});
// comments
btnWithdraw.addEventListener("click", e => {
  e.preventDefault();
  const withdrawValue = inputToValue("withdraw");
  const totalValue = parseInt(total.innerHTML);
  if (totalValue - withdrawValue < 0) {
    alert("You do not have enough funds to withdraw.");
  } else {
    total.innerHTML = totalValue - withdrawValue;
    const creditTotalValue = inputToValueinnerHTML("credit-total");
    const creditTotalSelect = document.getElementById("credit-total");
    const withdraw = creditTotalValue + withdrawValue;
    totalCalculator(withdrawValue, creditTotalSelect, "credit-total");
    creditTotalSelect.innerHTML = withdraw;
  }
});
