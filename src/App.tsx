import React, { useState, useRef } from 'react'
    import {
      Music2,
      X,
      Calendar,
      Clock,
      MapPin,
      User,
    } from 'lucide-react'
    import EventCard from './components/EventCard'

    const eventsData = [
      {
        id: 1,
        name: 'Electronic Nights',
        description:
          'Experience the best electronic music in town. Featuring top DJs and immersive visuals.',
        organizer: 'Nightlife Co',
        venue: 'Downtown Club',
        date: 'April 27',
        time: '3:00 PM',
        category: 'Electronic',
        imageUrl:
          'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 2,
        name: 'Rock Revolution',
        description:
          'Join us for a night of classic and modern rock. Live performances and a high-energy atmosphere.',
        organizer: 'Live Nation',
        venue: 'Grand Arena',
        date: 'April 27',
        time: '8:30 PM',
        category: 'Rock',
        imageUrl:
          'https://images.pexels.com/photos/1737606/pexels-photo-1737606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 3,
        name: 'Jazz in the Park',
        description:
          'Relax and enjoy smooth jazz in a beautiful park setting. Bring your blankets and enjoy the music.',
        organizer: 'City Sounds',
        venue: 'Central Park',
        date: 'April 29',
        time: '6:00 PM',
        category: 'Jazz',
        imageUrl:
          'https://images.pexels.com/photos/1718977/pexels-photo-1718977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 4,
        name: 'Indie Vibes',
        description:
          'Discover the latest indie music. Featuring up-and-coming bands and a vibrant atmosphere.',
        organizer: 'Indie Nights',
        venue: 'The Underground',
        date: 'May 5',
        time: '9:00 PM',
        category: 'Indie',
        imageUrl:
          'https://images.pexels.com/photos/279882/pexels-photo-279882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 5,
        name: 'Hip Hop Showcase',
        description:
          'Experience the best hip hop artists in the city. Live performances and a high-energy atmosphere.',
        organizer: 'Urban Beats',
        venue: 'The Roxy',
        date: 'May 12',
        time: '8:00 PM',
        category: 'Hip Hop',
        imageUrl:
          'https://images.pexels.com/photos/998643/pexels-photo-998643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        id: 6,
        name: 'Country Jamboree',
        description:
          'Enjoy a night of country music with live bands and line dancing.',
        organizer: 'Country Nights',
        venue: 'The Saloon',
        date: 'May 19',
        time: '7:00 PM',
        category: 'Country',
        imageUrl:
          'https://images.pexels.com/photos/2788075/pexels-photo-2788075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ]

    function App() {
      const [selectedGenre, setSelectedGenre] = useState('All')
      const eventsSectionRef = useRef(null)
      const [selectedEvent, setSelectedEvent] = useState(null)
      const [isModalOpen, setIsModalOpen] = useState(false)

      const genres = [
        'All',
        ...new Set(eventsData.map((event) => event.category)),
      ]

      const filteredEvents =
        selectedGenre === 'All'
          ? eventsData
          : eventsData.filter((event) => event.category === selectedGenre)

      const scrollToEvents = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      ) => {
        e.preventDefault()
        eventsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
      }

      const openModal = (event) => {
        setSelectedEvent(event)
        setIsModalOpen(true)
      }

      const closeModal = () => {
        setSelectedEvent(null)
        setIsModalOpen(false)
      }

      return (
        <div className="bg-gray-900 min-h-screen text-white font-sans">
          {/* Navigation Bar */}
          <nav className="py-4 bg-gradient-to-r from-purple-600 to-red-500">
            <div className="container mx-auto flex items-center justify-between px-4">
              <div className="flex items-center">
                <Music2 size={32} color="#00FFFF" />
                <span className="text-2xl font-semibold ml-2">MuzixGo</span>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="#"
                  className="hover:text-purple-400"
                  onClick={scrollToEvents}
                >
                  Events
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-purple-600 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-shadow">
                  Login
                </button>
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-shadow">
                  Sign Up
                </button>
              </div>
            </div>
          </nav>

          {/* Hero Banner */}
          <section className="relative bg-gradient-to-r from-purple-600 to-red-400 py-40 overflow-hidden">
            {/* Top Wave Animation */}
            <div className="absolute top-12 left-0 w-full h-12 flex justify-center items-center">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>

            <div className="container mx-auto text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                Discover Music Events
              </h1>
              <p className="text-lg mb-8">
                Find live music events near you and join the movement.
              </p>
              <button className="bg-blue-500 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full relative z-10">
                Join the Movement
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </section>

          {/* Event Card Listing */}
          <section className="container mx-auto py-12 px-4" ref={eventsSectionRef}>
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Upcoming Events
            </h2>

            {/* Genre Filter */}
            <div className="flex justify-center mb-6">
              {genres.map((genre) => (
                <button
                  key={genre}
                  className={`mx-2 px-4 py-2 rounded-full text-white ${
                    selectedGenre === genre
                      ? 'bg-purple-700'
                      : 'bg-gray-700 hover:bg-purple-600'
                  } transition-colors duration-200`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  openModal={openModal}
                />
              ))}
            </div>
          </section>

          {/* Event Details Modal */}
          {isModalOpen && selectedEvent && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-50 flex items-center justify-center">
              <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-2xl w-full relative">
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-white"
                  onClick={closeModal}
                >
                  <X size={24} />
                </button>

                {/* Event Information */}
                <h2 className="text-2xl font-semibold mb-4">
                  {selectedEvent.name}
                </h2>
                <img
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-300 mb-4">{selectedEvent.description}</p>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <User className="mr-2" size={16} />
                  <span>{selectedEvent.organizer}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <MapPin className="mr-2" size={16} />
                  <span>{selectedEvent.venue}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <Calendar className="mr-2" size={16} />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Clock className="mr-2" size={16} />
                  <span>{selectedEvent.time}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-6">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200">
                    Attend
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }

    export default App
