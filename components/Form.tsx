import Image from "next/image";
import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  SetStateAction,
} from "react";
import { lenguas } from "./lenguas";

interface Props {
  search: FormEventHandler<HTMLFormElement>;
  textSearch: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  error: string;
  setFlag: Dispatch<SetStateAction<string>>;
  loading: boolean;
}

const Form = ({
  search,
  textSearch,
  handleChange,
  error,
  setFlag,
  loading,
}: Props) => {
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
      <div className="h-7">
        {error && (
          <p className="text-center text-white bg-red-500 rounded"> {error} </p>
        )}
      </div>

      <div className="mt-10">
        <h1 className="text-center text-xl font-extrabold">
          ¿A QUE IDIOMA QUIERES TRADUCIRLO?
        </h1>
        <div className="mt-14 h-14 flex justify-center items-center">
          <select
            name="languages"
            id="languages"
            onChange={(e) => setFlag(e.target.value)}
            className="p-4 w-full bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={''}>Selecciona un idioma :</option>
            {lenguas.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
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
  );
};

export default Form;
