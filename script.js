field = "";
function addToField(smt) {
  field += smt;
  console.log(field);
  document.getElementById("inp").value = field;
}

function equal() {
  document.getElementById("inp").value = eval(field.toString());
  field = eval(field.toString());
}

function clearField() {
  field = "";
  document.getElementById("inp").value = field;
}
