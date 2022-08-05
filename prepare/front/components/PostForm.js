import { Form, Input, Button } from "antd";
import React, { useCallback, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch;
  const imageInput = useRef();

  const onSubmit = useCallback(() => {
    dispatch(addPost);
    dispatch(addPost);
  }, []);

  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const { imagePaths } = useSelector((state) => state.post);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  reutrn(
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onsubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 일이 있었나요?"
      ></Input.TextArea>
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" sytle={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div dey={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v}></img>
            <Button>제거</Button>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
