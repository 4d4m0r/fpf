import express ,{ Request, Response} from "express";
import dotenv from "dotenv";
import router from './router'
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors'
import morgan from 'morgan'

declare module "express-session" {
    interface SessionData{
      uid: string;
    }
  }

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use(
    session({
      genid: (req) => uuidv4(),
      secret: 'Hi9Cf#mK9Dm#@SmA76#4MP2sm@18',
      resave: true,
      saveUninitialized: true,
    }),
  );
app.use(morgan('short'));
app.use(cors({credentials: true,origin: "http://localhost:4200"}));
app.use(express.json())
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });