export function getEntry(params) {
  const from = `http://127.0.0.1:8000/api/v1/entry/${params}/`
  return (
    fetch(from).then(resp => {
      return (
        resp.json().then(data => data)
      )
    })
  )
}


export function getEntries() {
  const from = `http://127.0.0.1:8000/api/v1/entries/`
  return (
    fetch(from).then(resp => {
      return (
        resp.json().then(data => data)
      )
    })
  )
}
