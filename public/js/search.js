function searchFunction(input, items, tag) {
  let keywords = input.split(' ').filter(keyword => keyword !== "");

  for (let i = 0; i < items.length; i++) {
    const title = items[i].getElementsByTagName(tag)[0]
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
