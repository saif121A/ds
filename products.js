export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, name: "آيفون", price: 3500, image: "https://via.placeholder.com/300" },
      { id: 2, name: "سماعة", price: 250, image: "https://via.placeholder.com/300" },
      { id: 3, name: "لابتوب", price: 4200, image: "https://via.placeholder.com/300" },
    ]);
  } else if (req.method === 'POST') {
    // هنا يمكنك استقبال البيانات، لكن لا يمكن حفظها في الذاكرة بشكل دائم على Vercel
    res.status(200).json({ message: "تم الاستلام بنجاح" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}