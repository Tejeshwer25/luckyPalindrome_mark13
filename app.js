const birthdayDate1 = document.querySelector("#birthdayDate1");
const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");

submitBtn.addEventListener("click", checkPalindrome);

function checkPalindrome(e) {
  e.preventDefault();
  result.innerHTML = "";

  const date = birthdayDate1.value;

  if (!date) {
    result.innerHTML = "<p>Please enter a valid date</p>";
    return;
  }

  const dateArray = date.split("-");
  const day = dateArray[2];
  const month = dateArray[1];
  const year = dateArray[0];

  checkFormat("dd-mm-yyyy", day + month + year);
  checkFormat("mm-dd-yyyy", month + day + year);
  checkFormat("mm-dd-yy", month + day + year.slice(2));
}

function checkFormat(format, date) {
  console.log(date);

  let start = 0;
  let end = date.length - 1;

  while (start < end) {
    if (date[start] === "-") start++;
    if (date[end] === "-") end--;

    if (date[start] !== date[end]) {
      result.innerHTML += `<p>Result for ${format} format:  Not a palindrome</p>`;
      return;
    }

    start++;
    end--;
  }
  result.innerHTML += `<p>Result for ${format} format: Palindrome </p>`;
}
