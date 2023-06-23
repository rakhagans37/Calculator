function insert(value) {
   let elForAdd = document.getElementById("operasi");
   elForAdd.textContent += value;
}

function clearText() {
   let deleteOp = document.getElementById("operasi");
   let deleteTotal = document.getElementById("hasil");
   deleteTotal.textContent = "";
   deleteOp.textContent = "";
}

function deleteOp() {
   let op = document.getElementById("operasi");
   console.log(op.textContent);
   console.log(op.textContent.length);
   op.textContent = op.textContent.substring(0, op.textContent.length - 1);
}

function hasil() {
   let elHasil = document.getElementById("hasil");
   let elOperasi = document.getElementById("operasi").textContent;
   elHasil.textContent = eval(elOperasi);
}
