const { addSession } = require('../../../session');

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const sessionId = Math.floor(Math.random() * 90000) + 10000;
//       const storedName = req.body.storedName;
//       await addSession(sessionId, storedName);
//       res.status(200).json({ sessionId });
//     } else {
//       res.status(405).json({ message: 'Method Not Allowed' });
//     }
//   }
  
export default async function handler(req, res) {
    console.log("api call running")
    const { sessionId, storedName } = req.body;
  
    try {
      addSession(sessionId, storedName)
      res.status(200).json({ message: 'Session added successfully' });
      console.log("sent")
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }