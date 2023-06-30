axios
  .get("https://649c26020480757192378cd2.mockapi.io/api/v1/Students")
  .then((response) => {
    let studentContainer = document.querySelector("section");
    studentContainer.classList.add("student-card");
    let h1 = document.getElementById("h1_user");
    response.data.forEach((student) => {
      let studentDiv = document.createElement("div");
      h1.innerHTML = student.userName;
      studentDiv.innerHTML = `
      <img src='${student.image}'>
      <div>
      <input value='${student.id}'></input>
      <h1 class='name'> Student Name: ${student.name}</h1>
      <h2 class='age'> Student age:${student.age}</h2>
      <h3 class='grade'> Student Grade: ${student.grade}</h3>
      <button onclick='del(this)'>Delete</button>
      </div>
      `;
      studentContainer.append(studentDiv);
    });
  })
  .catch((error) => {
    console.log(error);
  });
function AddStudent() {
  // let StudentNameValue = document.querySelector('#student_name')
  const NewStudents = {
    name: document.getElementById("student_name").value,
    age: document.getElementById("student_age").value,
    grade: document.getElementById("student_grade").value,
    image: document.getElementById("student_image").value,
    usersName: document.getElementById("h1_user").value,
  };
  axios
    .post(
      "https://649c26020480757192378cd2.mockapi.io/api/v1/Students",
      NewStudents
    )
    .then((response) => {
      alert("student aded");
    })
    .catch((error) => {
      console.log(error);
    });
}
function del(btn) {
  axios
    .delete(
      `https://649c26020480757192378cd2.mockapi.io/api/v1/Students/${btn.parentElement.children[0].value}`
    )
    .then((response) => {
      //   alert("delete");
    })
    .catch((error) => {
      alert(error);
    });
  btn.parentElement.parentElement.style.display = "none";
}
