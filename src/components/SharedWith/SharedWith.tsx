import { FileModel, UserModel } from "@/types/models";
import cl from "./SharedWith.module.scss";
import { userService } from "@/services";
import { useEffect, useState } from "react";

interface Props {
  file: FileModel
}

export const SharedWith = ({ file }: Props) => {
  const [sharedWith, setSharedWith] = useState<UserModel[]>([]);


  useEffect(() => {
    const fetchSharedWith = async () => {
      if (file.sharedWith) {
        const users = await userService.getMany(file.sharedWith);
        setSharedWith(users);
      }
    };

    fetchSharedWith();
  }, [file.sharedWith]);

  return (
    <div className={cl.container}>
      {
        sharedWith.length !== 0
          ? sharedWith.map((user) => (
            <img
              className={cl.img}
              src={user.avatar === "" ? "/user.png" : user.avatar}
              alt="avatar"
              height={30}
              width={30}
              key={user.id}
            />
          ))
          : "Only you"
      }
    </div>

  )
}
