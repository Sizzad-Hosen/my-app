import { usePost } from "@/services/usePost";
import Link from 'next/link';
const PostPage =async () => {
const postsData =await usePost();


  return (
    <div className="grid grid-cols-4 gap-2">
      {postsData?.map((post) => {
        const { title, body, id } = post;

        return (
          <div key={id} className="border p-6">
            <h2 className="text-2xl">Tittle : {title}</h2>
            <p className="text-lg">Description : {body}</p>
          <button className="btn-block btn-wide p-2 bg-blue-400">  <Link href={`/posts/${id}`}> See Details</Link></button>
          </div>
        );
      })}
    </div>
  );
};

export default PostPage;
