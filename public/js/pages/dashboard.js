const dashPanelToggles = document.querySelectorAll('.dash-panel-toggle')
const dashContent = document.querySelectorAll('.dash-content')
const dashDialog = document.querySelector('.dashboard-dialog')
const dashDialogForms = document.querySelectorAll('.dashboard-dialog-form')
const dashDialogMsg = document.querySelectorAll('.dash-dialog-message')
const dpMatches = document.querySelector('.dash-panel-matches');
const searchFields = document.querySelectorAll('.dash-content');

const data = [
  '-music-event',
  '-local-event',
  '-local-business'
]
//
// if (localStorage.getItem('open-viewer')) {
//   const index = localStorage.getItem('open-viewer')
//   dashContent[index].classList.add('show')
// } else {
//   localStorage.setItem('open-viewer', '0')
//   dashContent[0].classList.add('show')
// }
//
// function showContent (content, index) {
//   const current = document.querySelector('.dash-content.show')
//   if (current === dashContent[index]) {
//     return // Do nothing
//   } else {
//     current.classList.add('dash-content-slide-out')
//
//     dpMatches.innerHTML = ""
//
//     setTimeout(() => {
//       current.classList.remove('show')
//       current.classList.remove('dash-content-slide-out')
//     }, 1000)
//   }
//   localStorage.setItem('open-viewer', index)
//   content.classList.add('show')
// }
//
function openDialog(index, action, title) {
  dashDialogForms[index].style.display = 'flex'
  dashDialogForms[index].action = action
  dashDialogMsg[index].innerHTML = `Delete ${title}?`
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
