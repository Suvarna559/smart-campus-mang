let users = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    users.push({ email, password });

    res.status(200).json({ message: "Signup successful ✅" });
  }
}