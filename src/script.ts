function loadContent(url: string) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.text()
      }
      throw new Error(response.status.toString())
    })
    .then(text => {
      const node = document.querySelector('.btn-success')
      if (node) {
        node.textContent = text
      }
    })
    .catch(reason => {
      console.log('Failed to load, reason:' + reason)
    })
}