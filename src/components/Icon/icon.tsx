import React from "react";
import * as SdSvgIcon from "./icon-types";
import classNames from "classnames";
import "./icon.scss";
export interface IconProps {
    icon: string;
    className?: string;
    style?: React.CSSProperties;
    color?: string; // only for two-tone
}

const SdIcon: React.FC<IconProps> = (props) => {
    const { icon, className, style, color } = props;
    const classes = classNames({
        className: true,
        "sd-icon": true
    })
    const IconSvg = (SdSvgIcon as any)[icon];
    return (
        <span role="img" aria-label={icon} className={classes} style={style} color={color}>
            {<IconSvg />}
        </span>
    )
}
export default SdIcon;