import { GoogleGenAI, Modality } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60; // seconds (requires Vercel Pro for >10s)

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY! });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imageBase64, mimeType, prompt } = body as {
      imageBase64: string;
      mimeType: string;
      prompt: string;
    };

    if (!imageBase64 || !prompt) {
      return NextResponse.json(
        { error: "Missing required fields: imageBase64 and prompt" },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: "Server configuration error: API key not set" },
        { status: 500 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-image-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: mimeType || "image/jpeg",
                data: imageBase64,
              },
            },
            { text: prompt},
          ],
        },
      ],
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts || parts.length === 0) {
      throw new Error("No content returned from the AI model.");
    }

    const imagePart =  parts.find(
      (p) => p.inlineData?.mimeType?.startsWith("image/")
    );

    if (!imagePart?.inlineData?.data) {
      // Check if there was a text reason (safety filter, etc.)
      const textPart = parts.find((p) => p.text);
      const reason = textPart?.text ?? "Image generation produced no output.";
      throw new Error(reason);
    }

    return NextResponse.json({
      imageBase64: `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`,
    });
  } catch (err: unknown) {
    console.error("[/api/generate] Error:", err);
    const message =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
