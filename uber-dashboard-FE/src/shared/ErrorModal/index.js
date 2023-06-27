import { useState } from "react";
import {Modal} from "antd";

export   const showModal = message => {
   console.log(message)
  };

const MyComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
  
 
  
    return (
      <>
        {/* Your component JSX */}
        {modalVisible && (
          <Modal onClose={() => setModalVisible(false)}>
            {modalMessage}
          </Modal>
        )}
      </>
    );
  };
  
  export default MyComponent;
