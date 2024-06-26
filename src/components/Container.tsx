import Vacation from "../assets/Colombia.jpg";
import Img1 from "../assets/Colombia.jpg";
import Img2 from "../assets/London-UK.jpg";
import Img3 from "../assets/Poland-Lipowa.jpg";
import { Permissions, LoyaltyUser } from "../enums.tsx";
import { Price, Country } from "../type.tsx";

// const reviewTotalDisplay = document.querySelector("#reviews");

const reviews: any[] = [
  {
    name: "Andrea",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2024",
  },
  {
    name: "Sergei",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2024",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2024",
    description: "The place is amazing, I love it.",
  },
];

const you = {
  firstName: "Bobby",
  lastName: "Goren",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 42,
  stayedAt: ["Florida Home", "Oman Flat", "Tokyo Bungalow"],
};

console.log(you.permissions);

const properties: {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: Country;
  };
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    image: Img1,
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "Schack 37",
      city: "Bogota",
      code: 45623,
      country: "Colombia",
    },
    contact: "colombian@mail.com",
    isAvailable: true,
  },
  {
    image: Img2,
    title: "Polish Cottage",
    price: 30,
    location: {
      firstLine: "No 33",
      city: "Gdansk",
      code: 34664,
      country: "Poland",
    },
    contact: "poland@mail.com",
    isAvailable: false,
  },
  {
    image: Img3,
    title: "London Flat",
    price: 45,
    location: {
      firstLine: "Flat 15",
      city: "London",
      code: 45623,
      country: "United Kingdom",
    },
    contact: "london@mail.com",
    isAvailable: true,
  },
];

console.log(properties);

export const Container = () => {
  return (
    <div className="m-5 flex flex-col items-center sm:m-8 lg:m-12">
      <img
        src={Vacation}
        alt=""
        className="w-full sm:max-w-[850px] min-h-[400px] max-h-[600px] "
      />
      <h2 className="text-xl text-blue-600 m-4">
        reviews total {reviews.length} | last reviewed by {reviews[0].name} ⭐
      </h2>
      <button className="bg-green-800 hover:bg-green-300 hover:text-black text-white font-bold py-2 px-3 rounded-md mb-8">
        Get reviews
      </button>
      <div className="w-11/12 h-[1px] bg-red-400"></div>
      <h3 className="text-lg text-blue-600 mt-4">
        Other Properties recommended to you:
      </h3>
      <div className="flex flex-wrap">
        <div className="text-center text-blue-600 rounded-md m-5 shadow-md">
          <img
            src={Img1}
            alt=""
            className="w-[300px] h-[280px] m-2 rounded-2xl p-2  "
          />
          <h1 className="text-xl">{properties[0].title} </h1>
          <p className="text-black">{properties[0].price}$ / night</p>
        </div>
        <div className="text-center text-blue-600 rounded-md m-5 shadow-md">
          <img
            src={Img3}
            alt=""
            className="w-[300px] h-[280px] m-2 rounded-2xl p-2 shadow-md "
          />
          <h1 className="text-xl">{properties[1].title} </h1>
          <p className="text-black">{properties[1].price}$ / night</p>
        </div>
        <div className="text-center text-blue-600 rounded-md m-5 shadow-md">
          <img
            src={Img2}
            alt=""
            className="w-[300px] h-[280px] m-2 rounded-2xl p-2 shadow-md "
          />
          <h1 className="text-xl">{properties[2].title} </h1>
          <p className="text-black">{properties[2].price}$ / night</p>
        </div>
      </div>
    </div>
  );
};

export default Container;
