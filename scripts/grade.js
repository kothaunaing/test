import { currentStudents } from '../scripts/students.js';

displayStudents();

function displayStudents() {
  const appDisplayElement = document.querySelector('.app-display');
  let studentsHTML = '';
  const grade = currentStudents[0].grade;

  currentStudents.forEach((student, index) => {
    const { name, age, image, grade } = student;

    studentsHTML += `
    <div class="student">
      <div class="number">${index + 1}</div>
      <div>
        <img src="images/${image}" class="student-pic">
      </div>
      <div class="student-info">
       <div>${name}</div>
        <div>${age} years old</div>
      </div>
    </div>
    `;
  });
  document.title = grade;
  appDisplayElement.innerHTML = `
  <div class="nav-bar">
  <a href="index.html">
    <button class="grade-back-btn">
      <img class="back-icon" src="images/back-icon.png">
    </button>
  </a>
    <div class="grade-text">${grade}</div>
    <div class="total-student">Total - ${currentStudents.length} students</div>
  </div>
  <div class="display-students">
    ${studentsHTML}
  </div>
  `;
}