import Meals from "../components/Meals";
export const metadata = {
    title:{
        absolute:"Meals",
    },
    
    description: "Generated by create next app",
  };
const MealPage = () => {
    return (
        <div>
            <h2 className="text-red-600">Choose Your Meals</h2>
            <h2 className="text-red-600">Choose Your Meals By Searching</h2>
            <Meals></Meals>
        </div>
    );
};

export default MealPage;