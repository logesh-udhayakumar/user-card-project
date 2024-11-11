import React from 'react'

const userData = [{
    name: "Stanely",
    location: "USA",
    role: "Full-stock Developer",
    skills:["UI/UX","CSS","Java Script","React","NodeJs","Postgre SQL"],
    profile: "/images/usercard/image1.jpg",
    online: false
},
{
    name: "Sunita Madwa",
    location: "Brazil",
    role: "Devops Developer",
    skills:["DevOps","AWS","Cloud Computing","Linux","Git","SQL"],
    online: true,
    profile: "/images/usercard/image2.jpg",
},
{
    name: "Mahee Dham",
    location: "Brazil",
    role: "Front-end Developer",
    skills:["UI/UX","CSS","Java Script","React","Figma","GIT"],
    profile: "/images/usercard/image3.jpg",
    online: false
}
]


function User(probs){
    return(
        <>
        <div className='card-container'>
            <span className={probs.online? "pro online" : "pro offline"}>{probs.online? "ONLINE" : "OFFLINE"}</span>
        <img src={probs.profile} alt='user' className='img'></img>
        <h3>{probs.name}</h3>
        <h3>{probs.location}</h3>
        <p>{probs.role}</p>
        <div className='action-buttons'>
            <button className='primary'>Message</button>
            <button className='primary outline'>Follow</button>
        </div>
        <div className='skills'>
            <h6>Skills</h6>
            <ul>
                {probs.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))
                }
            </ul>
        </div>
        </div>
        </>
    )
}

export const UserCard = () => {
  return (
       <>
       {userData.map((user,index)=>(
        <User key={index} name={user.name}
        location={user.location}
        role={user.role}
        skills={user.skills}
        profile={user.profile}
        online={user.online}/>
       ))}
       </>
  )
}
