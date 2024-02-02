import { useState } from "react"
import cl from "./Auth.module.scss"
import { SigninForm } from "@/components/Auth/SigninForm/SigninForm"
import { SignupForm } from "@/components/Auth/SignupForm/SignupForm"

interface Props {
  page: "signin" | "signup"
}

export const Auth = ({ page }: Props) => {
  const [pageType, setPageType] = useState(page)

  return (
    <div className={cl.container}>
      <SigninForm
        active={pageType === "signin" ? cl.active : ""}
        setPageType={setPageType}
      />
      <SignupForm
        active={pageType === "signup" ? cl.active : ""}
        setPageType={setPageType}
      />
    </div>
  )
}
