import { FileModel, UserModel } from "./types";

export const files: FileModel[] = [

  {
    id: 1,
    desc: "desc",
    size: 8.8,
    type: "Audio",
    originalName: "song.mp3",
    createdAt: "Jan 02, 2024"
  },
  {
    id: 2,
    desc: "desc",
    size: 5.3,
    type: "Audio",
    originalName: "12214231.wav",
    createdAt: "Dec 29, 2023"
  },
  {
    id: 3,
    desc: "desc",
    size: 123,
    type: "File",
    originalName: "book.pdf",
    createdAt: "Dec 06, 2023",
    sharedWith: [1, 2]
  },
  {
    id: 4,
    desc: "desc",
    size: 1223,
    type: "video",
    originalName: "movie.mp4",
    createdAt: "Nov 15, 2023"
  },
  {
    id: 5,
    desc: "desc",
    size: 1.1,
    type: "image",
    originalName: "wallpaper.jpeg",
    createdAt: "Nov 06, 2023"
  },
]

export const users = [
  {
    id: 1,
    avatar: ""
  },
  {
    id: 2,
    avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DXgHpWdgwMU9MOJLwJoxDAHaE7%26pid%3DApi&f=1&ipt=dee9bfafd97b5b983fc8561f913a17c08339e4e09db664370490ec9081e0b5e0&ipo=images"
  },
  {
    id: 3,
    avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NHAnpacKGDm3r_749dAKpwHaHa%26pid%3DApi&f=1&ipt=be0f98884d44481d34cff5b9262a2b4e0650b06d1a7344de05b133d6a237fcaf&ipo=images"
  }

]
