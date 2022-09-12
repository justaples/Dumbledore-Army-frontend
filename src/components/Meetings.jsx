import React, {useState, useEffect} from 'react'
import Meeting from './Meeting'

const Meetings = () => {
const [meetings, setMeetings] = useState([])

useEffect(() => {
    fetch('http://localhost:8000/meetings')
    .then(res => res.json())
    .then( items => setMeetings(items))
  }, [])
  console.log(meetings)

  return (
    <div>
        <div>
        <h1 className='title'>Meetings</h1>
        {meetings.length === 0 ? 'No meetings planned at the moments' : (meetings.map(meeting =>{
            return (<p>
                Date: {meeting.date}  {meeting.subject}</p>
            )
        }))

            }
            </div>
    </div>
  )
}

export default Meetings