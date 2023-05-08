import React from 'react'

const HappyBirthday = ({years,isBirthday}) => {
  return (
    <div className={isBirthday ? "birthday-card" : "birthday-card hide-birthday"}>
      <h3>{years} years old!? Wow!🙌</h3>
        <h2 className="bday-h2"><em>Happy</em> Birthday!! 🎂 🥳</h2>
    </div>
  )
}

export default HappyBirthday