import express from "express";
import cookieParser from "cookie-parser";

import indexRouter from './routes/index'

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.listen( PORT, () => {
  // tslint:disable-next-line:no-console
console.log( `http://localhost:${ PORT }` );
} );