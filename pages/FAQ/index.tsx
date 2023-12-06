import BasicLayout from "@/components/layout/BasicLayout";
import PageLayout from "@/components/layout/PageLayout";
import UnderlineTextBar from "@/components/ui/UnderlineTextBar";
import Faq_m from "@/components/mobile/Faq_m";
import Pagination from "@/components/ui/Pagination";
import { FlexBox, Text, Button } from "@/components/ui/atoms";
import styled from "@emotion/styled";
import { colors } from "@/components/ui/globalStyle";
import React, { useRef, useState } from "react";
import { getQna, getFaqs } from "@/libs/apis";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { createQna } from "@/libs/apis/qna";
import useUserStore from "@/client-state/user";
import useUser from "@/hooks/useUser";
import BasicModal from "@/components/ui/popup/BasicModal";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../../components/ui/QnaEditor"), {
  ssr: false,
});

const Faq = styled.div`
  display: block;
  height: 100%;
  @media (max-width: 759px) {
    display: none;
  }
  input {
    background-color: #383838;
    margin-top: 15px;
    margin-bottom: 30px;
    padding: 10px;
    color: #fff;
  }

  textarea {
    padding: 10px;
    background: #383838;
    width: 100%;
    border: none;
    resize: none;
    margin-top: 15px;
    color: #fff;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
`;

export default function FAQ() {
  const store = useUser(useUserStore, (state) => state);
  const userLevel = store?.user.level as string;

  const titleRef = useRef<HTMLInputElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [notice, setNotice] = useState<any>({ page: 1, limit: 50 });
  const [qnaContents, setQnaContents] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("모든 값은 필수 입력 값입니다.");

  const queryClient = useQueryClient();

  const queries = [
    { queryKey: ["notices", notice], queryFn: () => getFaqs(notice) },
    { queryKey: ["qna"], queryFn: () => getQna({ page: 1, limit: 3 }) },
  ];

  const queryResults = useQueries({ queries });

  const faqs = queryResults[0];
  const qnas = queryResults[1];

  if (qnas.isError || faqs.isError) {
    return <FlexBox>정보를 불러오지 못했습니다.</FlexBox>;
  }

  const handleContents = (data: string) => {
    setQnaContents(data);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mutation = useMutation({
    mutationFn: createQna,
    onSuccess: (res: any) => {
      setIsModalOpen(true);
      setIsOpen(!isOpen);
      setModalText("문의 완료");
      queryClient.invalidateQueries(["qna"]);
    },
  });

  // 문의 작성 클릭시 + 확인 클릭시
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
    if (isOpen) {
      if (!titleRef.current?.value || !qnaContents) {
        setIsModalOpen(true);
        return;
      }
      const formData = new FormData();
      // contentsVal.current에 문의 데이터가 있습니다.
      // 해당부분에서 모달 처리하시면 될거같습니다.
      // 이미지를 붙여넣을 경우 이미지가 크면 error가 납니다.
      formData.append("title", titleRef.current?.value ?? "");
      if (qnaContents) {
        formData.append("contents", qnaContents);
      }
      mutation.mutate(formData);
      setQnaContents("");
    }
  };

  const cancel = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <BasicLayout mobilePage={true}>
      <Faq_m
        faqList={qnas.data?.data.data.rows}
        noticesList={faqs.data?.data.rows}
        mutation={mutation}
        handleSubmit={handleSubmit}
        cancel={cancel}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        titleRef={titleRef}
        setIsModalOpen={setIsModalOpen}
      />
      <Faq>
        <FlexBox height="100%">
          <PageLayout url={"palace_background.png"}>
            <Text fontSize={55}>FAQ/문의</Text>
            {!isOpen ? (
              <div style={{ height: "100%" }}>
                <FlexBox paddingTop="20px">
                  <UnderlineTextBar title={"FAQ"} fontSize={20} />
                </FlexBox>
                {faqs.isLoading ? (
                  <Text color="white">로딩 중..</Text>
                ) : (
                  <Pagination dataList={faqs.data?.data.rows} />
                )}
                <FlexBox paddingTop="100px">
                  <UnderlineTextBar title={"문의"} fontSize={20} />
                </FlexBox>
                {qnas.isLoading ? (
                  <Text color="white">로딩 중..</Text>
                ) : (
                  <Pagination dataList={qnas.data?.data.data.rows} />
                )}
              </div>
            ) : (
              <>
                <FlexBox paddingTop="20px" dir="column">
                  <UnderlineTextBar title={"제목"} fontSize={20} />
                  <input type="text" ref={titleRef} />
                </FlexBox>
                <FlexBox paddingTop="20px" dir="column">
                  <UnderlineTextBar title={"문의"} fontSize={20} />
                  <Editor value={qnaContents} handleContents={handleContents} />
                </FlexBox>
              </>
            )}
            {userLevel === "user" && (
              <FlexBox justifyContent="end">
                {isOpen && (
                  <Button
                    margin={"35px 12px 0 0 "}
                    padding={"6px 35px"}
                    backgroundColor={colors.blue01}
                    width={"fit-content"}
                    onClickEvent={cancel}
                  >
                    취소
                  </Button>
                )}
                <Button
                  margin={"35px 0 0 0 "}
                  padding={"6px 35px"}
                  backgroundColor={colors.blue01}
                  width={"fit-content"}
                  onClickEvent={handleSubmit}
                >
                  {isOpen ? "OK" : "문의 작성"}
                </Button>
              </FlexBox>
            )}
          </PageLayout>
        </FlexBox>
      </Faq>
      <BasicModal
        title={modalText}
        contents=""
        btnText="OK"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      ></BasicModal>
    </BasicLayout>
  );
}
