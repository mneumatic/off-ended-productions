import { loading } from "../utils/loading.js";

// const dashPanelToggles = document.querySelectorAll('.dash-panel-toggle')
// const dashContent = document.querySelectorAll('.dash-content')

const dashDialog = document.querySelector('.dashboard-dialog')
const dashDialogForms = document.querySelectorAll('.dashboard-dialog-form')
const dashDialogMsg = document.querySelectorAll('.dash-dialog-message')

// const dpMatches = document.querySelector('.dash-panel-matches');
// const searchFields = document.querySelectorAll('.dash-content');

const addForms = document.querySelectorAll('.add-form');

const summaryForms = document.querySelectorAll('.summary-wrapper form')
const deleteForms = document.querySelectorAll('.summary-wrapper .delete-form')

const spinners = document.querySelectorAll('.spinner')
const images = document.querySelectorAll('img')

spinners.forEach(spinner => {
  spinner.style.display = 'block';
})

const promises = Array.from(images).map(img => loading(img))
Promise.all(promises).then(() => {
  spinners.forEach(spinner => {
    spinner.style.display = 'none';
  })
})

addForms.forEach(form => {
  form.addEventListener('submit', (e) => {

  })
})

summaryForms.forEach(form => {
  form.addEventListener('submit', (e) => {
    const title = form.getAttribute('data-title')
    const confirmed = confirm(`Update ${ title }?`)
    if (!confirmed) {
      e.preventDefault();  // Prevent form submission if the user cancels
    }
  })
})

// Circumvents having to submission buttons in form.
function deleteItem (index, route, id, title) {
  deleteForms[index].action = `/admin/${ route }/delete/${ id }?_method=DELETE`
  const confirmed = confirm(`Delete ${ title }?`)
  if (confirmed) {
    deleteForms[index].submit()
  }
}

function openDialog(index, route, msg) {
  addForms[index].style.display = 'flex'
  addForms[index].action = `/admin/${ route }`
  dashDialogMsg[index].innerHTML = `${msg}`
  dashDialog.showModal()
}

function closeDialog() {
  dashDialogForms.forEach(form => { form.style.display = 'none' })
  dashDialog.close()
}
//
// function searchFunction(input, viewer) {
//   const items = searchFields[viewer].querySelectorAll(`.dash-content${data[viewer]}`);
//
//   let keywords = input.split(' ').filter(keyword => keyword !== "");
//   let numberOfMatches = 0;
//
//   for (let i = 0; i < items.length; i++) {
//     const title = items[i].getElementsByTagName('h3')[0]
//     let item = title.textContent || title.innerText;
//     let match = keywords.every(keyword => item.toUpperCase().includes(keyword));
//     if (match) {
//       items[i].style.display = "";
//       numberOfMatches++;
//     } else {
//       items[i].style.display = "none";
//     }
//   }
//   dpMatches.innerHTML = `${numberOfMatches} found!`;
// }
//
// function toggleInput(input) {
//   const element = document.getElementById(input);
//   element.classList.toggle('active');
//   element.nextElementSibling.classList.toggle('active');
// }
//
// function clearInput(input, items) {
//   document.getElementById(input).value = '';
//   items.forEach(item => {
//     item.style.display = "";
//   })
//   dpMatches.innerHTML = ""
// }
//
// dashPanelToggles.forEach((toggle, index) => {
//   toggle.addEventListener('click', () => { showContent(dashContent[index], index) })
// })
