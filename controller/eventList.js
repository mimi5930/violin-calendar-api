const { google } = require('googleapis');
const calendar = google.calendar('v3');
const calendarAuth = require('../config/google-api-auth');

function listCalendars(startDate) {
  let auth = calendarAuth();
  // let currentDate = new Date().toISOString();
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

listCalendars(new Date().toISOString());
