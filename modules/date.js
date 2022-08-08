import luxon from './luxon.js';

const date = luxon.DateTime.DATETIME_FULL;
const now = luxon.DateTime.local().toLocaleString(date);

export default now;