import * as mongoose from 'mongoose';

export class DBConnection {

    async connectToDB() {
        await mongoose.connect("mongodb+srv://mosheShemoon:Qq32323232@cluster0-2fzz1.mongodb.net/test?retryWrites=true&w=majority", {

            useNewUrlParser: true,
        
            useCreateIndex: true,
            useUnifiedTopology: true 
        
        });
    }

    async disconnectFromDB() {
        if (mongoose.connection.readyState === 1) {
            await mongoose.disconnect();
        }
    }
}
