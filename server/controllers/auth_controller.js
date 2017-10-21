module.exports = {
  register: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { session } = req;

    dbInstance.create_user(req.body)
      .then(response => {
        var { id, username } = response[0];
        session.user.user_id = id;
        session.user.username = username;
        res.send(session.user) })
      .catch(error => console.log('error', error));
  },

  login: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { session } = req;

    dbInstance.login_user(req.body).then(response => {
      var { id, username }= response[0];
      if(id != 0) {
        session.user.user_id = id;
        session.user.username = username;
        res.send(session.user)
      } else {
        res.status(500).send();
      }
    });
  },

  signout: (req, res, next) => {
    const { session } = req;
    session.destroy();
    res.send("Session destroyed.");
  }
}