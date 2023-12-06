import styled from "@emotion/styled";
import Header_m from "./Header_m";
import bg from "../../public/bg.png";
import Image from "next/image";
// import gyeongbokgung from "../../public/gyeong.png";
import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "@/libs/apis";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Type {
  bgBanner?: string;
}
const DetailContainer = styled.div`
  width: 100%;

  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

const PalaceBanner = styled.div<Type>`
  background-image: url(${(props) => props.bgBanner});
  width: 100%;
  height: 427px;
  padding: 10px 40px;
  background-repeat: no-repeat;
  color: #fff;
  h2 {
    font-size: 60px;
  }
  p {
    font-size: 40px;
  }
`;

const Contents = styled.div`
  width: 100%;
  padding: 25px 50px;
  display: flex;
  flex-flow: column;
  align-items: center;
  p {
    height: 270px;
    overflow-y: scroll;
    scrollbar-width: none;
    font-size: 20px;
    color: #fff;
  }
  p::-webkit-scrollbar {
    display: none;
  }
`;

const WarpBtn = styled.button`
  background-color: #7000ff;
  border-radius: 50px;
  padding: 9px 16px;
  width: 230px;
  margin: 40px 0 67px;
`;

const WarpList = styled.div`
  width: 100%;
  padding-bottom: 110px;
  overflow: hidden;
  ul {
    display: flex;
    overflow-x: scroll;
    scrollbar-width: none;
    margin-left: 10px;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  li {
    margin-right: 30px;
  }
  div {
    width: 300px;
    height: 172px;
    border: 1px solid #a9a9a9;
    border-radius: 20px;
    overflow: hidden;
  }
  h3 {
    margin-top: 15px;
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
`;

export default function Detail_m() {
  const router = useRouter();
  const { data } = useQuery<any>(["places"], getPlaces);
  const dataList = data?.data?.rows;
  const placeData = dataList?.find((el: any) => {
    return el.placeId == Number(router.query.id);
  });

  const handleResize = () => {
    if (window.innerWidth >= 759) {
      router.push("/");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maxWidth: 759,
      }}
    >
      <Header_m />
      <DetailContainer>
        <PalaceBanner bgBanner={placeData?.files[0]?.fileName}>
          <h2>{placeData?.name}</h2>
          <p>{placeData?.englishName}</p>
        </PalaceBanner>
        <Contents>
          <p>{placeData?.description}</p>
          <WarpBtn>
            <Image
              src="/button_warp1.png"
              alt="war_logo"
              width={209}
              height={96}
              priority
            />
          </WarpBtn>
        </Contents>
        <WarpList>
          <ul>
            {dataList?.map((el: any, idx: any) => (
              <li key={el?.placeId}>
                <div>
                  <img src={el?.files[0]?.fileName ?? ""} alt={el.name} />
                </div>
                <h3>
                  {el?.name}
                  <br />
                  {el?.englishName}
                </h3>
              </li>
            ))}
          </ul>
        </WarpList>
      </DetailContainer>
    </section>
  );
}
