import express from "express";

const app = express();

const jokes = [
  "😴 पप्पू: यार मुझे नींद नहीं आती",
  "📚 टीचर: बताओ 2+2 कितना होता है?",
  "🏢 बॉस: तुम ऑफिस देर से क्यों आए?",
  "😍 लड़की: तुम इतनी सुंदर कैसे हो?",
  "😂 पप्पू: क्योंकि मैं सोता हूँ!"
];

app.get("/", (req, res) => {
  const getjokes =
    jokes[Math.floor(Math.random() * jokes.length)];

  return res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Jokes App 😂</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #ff4d6d; /* Pink BG */
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card {
        background: white;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        width: 350px;
      }

      h1 {
        font-size: 20px;
        margin-bottom: 20px;
      }

      button {
        background: #ff4d6d;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
      }

      button:hover {
        background: #e63956;
      }
    </style>
  </head>
  <body>

    <div class="card">
      <h1>${getjokes}</h1>
      <form method="GET" action="/">
        <button type="submit">🤣 Another Joke</button>
      </form>
    </div>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("🔥 Server running on http://localhost:3000");
});