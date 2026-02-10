
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getWeddingConsultation = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are an AI Wedding Assistant for 'Deepak Photography Dosarka' (Owner: Deepak Kumar), based in Hoshiarpur, Punjab. 
        You provide professional advice on:
        1. Bridal Makeup trends (especially for Punjabi weddings).
        2. Wedding photography poses and cinematic videography styles.
        3. Pre-wedding shoot locations in Punjab.
        4. General wedding planning tips.
        Always be polite, elegant, and festive. Mention that bookings are open for 2025-2026. If the user asks for pricing or booking, direct them to call +91 94642 58391.`,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please contact Deepak Kumar directly at +91 94642 58391.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI assistant is currently resting. Please reach out to us via WhatsApp!";
  }
};
