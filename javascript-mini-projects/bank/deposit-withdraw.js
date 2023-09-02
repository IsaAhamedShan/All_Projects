// step1-get the value from deposit and withdraw input ,
// when click at deposit or withdraw button

function inputToValue(id) {
  nameOfId = id;
  const moneyElement = document.getElementById(nameOfId);
  const moneyValue = parseInt(moneyElement.value);
  return moneyValue;
}
const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const btnDeposit = document.getElementById("btn-deposit");
const btnWithdraw = document.getElementById("btn-withdraw");
const total = document.getElementById("account-total");

btnDeposit.addEventListener("click", e => {
  e.preventDefault();
  const depositValue = parseInt(deposit.value);
  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = parseInt(depositTotalElement.innerHTML);
  depositTotalElement.innerHTML = depositValue + depositTotal;

  const accountTotal = parseInt(total.innerHTML);

  total.innerHTML = accountTotal + depositValue;
  deposit.value = "";
});

btnWithdraw.addEventListener("click", e => {
  e.preventDefault();
  const withdrawValue = parseInt(withdraw.value);
  const totalValue = parseInt(total.innerHTML);
  // console.log(totalValue);
  console.log(withdrawValue);
  if (totalValue - withdrawValue < 0) {
    alert("You do not have enough funds to withdraw.");
  } else {
    total.innerHTML = totalValue - withdrawValue;

    const creditTotalSelect = document.getElementById("credit-total");
    const creditTotalValue = parseInt(creditTotalSelect.innerHTML);

    const withdraw = creditTotalValue + withdrawValue;

    creditTotalSelect.innerHTML = withdraw;
  }
});
