import BasicLayout from "@/components/layout/BasicLayout";
import PageLayout from "@/components/layout/PageLayout";
import Profile_m from "@/components/mobile/Profile_m";
import UnderlineTextBar from "@/components/ui/UnderlineTextBar";
import { FlexBox, Text } from "@/components/ui/atoms";
import styled from "@emotion/styled";
import React from "react";
import useUser from "@/hooks/useUser";
import useUserStore from "@/client-state/user";
import Table from "@/components/ui/Table";

const InnerText = styled.span`
  padding-left: 10px;
`;

const ProfileWrap = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  @media (max-width: 759px) {
    display: none;
  }
`;

export default function Profile() {
  const store = useUser(useUserStore, (state) => state);
  const userEmail = store?.user.email as string;
  const userName = store?.user.name as string;

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
    <BasicLayout mobilePage={true}>
      <Profile_m userEmail={userEmail} userName={userName} />
      <ProfileWrap>
        <FlexBox height="100%" width="100%">
          <PageLayout url={"palace_background.png"}>
            {/* title */}
            <UnderlineTextBar title={"My Profile"} fontSize={55} />

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

            {/* form */}
            <FlexBox dir="column" paddingTop="52px">
              <FlexBox dir="column">
                <Text fontSize={22}>사용 내역</Text>
                <FlexBox padding="30px 10px">
                  <Table data={data} />
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </PageLayout>
        </FlexBox>
      </ProfileWrap>
    </BasicLayout>
  );
}
