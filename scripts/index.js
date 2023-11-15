import {
  allStudents, calCurrentStudent, saveToStorage
} from '../scripts/students.js';

homePageHTML();

function homePageHTML() {
  const appDisplayElement = document.querySelector('.app-display');

  let finalHTML = '';

  for (let i = 0; i < 9; i++) {
    finalHTML += `
    <a href="grade.html">
      <div class="grade" data-grade="grade${i + 1}">
        Grade ${i + 1}
      </div>
    </a> 
    `;
  }

  appDisplayElement.innerHTML = `
  <div class="total">
    Total - ${allStudents.length} students
  </div>
  <div class="container">
  <a href="grade.html">
    <div class="grade" data-grade="kg">
      KG
    </div>
  </a>
    ${finalHTML}
  </div>
  `;
}

document.querySelectorAll('.grade')
  .forEach((gradeElement) => {
    gradeElement.addEventListener('click', () => {
      const grade = gradeElement.innerText;
      calCurrentStudent(grade);
      saveToStorage();
    });
  })


