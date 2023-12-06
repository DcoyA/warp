import BasicLayout from "@/components/layout/BasicLayout";
import styled from "@emotion/styled";
import { Button, FlexBox, Text } from "@/components/ui/atoms";
import Image from "next/image";
import Swiper from "@/components/ui/Swiper";
import { useEffect, useState } from "react";
import Main_m from "@/components/mobile/Main_m";
import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "@/libs/apis";
import WarpPopup from "@/components/ui/WarpPopup";
import LoginModal from "@/components/ui/popup/LoginModal";
import useUserStore from "@/client-state/user";
import useUser from "@/hooks/useUser";

interface BackgroundImageWrapperProps {
  url: string;
}

const BackgroundImageWrapper = styled.div<BackgroundImageWrapperProps>`
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Main = styled.div`
  display: block;
  height: 100%;
  @media (max-width: 759px) {
    display: none;
  }
`;

const TextArea = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  font-weight: 300;
  color: #fff;
  font-size: 20px;
`;

export default function Home() {
  const [placeCode, setPlaceCode] = useState<number>(0);
  const store = useUser(useUserStore, (state) => state);

  const openWarp = (code: number) => {
    // login 안한 상태면 loginModal 띄우도록
    if (!store?.isLoggedIn) {
      setIsLoginModalOpen(true);
    } else {
      console.log("loggedIN", store?.isLoggedIn);
      setIsOpen(true);
      setPlaceCode(code);
    }
  };

  const { data } = useQuery<any>(["places"], getPlaces);

  const firstData = data?.data?.rows[0];
  const firstFileName = data?.data?.rows[1].files[0]?.fileName;
  const places = data?.data?.rows;
  const [activeImg, setActiveImg] = useState(firstFileName);
  const [activeData, setActiveData] = useState<any>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [placeData, setPlaceData] = useState<any>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const handleSlideClick = (item: any, index: any) => {
    setActiveIndex(index);
    setActiveData(item);
    setActiveImg(item.files[0]?.fileName);
  };

  return (
    <BasicLayout>
      <Main_m dataList={places} />
      <Main>
        <BackgroundImageWrapper url={activeImg ? activeImg : firstFileName}>
          <div
            style={{
              height: "100%",
              position: "relative",
              background:
                "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
            }}
          >
            <FlexBox dir="column" width={"58%"} padding={"96px  97px"}>
              <FlexBox dir="column">
                <Text fontSize={64} lineHeigh={"0.8"}>
                  {/* {data.data[0]["title-ko"]} */}
                  {activeData ? activeData?.name : firstData?.name}
                </Text>
                <br />
                <Text fontSize={40} lineHeigh={"0.8"}>
                  {/* {data.data[0]["title-en"]} */}
                  {activeData ? activeData.englishName : firstData?.englishName}
                </Text>
              </FlexBox>

              <FlexBox marginTop="30px">
                <TextArea>
                  {/* {data.data[0].description} */}
                  {activeData ? activeData.description : firstData?.description}
                </TextArea>
              </FlexBox>

              {placeData?.length > 0 ? (
                <Button
                  margin={"35px 0 0 0 "}
                  padding={"0px"}
                  backgroundColor={"none"}
                  width={"fit-content"}
                  onClickEvent={() => openWarp(placeCode)}
                >
                  <Image
                    src={"/warp_btn_logo.png"}
                    alt="profile_icon"
                    width={240}
                    height={100}
                    priority
                  />
                </Button>
              ) : (
                <Button
                  margin={"35px 0 0 0 "}
                  padding={"0px"}
                  backgroundColor={"none"}
                  width={"fit-content"}
                  isDisabled
                  onClickEvent={() => openWarp(placeCode)}
                >
                  <Image
                    src={"/warp_btn_logo.png"}
                    alt="profile_icon"
                    width={240}
                    height={100}
                    priority
                  />
                </Button>
              )}
            </FlexBox>
            <Swiper
              data={places}
              setPlaceCode={setPlaceCode}
              onSlideClick={handleSlideClick}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

            <WarpPopup
              title="워프 하러가기"
              contents="이동해보세요"
              btnText="닫기"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              placeId={placeCode}
              setPlaceData={setPlaceData}
            />
          </div>
        </BackgroundImageWrapper>
        <LoginModal
          title={"로그인"}
          btnText={"구글로 로그인하기"}
          isOpen={isLoginModalOpen}
          setIsOpen={setIsLoginModalOpen}
        />
      </Main>
    </BasicLayout>
  );
}
