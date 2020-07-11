import React, {useEffect, useState} from 'react'
import {getEntries} from './requests'
import moment from 'moment'
import {Link} from 'react-router-dom'


export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <>
      <ul className="list-unstyled">
      {data ? data.map(x => {
        return (
          <li className="list-unstyled">
            <h2 className="excerpt-title">
              <Link to={x.slug}>
                {x.title}
              </Link>
            </h2>
            <p className="date">
              {moment(x.date_created).format("dddd D MMMM YYYY")}
            </p>
            <div className="excerpt-wrapper">
              <div className="excerpt-content" dangerouslySetInnerHTML={{__html: x.excerpt}} />
            </div>
          </li>
        )
      }) : (
        <li>
          Loading
        </li>
      )}
      </ul>
    </>
  )
}

async function fetchData(setData) {
  let data = await getEntries()
  setData(data)
}
