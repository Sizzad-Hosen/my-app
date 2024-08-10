import Link from "next/link";



const AboutContent = () => {
    return (
        <div>
               <h2 className="text-3xl">
                <li><Link href="/about/history">history</Link></li>
                <li><Link href="/about/mission">mission</Link></li>
                
            </h2>
        </div>
    );
};

export default AboutContent;