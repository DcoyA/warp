import styled from "@emotion/styled";
import Link from "next/link";
import gyeongbokgung from "../../public/gyeong.png";
import { useRouter } from "next/router";

interface Type {
  fileName?: any;
}
const Item = styled.li<Type>`
  background-image: ${({ fileName }) => `url(${fileName})`};
  width: 100%;
  height: 257px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  border: 1px solid #717171;
  box-shadow: 20px 40px 40px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: column-reverse;
  justify-content: end;
  padding-bottom: 10px;
  margin-bottom: 48px;
  cursor: pointer;
`;
const ItemWrapper = styled.ul`
  display: none;
  padding: 0 50px;
  p {
    text-align: center;
    color: #fff;
    font-size: 25px;
    line-height: 1.3;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 759px) {
    display: block;
  }
`;

export default function Main_m({ dataList }: any) {
  const router = useRouter();

  const onClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <ItemWrapper>
      {dataList?.map((el: any, idx: any) => (
        <Item
          onClick={() => onClick(el.placeId)}
          key={el.placeId}
          fileName={el.files[0]?.fileName}
        >
          <p>
            경복궁(景福宮)
            <br />
            Gyeongbokgung Palace
          </p>
        </Item>
      ))}
    </ItemWrapper>
  );
}
