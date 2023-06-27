import {Modal} from "antd";
const ErrorModal = ({errorMesage,isOpen,setIsOpen}) => {
    return (
      <>
          <Modal style={{width:'200px'}} onClose={()=>setIsOpen(!isOpen)} onCancel={()=>setIsOpen(!isOpen)} footer={null} open={isOpen}>
           <p style={styles.showErrorMessage} >{errorMesage}</p>
          </Modal>
        )
      </>
    );
  };
  
    const styles = {
     showErrorMessage: {
       display:'flex',
       justifyContent: 'center',
       alignItems: 'center',
        color:'red',
        height:118,
        fontSize:20,
        fontWeight:'500'
    }
  
  }
  export default ErrorModal;


