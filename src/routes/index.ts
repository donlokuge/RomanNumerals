import express from 'express';
import numberToRoman from '../util/numberToRoman';

const router = express.Router();

router.get('/', (req, res) => {
    const value = req.query.value as string;

    if(!value){
        const error = "Value required!";
        res.status(400).send({ error }).end();
        return;
    }

    if(isNaN(+value) || (/^\d+$/.test(value) === false || +value > 100)){
        const error = "Value should be a integer less lean 100";
        res.status(400).send({ error }).end();
        return;
    }

    res.status(200).json({result: numberToRoman(+value)}).end();

});

export default router;