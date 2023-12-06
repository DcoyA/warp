import styled from "@emotion/styled";
import Pagination from "../ui/Pagination";
import { useRef, useState } from "react";
import { Button } from "../ui/atoms";
import { colors } from "../ui/globalStyle";
import { FlexBox } from "../ui/atoms";
import UnderlineTextBar from "../ui/UnderlineTextBar";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../../components/ui/QnaEditor"), {
  ssr: false,
});
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
  hr {
    background: #dadada;
    height: 1px;
    border: 0;
  }
  section {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  article {
    position: relative;
    height: 50%;
  }
  @media (max-width: 759px) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  padding: 0 20px 32px;
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding: 4px 0;
  border-bottom: 1px solid #dadada;
`;

const Paging = styled.ol`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  line-height: 1;
  li {
    border-left: 1px solid #fff;
    text-align: center;
    align-items: cente r;
    justify-content: center;
    width: 20%;
    font-size: 24px;
  }
  li:first-of-type {
    border: none;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-flow: row-reverse;
  margin-top: 30px;
`;

const CheckBtn = styled.button`
  background-color: #0094ff;
  width: 160px;
  padding: 5px 0;
  font-size: 20px;
  font-weight: 400;
  border-radius: 50px;
`;

const WriteSection = styled.div`
  p {
    padding: 20px 0;
  }
  input {
    background-color: #383838;
    margin-bottom: 30px;
    padding: 10px;
    color: #fff;
  }
  textarea {
    padding: 5px;
    background: #383838;
    width: 100%;
    border: none;
    resize: none;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
`;

export default function Faq_m({
  faqList,
  noticesList,
  mutation,
  // handleSubmit,
  cancel,
  isOpen,
  setIsOpen,
  setIsModalOpen,
}: any) {
  const titleRef = useRef<HTMLInputElement | null>(null);

  const [qnaContents, setQnaContents] = useState("");
  const handleContents = (data: string) => {
    setQnaContents(data);
  };

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
      formData.append("title", titleRef.current?.value ?? "");
      if (qnaContents) {
        formData.append("contents", qnaContents);
      }
      mutation.mutate(formData);
      setQnaContents("");
    }
  };

  return (
    <Container>
      <Title>FAQ/문의</Title>
      <hr />
      {!isOpen ? (
        <section>
          <article>
            <SubTitle>FAQ</SubTitle>
            <Pagination dataList={noticesList} />
          </article>
          <article>
            <SubTitle>문의</SubTitle>
            <Pagination dataList={faqList} />
          </article>
        </section>
      ) : (
        <WriteSection>
          <FlexBox paddingTop="20px" dir="column">
            <UnderlineTextBar title={"제목"} fontSize={20} />
            <input type="text" ref={titleRef} />
          </FlexBox>
          <FlexBox paddingTop="20px" dir="column">
            <UnderlineTextBar title={"문의"} fontSize={20} />
            <Editor value={qnaContents} handleContents={handleContents} />
          </FlexBox>
        </WriteSection>
      )}

      <BtnBox>
        <CheckBtn onClick={handleSubmit}>
          {!isOpen ? "문의 작성" : "OK"}
        </CheckBtn>
        {isOpen && (
          <Button
            margin="0 10px 0 0"
            padding="5px 0"
            width={"100px"}
            backgroundColor={colors.blue01}
            onClickEvent={cancel}
          >
            취소
          </Button>
        )}
      </BtnBox>
    </Container>
  );
}
