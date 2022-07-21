const { google } = require('googleapis');
const calendar = google.calendar('v3');
const calendarAuth = require('../config/google-api-auth');

function listAllEvents(startDate) {
  // authorize request
  let auth = calendarAuth();

  // list events
  calendar.events.list(
    {
      auth: auth,
      calendarId: process.env.CALENDAR_ID,
      timeMin: startDate
    },
    (err, response) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(response.data.items);
    }
  );
}

listAllEvents(new Date().toISOString());
