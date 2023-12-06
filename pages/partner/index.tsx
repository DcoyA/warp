import BasicLayout from "@/components/layout/BasicLayout";
import PageLayout from "@/components/layout/PageLayout";
import InputBox from "@/components/ui/InputBox";
import UnderlineTextBar from "@/components/ui/UnderlineTextBar";
import Partnership_m from "@/components/mobile/Partnership_m";
import { Button, FlexBox, Text } from "@/components/ui/atoms";
import { colors } from "@/components/ui/globalStyle";
import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { requestPartner } from "@/libs/apis/request";
import { useMutation } from "@tanstack/react-query";
import useUser from "@/hooks/useUser";
import useUserStore from "@/client-state/user";
import BasicModal from "@/components/ui/popup/BasicModal";

const Partnership = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  @media (max-width: 759px) {
    display: none;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 280px;
  background-color: ${colors.gray01};
  border-radius: 20px;
  cursor: pointer;
  color: #fff;
`;

const Input = styled.p`
  width: 70%;
  height: 57px;
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  background: #383838;
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: #797979;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 234px;
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

export default function Partner() {
  const companyNameRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const memoRef = useRef<HTMLTextAreaElement | null>(null);
  const registrationNumberRef = useRef<HTMLInputElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("모든 값은 필수 입력 값입니다.");

  const [files, setFiles] = useState();
  const [fileName, setFileName] = useState(
    "사업자등록증_예시_주식회사워프.pdf"
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const store = useUser(useUserStore, (state) => state);
  const userUid = store?.user.firebaseUid as string;

  const onChangeFiles = (e: any) => {
    const fileList = e.target.files;
    if (fileList !== null) {
      setFiles(fileList);
      setFileName(fileList[0]?.name);
    }
  };

  const mutation = useMutation({
    mutationFn: requestPartner,
    onSuccess: (res: any) => {
      setIsModalOpen(true);
      setModalText("파트너 요청 완료");
    },
    onError: (error: any) => {
      if (error.response.data.statusCode === 400) {
        setIsModalOpen(true);
        setModalText(error.response.data.message);
      }
    },
  });

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
    <BasicLayout mobilePage={true}>
      <Partnership_m
        userUid={userUid}
        mutation={mutation}
        setIsModalOpen={setIsModalOpen}
        setModalText={setModalText}
      />
      <Partnership>
        <FlexBox height="100%">
          <PageLayout url={"palace_background.png"}>
            <UnderlineTextBar title={"Request partnership"} fontSize={55} />

            <FlexBox dir="column" paddingTop="20px">
              <InputBox
                type="text"
                textMinWidth={"200px"}
                label={"상호"}
                placeholder={"Company name"}
                paddingTop={"20px"}
                propsRef={companyNameRef}
              />
              <InputBox
                type="text"
                textMinWidth={"200px"}
                label={"담당자"}
                placeholder={"Contact (Name)"}
                paddingTop={"8px"}
                propsRef={nameRef}
              />
              <InputBox
                type="text"
                textMinWidth={"200px"}
                label={"연락처"}
                placeholder={"Contact (Phone number)"}
                paddingTop={"8px"}
                propsRef={phoneRef}
              />
              <FlexBox alignItems="center" paddingTop={"8px"}>
                <Text width="200px" minWidth="200px">
                  메모
                </Text>
                <Textarea placeholder={"Message"} ref={memoRef} />
              </FlexBox>

              <InputBox
                type="text"
                textMinWidth={"200px"}
                label={"사업자등록번호"}
                paddingTop={"8px"}
                placeholder={"Company Registration Number"}
                propsRef={registrationNumberRef}
              />

              <FlexBox alignItems="center" paddingTop={"10px"}>
                <Text width="200px" minWidth={"200px"}>
                  {"사업자등록증"}
                </Text>
                <Input>{fileName}</Input>
                <Label htmlFor="input">
                  파일 찾기
                  <input
                    type="file"
                    id="input"
                    accept="image/*, .pdf"
                    style={{ display: "none" }}
                    onChange={onChangeFiles}
                  />
                </Label>
              </FlexBox>
              <FlexBox justifyContent="end" margin={"20px 0"}>
                <Button width="100px" onClickEvent={handleSubmit}>
                  OK
                </Button>
              </FlexBox>
            </FlexBox>
          </PageLayout>
        </FlexBox>
      </Partnership>
      <BasicModal
        title={modalText}
        contents=""
        btnText="OK"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </BasicLayout>
  );
}
