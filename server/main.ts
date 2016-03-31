import {v1} from "uuid"

import nonsense from "./test/index"

Meteor.startup(() => {
  console.log("Starting up", v1())
  console.log("Nonsense value", nonsense)
})
