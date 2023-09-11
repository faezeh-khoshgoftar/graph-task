import React from "react";
import { Modal } from "antd";
const _Modal = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <p>Username or Password is wrong</p>
      </Modal>
    </>
  );
};
export default _Modal;
