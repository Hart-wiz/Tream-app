export default function Footer() {
  return (
    <div className="bg-gray-900 text-white flex justify-between px-20 text-[0.9rem] items-center py-9 gap-19">
      <div>
        <h1 className="text-8xl text-red-600 font-extrabold">TREAM</h1>
        <p className="pl-5">copyright {new Date().getFullYear()}</p>
        <h3 className="pl-5 font-bold text-blue-300">
          Designed by WECONETDATA TECHNOLOGIES
        </h3>
      </div>
      <ul className="">
        <li>
          <a href="">privacy Policies</a>
        </li>
        <li>
          <a href="">Laws unmentioned</a>
        </li>

        <li>
          <a href="">Guiding laws</a>
        </li>
        <li>
          <a href=""> regulatory policies</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">Report & customercare</a>
        </li>
        <li>
          <a href="">partnership </a>
        </li>
        <li>
          <a href="">Taxes in countries</a>
        </li>
        <li>
          <a href="">regulations</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">Partner with us</a>
        </li>

        <li>
          <a href="">general inputs</a>
        </li>
        <li>
          <a href="">Taxes & laws</a>
        </li>
        <li>
          <a href="">how we work</a>
        </li>
      </ul>
    </div>
  );
}
