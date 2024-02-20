import { NextRequest, NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export const POST = async(request:NextRequest) => {
  // For text-only input, use the gemini-pro model
  const body = await request.json()
  console.log(body)
  const lang = body.q.lang 
  const title = body.q.querysp.disease
  const age = body.q.querysp.age
  console.log(lang)
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt =`Generate the data ${title}  give data regarding information  and after give heading of lifestyle recommendations in new line  ${title} in ${lang}`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return NextResponse.json({text})
}
