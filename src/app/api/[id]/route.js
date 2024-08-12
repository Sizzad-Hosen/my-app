export async function PATCH(req,{params}){

const body =await req.json();
const index = users.findIndex((i)=>i.id===parseInt(params.id))
users[index]={
    text:body.text,
}
    return Response.json({
       message:"Users updated",
       users,
    })
}
export async function DELETE(req,{params}){

const body =await req.json();
const newUsers = users.filter((i)=>i.id !==parseInt(params.id))

    return Response.json({
       message:"Users deleted",
       newUsers,
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