function calculateTotalCost() {
  // Get the selected locker size from the first form
  //   var lockerSize = document.getElementById("lockersize").value;
  var lockerSize = document.getElementById("lockersize").value;
  // document.getElementById("onemonthcost").value = lockerSize;
  // Get the number of months from the second form
  var rentDuration = parseInt(document.getElementById("expiredate").value);
  // Calculate the total cost based on the locker size and rent duration
  var totalCost = lockerSize * rentDuration;
  // Update the value of the total cost field in the third form
  document.getElementById("totalcost").value = totalCost;
  document.getElementById("onemonthcost").value = totalCost / rentDuration;

  //   UPDATE `tblassignlocker` SET `totalcostforrent` = '3000' WHERE `tblassignlocker`.`ID` = 13;
}

function calculateTotalExtendCost() {
  // Get the selected locker size from the first form
  //   var lockerSize = document.getElementById("lockersize").value;
  var lockerSize = document.getElementById("onemonthcost").value;
  // document.getElementById("onemonthcost").value = lockerSize;
  // Get the number of months from the second form
  var rentDuration = parseInt(
    document.getElementById("extendexpiredate").value
  );
  // Calculate the total cost based on the locker size and rent duration
  var totalCost = lockerSize * rentDuration;
  // Update the value of the total cost field in the third form
  document.getElementById("totalextendcost").value = totalCost;
  // document.getElementById("onemonthcost").value = totalCost / rentDuration;

  //   UPDATE `tblassignlocker` SET `totalcostforrent` = '3000' WHERE `tblassignlocker`.`ID` = 13;
}
