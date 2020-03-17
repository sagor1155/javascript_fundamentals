
function validateForm(){
    var employeeId   = document.getElementById("employee_id").value;
    var employeeName = document.getElementById("employee_name").value;
    var district     = document.getElementById("district").value;
    var statusPermanent = document.getElementById("permanent").checked;
    var status = (statusPermanent==true) ? "permanent" : "temporary";
    var jobDescription = getJobDescription();

    if(employeeId != "" && employeeName != ""){
        createTable(employeeId, employeeName, status, jobDescription, district);
    }    
}

function getJobDescription(){
    var jobDescriptionUx  = document.getElementById("UX").checked;
    var jobDescriptionDev = document.getElementById("DEV").checked;
    var jobDescriptionDb  = document.getElementById("DB").checked;
    var jobDescription    = "";

    if(jobDescriptionUx){
        jobDescription = "UX";
    }else if(jobDescriptionDev){
        jobDescription = "DEV";
    }else if(jobDescriptionDb){
        jobDescription = "DB";
    }
    return jobDescription;
}

function createTable(id, name, status, jd, district) {
    var tabletd = undefined; 
    var tableData = undefined;
    var tableDataArray = [id, name, status, jd, district];

    var table = document.getElementById('table01');
    var tableBody = document.createElement('tbody');
    var tableRow  = document.createElement('tr');

    for(var index=0; index<tableDataArray.length; index++){
       tabletd = document.createElement('td');
       tableData = document.createTextNode(tableDataArray[index]);
       tabletd.appendChild(tableData);
       tableRow.appendChild(tabletd);
    }

    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);
}

