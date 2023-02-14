"use client";

import Image from "next/image";
import { ChangeEvent } from "react";
import useTraduce from "../hooks/useTraduce";
import Form from "./Form";
import Spinner from "./Spinner";
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
  const notify = () => toast('Copiado en el portapapeles!');
  const {
    setFlag,
    text,
    setText,
    loading,
    error,
    setError,
    result,
    handleSubmit,
  } = useTraduce();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setError("");
    setText(event.target.value);
  };

  const copyText = async () => {
    try {
      notify()
      await navigator.clipboard.writeText(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mt-7">
      <Form
        search={handleSubmit}
        textSearch={text}
        handleChange={handleChange}
        error={error}
        setFlag={setFlag}
        loading={loading}
      />

      {loading ? (
        <Spinner />
      ) : (
        <article className="bg-white h-40 p-7 rounded-md mt-3 text-lg overflow-auto relative">
          <button onClick={copyText} className="absolute top-0 right-0 p-3">
          <Toaster />
            <Image
              src={"/images/clipboard.svg"}
              alt={"copytoclipboard icon"}
              width={32}
              height={32}
            />
          </button>
          {result && <p>{result}</p>}
        </article>
      )}
    </section>
  );
};

export default Main;
