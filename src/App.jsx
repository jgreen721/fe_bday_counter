import { useState, useRef } from 'react'
import {FormDiv,Button,Output,HappyBirthday} from "./components"
import Confetti from 'react-confetti'

import './App.css'
import moment from "moment"

function App() {
  const [years,setYears] = useState("- -")
  const [months,setMonths] = useState("- -")
  const [days,setDays] = useState("- -")
  const [errors,setErrors] = useState([false,false,false])
  const formRef = useRef()
  const [showConfetti,setShowConfetti] = useState(true)

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    let form = new FormData(formRef.current);
    let currMonth = new Date().getMonth() + 1;
    let currYear = new Date().getFullYear();
    let currDay = new Date().getDate();
    console.log(currMonth,currYear,currDay)

    let year = form.get('year') 
    let month = form.get('month') 
    let day = form.get('day') 

    //check for errors -- exit out if any
    let checkErrors = [false,false,false]
    if(!year || year > 2023 || year < 0 || isNaN(year))checkErrors[2] = true
    if(!month || month > 12 || month <= 0 || isNaN(month))checkErrors[1] = true
    if(!day || day > 31 || day <= 0 || isNaN(day))checkErrors[0] = true
    if(month == 2 && day > 28)checkErrors[0] = true

    setErrors(checkErrors);
    let isError = false;
    checkErrors.forEach(e=>{
      if(e)isError = true;
    })
    if(isError){
      setTimeout(()=>setErrors([false,false,false]),2000)
      return;
    }


    //success -- set state/check birthday
    console.log("SUCCESS")

    var present = moment([currYear, currMonth, currDay]);
    var user = moment([year, month, day]);
    
    var usersYears= present.diff(user, 'year');
    user.add(usersYears, 'years');
    
    var usersMonths = present.diff(user, 'months');
    user.add(usersMonths, 'months');
    
    var usersDays = present.diff(user, 'days');
    
    console.log(years + ' years ' + months + ' months ' + days + ' days');
    setYears(usersYears)
    setMonths(usersMonths)
    setDays(usersDays)

    if(usersDays == 0 && usersMonths == 0){
      setShowConfetti(true);
    }
    else{
      setShowConfetti(false);
    }


  }

  return (
    <div data-theme="light" className="app">
     
      {showConfetti &&
      <>
      <HappyBirthday isBirthday={showConfetti}/>
          <Confetti
      width={innerWidth}
      height={innerHeight}
    />
    </>}

        <main className="container">
          <form ref={formRef}  className="age-form">
            <div className="form-row">
            <FormDiv label="day" placeholder="DD" hasError={errors[0]} errorMsg="Must be valid day"/>
            <FormDiv label="month" placeholder="MM" hasError={errors[1]} errorMsg="Must be valid month"/>
            <FormDiv label="year" placeholder="YYYY" hasError={errors[2]} errorMsg="Must be in the past"/>
            </div>
            <div className="form-btn-row">
            <Button handlePress={handleFormSubmit}/>
            </div>
          </form>
          <section className="age-output-section">
            <div className="output-section-content">
            <Output value={years} label="years"/>
            <Output value={months} label="months"/>
            <Output value={days} label="days"/>
</div>
          </section>
<div className="svg-container">
  <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="93%" y1="24%" x2="7%" y2="76%"><stop offset="5%" stopColor="#abb8c3"></stop><stop offset="95%" stopColor="#9900ef"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,175 0,175 C 55.61021087680355,162.77743248242695 111.2204217536071,150.55486496485386 161,138 C 210.7795782463929,125.44513503514614 254.72852386237514,112.55797262301148 313,114 C 371.27147613762486,115.44202737698852 443.8654827968925,131.21324454310027 498,146 C 552.1345172031075,160.78675545689973 587.8095449500554,174.5890492045875 640,170 C 692.1904550499446,165.4109507954125 760.8963374028857,142.43055863854977 820,135 C 879.1036625971143,127.56944136145025 928.6051054384018,135.68871624121346 969,135 C 1009.3948945615982,134.31128375878654 1040.6832408435073,124.81457639659638 1100,132 C 1159.3167591564927,139.18542360340362 1246.6619311875695,163.05297817240103 1308,173 C 1369.3380688124305,182.94702182759897 1404.6690344062154,178.9735109137995 1440,175 C 1440,175 1440,700 1440,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="93%" y1="24%" x2="7%" y2="76%"><stop offset="5%" stopColor="#abb8c3"></stop><stop offset="95%" stopColor="#9900ef"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,350 0,350 C 45.34551732642743,338.6448637316562 90.69103465285485,327.2897274633124 145,326 C 199.30896534714515,324.7102725366876 262.58137871500804,333.4859538784067 322,321 C 381.41862128499196,308.5140461215933 436.98345048711303,274.7664570230608 494,292 C 551.016549512887,309.2335429769392 609.4848193365397,377.4482180293501 665,401 C 720.5151806634603,424.5517819706499 773.0772721667283,403.4406708595388 817,379 C 860.9227278332717,354.5593291404612 896.2060919965469,326.78909853249473 950,330 C 1003.7939080034531,333.21090146750527 1076.0983598470839,367.4029350104822 1132,365 C 1187.9016401529161,362.5970649895178 1227.4004686151188,323.59916142557654 1276,315 C 1324.5995313848812,306.40083857442346 1382.2997656924406,328.20041928721173 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="93%" y1="24%" x2="7%" y2="76%"><stop offset="5%" stopColor="#abb8c3"></stop><stop offset="95%" stopColor="#9900ef"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,525 0,525 C 45.86785053644098,520.7724996917005 91.73570107288197,516.5449993834011 149,524 C 206.26429892711803,531.4550006165989 274.92504624491306,550.5925021580961 339,558 C 403.07495375508694,565.4074978419039 462.5641139474658,561.084991984215 505,564 C 547.4358860525342,566.915008015785 572.8184979652237,577.0675299050439 613,572 C 653.1815020347763,566.9324700949561 708.1618941916388,546.6448883956098 778,540 C 847.8381058083612,533.3551116043902 932.5339252682206,540.3529165125169 984,524 C 1035.4660747317794,507.6470834874831 1053.7024047354791,467.9434455543224 1096,472 C 1138.2975952645209,476.0565544456776 1204.656455789863,523.8733012701936 1266,540 C 1327.343544210137,556.1266987298064 1383.6717721050686,540.5633493649032 1440,525 C 1440,525 1440,700 1440,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
</div>
        </main>

    </div>
  )
}

export default App
