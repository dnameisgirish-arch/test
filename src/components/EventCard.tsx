import React from 'react'
    import { Calendar, Clock, MapPin, User } from 'lucide-react'

    interface EventCardProps {
      event: {
        id: number
        name: string
        description: string
        organizer: string
        venue: string
        date: string
        time: string
        category: string
        imageUrl: string
      }
      openModal: (event: any) => void
    }

    const EventCard: React.FC<EventCardProps> = ({ event, openModal }) => {
      const handleViewEvent = () => {
        openModal(event)
      }

      return (
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
          <img
            src={event.imageUrl}
            alt={event.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
            <p className="text-gray-300 text-sm mb-2">{event.description}</p>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <User className="mr-2" size={16} />
              <span>{event.organizer}</span>
            </div>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <MapPin className="mr-2" size={16} />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <Calendar className="mr-2" size={16} />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Clock className="mr-2" size={16} />
              <span>{event.time}</span>
            </div>
            <button
              className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition-colors duration-200"
              onClick={handleViewEvent}
            >
              View Event
            </button>
          </div>
        </div>
      )
    }

    export default EventCard
