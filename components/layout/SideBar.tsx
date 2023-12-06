import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import { Button, FlexBox, Text } from "../ui/atoms";
import { colors } from "../ui/globalStyle";
import LoginModal from "../ui/popup/LoginModal";
import useUserStore from "@/client-state/user";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import BasicModal from "../ui/popup/BasicModal";
import { deleteCookie } from "cookies-next";

const Nav = styled.nav`
  background-color: black;
  display: flex;
  flex-direction: column;
  float: left;
  width: 80px;
  @media (max-width: 759px) {
    display: none;
  }
`;

interface ItemWrapperProps {
  href?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ItemWrapper = ({ children, onClick, href }: ItemWrapperProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <FlexBox
      justifyContent="center"
      paddingTop="1.25rem"
      paddingBottom="1.25rem"
      background={isActive ? colors.gray02 : "black"}
      borderLeft={isActive ? `4px solid ${colors.pink01}` : "none"}
      onClick={onClick}
    >
      {children}
    </FlexBox>
  );
};

function SideBar() {
  const store = useUser(useUserStore, (state) => state);
  const userLevel = store?.user.level as string;

  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const router = useRouter();

  function logout(): void {
    store?.logout();
    deleteCookie("warp-token");
    router.push("/").then(() => router.reload());
  }

  function routeToAdmin(): void {
    window.open(process.env.NEXT_PUBLIC_REDIRECT, "_blank");
  }

  return (
    <Nav>
      <h1 className="my-5">
        <Link href="/">
          <Image
            src="/warp_logo.png"
            alt="war_logo"
            width={123}
            height={120}
            // priority
            // objectFit="contain"
          />
        </Link>
      </h1>
      <ul>
        <Link href="/">
          <ItemWrapper href="/">
            <Image
              src="/home.png"
              alt="home_icon"
              width={35}
              height={35}
              priority
            />
          </ItemWrapper>
        </Link>
        {store?.isLoggedIn ? (
          <Link href="/profile">
            <ItemWrapper href="/profile">
              <Image
                src="/profile_icon.png"
                alt="profile_icon"
                width={35}
                height={35}
                priority
              />
            </ItemWrapper>
          </Link>
        ) : undefined}

        <ItemWrapper href="/qna" onClick={openModal}>
          <button>
            <Image src="/Quark.png" alt="profile_icon" width={35} height={35} />
          </button>
        </ItemWrapper>
        {userLevel === "user" && (
          <Link href="/partner">
            <ItemWrapper href="/partner">
              <Image src="/partner.png" alt="partner" width={35} height={35} />
            </ItemWrapper>
          </Link>
        )}

        <ItemWrapper href="/FAQ">
          <Link href="/FAQ">
            <Image src="/FAQ.png" alt="faq_icon" width={35} height={35} />
          </Link>
        </ItemWrapper>

        <Link href="/copyright">
          <ItemWrapper href="/copyright">
            <Image
              src="/etc.png"
              alt="copyright"
              width={35}
              height={35}
              priority
            />
          </ItemWrapper>
        </Link>
      </ul>
      {!store?.isLoggedIn ? (
        <Button
          padding="5px"
          borderRadius="5px"
          backgroundColor={`${colors.gray01}`}
          margin="5px"
          onClickEvent={() => setIsLoginModalOpen(true)}
        >
          <Text fontSize={15} fontWeight={400}>
            로그인
          </Text>
        </Button>
      ) : undefined}
      {store?.isLoggedIn ? (
        <ItemWrapper href="/logout">
          <Button backgroundColor="none" onClickEvent={logout}>
            <Image
              src="/logout.png"
              alt="logout"
              width={35}
              height={35}
              priority
            />
          </Button>
        </ItemWrapper>
      ) : undefined}

      {store?.user.level == "admin" ? (
        <Button onClickEvent={routeToAdmin}>어드민 페이지</Button>
      ) : undefined}

      {store?.user.level == "partner" ? (
        <Button onClickEvent={routeToAdmin}>파트너 페이지</Button>
      ) : undefined}

      <LoginModal
        title={"로그인"}
        btnText={"구글로 로그인하기"}
        isOpen={isLoginModalOpen}
        setIsOpen={setIsLoginModalOpen}
      />

      <BasicModal
        title="잠깐! 준비중인 기능이에요"
        contents="this feature will be prepare soon."
        btnText="OK"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Nav>
  );
}

export default SideBar;
