const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function answerWithOpenRouter(question, retrievalAnswer, options = {}) {
  const apiKey = options.apiKey || process.env.OPENROUTER_API_KEY;
  const model = options.model || process.env.OPENROUTER_MODEL;

  if (!apiKey || !model) return null;

  const context = retrievalAnswer.chunks
    .map((chunk) => `[${chunk.chunkId}] ${chunk.title}\n${chunk.url}\n${chunk.text}`)
    .join("\n\n---\n\n");

  const response = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
      "http-referer": process.env.OPENROUTER_HTTP_REFERER || "https://enigma.com",
      "x-openrouter-title": process.env.OPENROUTER_APP_TITLE || "Enigma GEO RAG CLI",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content:
            "Answer only from the provided source chunks. Cite chunk ids inline. " +
            "If evidence is weak, say so plainly. Do not invent facts, URLs, or statistics.",
        },
        {
          role: "user",
          content: `Question: ${question}\n\nSource chunks:\n${context}`,
        },
      ],
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenRouter ${response.status}: ${await response.text()}`);
  }

  const payload = await response.json();
  return payload.choices?.[0]?.message?.content?.trim() || null;
}
