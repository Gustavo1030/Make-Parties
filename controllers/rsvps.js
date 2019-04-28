module.exports = (app, models) => {  // NEW
  app.get('/events/:eventId/rsvps/new', (req, res) => {
    models.Event.findByPk(req.params.eventId).then(event => {
      res.render('rsvps-new', { event: event });
    });
  });
}

app.post('/events/:eventId/rsvps', (req, res) => {
     Event.hasMany(models.Rsvp);
    models.Rsvp.create(req.body).then(rsvp => {
        res.redirect(`/events/${req.params.eventId}`);
    }).catch((err) => {
        console.log(err)
    });
});
