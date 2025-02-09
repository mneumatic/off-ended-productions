function searchFunction(input, items) {
  let keywords = input.split(' ').filter(keyword => keyword !== "");

  for (let i = 0; i < items.length; i++) {
    const title = items[i].getElementsByTagName('h3')[0]
    let item = title.textContent || title.innerText;
    let match = keywords.every(keyword => item.toUpperCase().includes(keyword));
    if (match) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

function filters(toggle, section) {
    if (!event.target.checked) {
      section.style.display = "none";
    } else {
      section.style.display = "";
    }
}

// Resets Filters on Click of Search All input
function toggleFilters() {
  document.querySelectorAll('.switch input').forEach(checkbox => {
    checkbox.checked = true
  })

  document.querySelectorAll('#music-search-input, #local-events-search-input, #local-businesses-search-input').forEach(input => {
    input.value = ''
  })

  document.querySelectorAll('.music-event, .local-event, .local-business').forEach(item => {
    item.style.display = "";
  })

  document.getElementById('music').style.display = "";
  document.getElementById('local-events').style.display = "";
  document.getElementById('local-businesses').style.display = "";
}

function toggleInput(input) {
  const element = document.getElementById(input);
  element.classList.toggle('active');
  element.nextElementSibling.classList.toggle('active');
}

function showFilters(button) {
  button.classList.toggle('svg-transition-toggle');
  document.getElementById('filters').classList.toggle('active');
  if (!document.getElementById('filters').classList.contains('active')) {
    toggleFilters()
  }
}

function clearInput(input, items) {
  document.getElementById(input).value = '';
  items.forEach(item => {
    item.style.display = "";
  })
}

function confirmDelete(title) {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      const confirmation = confirm(`Do you really want to delete ${title}?`);
      if (!confirmation) {
        event.preventDefault();
      }
    })
  })
}
