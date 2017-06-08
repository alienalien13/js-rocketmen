import "./styles.css"

function addText(comment, onOf) { //zadani informace do tabulky
   var text = prompt(comment),
      textToUpper;
   while (text.length < 1) {
      text = prompt("Nic není zadane. " + comment);
   }
   if (onOf) {
      textToUpper = text[0].toUpperCase() + text.substr(1, text.length);
      return textToUpper; //prvi symbol udelat velkym
   } else {
      return text;
   }
}
var textInCells = [textName, textSurname, textDoB, textSuper];
function addRow(id) { //tvoreni tabulky
   textName = addText("Napište jméno kosmonauta", true);
   textSurname = addText("Napište příjmení kosmonauta", true);
   textDoB = addText("Napište datum narození kosmonauta", false);
   textSuper = addText("Napište superschopnost kosmonauta", false);
   var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0],
      row = document.createElement("TR"),
      td1 = document.createElement("TD"),
      td2 = document.createElement("TD"),
      td3 = document.createElement("TD"),
      td4 = document.createElement("TD");
   td1.appendChild(document.createTextNode(textName));
   td2.appendChild(document.createTextNode(textSurname));
   td3.appendChild(document.createTextNode(textDoB));
   td4.appendChild(document.createTextNode(textSuper));
   row.appendChild(td1);
   row.appendChild(td2);
   row.appendChild(td3);
   row.appendChild(td4);
   td1.className = td2.className = td3.className = td4.className = "row";
   tbody.appendChild(row);
}