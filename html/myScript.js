var rows = 3;
var cols = 4;
function createTable() {
    var body = document.getElementsByTagName("body")[0];
   
    var table = document.createElement('table');
    //Creating header Row
    var header = document.createElement('tr');
    for (var c = 1; c <= cols; c++) {
        var headerCell = document.createElement('th');
        var cellText = document.createTextNode("Header " + c);
        headerCell.appendChild(cellText);
        header.appendChild(headerCell);
    }
    table.appendChild(header);
    table.setAttribute('border', '1');
    //Creating data Row
    for (var r = 1; r <= rows; r++) {
        var row = document.createElement('tr');
        for (var c = 1; c <= cols; c++) {
            var cell = document.createElement('td');
            var cellText = document.createTextNode(r + "," + c);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    body.appendChild(table);
}
function createButtons() {
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(document.createElement('br'));
    var btnUp= document.createElement('button');
    var btnUpText = document.createTextNode('UP');
    btnUp.appendChild(btnUpText);
    var btnDown= document.createElement('button');
    var btnDownText = document.createTextNode('Down');
    btnDown.appendChild(btnDownText);
    var btnRight= document.createElement('button');
    var btnRightText = document.createTextNode('Right');
    btnRight.appendChild(btnRightText);
    var btnLeft= document.createElement('button');
    var btnLeftText = document.createTextNode('Left');
    btnLeft.appendChild(btnLeftText);
    var btnMark= document.createElement('button');
    var btnMarkText = document.createTextNode('Mark');
    btnMark.appendChild(btnMarkText);
    body.appendChild(btnUp);
    body.appendChild(btnDown);
    body.appendChild(btnRight);
    body.appendChild(btnLeft);
    body.appendChild(btnMark);
 }
createTable();
createButtons();