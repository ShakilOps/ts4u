import { Modal } from "antd";

export default function ModalLayout({isModalOpen,handleOk,handleCancel,children}) {
  return (
    <Modal title="Basic User Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
   {children}
  </Modal>
  )

}
