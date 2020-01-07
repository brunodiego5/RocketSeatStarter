const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// iniciando o db
mongoose.connect('mongodb://192.168.99.100:27017/nodejsapi', 
    { useNewUrlParser: true,   useUnifiedTopology: true 
});

requireDir('./src/models');

const Product = mongoose.model('Product');

// primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    })

    return res.send('Hello Rocketseat');
});

app.listen(3001);