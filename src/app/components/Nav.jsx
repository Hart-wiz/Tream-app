import Image from "next/image";
import { icon } from "../assets/assets";

export default function Nav() {
  return (
    <div className="z-30 text-white fixed w-full bg-transparent flex justify-between py-7 px-7 items-center">
      <div className="flex gap-30  ">
        <h1 className="font-bold text-red-500 text-3xl">Tream</h1>
        <ul className="flex gap-7">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Trending</a>
          </li>
          <li>
            <a href="">Hollywood</a>
          </li>
          <li>
            <a href="">K-dramas</a>
          </li>
        </ul>
      </div>
      <ul className="flex gap-4 justify-center items-center">
        <li>
          <a href="">
            <Image src={icon.search} alt="search" />
          </a>
        </li>
        <li>
          <a href="">Children</a>
        </li>
        <li>
          <a href="">
            <Image src={icon.bell} alt="bell" />
          </a>
        </li>
        <li className="flex gap-1 justify-center items-center">
          <a href="">
            <Image src={icon.profile} alt="profile" />
          </a>

          <a href="">
            <Image src={icon.caret} alt="caret" />
          </a>
        </li>
      </ul>
    </div>
  );
}
