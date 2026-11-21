import { profileText } from "@/content/profile-text";

export const dynamic = "force-static";

export function GET() {
  return new Response(profileText(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
