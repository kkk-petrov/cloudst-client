import { FaCaretDown } from "react-icons/fa";
import cl from "./TableHead.module.scss";

interface Props {

}

export const TableHead = ({ }: Props) => {

  return (

    <thead>
      <tr style={{ color: "#626366" }}>
        {/* 
          <td><Checkbox /></td> TODO: checkbox
        */}
        <td className={cl.head}>
          Name{" "}
          <FaCaretDown
            style={{ verticalAlign: "top" }}
            size={20}
            className={cl.sort}
          />
        </td>
        <td className={cl.head}>
          Type{" "}
          <FaCaretDown
            style={{ verticalAlign: "top" }}
            size={20}
            className={cl.sort}
          />
        </td>
        <td className={cl.head}>
          Size{" "}
          <FaCaretDown
            style={{ verticalAlign: "top" }}
            size={20}
            className={cl.sort}
          />
        </td>
        <td className={cl.head}>
          Last modified{" "}
          <FaCaretDown
            style={{ verticalAlign: "top" }}
            size={20}
            className={`${cl.sort} ${cl.active}`}
          />
        </td>
        <td style={{ textAlign: "center" }}>Shared with</td>
        <td />
      </tr>
    </thead>
  )
}
