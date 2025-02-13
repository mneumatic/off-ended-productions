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

function toggleInput(input) {
  const element = document.getElementById(input);
  element.classList.toggle('active');
  element.nextElementSibling.classList.toggle('active');
}

function clearInput(input, items) {
  document.getElementById(input).value = '';
  items.forEach(item => {
    item.style.display = "";
  })
}
