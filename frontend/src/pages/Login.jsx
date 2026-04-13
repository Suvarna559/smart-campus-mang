return (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h2>Login</h2>

    <input
      type="email"
      placeholder="Enter Email"
      onChange={(e) => setEmail(e.target.value)}
    />
    <br /><br />

    <input
      type="password"
      placeholder="Enter Password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <br /><br />

    <button onClick={handleLogin}>Login</button>

    <br /><br />

    {/* 👇 ADD HERE */}
    <a href="/signup">Go to Signup</a>

  </div>
);