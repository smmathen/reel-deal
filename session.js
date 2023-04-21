// const { MongoClient } = require('mongodb');
// const path = require('path');
// require('dotenv').config({ path: path.join(__dirname, '.env.local') });

// if (!process.env.MONGODB_URI) {
//     throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
// }

// const url = process.env.MONGODB_URI;
// const options = {};

// // (async function () {
// //     const client = await MongoClient.connect(url, options);
// //     const db = client.db('reel-deal');
// //     const sessionCollection = db.collection('session');

// //     const query = { code: '23455' };
// //     const result = await db.collection("session").find(query).toArray();
// //     console.log(`Found ${result.length} documents:`);
// //     console.log(result);

// //     sessionCollection.updateOne(
// //         { code: '23455' },
// //         { $push: { users: 'Shawn' } },
// //         (err, updateResult) => {
// //             if (err) {
// //                 console.error(err);
// //                 return;
// //             }

// //             console.log(`Updated ${updateResult.modifiedCount} document(s).`);
// //             console.log(result); // print the result here
// //             client.close();
// //         }
// //     );
// // })();


// (async function createHost(name, code) {
//     const client = await MongoClient.connect(url, options);
//     const db = client.db('reel-deal');
//     const sessionCollection = db.collection('session');

//     const query = { code: '23455' };
//     const result = await db.collection("session").find(query).toArray();
//     console.log(`Found ${result.length} documents:`);
//     console.log(result);

//     sessionCollection.updateOne(
//         { code: '23455' },
//         { $push: { users: 'Shawn' } },
//         (err, updateResult) => {
//             if (err) {
//                 console.error(err);
//                 return;
//             }

//             console.log(`Updated ${updateResult.modifiedCount} document(s).`);
//             console.log(result); // print the result here
//             client.close();
//         }
//     );
// })();



// mongodb.js

const { MongoClient } = require('mongodb');


const MONGODB_URI = process.env.MONGODB_URI;



const connectDB = async () => {
    const client = await MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true });
    const db = client.db('reel-deal');
    const sessionCollection = db.collection('session');
    return {
        client,
        db,
        sessionCollection
    };
};

const addSession = async (sessionId, storedName) => {
    const { sessionCollection, client } = await connectDB();
    const myobj = { _id: sessionId, users: [storedName] };

    await sessionCollection.insertOne(myobj, (err, res) => {
        if (err) throw err;
        console.log(`1 document inserted: ${res.insertedId}`);
        client.close();
    });
};


const joinExistingSession = async (sessionId, storedName) => {
    const { sessionCollection, client } = await connectDB();
    const myobj = { _id: sessionId, users: [storedName] };

    try {
        const result = await sessionCollection.updateOne(
            { _id: sessionId },
            { $push: { users: storedName } }
        );

        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
};

const getUsersInSession = async (sessionId) => {
    const { sessionCollection, client } = await connectDB();

    try {
        console.log("finding doc with sessionId: ", sessionId)
        // const result = await sessionCollection.findOne({ _id: sessionId });
        // const query = { _id: sessionId };
        // const result = await sessionCollection.find(query).toArray();
        // const result = await sessionCollection.find().toArray();
        const result = await sessionCollection.find({_id: 70781}).toArray();

        console.log("result: ", result);
        console.log("result[0].users: ", result[0].users);
        if (result) {
            return result[0].users;
        } else {
            return [];
        }
    } catch (err) {
        console.error(err);
        return [];
    } finally {
        client.close();
    }
};



module.exports = { addSession, joinExistingSession, getUsersInSession };

