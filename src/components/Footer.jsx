import { myFooter } from "../data/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-violet-200 pt-7 pb-5">
      <div className="flex flex-col items-center justify-center text-slate-900 ">
        <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
          {myFooter.titles.map((val, i) => (
            <div key={i} className="grid items-center">
              <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                {val.title}
              </h1>
            </div>
          ))}
          {myFooter.subtitles.map((list, i) => (
            <ul key={i} className="grid items-center gap-1">
              {list.map((val, i) => (
                <li key={i} className="text-sm sm:text-xs">
                  {val.subtitle}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="text-sm md:text-center">
           By <span className="font-bold">Serkan Bindal @{year}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
