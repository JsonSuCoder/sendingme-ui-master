import React from "react"
import { SdButton, SdTooltip } from "sendingme-ui";
import "./index.scss"
const TooltipComponent: React.FC = () => {
    return (
        <>
            <h1>Tooltip</h1>
            <div className="tooltip-list">
                <div className="tooltip-top">
                    <SdTooltip title="topLeft" placement="topLeft">
                        <SdButton>TL</SdButton>
                    </SdTooltip>
                    <SdTooltip title="Top" placement="top">
                        <SdButton>Top</SdButton>
                    </SdTooltip>
                    <SdTooltip title="topRight" placement="topRight">
                        <SdButton>TR</SdButton>
                    </SdTooltip>
                </div>
                <div className="tooltip-left">
                    <SdTooltip title="left" placement="left">
                        <SdButton>left</SdButton>
                    </SdTooltip>
                </div>
                <div className="tooltip-right">
                    <SdTooltip title="right" placement="right">
                        <SdButton>right</SdButton>
                    </SdTooltip>
                </div>
                <div className="tooltip-bottom">
                    <SdTooltip title="bottomLeft" placement="bottomLeft">
                        <SdButton>BL</SdButton>
                    </SdTooltip>
                    <SdTooltip title="bottom" placement="bottom">
                        <SdButton>bottom</SdButton>
                    </SdTooltip>
                    <SdTooltip title="bottomRight" placement="bottomRight">
                        <SdButton>BR</SdButton>
                    </SdTooltip>
                  
                </div>
             
            </div>

        </>
    )
}
export default TooltipComponent;