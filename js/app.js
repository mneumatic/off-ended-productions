(() => {
  Promise.all([
    import('./../js/components/navbar'),
    import('./../js/components/footbar')
  ]).then(() => {
    console.log('Web Components Loaded.')
  })
})()
