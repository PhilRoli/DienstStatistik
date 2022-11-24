const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../env/.env') });

module.exports = {
    runMain: async function main() {
        const client = new MongoClient(process.env.MONGOURL);

        try {
            await client.connect();
            const results = await getAllData(client);
            if (results.length == 0) {
                throw new Error('results has a length of 0');
            }
            logAllData(results);
            return results;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    },
};

async function getAllData(client) {
    const cursor = client.db('rettungsgrafana').collection('data').find({});
    const results = await cursor.toArray();
    if (results.length > 0) {
        return results;
    } else {
        throw new Error('results has a length of 0');
    }
}

function logAllData(results) {
    results.forEach((result, i) => {
        console.log(`Dienst Nr. ${i + 1}`);
        console.log(`Date: ${result.date}`);
        console.log(`Daytime: ${result.daytime}`);
        console.log(`Type: ${result.type}`);
        console.log(`KD: ${result.kd}`);
        console.log(`RD: ${result.rd}`);
        console.log(`NA: ${result.na}`);
        console.log(`Sumcalls: ${result.sumcalls}`);
        console.log(`Duration: ${result.duration}`);
        console.log(`Zug: ${result.zug}`);
        console.log(`Car: ${result.car}`);
        console.log(`TF: ${result.tf}`);
        console.log('');
    });
}

// main().catch(console.errorq);
