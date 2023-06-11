import React from 'react'
import Header from '../component/Layout/Header'
import EventCard from '../component/Route/Events/EventCard'

const EventsPage = () => {
  return (
    <div>
        <Header activeHeading={4} />
        <EventCard active={true} />
        <EventCard active={true} />
        </div>
  )
}

export default EventsPage