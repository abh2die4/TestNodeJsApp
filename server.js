app.listen(process.env.PORT || 3, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});