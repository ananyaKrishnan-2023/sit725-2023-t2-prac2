let express = require('express');

let app = express();


let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/add', (req, res) => {
    const number1 = Number(req.query.num1);
    const number2 = Number(req.query.num2);

        const sum = number1 + number2;
        res.render('result', { result: sum });
    }
);

app.get('/multiply', (req, res) => {
    const number1 = Number(req.query.num1);
    const number2 = Number(req.query.num2);

        const multiply = number1 * number2;
        res.render('result', { result: multiply });
    }
      
);

app.listen(port, () => {
    console.log('server started');
});