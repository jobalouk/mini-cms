import React, {useEffect, useState} from 'react'
import {getEntry} from './requests'


 function Entry({match}) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData(setData, match.params.slug)
  }, [match.params.slug])

  if (!data) {
    return null
  }

  return (
    <article>
      <h1 className="title">{data.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.content}}/>
    </article>
  )
}

export default Entry

async function fetchData(setData, params) {
  let data = await getEntry(params)
  setData(data)
}
