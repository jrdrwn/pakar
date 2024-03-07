import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  const formData = await req.formData();

  const title = formData.get("title");
  const category = formData.get("category");
  const image = formData.get("image");

  let model;
  let inlineData;
  let prompt;
  const safetySettings = [];

  if (image) {
    model = genAI.getGenerativeModel({
      model: "gemini-pro-vision",
      safetySettings,
    });
    prompt = `Create a description from this image with the title: ${title} and category: ${category}`;
    inlineData = {
      data: Buffer.from(await image.arrayBuffer()).toString("base64"),
      mimeType: image.type,
    };
  } else {
    model = genAI.getGenerativeModel({
      model: "gemini-pro",
      safetySettings,
    });
    prompt = `Create a description from this title: ${title} and category: ${category}`;
  }

  const result = await model.generateContent(
    image ? [prompt, { inlineData }] : [prompt],
  );
  const response = result.response;
  const text = response.text();

  return NextResponse.json({ description: text });
}
