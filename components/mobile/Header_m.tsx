import Image from "next/image";
import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";
import Profile_m from "./Profile_m";
import Faq_m from "./Faq_m";
import useUser from "@/hooks/useUser";
import useUserStore from "@/client-state/user";

const Header = styled.div`
  display: none;
  position: relative;
  z-index: 9;
  @media (max-width: 759px) {
    display: block;
  }
  a {
    display: contents;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 50px;
  nav img {
    position: relative;
    z-index: 99;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.83);
  border-radius: 50px;
  padding-left: 60px;
  padding-top: 130px;

  li {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
  p {
    color: #fff;
    font-size: 32px;
    font-weight: 300;
    padding-left: 30px;
    cursor: pointer;
  }
  span {
    color: #989898;
    font-size: 24px;
    display: block;
  }
`;

export default function Header_m() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState("");
  const onClose = () => {
    setMenuOpen("");
    setIsOpen(true);
  };

  const store = useUser(useUserStore, (state) => state);
  const userLevel = store?.user.level as string;

  return (
    <Header>
      <Container>
        <h1>
          <Link href="/">
            <Image
              src="/warp_logo.png"
              alt="warp_logo"
              width={114}
              height={111}
            />
          </Link>
        </h1>
        <nav onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Image src="/close.png" alt="close" width={70} height={70} />
          ) : (
            <Image src="/menu 2.png" alt="war_logo" width={80} height={80} />
          )}
        </nav>
      </Container>
      {isOpen && (
        <Menu>
          <ul>
            <li>
              <Link href="/">
                <Image
                  src="/home.png"
                  alt="home_icon"
                  width={43}
                  height={43}
                  priority
                />
                <p>Home</p>
              </Link>
            </li>
            <li
              onClick={() => {
                setIsOpen(false);
                setMenuOpen("profile");
              }}
            >
              <Link href="/profile">
                <Image
                  src="/profile3.png"
                  alt="profile_icon"
                  width={45}
                  height={45}
                  priority
                  style={{ marginLeft: 3 }}
                />
                <p>My profile</p>
              </Link>
            </li>
            <li>
              <Image
                src="/Quark.png"
                alt="Quark points"
                width={38}
                height={38}
                priority
                style={{ marginLeft: 3 }}
              />
              <p style={{ color: "#848484", cursor: "default" }}>
                Quark points (Preparing)
              </p>
            </li>
            {userLevel === "user" && (
              <li>
                <Link href="/partner">
                  <Image
                    src="/partner.png"
                    alt="Request partnership"
                    width={43}
                    height={43}
                    priority
                    style={{ marginLeft: 3 }}
                  />
                  <p>Request partnership</p>
                </Link>
              </li>
            )}
            <li
              onClick={() => {
                setIsOpen(false);
                setMenuOpen("faq");
              }}
            >
              <Link href="/FAQ">
                <Image
                  src="/FAQ.png"
                  alt="FAQ"
                  width={45}
                  height={45}
                  priority
                />
                <p>FAQ</p>
              </Link>
            </li>
            <li>
              <Image
                src="/logout.png"
                alt="logout"
                width={45}
                height={45}
                priority
                style={{ marginLeft: 4 }}
              />
              <p>Logout</p>
            </li>
            <li>
              <Link href="/copyright">
                <Image
                  src="/etc.png"
                  alt="etc"
                  width={45}
                  height={45}
                  priority
                />
                <p>
                  ETC<span>(Terms of Use / Privacy Policy)</span>
                </p>
              </Link>
            </li>
          </ul>
        </Menu>
      )}
    </Header>
  );
}
