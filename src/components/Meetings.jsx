import React, {useState, useEffect} from 'react'
import NewMeeting from './pages/NewMeeting'
// import Meeting from './Meeting'
import moment from 'moment'
import styled from 'styled-components'

const MeetingStyle = styled.div`


  .circle{
    margin: auto;
    background-color: #ffc800;
    border: 5px solid orange;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    text-align: center;
    display: flex;
  }

  .meeting{
    /* border: 2px solid red; */
  }
  .date{
    margin: auto;
    /* border: 2px solid red; */
  }
`

const Meetings = () => {
const [meetings, setMeetings] = useState([])

useEffect(() => {
    fetch('http://localhost:8000/meetings')
    .then(res => res.json())
    .then( items => setMeetings(items))
  }, [])
  console.log(meetings)

  const sortMeetings = [...meetings]
  sortMeetings.sort((a,b) => (a.date < b.date) ? 1 : -1)

  console.log(sortMeetings)

  const todayFormat = moment(new Date(), 'YYYY-MM-DD').format();
  const today = todayFormat.split('T')[0]
  // console.log(today)

  return (
    <MeetingStyle>
        <div>
        <h1 className='title'>Meetings</h1>
        <NewMeeting />
        {sortMeetings.length === 0 ? 'No meetings added' : (sortMeetings.map(meeting => {
          return meeting.date >= today ?
          (
            <div className="meeting">
            <div className="circle">
              <p className='date' >{meeting.date}</p>
            </div>
              <div className="bottom">{meeting.subject}</div>
            </div>
          )



          // (
          //   <div className='coin'>
          //     <div className='front jump'>
          //       <div className='star'></div>
          //       <span className='currency'>D.A.</span>
          //       <div className='shapes'>
          //         <div className='shape_l'></div>
          //         <div className='shape_r'></div>
          //         <span className='top'>{meeting.date}</span>
          //         <span className='bottom'>{meeting.date}</span>
          //       </div>
          //     </div>
          //     <div className='shadow'></div>
          //   </div>
          //   )




          // (<h1>
          // {/* today or later */}
          // Upcoming Meetings: {meeting.date} - {meeting.subject}</h1> )
          
          :

          (<p>
            {/* past  */}
            <b>Past: </b>{meeting.date} - {meeting.subject}</p>)
        }
        


          ))}
        
        
            </div>

    </MeetingStyle>
  )
}

export default Meetings