import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationComponent = () => {
  let navigate = useNavigate();

  const goToUserProfile = () => {
    navigate("/user-profile");
  };

  return <button onClick={goToUserProfile}>Go to User Profile</button>;
};

export default NavigationComponent;
