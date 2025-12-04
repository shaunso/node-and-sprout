import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
  res.status(200).send(`The Node & Sprout server is live from the Pi 😎.`);
})

router.get('/settings', (req,res) => {
  res.status(200).json({ZONE: 'A', LOCATION: 'Garden South'});
})

export default router;