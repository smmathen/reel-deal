const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const url = process.env.MONGODB_URI;
const options = {};

(async function () {
    const client = await MongoClient.connect(url, options);
    const db = client.db('reel-deal');
    const sessionCollection = db.collection('session');

    const query = { code: '23455' };
    const result = await db.collection("session").find(query).toArray();
    console.log(`Found ${result.length} documents:`);
    console.log(result);

    sessionCollection.updateOne(
        { code: '23455' },
        { $push: { users: 'Shawn' } },
        (err, updateResult) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(`Updated ${updateResult.modifiedCount} document(s).`);
            console.log(result); // print the result here
            client.close();
        }
    );
})();

