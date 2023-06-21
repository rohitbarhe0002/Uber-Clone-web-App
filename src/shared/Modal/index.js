import React from 'react'
import {Modal} from 'antd';
function ModalView({children,isModalOpen, setIsModalOpen}) {
  return (
<Modal onOk={()=>setIsModalOpen(!isModalOpen)} onCancel={()=>setIsModalOpen(!isModalOpen)} open={isModalOpen}>
 {children}
</Modal>
  )
}

export default ModalView;