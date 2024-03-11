const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const hospitalsRoute = require('./routes/hospitals');

app.use(express.json());

// app.use(cors({
//   origin: [
//     'http://localhost:3000',
//     'https://main.d39yfvofeps87t.amplifyapp.com/' 
//   ],
//   credentials: true 
// }));
const corsOption = {
    origin: ['https://main.d39yfvofeps87t.amplifyapp.com', 'http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));

// app.get('/message', (req, res) => {
//   res.json({ message: "Hello from backend!" });
// })

app.use('/api', hospitalsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
