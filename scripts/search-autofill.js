const autofillElement = document.querySelector('.autofill-container');
const nameContainerElement = document.querySelector('.name-container');
const bodyElement = document.querySelector('.app-display');


searchBarElement.addEventListener('input', () => {
  showAutofill();
});

searchBarElement.addEventListener('click', () => {
  autofillElement.classList.add('autofill-active');
  searchBarElement.select();
  showAutofill();
});


bodyElement.addEventListener('click', () => {
  autofillElement.classList.remove('autofill-active');
});

searchBtnElement.addEventListener('click', () => {
  searchStudents();
  displayFoundStudents();
  autofillElement.classList.remove('autofill-active');
});



searchBarElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const nameElement = document.querySelector('.name');
    searchBarElement.value = nameElement.innerHTML;
    showAutofill();
    searchStudents();
    displayFoundStudents();
    autofillElement.classList.remove('autofill-active');
  }
});


function showAutofill() {
  const searchBy = searchBySelectElement.value;
  const value = searchBarElement.value;


  let autofillArray = [];

  if (searchBy === 'By keyword') {
    autofillElement.classList.add('autofill-active');
    allStudents.filter((student) => {
      const keywords = student.keyword;
      keywords.forEach((keyword) => {
        let matchingName = false;


        if (keyword.toLowerCase().includes(value)) {
          if (autofillArray.length < 30) {

            autofillArray.forEach((names) => {
              if (names === keyword) {
                matchingName = true;
              }
            });
          }
          if (keyword) {
            if (!matchingName) {
              autofillArray.push(keyword);
            }
          }
        }
      })
    });
  }
  else if (searchBy === 'By name') {
    autofillElement.classList.add('autofill-active');

    allStudents.filter((student) => {
      const name = student.name;
      let matchingName = false;
      if (value) {
        if (name.toLowerCase().includes(value)) {
          if (autofillArray.length < 30) {
            autofillArray.forEach((names) => {
              if (names === name) {
                matchingName = true;
              }
            });
            if (!matchingName) {
              autofillArray.push(name);
            }
          }
        }
      }  else {
        autofillArray.push(name);
      }

    });
  }
  else if (searchBy === 'By grade') {
    autofillArray = [
      'KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
      'Grade 7', 'Grade 8', 'Grade 9'
    ];
  }
  else if (searchBy === 'By age') {
    autofillArray = [
      '4', '5', '6', '7', '8', '9', '10',
      '11', '12', '13', '14', '15', '16'
    ];
  }
  else {
    autofillElement.classList.remove('autofill-active');
  }

  let finalHTML = '';
  autofillArray.sort();

  autofillArray.forEach((keyword, i) => {
    finalHTML += `
    <div class="name">${keyword}</div>
    `;
  });

  if (autofillArray.length !== 0) {
    nameContainerElement.innerHTML = finalHTML;
  } else {
    nameContainerElement.innerHTML = `
    <p>No Suggestions !</p>
    `;
  }

  if (autofillArray.length > 6) {
    nameContainerElement.classList.add('name-container-height');
  } else {
    nameContainerElement.classList.remove('name-container-height');
  }

  const nameElement = document.querySelectorAll('.name');
  nameElement.forEach((name) => {
    name.addEventListener('click', () => {
      searchBarElement.value = name.innerHTML;
      showAutofill();
      searchStudents();
      displayFoundStudents();
      autofillElement.classList.remove('autofill-active');
    })
  });
}

