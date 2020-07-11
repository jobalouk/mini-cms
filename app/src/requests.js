export function getEntry(params) {
  const from = `https://claurian.herokuapp.com/api/v1/entry/${params}/`
  return (
    fetch(from).then(resp => {
      return (
        resp.json().then(data => data)
      )
    })
  )
}


export function getEntries() {
  const from = `https://claurian.herokuapp.com/api/v1/entries/`
  return (
    fetch(from).then(resp => {
      return (
        resp.json().then(data => data)
      )
    })
  )
}
