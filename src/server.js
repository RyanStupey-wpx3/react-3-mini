const express = requires(expresss);

const cors = require(cors);

const bodyParser = require(body-parser)


const app = express();

app.use(cors)


app.use(cors);

app.use(bodyParser.json());

const port = 3000 

app.listen(port, () => console.log(`Server is listen on port ${port}`))

