import {
  Input,

} from "@mui/material";
import classnames from "classnames";
import React, { ReactNode } from "react";
import Button from "src/button";


export type FilePickerProps = {
  children?: ReactNode
  fileTypes?: string,
  label: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const FilePicker = ({
  label,
  fileTypes,
  onChange
}: FilePickerProps) => {

  return <label htmlFor="upload-photo">
    <input
      style={{ display: 'none' }}
      id="upload-photo"
      name="upload-photo"
      type="file"
      accept={fileTypes}
      multiple
      onChange={(e) => onChange && onChange(e)}
    />

    <Button isBlackButton component="span" style={{ marginTop: '10px' }}>
      {label}
    </Button>
  </label>;
};

export default FilePicker;
