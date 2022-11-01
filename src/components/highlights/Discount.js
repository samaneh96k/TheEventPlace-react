import React,{useState,useEffect} from 'react'
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from './../Utils/myButton';
const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);
  const porcentage = () => {
    if (start<end) {
      setStart(pervCount=>pervCount+1)
    }
  }
  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart(pervCount=>pervCount+1)
      },30)
    }
  },[start])
  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade onVisibilityChange={
          (inView) => {
            if (inView) {
              porcentage()
            }
          }}>
          <div className='discount_porcentage'>
            <span>{ start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
<div className='discount_description'>
            <h3>Purchase ticket before 20th Jan</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <MyButton text="Purchase Tickets" link="http://google.com" size='small' style={{ background: "#ffa800", color: '#fffff' }} iconTicket={true} />
          </div>
          
        </Slide>
      </div>
    </div>
  )
}

export default Discount