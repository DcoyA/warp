import Image from "next/image";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { colors } from "../ui/globalStyle";

const Container = styled.div`
  display: none;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.83);
  color: #fff;
  padding: 0 55px;
  img {
    padding-top: 20px;
    cursor: pointer;
  }
  @media (max-width: 759px) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  line-height: 1.2;
  padding: 0 20px 32px;
`;

const InputArea = styled.div`
  padding: 10px 20px;
  font-weight: 300;
  p {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  input {
    background-color: #383838;
    padding: 12px 15px;
    width: 100%;
    border-radius: 20px;
    :focus {
      outline: none;
    }
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-flow: row-reverse;
  margin-top: 40px;
`;

const CheckBtn = styled.button`
  background-color: #0094ff;
  width: 128px;
  padding: 5px 0;
  font-size: 28px;
  border-radius: 20px;
`;

const FileBox = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 70%;
  }
`;
const Input = styled.p`
  width: 70%;
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  background: #383838;
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: #797979;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 10px 0 10px;
  width: 25%;
  background-color: ${colors.gray01};
  border-radius: 20px;
  cursor: pointer;
  color: #fff;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  color: white;
  padding: 15px 12px;
  background: ${colors.gray02};
  border-radius: 20px;
  cursor: pointer;
  resize: none;
  :focus {
    box-shadow: none;
    outline: none;
  }
`;

export default function Partnership_m({
  mutation,
  userUid,
  setIsModalOpen,
  setModalText,
}: any) {
  const companyNameRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const memoRef = useRef<HTMLTextAreaElement | null>(null);
  const registrationNumberRef = useRef<HTMLInputElement | null>(null);

  const [files, setFiles] = useState();
  const [fileName, setFileName] = useState(
    "사업자등록증_예시_주식회사워프.pdf"
  );

  const onChangeFiles = (e: any) => {
    const fileList = e.target.files;
    if (fileList !== null) {
      setFiles(fileList);
      setFileName(fileList[0]?.name);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !companyNameRef.current?.value ||
      !nameRef.current?.value ||
      !phoneRef.current?.value ||
      !memoRef.current?.value ||
      !registrationNumberRef.current?.value ||
      !files
    ) {
      setModalText("모든 값은 필수 입력 값입니다.");
      setIsModalOpen(true);
      return;
    }

    const formData = new FormData();
    if (files) {
      formData.append("companyName", companyNameRef.current?.value ?? "");
      formData.append("name", nameRef.current?.value ?? "");
      formData.append("phone", phoneRef.current?.value ?? "");
      formData.append("memo", memoRef.current?.value ?? "");
      formData.append(
        "registrationNumberRef",
        registrationNumberRef.current?.value ?? ""
      );
      formData.append("info", files);
      mutation.mutate({ id: userUid, data: formData });
    }
  };

  return (
    <Container>
      <Title>Request Partnership</Title>
      <hr />
      <InputArea>
        <div>
          <p>상호</p>
          <input type="text" placeholder="Company name" ref={companyNameRef} />
        </div>
        <div>
          <p>담당자</p>
          <input type="text" placeholder="name" ref={nameRef} />
        </div>
        <div>
          <p>연락처</p>
          <input
            type="text"
            placeholder="Contact (Phone number)"
            ref={phoneRef}
          />
        </div>
        <div>
          <p>메모</p>
          <Textarea placeholder="Message" ref={memoRef} />
        </div>
        <div>
          <p>사업자등록번호</p>
          <input
            type="text"
            placeholder="Company Registration Number"
            ref={registrationNumberRef}
          />
        </div>
        <div>
          <p>사업자등록증</p>
          <FileBox>
            <Input>{fileName}</Input>
            <Label htmlFor="inputFile">
              파일 찾기
              <input
                type="file"
                id="inputFile"
                accept="image/*, .pdf"
                style={{ display: "none" }}
                onChange={onChangeFiles}
              />
            </Label>
          </FileBox>
        </div>
      </InputArea>
      <BtnBox>
        <CheckBtn onClick={handleSubmit}>OK</CheckBtn>
      </BtnBox>
    </Container>
  );
}
