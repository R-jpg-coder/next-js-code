app.get('/auth', (req, res) => {
    let username = req.query.username || '';
    const password = req.query.password || '';
    username = username.replace(/[!@#$%^&*]/g, '');
    if (!username || !password || !users[username]) {
      return res.sendStatus(400);
    }
    crypto.pbkdf2(
      password,
      users[username].salt,
      10000,
      512,
      'sha512',
      (err, hash) => {
        if (users[username].hash.toString() === hash.toString()) {
          res.sendStatus(200);
        } else {
          res.sendStatus(401);
        }
      }
    );
  });