import { LoadingModal } from "./style";
import { useState } from "react";
import logo from "../../assets/svg/logoProWorking 2.svg";

const Loading = () => {
  const interval = 1500
  const [showModal,setShowModal] = useState(true)

    setTimeout(() => {
        setShowModal(false)
    }, interval);

  return (

    <LoadingModal showModal={showModal} interval={interval}>
      <div>
        <img src={logo} alt="Loading" />
        
        <div className="grey-bar">
          <div className="blue-bar"></div>
        </div>
      </div>
    </LoadingModal>
  );
};
export default Loading;