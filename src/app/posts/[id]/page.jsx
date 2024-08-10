import { redirect } from "next/dist/server/api-utils";

const getDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  if(data)
  {
    redirect(`/posts/${data[0].id}`)
  }
  return data;
};

export const generateMetadata = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`); 
  const postData = await res.json(); 
  console.log(postData);

  return {
    title: {
      absolute: `${postData.title}`,
    },
    description: postData.body,
    keywords: postData.body.split(' '),
  };
};

const postDetails = async ({ params }) => {
  const { title, body, id } = await getDetails(params.id);

  return (
    <div>
      <div className="border p-6">
        <h2 className="text-2xl">Title: {title}</h2>
        <p className="text-lg">Description: {body}</p>
      </div>
    </div>
  );
};

export default postDetails;
