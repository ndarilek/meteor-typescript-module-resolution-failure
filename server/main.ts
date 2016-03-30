import uuid from "uuid"

Meteor.startup(() => {
  console.log("Starting up", uuid())
})
