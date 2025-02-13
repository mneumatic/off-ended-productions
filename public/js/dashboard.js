const dashPanelToggles = document.querySelectorAll('.dash-panel-toggle')
const dashContent = document.querySelectorAll('.dash-content')
const dashDialog = document.querySelector('.dash-dialog')
const dashDialogForms = document.querySelectorAll('.dash-dialog-form')
const dashDialogMsg = document.querySelectorAll('.dash-dialog-message')

if (localStorage.getItem('open-viewer')) {
  const index = localStorage.getItem('open-viewer')
  dashContent[index].classList.add('slide-element')
} else {
  localStorage.setItem('open-viewer', '0')
  dashContent[0].classList.add('slide-element')
}

function showContent (content, index) {
  const current = document.querySelector('.dash-content.slide-element')
  if (current === dashContent[index]) {
    return // Do nothing
  } else {
    current.classList.add('dash-content-slide-out')

    setTimeout(() => {
      current.classList.remove('slide-element')
      current.classList.remove('dash-content-slide-out')
    }, 1000)
  }
  localStorage.setItem('open-viewer', index)
  content.classList.add('slide-element')
}

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

dashPanelToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => { showContent(dashContent[index], index) })
})
