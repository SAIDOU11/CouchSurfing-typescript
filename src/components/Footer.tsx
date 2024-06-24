let currentLocation: [string, string, number] = ["Paris", "05:19", 17];

export const Footer = () => {
  return (
    <div className="w-full bg-red-400 text-white py-12 text-center">
      {`${currentLocation[0]}. ${currentLocation[1]}. ${currentLocation[2]}° `}
    </div>
  );
};

export default Footer;
