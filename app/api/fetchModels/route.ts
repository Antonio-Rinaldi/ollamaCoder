const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

export async function GET(req: Request) {

  const response= await fetch(`${OLLAMA_BASE_URL}/api/tags`, {
    method: "GET",
  })
  return new Response(response.body);
}

export const runtime = "edge";
