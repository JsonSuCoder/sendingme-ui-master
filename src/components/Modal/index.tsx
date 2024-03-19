import React, { useState } from "react"
import { SdButton, SdModal } from "sendingme-ui";
import markdownText from "./modal.md";
import OmsViewMarkdown from "../../OmsViewMarkdown";
const ModalComponent: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleCancel = () => {
        setOpen(false)
    }
    const openModal = () => {
        setOpen(true)
    }
    const createDialog = () => {
        SdModal.createDialog({
            title: "111",
            children: <span>wewewe</span>,
            closable: true,
            onCancel: () => {
                console.log("cancel")
            },
            showCancel: false,
            onOk: (close) => {
                console.log("ok");
                close?.();
            }
        })
    }
    return (
        <>
            <h1>Modal对话框</h1>
            <h3>open modal</h3>
            <SdButton onClick={openModal}>Open Modal</SdButton>
            <SdButton onClick={createDialog}>create Modal</SdButton>
            <SdModal title="测试弹窗" open={open} width={400} closable={false} onCancel={handleCancel} >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </SdModal>
            <OmsViewMarkdown textContent={markdownText} darkMode/>
        </>
    )
}
export default ModalComponent;