import React from "react";
import {Button} from 'antd';

export interface ButtonProps {
  label: string;
}

const AntdButton = (props: ButtonProps) => {
  return <Button>{props.label}</Button>;
};

export default AntdButton;