import Logo from "../assets/yellow-sofa.png";

let age: number = 100;
let firstName: string = "Angela";
let busy: boolean = true;

console.log(`
  ${age}
   ${firstName}
    ${busy}
  `);

export const Navbar = () => {
  return (
    <div className="w-full bg-white sticky flex justify-between items-center shadow-md shadow-gray-500">
      <div>
        <img src={Logo} alt="Logo Couchsurfing " className="w-16" />{" "}
      </div>

      <div className="m-5">
        <h1 className="text-xl text-blue-700">
          Welcome back {firstName}
          <span id="returning-user"></span>
          <span id="user"></span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
