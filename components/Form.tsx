
import Image from "next/image";
import { ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction } from "react";
import { languages } from "./languages";

interface Props {
    search: FormEventHandler<HTMLFormElement>;
    textSearch: string;
    handleChange: ChangeEventHandler<HTMLTextAreaElement>;
    error: string;
    setFlag: Dispatch<SetStateAction<string>>;
    loading: boolean;
}

const Form = ({ search, textSearch, handleChange, error, setFlag, loading }:Props) => {
  return (
    <form onSubmit={search}>
        <h1 className="text-xl font-extrabold text-center">
          ¿QUE QUIERES TRADUCIR?
        </h1>
        <textarea
          value={textSearch}
          onChange={handleChange}
          placeholder="Buenos dias, como podria mandarle mi curriculum vitae . . ."
          className={`${
            error === "" ? "border-0" : "border border-red-500"
          } resize-none border-0 h-40 w-full p-7 rounded-md mt-5 text-lg focus:outline-none`}
        />
        <div className="h-7">{error && <p className="text"> {error} </p>}</div>

        <div className="mt-10">
          <h1 className="text-center text-xl font-extrabold">
            ¿A QUE IDIOMA QUIERES TRADUCIRLO?
          </h1>
          <ul className="flex items-center justify-center mt-5 flex-wrap">
            {languages.map((language) => (
              <li key={language.language} className="mx-6 mt-6">
                <input
                  type="radio"
                  id={language.language}
                  name="languages"
                  value={language.language}
                  onChange={(e) => setFlag(e.target.value)}
                  className="hidden"
                />
                <label htmlFor={language.language} className="cursor-pointer opacity-50 mb-3">
                  <Image
                    src={language.flag}
                    alt={language.language}
                    height={32}
                    width={32}
                    className="mx-6"
                  />

                  <div role="tooltip" className="opacity-0 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700">
                    {language.tooltip}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 h-14 flex justify-center items-center">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
            disabled={loading}
          >
            <span className="relative text-lg font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              TRADUCIR
            </span>
          </button>
        </div>
      </form>
  )
}

export default Form
