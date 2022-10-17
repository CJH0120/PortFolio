import { Login } from "components/control/Login"
import create from "zustand"

interface ID {
   id: string
   setId: (id: string) => void
}

const Idstore = create<ID>((set) => ({
   id: "init",
   setId(id) {
      set((state) => ({ id: id }))
   },
}))

export default Idstore

interface LoginStoreProps {
   Login: boolean
   setLogin: (Login: boolean) => void
}

export const LoginStore = create<LoginStoreProps>((set) => ({
   Login: false,
   setLogin(Login) {
      set((state) => ({ Login: Login }))
   },
}))

interface Nickname {
   Nickname: string|null
   setNickname: (id: string) => void
}

export const NickNamestore = create<Nickname>((set) => ({
   Nickname: null,
   setNickname(Nickname) {
      set((state) => ({ Nickname: Nickname }))
   },
}))
