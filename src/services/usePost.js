export const usePost = async () =>{
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
const data = await res.json();
console.log("data is show",data);

return data;
};