import { SdIcon } from "sendingme-ui"
import React from "react";
import "./index.scss";
import OmsViewMarkdown from "../../OmsViewMarkdown";
import markdownText from "./icon.md";
const IconComponent = () => {
    const IconArray = [
        "MessageOutlined",
        "ThemeOutlines",
        "HandsOutlines",
        "NetworkOutlines",
        "PhoneOutlines",
        "PreferOutlines",
        "ProfileOutlines",
        "QuestionOutlines",
        "SecurityOutlines",
        "SocialOutlines",
        "ProtectionOutlines",
        "CloseOutlines",
        "DeleteOutLines",
        "ExitOutlines",
        "InterfaceOutlines",
        "PinmoreOutlines",
        "PointsOutlines",
        "SettingOutlines",
        "SortOutlines",
        "StickersOutlines",
        "UsermoreOutlines",
        "VideoOutlines",
        "AdduserOutlines",
        "HomeOutlines",
        "AddOutlines",
        "MembersOutlines",
        "ChatmoreOutlines",
        "ClockOutlines",
        "MuteOutlines",
        "NoticeOutlines",
        "PlanetOutlines",
        "SmileOutlines",
        "SearchOutlines",
        "FavOutlines",
        "ReplyOutlines",
        "SaveOutlines",
        "SelectOutlines",
        "VioceOutlines",
        "UnpinOutlines",
        "SendOutlines",
        "PinOutlines",
        "EmojiOutlines",
        "CodeOutlines",
        "GroupmembersOutlines",
        "ModeOutlines",
        "MoreOutlines",
        "BackOutlines",
        "InviteOutlines",
        "RightOutlines"
    ];
    const handleClick = () => {
        alert(111)
    }
    return (
        <div className="Icon-container">
            <div className="icon-list">
                {IconArray.map((item, index) => {
                    return (
                        <div className="icon-list-item" key={index}>
                            <SdIcon icon={item} onClick={handleClick} ></SdIcon>
                            <span className="icon-name">{item}</span>
                        </div>
                    )
                })}
            </div>
            <OmsViewMarkdown textContent={markdownText} darkMode />
        </div>
    )
}
export default IconComponent;