import axios from "axios";

const INSTAGRAM_API_URL =
  "https://i.instagram.com/api/v1/users/web_profile_info/";
const USER_AGENT =
  "Instagram 278.0.0.19.116 Android (30/11; 480dpi; 1080x2400; samsung; SM-G981B; x1s; exynos990; en_US; 463803869)";

interface InstagramApiResponse {
  data: {
    user: {
      profile_pic_url_hd: string;
      profile_pic_url: string;
    };
  };
}

function extractUsername(input: string): string {
  if (input.startsWith("https://") || input.startsWith("http://")) {
    const url = new URL(input);
    const pathParts = url.pathname.split("/").filter(Boolean);
    return pathParts[0];
  }
  return input;
}

async function fetchInstagramProfile(username: string): Promise<string> {
  const url = `${INSTAGRAM_API_URL}?username=${encodeURIComponent(username)}`;
  const response = await axios.get(url, {
    headers: {
      "User-Agent": USER_AGENT,
      "Accept-Language": "en-US",
      "Accept-Encoding": "gzip, deflate",
      Accept: "application/json",
      Connection: "keep-alive",
    },
    responseType: "text", // Handle as text to inspect HTML if needed
  });

  // Check if content-type is application/json
  if (response.headers["content-type"].includes("application/json")) {
    const data = JSON.parse(response.data) as InstagramApiResponse;
    const profilePicUrl =
      data.data.user.profile_pic_url_hd || data.data.user.profile_pic_url;
    if (!profilePicUrl) {
      throw new Error("Profile picture URL not found");
    }
    return profilePicUrl;
  } else {
    // Log the response data to understand the HTML response
    console.error("Unexpected content type:", response.headers["content-type"]);
    throw new Error("Unexpected content type received");
  }
}

export async function fetchUser(input: string): Promise<string> {
  if (!input) {
    throw new Error("Username or URL is required");
  }

  try {
    const username = extractUsername(input);
    if (!username) {
      throw new Error("Invalid Instagram URL or username");
    }

    return await fetchInstagramProfile(username);
  } catch (error) {
    console.error("Error fetching Instagram profile picture:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Response Body:", error.response.data);
      throw new Error(`HTTP error! status: ${error.response.status}`);
    }
    throw error;
  }
}
