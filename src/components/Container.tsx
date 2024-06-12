import Vacation from "../assets/Colombia.jpg";

export const Container = () => {
  return (
    <div className="my-5 flex flex-col items-center">
      <img src={Vacation} alt="" className="w-full" />
      <h2 className="text-xl text-blue-600 m-4">reviews</h2>
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
