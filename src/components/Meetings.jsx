import React, {useState, useEffect} from 'react'
import NewMeeting from './pages/NewMeeting'
import moment from 'moment'
import styled from 'styled-components'

const MeetingStyle = styled.div`

font-family: 'Kaushan Script', cursive;
.meeting{
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.circle{
  margin: auto;
  background: radial-gradient(#f3de65, #d0b100);
  border: 5px solid #DAA520;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Combo', cursive;
}

.date, .galleon, .subj{
  margin: 10px;
}

h3{
  color: #DAA520;
  text-shadow: 1px 1px #D2691E;
  font-size: 35px;
}
.date, .subj{
  font-weight: bold;
  color: #D2691E;
  opacity: 0.18;
  transition: 1s;
  font-size: 25px;
}

.subj{
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}

.date:hover, .subj:hover{
  text-shadow: 1px 1px #ce5f0f; 
  opacity: 1;
}
`

const Meetings = () => {
const [meetings, setMeetings] = useState([])

useEffect(() => {
    fetch('http://localhost:8000/meetings')
    .then(res => res.json())
    .then( items => setMeetings(items))
  }, [])

  const sortMeetings = [...meetings]
  sortMeetings.sort((a,b) => (a.date < b.date) ? 1 : -1)

  const todayFormat = moment(new Date(), 'YYYY-MM-DD').format();
  const today = todayFormat.split('T')[0]

  return (
    <MeetingStyle>
      <div>
      <h1 className='title'>Meetings</h1>
      <NewMeeting />
      {sortMeetings.length === 0 ? 'No meetings added' : (sortMeetings.map(meeting => {
        return meeting.date >= today ?
        (<div className="meeting">
          <div className="circle">
            <p className='date' >{meeting.date}</p>
            <h3 className='galleon'>Unum Galleon</h3>
            <p className="date subj">{meeting.subject}</p>
          </div>
        </div>)

        :
        
        (<p>
          <b>Past: </b>{meeting.date} - {meeting.subject}</p>)
          
        }))}
      </div>
    </MeetingStyle>
  )
}

export default Meetings