import Image from "next/image";
import img1 from "../../../public/img1.webp"
const galaryPage = () => {
    return (
        <div>
           <Image  src={img1}height="1080" width="1920"alt="" />
           {/* <img src="https://images.pexels.com/photos/25626507/pexels-photo-25626507/free-photo-of-shapes-on-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=600"height={1080} width={1920} alt="" />
        */}
{/*        
           <img src="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600"height={1080} width={1920} alt="" />
           <img src="https://images.pexels.com/photos/25626507/pexels-photo-25626507/free-photo-of-shapes-on-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=600"height={1080} width={1920} alt="" />
       
       
           <img src="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600"height={1080} width={1920} alt="" />
           <img src="https://images.pexels.com/photos/25626507/pexels-photo-25626507/free-photo-of-shapes-on-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=600"height={1080} width={1920} alt="" />
        */}
       
        </div>
    );
};

export default galaryPage;