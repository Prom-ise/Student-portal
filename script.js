var allStudents = [];

function submit() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (firstname === '' || lastname === '' || email === '' || password === '') {
        console.error('Incomplete form data');
        error.style.display = 'block'
        setTimeout(() => {
            error.style.display = 'none'
        }, 2000);

        // Handle error display
    } else {
        var studentObj = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        };

        allStudents.push(studentObj);

        console.log(allStudents);
        studentData();

        // Display success message
        sucMess.style.display = 'block';
        setTimeout(() => {
            sucMess.style.display = 'none';
        }, 1900);

        localStorage.setItem('allStudents')
        window.localStorage.href

        // Clear form fields
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
}

function studentData() {
    if (allStudents.length === 0) {
        showData.innerHTML = '';
        document.getElementById('showData').style.display = 'block';
        document.getElementById('theTable').style.display = 'table';
    }

    var tableContent =
        "<table id='theTable' border='1' class='table-bordered table-striped text-center container-fluid mx-auto col-lg-12 col-12 '><tr bgcolor='darkgrey'><th class='col-1'>S/N</th><th class='col-1'>Surname</th><th class='col-2'>Last Name</th><th class='col-4'>E-mail</th><th class='col-1'>Password</th><th class='col-3'>Action</th></tr>";

    for (let i = 0; i < allStudents.length; i++) {
        tableContent += `
          <tr bgcolor='lightgrey' background-color="black">
            <td>${i + 1}.</td>
            <td>${allStudents[i].firstname}</td>
            <td>${allStudents[i].lastname}</td>
            <td>${allStudents[i].email}</td>
            <td>${allStudents[i].password}</td>
            <td><button class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editItem(${i})">Edit</button>
            <button onclick="dele(${i})" class="btn btn-outline-danger">Delete</button></td>
          </tr>
        `;
    }

    tableContent += '</table>';
    showData.innerHTML = tableContent;
}

function dele(index) {
    allStudents.splice(index, 1);
    studentData();
}

function editItem(index) {
    currentIndex = index;
    document.getElementById("firstname").value = '';
    document.getElementById('lastname').value;
    document.getElementById('email').value;
    document.getElementById('password').value;
}

function saveEditedItem() {
  let editedfirstname = document.getElementById("editedfirstname").value;
  let editedlastname = document.getElementById("editedlastname").value;
  let editedemail = document.getElementById("editedemail").value;
  let editedpassword = document.getElementById("editedpassword").value;
  
  let why = document.getElementById("why"); // Assuming "why" is a global variable

  if (editedfirstname === '' || editedlastname === '' || editedemail === '' || editedpassword === '') {
    why.style.display = "block";
    return; // Return without saving if any field is empty
  }

  // Create an object with edited values
  let editedItem = {
    firstname: editedfirstname,
    lastname: editedlastname,
    email: editedemail,
    password: editedpassword
  };

  // Update the array with the edited item
  allStudents[currentIndex] = editedItem;

  why.style.display = "none";

  // Call your function to update the UI or perform any other necessary actions
  studentData();
}


  function studentData() {
    var tableContent = "<table id='theTable' border='1' class='table-bordered table-striped text-center container-fluid mx-auto col-lg-12 col-12 '><tr bgcolor='darkgrey'><th class='col-1'>S/N</th><th class='col-1'>Surname</th><th class='col-2'>Last Name</th><th class='col-4'>E-mail</th><th class='col-1'>Password</th><th class='col-3'>Action</th></tr>";
  
    for (let i = 0; i < allStudents.length; i++) {
      tableContent += `
        <tr bgcolor='lightgrey' background-color="black">
        <td>${i + 1}.</td>
        <td>${allStudents[i].firstname}</td>
        <td>${allStudents[i].lastname}</td>
        <td>${allStudents[i].email}</td>
        <td>${allStudents[i].password}</td>
          <td>
          <button class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#editModal" onclick="editItem(${i})">Edit</button>
            <button onclick="dele(${i})" class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
      `;
    }
  
    tableContent += "</table>";
    showData.innerHTML = tableContent;
  }