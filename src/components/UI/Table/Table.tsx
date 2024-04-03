import cl from "./Table.module.scss"
import { FileModel } from "@/types/models"
import { TableItem } from "@/components/TableItem/TableItem"
import { TableHead } from "../TableHead/TableHead"

interface Props {
  files: FileModel[]
}

export const Table = ({ files }: Props) => {

  return (

    <table className={cl.table}>
      <tbody>
        <TableHead />
        {files.map((file) => (
          <TableItem file={file} key={file.id} />
        ))}
      </tbody>
    </table>
  )
}
