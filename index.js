import express from "express";
const app = express();
app.use(express.json());

let emojis = [
  { id: 1, character: "😀", name: "Grinning Face" },
  { id: 2, character: "🚀", name: "Rocket" },
  { id: 3, character: "🌟", name: "Star" },
  { id: 4, character: "🎉", name: "Party Popper" },
  { id: 5, character: "🐱", name: "Cat Face" },
  { id: 6, character: "🌺", name: "Hibiscus" },
  { id: 7, character: "🍔", name: "Hamburger" },
  { id: 8, character: "🚲", name: "Bicycle" },
  { id: 9, character: "📚", name: "Books" },
  { id: 10, character: "🎈", name: "Balloon" },
  { id: 11, character: "🍕", name: "Pizza" },
  { id: 12, character: "🏖️", name: "Beach with Umbrella" },
  { id: 13, character: "🎸", name: "Guitar" },
  { id: 14, character: "🌈", name: "Rainbow" },
  { id: 15, character: "🌊", name: "Ocean Wave" },
  { id: 16, character: "🍦", name: "Ice Cream" },
  { id: 17, character: "🎨", name: "Artist Palette" },
  { id: 18, character: "🐶", name: "Dog Face" },
  { id: 19, character: "🌄", name: "Sunrise Over Mountains" },
  { id: 20, character: "🎓", name: "Graduation Cap" },
  { id: 21, character: "🍂", name: "Fallen Leaf" },
  { id: 22, character: "🍁", name: "Maple Leaf" },
  { id: 23, character: "🎃", name: "Jack-O-Lantern" },
  { id: 24, character: "🎄", name: "Christmas Tree" },
  { id: 25, character: "❄️", name: "Snowflake" },
  { id: 26, character: "🌻", name: "Sunflower" },
  { id: 27, character: "🌍", name: "Earth Globe Europe-Africa" },
  { id: 28, character: "🌞", name: "Sun with Face" },
  { id: 29, character: "🌚", name: "New Moon Face" },
  { id: 30, character: "🎶", name: "Musical Notes" },
];

app.get("/emojis", (req, res) => {
  res.json({ emojis });
});

app.get("/emojis/:id", (req, res) => {
  const emojiId = parseInt(req.params.id);
  const emoji = emojis.find((e) => e.id === emojiId);

  if (!emoji) {
    return res.status(404).json({ error: "Emoji not found" });
  }

  res.json({ emoji });
});

app.post("/emojis", (req, res) => {
  const { name, character } = req.body;

  if (!name || !character) {
    return res.status(400).json({ error: "Name and character are required" });
  }

  const newId = emojis.length + 1;
  const newEmoji = { id: newId, name, character };
  emojis.push(newEmoji);

  res.status(201).json({ emoji: newEmoji });
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
