function createTextBox() {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    document.body.appendChild(input);
}

function createRow() {
    var table = document.getElementById('gradesTable');
    let row = document.createElement('tr');

    const subject = document.createElement('input');
    const grades = document.createElement('input');
    const units = document.createElement('input');

    subject.setAttribute('type', 'text');
    subject.setAttribute('class', 'subject');

    grades.setAttribute('type', 'number');
    grades.setAttribute('class', 'grades');

    units.setAttribute('type', 'number');
    units.setAttribute('class', 'units');

    let subjCell = document.createElement('td');
    let gradesCell = document.createElement('td');
    let unitsCell = document.createElement('td');

    subjCell.append(subject);
    gradesCell.append(grades);
    unitsCell.append(units);

    row.append(subjCell);
    row.append(gradesCell);
    row.append(unitsCell);

    table.append(row);
}

function deleteRow() {
    document.getElementById('gradesTable').deleteRow(-1);
}

function computeGWA() {
    var gradesVals = [];
    var gradesElements = document.getElementsByClassName('grades');

    var unitsElements = document.getElementsByClassName('units');

    for (var i = 0; i < gradesElements.length; i++) {
        perGrade =
            gradesElements[i].valueAsNumber * unitsElements[i].valueAsNumber;
        gradesVals.push(perGrade);
    }

    totalUnits = 0;
    for (var k = 0; k < unitsElements.length; k++) {
        totalUnits = totalUnits + unitsElements[k].valueAsNumber;
    }

    total = 0;
    for (var j = 0; j < gradesVals.length; j++) {
        total = total + gradesVals[j];
    }

    gwa = total / totalUnits;

    document.getElementById('gwa').innerHTML = gwa.toFixed(2);

    // total grades =
}
