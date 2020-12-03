import React, { FC, useEffect, useState } from 'react'
import { getMockData } from '../../api/mock'

const About: FC = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const getUserList = () => {
      getMockData({}).then(res => {
        console.log(res)
        setUserList(res.data.data);
        console.log(userList);
      })
    }
    getUserList()
  }, [])
  console.log('123')
  return (
    <div>About
      <ul>
        {userList.map((item: any, index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>
    </div>

  )
}

export default About;