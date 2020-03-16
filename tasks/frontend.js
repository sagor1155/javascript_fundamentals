
function validateForm(){
    var form = document.getElementById(form_id);
    var employeeID = document.form_id.employeeid.value;
    var employeeName = document.getElementById("employeename").value;
    var district = document.getElementById("district").value;
    var statusPermanent = document.getElementById("permanent").checked;
    var statusTemporary = document.getElementById("temporary").checked;
    var ux = document.getElementById("UX").checked;
    var dev = document.getElementById("DEV").checked;
    var db = document.getElementById("DB").checked;
    
    // createTable(employeeID, employeeName, statusPermanent);

    alert(  "Employee id: " + employeeID + "\n" + 
            "Employee Name: " + employeeName + "\n" + 
            "Employee District: " + district + "\n" + 
            "status permanent: " + statusPermanent + "\n" + 
            "status temporary: " + statusTemporary + "\n" +
            "job description ux: " + ux + "\n" + 
            "job description dev: " + dev + "\n" +
            "job description db: " + db + "\n");
}

function createTable(id, name, status) {
    var tbl = document.getElementById('table01');
    var tblbdy = document.createElement('tbody');

     var tblrw = document.createElement('tr');

       var tbltd = document.createElement('td');
       var tbldata = document.createTextNode(id);
       tbltd.appendChild(tbldata);
       tblrw.appendChild(tbltd);

       tbltd = document.createElement('td');
       tbldata = document.createTextNode(name);
       tbltd.appendChild(tbldata);
       tblrw.appendChild(tbltd);
       
       tbltd = document.createElement('td');
       tbldata = document.createTextNode(status);
       tbltd.appendChild(tbldata);
       tblrw.appendChild(tbltd);       
     

     tblbdy.appendChild(tblrw);
     tbl.appendChild(tblbdy);
}