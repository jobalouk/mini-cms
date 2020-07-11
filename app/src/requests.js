export function getEntry(params) {
  const url = `https://claurian.herokuapp.com/api/v1/entry/${params}/`
  // const url = `http://localhost:8000/api/v1/entry/${params}/`
  return (
    fetch(url).then(resp => {
      return (
        resp.json().then(data => data)
      )
    })
  )
}


export function getEntries() {
  const url = `https://claurian.herokuapp.com/api/v1/entries/`
  // const url = `http://localhost:8000/api/v1/entries/`
  return (
    fetch(url).then(resp => {
      return (
        resp.json().then(data => data)
      )
    })
  )
}


export function request(url, params) {
  if (params) {
    url += params
  }

  return (
    fetch(url).then(resp => {
      return (
        resp.json().then(data => data)
      )
    })
  )
}


export async function fetchData(action, url, params) {
  const data = await request(url, params)
  action(data)
}
