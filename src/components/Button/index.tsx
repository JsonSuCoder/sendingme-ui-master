// 
import { SdButton } from "sendingme-ui"
import React from "react"
import "./index.scss"
const ButtonComponent = () => {
    return (
        <>
            <div className="button-line">
                <label>尺寸</label>
                <div className="button-layout-content">
                    <div className="button-list">
                        <SdButton type="primary" size="small">主要按钮</SdButton>
                        <span className="button-name">small</span>
                    </div>
                    <div className="button-list">
                        <SdButton type="primary">主要按钮</SdButton>
                        <span className="button-name">middle</span>
                    </div>
                    <div className="button-list">
                        <SdButton type="primary" size="large">主要按钮</SdButton>
                        <span className="button-name">large</span>
                    </div>
                </div>
            </div>
            <div className="button-line">
                <label>禁止点击</label>
                <div className="button-layout-content">
                    <div className="button-list">
                        <SdButton type="primary" disabled={true}>主要按钮</SdButton>
                        <span className="button-name">disabled</span>
                    </div>
                </div>
            </div>
            <div className="button-line">
                <label>线框按钮</label>
                <div className="button-layout-content">
                    <div className="button-list">
                        <SdButton type="default">default</SdButton>
                    </div>
                </div>
            </div>
            <div className="button-line">
                <label>图标</label>
                <div className="button-layout-content">
                    <div className="button-list">
                        <SdButton type="default" icon="MessageOutlined">default</SdButton>
                    </div>
                    <div className="button-list">
                        <SdButton type="default" icon="MessageOutlined"></SdButton>
                    </div>
                </div>
            </div>
            <div className="button-line">
                <label>语意</label>
                <div className="button-layout-content">
                    <div className="button-list">
                        <SdButton type="success">success</SdButton>
                    </div>
                    <div className="button-list">
                        <SdButton type="warning">warning</SdButton>
                    </div>
                    <div className="button-list">
                        <SdButton type="danger">danger</SdButton>
                    </div>
                    <div className="button-list">
                        <SdButton type="associate">辅助按钮</SdButton>
                    </div>
                </div>
            </div>
            <div className="button-line">
                <label>loading</label>
                <div className="button-layout-content">
                    <div className="button-list">
                        <SdButton type="primary" loading={true}>加载中</SdButton>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ButtonComponent;