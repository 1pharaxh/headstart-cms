import auth from "@/auth";

export async function GET(_request: Request) {
  console.log(_request);
  const session = await auth();

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response(JSON.stringify(session), { status: 200 });
}
