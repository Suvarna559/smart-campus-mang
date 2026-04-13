export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // TEMP: allow any login
    if (email && password) {
      return res.status(200).json({ message: "Login success ✅" });
    } else {
      return res.status(401).json({ message: "Invalid ❌" });
    }
  }
}