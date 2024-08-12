import { headers } from "next/headers";

export async function GET(){


    return Response.json(users,{
     headers:{
        "Set-Cookie" : "theme-dark"
     }
    })
}
export async function POST(req){
  const newUsers = req.json();
  users.push({
    id:users.length + 1,
    text:newUsers.text
  })

    return Response.json({
       message:"new Users added",
       users,
    })
}

const users = [
    {
        id:1,
        name:"sizzad",
        age:"21"
    },
    {
        id:2,
        name:"rahim",
        age:"22"
    },
    {
        id:1,
        name:"raju",
        age:"23"
    },
    {
        id:1,
        name:"saju",
        age:"24"
    },
]