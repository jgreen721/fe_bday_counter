import React from 'react'

const HappyBirthday = ({isBirthday}) => {
  return (
    <div className={isBirthday ? "birthday-card" : "birthday-card hide-birthday"}>
        <h2 className="bday-h2"><em>Happy</em> Birthday!! 🎂 🥳</h2>
    </div>
  )
}

export default HappyBirthday