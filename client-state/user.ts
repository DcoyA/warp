import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isLoggedIn: boolean;
  user: UserState;
  login: (userInfo: UserState) => void;
  setGoogleAuthToken: (googleAuthToken: string) => void;
  setLoggedIn: (isLoggedIn: boolean) => void;
  setAuthInfo: (authInfo: AuthInfo) => void;
  logout: () => void;
};

type AuthInfo = {
  firebaseUid: string;
  level: string;
};

type UserState = {
  level?: string;
  name: string;
  email: string;
  photoUrl: string;
  googleAuthToken?: string;
  firebaseUid?: string;
};

const useUserStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: {
        email: "",
        name: "",
        photoUrl: "",
        firebaseUid: "",
        googleAuthToken: "",
        level: "",
      },

      setGoogleAuthToken: (googleAuthToken: string) =>
        set((prevState) => ({
          user: {
            ...prevState.user,
            googleAuthToken,
          },
        })),

      login: async ({ email, name, photoUrl }: UserState) => {
        set((prevState) => ({
          user: {
            ...prevState.user,
            email,
            name,
            photoUrl,
          },
        }));
      },

      setAuthInfo: ({ firebaseUid, level }) => {
        set((prevState) => ({
          user: {
            ...prevState.user,
            firebaseUid,
            level,
          },
        }));
      },

      logout: () => {
        return localStorage.removeItem("user-storage");
      },

      setLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    }),
    {
      name: "user-storage",
      // 모든 state를  persist store에 저장하지 않기 위해 partialize에 등록한 것만 persist로 유지.
      partialize: (state) => ({
        user: state.user,
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);

export default useUserStore;
