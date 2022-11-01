import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.7195397045!2d51.207572426827944!3d35.707492592581225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710d5918403%3A0x74f5290b67841378!2sMilad%20Tower!5e0!3m2!1sen!2sde!4v1667291881970!5m2!1sen!2sde"
        width="100%"
        height="500px"
        title="googleMap"
        allowfullscreen
        frameBorder={0}
      />
     
      <div className="location_tag">
        <div>Loction</div>
      </div>
    </div>
  );
};

export default Location;
