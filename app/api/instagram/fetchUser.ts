import axios from "axios";

async function fetchInstagramProfile(username: string): Promise<string> {
  const url = "https://indownloader.app/request";
  const data = `link=https://www.instagram.com/${encodeURIComponent(username)}/&downloader=avatar`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "en-US,en;q=0.9,id;q=0.8,ru;q=0.7",
        Origin: "https://indownloader.app",
        Referer: "https://indownloader.app/profile-picture-downloader",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        Connection: "keep-alive",
      },
    });

    if (response.data && response.data.html) {
      const match = response.data.html.match(
        /src="(https:\/\/indownloader\.app\/file\?id=[^"]+)"/
      );
      if (match && match[1]) {
        return match[1];
      }
    }
    throw new Error("Profile picture URL not found");
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Response Body:", error.response.data);
      throw new Error(`HTTP error! status: ${error.response.status}`);
    }
    throw error;
  }
}

function extractUsername(input: string): string {
  if (input.startsWith("https://") || input.startsWith("http://")) {
    const url = new URL(input);
    const pathParts = url.pathname.split("/").filter(Boolean);
    return pathParts[0];
  }
  return input;
}

export async function fetchUser(input: string): Promise<string> {
  if (!input) {
    throw new Error("Username or URL is required");
  }

  const username = extractUsername(input);
  if (!username) {
    throw new Error("Invalid Instagram URL or username");
  }

  try {
    return await fetchInstagramProfile(username);
  } catch (error) {
    console.error("Error fetching Instagram profile picture:", error);
    throw error;
  }
}
