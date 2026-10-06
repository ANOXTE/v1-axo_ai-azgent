import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { defineAgent } from "eve";

const google = createGoogleGenerativeAI({
  apiKey: process.env.CLE_API,
});

export default defineAgent({
  model: google("gemini-2.5-flash"),
});
