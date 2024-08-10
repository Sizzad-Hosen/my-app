export const usePost = async () =>{
    const res = await fetch (`${process.env.api_url}/posts`)
const data = await res.json();
console.log("data is show",data);

return data;
};