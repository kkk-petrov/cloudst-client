import { Loader } from "@/components/UI/Loader/Loader"
import cl from "./Test.module.scss"

export const Test = () => {
  return (
    <div className={cl.container}>
      <Loader />

    </div>
  )
}
