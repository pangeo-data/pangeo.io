// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import glob from 'glob'

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const glob = require('glob')

const eventsDirectory = path.join(process.cwd(), "src/events")

function getSortedEventsMetadata() {

  const allEvents = glob.sync(`${eventsDirectory}/**/*.md`).map((filePath) => {
    const eventId = path.basename(path.dirname(filePath))
    const eventPath = `${eventId}/${path.basename(filePath)}`
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      ...matterResult.data,
      id: eventId,
      href: `/events/${eventPath}`,
      file: eventPath,
    }
  }).sort((a, b) => {
    if (Date.parse(a.date) < Date.parse(b.date)) {
      return 1
    } else {
      return -1
    }
  })

  return allEvents

}



function getAllEventsIds() {
  const allEvents = getSortedEventsMetadata()
  return allEvents.map((event) => {
    return {
      params: {
        id: event.id
      }
    }
  })
}

function getEventData(id) {
  const allEvents = getSortedEventsMetadata()
  const event = allEvents.find((event) => event.id === id)
  return event

}

module.exports = {
  getSortedEventsMetadata,
  getAllEventsIds,
  getEventData,
}
