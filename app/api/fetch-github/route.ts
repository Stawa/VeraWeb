import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url || typeof url !== "string") {
    return NextResponse.json(
      { error: "URL parameter is required and must be a string" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    const data = await response.text();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
