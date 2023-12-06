import React from "react";
import BasicModal from "./BasicModal";
import { Button, FlexBox, Text } from "../atoms";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { colors } from "../globalStyle";
import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { auth } from "@/libs/firebaseApp";
import { useMutation } from "@tanstack/react-query";
import { getMyAccount } from "@/libs/apis/login";
import Modal from "./Modal";
import useUser from "@/hooks/useUser";
import useUserStore from "@/client-state/user";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";
import { DataConverter } from "@/libs/dataConverter";

interface Props {
  title: string;
  contents?: string;
  btnText: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type JWTType = {
  email: string;
  lat: number;
  id: number;
  name: any;
  uid: string;
  level: string;
};

function LoginModal({ title, btnText, contents, isOpen, setIsOpen }: Props) {
  const store = useUser(useUserStore, (state) => state);

  const mutation = useMutation(getMyAccount, {
    onSuccess: (res: any) => {
      const jwtInfo = jwt.decode(res.data.data) as JWTType;
      store?.setAuthInfo({
        firebaseUid: jwtInfo?.uid as string,
        level: jwtInfo?.level as string,
      });
      store?.setGoogleAuthToken(res.data["data"]);
      store?.setLoggedIn(true);

      // google로그인 성공 시 googleAuthToken을 admin 체크후 던지기
      setCookie("warp-token", res.data["data"], {
        path: "/",
        domain: process.env.NEXT_PUBLIC_COOKIE,
        httpOnly: false,
        sameSite: false,
      });

      //TODO:  팝업 허용해야 redirect 하도록 해서 버튼으로 하는 게 나을수도 (admin이나 partner 권한이면)
      if (jwtInfo?.level == "admin" || jwtInfo?.level == "partner") {
        window.open(process.env.NEXT_PUBLIC_REDIRECT, "_blank");
      }
    },

    onError: (error) => {
      console.error("[ERROR] login error", error);
      store?.logout();
    },
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((data: UserCredential) => {
      mutation.mutate({
        firebaseUid: data.user.uid,
      });

      // zustand localstorage에 저장
      store?.login({
        name: data.user.displayName as string,
        email: data.user.email as string,
        photoUrl: data.user.photoURL as string,
      });

      setIsOpen(false);
    });
  };

  return (
    <Modal
      title={"로그인"}
      btnText={"구글로 로그인하기"}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <FlexBox width="100%" alignItems="center" justifyContent="space-between">
        <Text fontSize={20} color="black">
          {title}
        </Text>
        <Button backgroundColor="none" color="black" onClickEvent={closeModal}>
          <CloseIcon />
        </Button>
      </FlexBox>

      <Text fontSize={20} color="black">
        {contents}
      </Text>
      <Button
        onClickEvent={googleLogin}
        backgroundColor={colors.white}
        color="white"
        width="248px"
        padding="10px 16px 11px 16px"
        borderRadius="8px"
        border="2px solid #EEE"
        margin="20px 10px"
      >
        <Image src={"/google_logo.png"} width={30} height={30} alt="logo" />
        <Text
          padding="0px 0px 0px 6px"
          fontSize={16}
          fontWeight={700}
          color={colors.gray01}
        >
          {btnText}
        </Text>
      </Button>
    </Modal>
  );
}

export default LoginModal;
