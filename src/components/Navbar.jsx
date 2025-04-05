import Button from "./Button";
import { nanoid } from "nanoid";

const Navbar = () => {
  return (
    <nav data-scroll-section className="relative z-10 max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-[var(--grey-600)]">
      <div data-scroll className="navLeft flex items-center gap-18">
        <figure data-scroll id="logo">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt="logo"
          />
        </figure>
        <ul data-scroll className="flex items-center gap-10">
          {["Home", "Work", "Culture", "", "News"].map((item, index) => {
            if (item.length === 0) {
              return (
                <span key={nanoid()} className="inline-block w-[1px] h-6 bg-[var(--grey-400)]"></span>
              );
            } else {
              return (
                <li key={nanoid()}>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-1"
                  >
                    {index === 1 && (
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_0.25em_#00FF19]"></span>
                    )}
                    <span
                      className={`${index === 1 && "font-semibold"} capitalize`}
                    >
                      {item}
                    </span>
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div data-scroll className="navRight">
        <Button data-scroll text={"get started"} />
      </div>
    </nav>
  );
};

export default Navbar;
