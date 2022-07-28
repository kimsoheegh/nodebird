import { RobotFilled } from "@ant-design/icons";
import { Form, Input } from "antd";
import React, { useMemo } from "react";

import AppLayout from "./AppLayout";

const NicknameEditForm = () => {
  const style = useMemo(
    () => ({
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px",
    }),
    []
  );

  return (
    <Form style={style}>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
};
export default NicknameEditForm;
