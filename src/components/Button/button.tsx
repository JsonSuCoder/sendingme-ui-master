import { forwardRef } from "react";
import { ButtonType, SizeType } from "./buttonHelpers";
import React from "react";
import classNames from 'classnames';

type MergedHTMLAttributes = Omit<
    React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
    'type'
>;
export interface BaseButtonProps extends MergedHTMLAttributes {
    type?: ButtonType;
    icon?: React.ReactNode;
    size?: SizeType;
    disabled?: boolean;
    loading?: boolean | { delay?: number };
    prefixCls?: string;
    className?: string;
    danger?: boolean;
    children?: React.ReactNode;
    classNames?: { icon: string };
    styles?: React.CSSProperties;
    href?: string;
}

const prefixCls = "sd-btn";

const InternalButton: React.ForwardRefRenderFunction<
    HTMLButtonElement | HTMLAnchorElement,
    BaseButtonProps
> = (props, ref) => {
    const { size, loading, danger, icon, styles,disabled } = props;
    const classes = classNames(
        {
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-dangerous`]: !!danger,
        },
        props.className,
    );
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick } = props;
        // FIXME: https://github.com/ant-design/ant-design/issues/30207
        if (loading || disabled) {
            e.preventDefault();
            return;
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    };

    // const iconNode =
    //     icon && !loading ? (
    //         <IconWrapper prefixCls={prefixCls} className={iconClasses} style={iconStyle}>
    //             {icon}
    //         </IconWrapper>
    //     ) : (
    //         <LoadingIcon existIcon={!!icon} prefixCls={prefixCls} loading={!!innerLoading} />
    //     );
    let buttonNode = (
        <button
            className={classes}
            style={styles}
            onClick={handleClick}
            disabled={disabled}
            ref={ref as React.Ref<HTMLButtonElement>}
        >
            {/* {iconNode} */}
            {/* {kids} */}

            {/* Styles: compact */}
            {/* {!!compactItemClassnames && <CompactCmp key="compact" prefixCls={prefixCls} />} */}
        </button>
    );
    return buttonNode;
}
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, BaseButtonProps>(
    InternalButton,
);

export default Button;