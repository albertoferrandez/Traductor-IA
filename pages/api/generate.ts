import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openAI = new OpenAIApi(config);

type Data = {
  result?: string | undefined;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const prompt = req.query.prompt

  if(!prompt){
    return res.status(400).json({ error: 'Invalid params' })
  }

  const response = await openAI.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 500,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  })

  res.status(200).json({ result: response.data?.choices?.[0]?.text })
}

//`translate ${text}?? in ${flag}`
