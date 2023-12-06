import Image from "next/image";
import styled from "@emotion/styled";
import { FlexBox, Text } from "@/components/ui/atoms";
import Table from "../ui/Table";

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
  padding: 0 20px 32px;
`;

const InputArea = styled.div`
  padding: 10px 20px;
  font-weight: 300;
  p {
    font-size: 20px;
    margin-bottom: 15px;
    margin: 30px 0 10px;
  }
  input {
    background-color: #383838;
    padding: 12px 15px;
    width: 100%;
    margin: 0 0 10px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-flow: row-reverse;
  margin-top: 40px;
`;

const CheckBtn = styled.button`
  background-color: #0094ff;
  width: 148px;
  padding: 5px 0;
  font-size: 32px;
  border-radius: 20px;
`;
const InnerText = styled.span`
  padding-left: 10px;
  color: #fff;
`;

type ProfileProps = {
  userName?: string;
  userEmail?: string;
};

export default function Profile_m({ userName, userEmail }: ProfileProps) {
  const data = [
    {
      date: "2023.01.22",
      created_at: "13:11",
      place: "경복궁",
      used_time: "38m 12s",
    },
    {
      date: "2023.01.22",
      created_at: "12:22",
      place: "창덕궁창덕궁창덕궁",
      used_time: "38m 12s",
    },
    {
      date: "2023.01.22",
      created_at: "11:23",
      place: "불국사",
      used_time: "38m 12s",
    },
  ];
  return (
    <Container>
      <Title>My profile</Title>
      <hr />
      <FlexBox dir="column" paddingTop="52px">
        <Text fontSize={22}>
          Name : <InnerText>{userName}</InnerText>
        </Text>
      </FlexBox>
      <FlexBox dir="column" paddingTop="52px">
        <Text fontSize={22}>
          Email : <InnerText>{userEmail}</InnerText>
        </Text>
      </FlexBox>
      <FlexBox dir="column" paddingTop="52px">
        <FlexBox dir="column">
          <Text fontSize={22}>사용 내역</Text>
          <FlexBox padding="30px 10px">
            <Table data={data} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
