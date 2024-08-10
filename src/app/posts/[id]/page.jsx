import { redirect } from "next/dist/server/api-utils";

const getDetails = async (id) => {
  console.log("id is here",id);

  const res = await fetch(`${process.env.api_url}/posts/${id}`);
  const data = await res.json();
  console.log(data);

  return data;
};

export const generateMetadata = async ({ params }) => {
  const res = await fetch(`${process.env.api_url}/posts/${params.id}`); 
  const postData = await res.json(); 
  console.log(postData);

  return {
    title: {
      absolute: `${postData?.title}`,
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
