const dashDialog = document.querySelector('.dashboard-dialog')
const dashDialogForm = document.querySelector('.dashboard-dialog form')
const dashDialogMsg = document.querySelector('.dashboard-dialog form h3')
const addForms = document.querySelectorAll('.dashboard-dialog form');
const summaryForms = document.querySelectorAll('.summary-wrapper form')
const deleteForms = document.querySelectorAll('.summary-wrapper .delete-form')
const updateImage = document.querySelector('.dashboard-dialog form .form-img-wrapper-src')
const detailsElements = document.querySelectorAll('details')
const summariesElements = document.querySelectorAll('details summary')

if (!localStorage.getItem('details-states')) {
  const arr = []
  summariesElements.forEach(detail => {
    arr.push(true)
  })
  localStorage.setItem('details-states', JSON.stringify(arr))
}

loadDetailStates()

function saveDetailStates(value) {
    const states = JSON.parse(localStorage.getItem('details-states'))
    states[value] = Boolean(!states[value])
    const arr = JSON.parse(localStorage.getItem('details-states'))
    arr[value] = states[value]
    localStorage.setItem('details-states', JSON.stringify(arr))
}

summariesElements.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    saveDetailStates(index)
  })
})

function loadDetailStates() {
  const states = JSON.parse(localStorage.getItem('details-states'))
  detailsElements.forEach((detail, index) => {
    detail.open = states[index]
    console.log(detail.open)
  })
}

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
  if (route === 'businesses') {
    const form = document.querySelector('.dashboard-dialog form')
    const inputs = form.querySelectorAll('input')

    inputs.forEach((input, index) => {
      input.setAttribute('name', `${businessValues[index]}`)
    })
    form.querySelector('textarea').setAttribute('name', `business[description]`)
    form.querySelector('.form-change').innerText = 'Phone:'
  }
  addForms[index].style.display = 'flex'
  addForms[index].action = `/admin/${ route }`
  dashDialogMsg.innerText = `${msg}`
  dashDialog.showModal()
}

function closeDialog() {
  // dashDialogForm.style.display = 'none'
  const inputs = dashDialogForm.querySelectorAll('input')
  inputs.forEach(input => {
    input.value = ''
  })
  const textarea = dashDialogForm.querySelector('textarea')
  textarea.value = ''
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

updateImage.addEventListener('change', (e) => {
  const image = document.querySelector('.dashboard-dialog form .form-img-wrapper img')
  if (image.src === "") {
    image.classList.remove('show')
  } else {
    image.src = updateImage.value
    image.classList.add('show')
  }
})
