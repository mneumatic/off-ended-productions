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

function clearInput(input, items) {
  document.getElementById(input).value = '';
  items.forEach(item => {
    item.style.display = "";
  })
}
