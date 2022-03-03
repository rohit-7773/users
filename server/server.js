import jsonServer from 'json-server';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const users = [
    {
        name: 'rohit',
        username: 'rohit_username',
        password: 'rohit_password'
    },
    {
        name: 'akhil',
        username: 'akhil_username',
        password: 'akhil_password'
    },
    {
        name: 'shreyas',
        username: 'shreyas_username',
        password: 'shreyas_password'
    }
]

const secret_key = 'my_awesome_secret_key';

const server = jsonServer.create();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(middlewares);

const createToken = payload => {
    return jwt.sign(payload, secret_key);
}

const verifyToken = token => {
    return jwt.verify(token, secret_key, (err, decode) => decode !== undefined ?  decode : err)
}

const authenticate = ({username, password}) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            console.log(users[i].username)
            if (users[i].password === password) {
                return users[i];
            }
        }
    }
    return null;
}

server.post('/register', (req, res) => {
    const {name, username, password} = req.body;
    const user = users.find(user => user.username == username);
    if (user != null) {
        const message = 'user is already registered';
        res.status(400).json({message});
    }
    users.push({name, username, password});
    const access_token = createToken({username, password})
    res.status(200).json({access_token})
})

server.post('/login', (req, res) => {
    const {username, password} = req.body;
    const user = authenticate({username, password});
    console.log(user)
    if (user == null) {
        const message = 'user is not registered';
        res.status(401).json({message});
        return
    }
    const access_token = createToken({username, password})
    res.status(200).json({access_token})
})

server.use((req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
        const message = 'please provide the access token'
        res.status(401).json({message})
        return
    }

    const verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);
    if (verifyTokenResult instanceof Error) {
        const message = 'Access token is not valid'
        res.status(401).json({message})
        return
    }
    next();
})

server.use(router);

server.listen(8000, () => {
    console.log('server is up and running on port 8000...');
})


