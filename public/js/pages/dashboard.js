const dashDialog = document.querySelector('.dashboard-dialog')
const dashDialogForms = document.querySelectorAll('.dashboard-dialog-form')
const dashDialogMsg = document.querySelector('.dialog-msg')
const addForms = document.querySelectorAll('.dashboard-dialog-form');
const summaryForms = document.querySelectorAll('.summary-wrapper form')
const deleteForms = document.querySelectorAll('.summary-wrapper .delete-form')


addForms.forEach(form => {
  form.addEventListener('submit', (e) => {

  })
})

summaryForms.forEach(form => {
  form.addEventListener('submit', (e) => {
    const title = form.getAttribute('data-title')
    const confirmed = confirm(`Update ${ title }?`)
    if (!confirmed) {
      e.preventDefault();
    }
  })
})

// Circumvents having to submission buttons in form.
function deleteItem(index, route, id, title) {
  deleteForms[index].action = `/admin/${ route }/delete/${ id }?_method=DELETE`
  const confirmed = confirm(`Delete ${ title }?`)
  if (confirmed) {
    deleteForms[index].submit()
  }
}

const businessValues = [
  'business[imagePath]',
  'business[title]',
  'business[hours]',
  'business[location]',
  'business[phone]'
]
function openDialog(index, route, msg) {
  if (route === 'business') {
    const form = document.querySelector('.dashboard-dialog-form')
    const inputs = form.querySelectorAll('input')

    inputs.forEach((input, index) => {
      input.setAttribute('name', `${businessValues[index]}`)
    })
    form.querySelector('textarea').setAttribute('name', `business[description]`)
    form.querySelector('strong').innerText = 'Phone:'
  }
  addForms[index].style.display = 'flex'
  addForms[index].action = `/admin/${ route }`
  dashDialogMsg.innerText = `${msg}`
  dashDialog.showModal()
}

function closeDialog() {
  dashDialogForms.forEach(form => { form.style.display = 'none' })
  dashDialog.close()
}

function search(input, items) {
  let keywords = input.split(' ').filter(keyword => keyword !== "");

  for (let i = 0; i < items.length; i++) {
    const title = items[i].getElementsByTagName('h3')[0]
    let item = title.textContent || title.innerText;
    let match = keywords.every(keyword => item.toUpperCase().includes(keyword));
    if (match) {
      console.log(item[i])
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

function clearInput(input, items) {
  document.getElementById(input).value = '';
  items.forEach(item => {
    item.style.display = "";
  })
}


