import Vacation from "../assets/Colombia.jpg";

// const reviewTotalDisplay = document.querySelector("#reviews");

const reviews = [
  {
    name: "Andrea",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2024",
  },
  {
    name: "Sergei",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2024",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2024",
  },
];

const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
} = {
  firstName: "Bobby",
  lastName: "Brown",
  isReturning: true,
  age: 23,
};

console.log(you.age);

export const Container = () => {
  return (
    <div className="my-5 flex flex-col items-center">
      <img src={Vacation} alt="" className="w-full" />
      <h2 className="text-xl text-blue-600 m-4">
        reviews total {reviews.length} | last reviewed by {reviews[0].name} ⭐
      </h2>
      <button className="bg-green-800 hover:bg-green-300 hover:text-black text-white font-bold py-2 px-3 rounded-md mb-8">
        Get reviews
      </button>
      <div className="w-11/12 h-[1px] bg-red-400"></div>
      <h3 className="text-lg text-blue-600">
        Other Properties recommended to you:
      </h3>
    </div>
  );
};

export default Container;
