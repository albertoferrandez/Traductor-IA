import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";

const useTraduce = () => {
  const [text, setText] = useState("");
  const [flag, setFlag] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(
    "Good morning, how could I send my resume?"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (text === "" || flag === "") {
      setError("No hay nada para traducir!!!");
      return;
    } else {
      setError("");
    }

    const toTranslate = `translate ${text} in ${flag}`;

    if (toTranslate) {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/generate?prompt=" + encodeURIComponent(toTranslate)
        );
        const body = await response.json();

        setResult(body.result);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  }
  return {
    flag,
    setFlag,
    text,
    setText,
    setLoading,
    loading,
    error,
    setError,
    result,
    setResult,
    handleSubmit
  };
};

export default useTraduce;
