var rows = 3;
var cols = 4;
var currentCell;
var x = 1;
var y = 1;
function onPageLoad() {
    createTable();
    createButtons();
    var cell11 = document.getElementById(x + "," + y);
    currentCell = cell11;
    appyThickBorder();
}
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
            var id = r + "," + c
            cell.setAttribute('id', id);
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
    var btnUp = document.createElement('button');
    var btnUpText = document.createTextNode('UP');
    btnUp.appendChild(btnUpText);
    btnUp.onclick = function () {
        actionUP();
    }
    var btnDown = document.createElement('button');
    var btnDownText = document.createTextNode('Down');
    btnDown.appendChild(btnDownText);
    btnDown.onclick = function () {
        actionDOWN();
    }
    var btnRight = document.createElement('button');
    var btnRightText = document.createTextNode('Right');
    btnRight.appendChild(btnRightText);
    btnRight.onclick = function () {
        actionRIGHT();
    }
    var btnLeft = document.createElement('button');
    var btnLeftText = document.createTextNode('Left');
    btnLeft.appendChild(btnLeftText);
    btnLeft.onclick = function () {
        actionLEFT();
    }
    var btnMark = document.createElement('button');
    var btnMarkText = document.createTextNode('Mark');
    btnMark.appendChild(btnMarkText);
    btnMark.onclick = function () {
        actionMARK();
    }
    body.appendChild(btnUp);
    body.appendChild(btnDown);
    body.appendChild(btnRight);
    body.appendChild(btnLeft);
    body.appendChild(btnMark);
}
function actionUP() {
    if (x == 1) {
        return;
    } else {
        x = x - 1;
        appyThinBorder();
        currentCell = document.getElementById(x + "," + y);
        appyThickBorder();
    }
}
function actionDOWN() {
    if (x == 3) {
        return;
    } else {
        x = x + 1;
        appyThinBorder();
        currentCell = document.getElementById(x + "," + y);
        appyThickBorder();
    }
}
function actionRIGHT() {
    if (y == 4) {
        return;
    } else {
        y = y + 1;
        appyThinBorder();
        currentCell = document.getElementById(x + "," + y);
        appyThickBorder();
    }
}
function actionLEFT() {
    if (y == 1) {
        return;
    } else {
        y = y - 1;
        appyThinBorder();
        currentCell = document.getElementById(x + "," + y);
        appyThickBorder();
    }
}
function actionMARK() {
    for (var r = 1; r <= rows; r++) {
        for (var c = 1; c <= cols; c++) {
            var cell = document.getElementById(r + "," + c);
            cell.style.background = "white";
        }
    }
    currentCell = document.getElementById(x + "," + y);
    currentCell.style.background = "cyan";
}
function appyThinBorder() {
    currentCell.style.border = "solid thin black";
}
function appyThickBorder() {
    currentCell.style.border = "solid thick black";
}