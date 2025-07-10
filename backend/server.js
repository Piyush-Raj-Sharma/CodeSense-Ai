import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("✅ CodeSense AI backend is running with Groq!");
});

// Analyze route
app.post("/analyze", async (req, res) => {
  const { code, language, mode } = req.body;

  const prompt = `
You are a ${language} expert. ${
    mode === "explain"
      ? "Explain this code line-by-line."
      : "Find and explain bugs in this code."
  }

\`\`\`${language}
${code}
\`\`\`
`;

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192", 
          messages: [
            {
              role: "system",
              content: "You are a helpful and precise coding assistant.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
      return res.status(500).json({ error: "No response from Groq" });
    }

    const result = data.choices[0].message.content.trim();
    res.json({ result });
  } catch (err) {
    console.error("❌ Error communicating with Groq:", err.message);
    res.status(500).json({
      error: err.message || "Groq request failed",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 CodeSense AI backend running at http://localhost:${PORT}`);
});
