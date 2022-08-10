import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://manohar:nyxwolves@ac-uc2ssjs-shard-00-00.hwecfre.mongodb.net:27017,ac-uc2ssjs-shard-00-01.hwecfre.mongodb.net:27017,ac-uc2ssjs-shard-00-02.hwecfre.mongodb.net:27017/?ssl=true&replicaSet=atlas-on3mnz-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
     
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;