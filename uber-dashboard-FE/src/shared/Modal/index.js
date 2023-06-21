import React from 'react'
import { Card, Form, Button, Modal, Input } from 'antd';
function ModalView({children,isModalOpen, setIsModalOpen}) {
  return (
<Modal onOk={()=>setIsModalOpen(!isModalOpen)} onCancel={()=>setIsModalOpen(!isModalOpen)} open={isModalOpen}>
 {children}
</Modal>
  )
}

export default ModalView;