let users = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      res.status(200).json({ message: "Login successful ✅" });
    } else {
      res.status(401).json({ message: "Invalid credentials ❌" });
    }
  }
}