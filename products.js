export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, title: "آيفون", price: 3500, image: "https://via.placeholder.com/300" },
      { id: 2, title: "سماعة", price: 250, image: "https://via.placeholder.com/300" },
      { id: 3, title: "لابتوب", price: 4200, image: "https://via.placeholder.com/300" }
    ]);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}