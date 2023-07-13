// Get the current date
const currentDate = new Date();

// Get the input field
const monthsInput = "BLMS | Add Locker Type".getElementById("expiredate");

// Add an event listener to the input field
monthsInput.addEventListener("input", function () {
  // Get the number of months from the input field
  const months = parseInt(monthsInput.value);

  // Calculate the new date by adding the number of months to the current date
  const newDate = new Date(currentDate.getTime());
  newDate.setMonth(currentDate.getMonth() + months);

  // Set the value of a hidden input field to the new date
  const newDateInput = "BLMS | Add Locker Type".getElementById("expiredate");
  newDateInput.value = newDate.toISOString().substring(0, 10);
});
