// import React, {useEffect, useState} from 'react'
// import SpellView from './pages/SpellView'

// const MembersInSpells = ({member, index}) => {

//     const [check, setCheck] = useState(false)

//     useEffect(() => {
//       const localStorageToggled = localStorage.getItem("check");

//       if (localStorageToggled) {
//         setCheck(localStorageToggled === "true" ? true : false);
//       } else {
//         localStorage.setItem("check", `${check}`);
//       }
//     }, []);


//     const handleCheckMark = () =>{
//       localStorage.setItem('check', `${check}`)
//       setCheck(!check)
//     }

//     const [members, setMembers] = useState([])

//     useEffect(() => {
//     fetch('http://localhost:8000/members')
//     .then(res => res.json())
//     .then( items => setMembers(items))
//     }, [])

//   return (
//     <div>
//         <tr onClick={handleCheckMark}>
//         <td>{member.name}</td>
//         {check ? <td>&#10003;</td> : <td></td>}
//         </tr>
//     </div>
//   )
// }

// export default MembersInSpells