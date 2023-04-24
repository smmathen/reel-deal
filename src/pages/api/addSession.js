const cors = require('cors');
const { addSession } = require('../../../session');

export default async function handler(req, res) {
  await cors()(req, res, async () => {
    console.log("api call running")
    const { sessionId, storedName } = req.body;

    try {
      addSession(sessionId, storedName)
      res.status(200).json({ message: 'Session added successfully' });
      console.log("sent")
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
}
