function calculate(choice) {
  var num1 = parseFloat(document.getElementById("fnum").value);
  var num2 = parseFloat(document.getElementById("snum").value);

  var res;
  var choice;

  switch (choice) {
    case "1":
      res = num1 + num2;

      break; //addition

    case "2":
      res = num1 - num2;
      break; // sub

    case "3":
      res = num1 * num2;
      break; //multiply

    case "4":
      res = num1 / num2;
      break; // divide

    case "5":
      res = num1 % num2;
      break; // modulo

    default:
      break;
  }
  document.getElementById("result").value = res;
}
