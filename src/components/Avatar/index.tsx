import { SdAvatar } from "sendingme-ui"
import React from "react";
import "./index.scss";
const IconComponent = () => {
    const IconArray = ["RightOutlined"];
    return (
        <div className="avatar-container">
            <div className="avatar-line">小</div>
            <SdAvatar avatars={[{url:"https://storage.googleapis.com/linx-sdn/image/1704176107903-3020.png",name:"mandy"}]}
                size="large"
            />
        </div>
    )
}
export default IconComponent;