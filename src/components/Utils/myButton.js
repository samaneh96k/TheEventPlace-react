import React from 'react'
import Button from '@mui/material/Button';
import TicketIcon from '../../resources/images/icons/ticket.png'
const MyButton = (props) => {
  return (
      <Button href={props.link} variant="contained"
          size={props.size ? props.size : 'large'}
          style={{ background: "#BeBeBe", color: '#fffff', ...props.style }}>
          {
              props.iconTicket ?<img src={TicketIcon} className="iconImage"  alt="icon_button"/>: null}
          
          {props.text}  
          
    </Button>
  )
}

export default MyButton