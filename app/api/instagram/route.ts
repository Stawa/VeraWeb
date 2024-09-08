import { NextResponse } from "next/server";
import { fetchUser } from "./fetchUser";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const profilePicUrl = await fetchUser(username);
    return NextResponse.json({ profilePicUrl });
  } catch (error) {
    console.error("Error fetching Instagram profile picture:", error);

    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }

    if (
      error instanceof Error &&
      error.message.includes("HTTP error! status: 400")
    ) {
      return NextResponse.json(
        { error: "Invalid Instagram username or profile not found" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to fetch profile picture" },
      { status: 500 }
    );
  }
}
