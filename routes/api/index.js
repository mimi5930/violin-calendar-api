const router = require('express').Router();
const { listAllEvents } = require('../../controller/eventList');

router.get('/list-all-events', listAllEvents);

module.exports = router;
