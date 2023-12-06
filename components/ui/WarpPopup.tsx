import React, { useEffect, useState } from "react";
import { Button, FlexBox, Text } from "./atoms";
import styled from "@emotion/styled";
import { colors } from "./globalStyle";
import { useQuery } from "@tanstack/react-query";
import { getDeviceVisiterPass, getDevicesInPlace } from "@/libs/apis/device";
import LinearProgress from "@mui/material/LinearProgress";

interface Props {
  title: string;
  contents: string;
  btnText: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  placeId: number;
  setPlaceData: any;
}

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
`;

const WarpPopup = ({
  title,
  contents,
  btnText,
  isOpen,
  setIsOpen,
  placeId,
  setPlaceData,
}: Props) => {
  useEffect(() => {
    console.log("placeId::", placeId);
  }, []);
  const [isLoadingWarp, setIsLoadingWarp] = useState(false);
  const { data, isLoading, isError } = useQuery(
    ["place:devices", placeId], // queryKey에 placeId 포함
    () => getDevicesInPlace({ placeId }),
    {
      enabled: placeId !== null, // placeId가 null이 아닐 때만 쿼리 실행
    }
  );

  useEffect(() => {
    setPlaceData(data?.data.rows);
  }, [data, setPlaceData]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const warpToControlPage = async (code: string) => {
    setIsLoadingWarp(true);
    console.log("code::", code);
    window.open(`https://drive.doublerobotics.com/?tls=${code}`, "_blank");

    try {
      // TODO: 재우님 요청으로 우선 하드코딩 하도록 수정. 워프 API
      // const res = await getDeviceVisiterPass({ robotKey: code });
      // console.log("res:", res);
      // if (res?.statusCode === 500) {
      //   alert("허용하지 않는 기기입니다. 어드민에 문의해주세요");
      // }
      // if (res?.statusCode === 200) {
      //   window.open(
      //     `https://drive.doublerobotics.com/?tls=${res?.data.key}`,
      //     "_blank"
      //   );
      // }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoadingWarp(false);
    }
  };

  if (isLoading) {
    <FlexBox>
      <Text fontSize={30}>로딩 중...</Text>
    </FlexBox>;
  }

  if (isError) {
    <FlexBox>
      <Text fontSize={30}>axios error</Text>
    </FlexBox>;
  }

  return (
    <>
      {isOpen && (
        <>
          <Wrapper>
            <FlexBox padding="100px 50px" justifyContent="center" dir="column">
              {data?.data.rows.length === 0 ? (
                <Text fontSize={20}>
                  해당 장소에 등록된 디바이스가 없습니다
                </Text>
              ) : undefined}
              {data?.data?.rows?.map((device: any, index: any) => (
                <FlexBox
                  key={index}
                  margin="5px"
                  style={{ alignItems: "center" }}
                  justifyContent="space-between"
                >
                  <Text fontSize={30} style={{ paddingRight: 30 }}>
                    {device?.name}
                  </Text>
                  {device?.code === "" ? (
                    <Button
                      onClickEvent={() => warpToControlPage(device?.code)}
                      backgroundColor={colors.blue01}
                      color="white"
                      width="fit-content"
                      padding="5px"
                      borderRadius="20px"
                      isDisabled={true}
                    >
                      기기 미배정
                    </Button>
                  ) : (
                    <Button
                      onClickEvent={() => warpToControlPage(device?.code)}
                      backgroundColor={colors.blue01}
                      color="white"
                      width="70px"
                      padding="5px"
                      borderRadius="20px"
                    >
                      WARP!
                    </Button>
                  )}
                </FlexBox>
              ))}
              {isLoadingWarp ? (
                <Wrapper style={{ background: "black" }}>
                  <LinearProgress />
                  <Text fontSize={30} fontWeight={200}>
                    워프 중
                  </Text>
                </Wrapper>
              ) : undefined}

              <FlexBox justifyContent="center">
                <Button
                  onClickEvent={closeModal}
                  backgroundColor={colors.gray02}
                  color="white"
                  width="148px"
                  padding="10px"
                  borderRadius="20px"
                  margin="50px 0 0 0"
                >
                  {btnText}
                </Button>
              </FlexBox>
            </FlexBox>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default WarpPopup;
