import React from "react";
import classNames from "classnames";
import Popover,{ PopoverProps as MaterialPopoverProps } from "@mui/material/Popover";
import { ModalContainer, StyledPopover, popoverClasses } from "./styles";

export interface PopoverProps extends MaterialPopoverProps {
  children: React.ReactElement;
  centered?: boolean;
  hasPadding?: boolean;
  hasDarkBackground?: boolean;
}

const Modal: React.FC<PopoverProps> = ({
  open,
  onClose,
  children,
  centered,
  hasPadding = true,
  hasDarkBackground = false,
  ...props
}) => {
  return (
    <StyledPopover
      open={open}
      onClose={onClose}
      classes={{
        root: classNames(centered && popoverClasses.center),
      }}
      {...props}
    >
      <ModalContainer
        className={classNames(
          hasPadding && popoverClasses.padded,
          hasDarkBackground && popoverClasses.dark
        )}
      >
        {children}
      </ModalContainer>
    </StyledPopover>
  );
};

export default Modal;
