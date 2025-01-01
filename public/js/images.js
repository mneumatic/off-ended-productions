const options = {
  root: null,
  threshold: 0.50,
  rootMargin: '0px'
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in view, do something
      const elements = entry.target.children
      let array = []

      if (elements.length > 2) {
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].tagName === 'IMG') {
            array.push(elements[i])
          } else {
            array.push(elements[i].querySelector('img'))
          }
        }
        showImages(array)
      } else {
        slideImage(elements[0])
      }

      // Optionally stop observing the element
      observer.unobserve(entry.target)
    }
  })
}

function showImages (element) {
  element[0].classList.add("show-image")

  setTimeout(function () {
    element[1].classList.add("show-image")
  }, 300);

  setTimeout(function () {
    element[2].classList.add("show-image")
  }, 600);
}

function slideImage (element) {
  element.classList.add("slide-in-image")
}

// const observer = new IntersectionObserver(handleIntersection, options);

// const podcastImages = document.querySelector("#podcast .img-container")
// const musicImages = document.querySelector("#music .img-container")

// const aboutImage1 = document.querySelector("#about .twojz")
// const aboutImage2 = document.querySelector("#about .mm")
// const aboutImage3 = document.querySelector("#about .mo")
//
// const PSImages = document.querySelector("#platinum-signatures .ps-images")
// const communityImages = document.querySelector("#community .community-images")

//observer.observe(podcastImages)
// observer.observe(musicImages)

// observer.observe(aboutImage1)
// observer.observe(aboutImage2)
// observer.observe(aboutImage3)
//
// observer.observe(PSImages)
// observer.observe(communityImages)

