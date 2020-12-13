const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT = 4000 } = process.env

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mongodb database
mongoose.connect('mongodb://ec2-3-89-108-90.compute-1.amazonaws.com:27017/myapp')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`now listening for requests on port: ${PORT}`);
});
