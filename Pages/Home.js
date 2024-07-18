import {useState} from 'react'
import NoteModal from '../components/NoteModal'
import Note from '../components/Note'
import '../styles/Home.css'

const Home = ({notes, setNotes, archiveNote, deleteNote}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addNote = note => {
    setNotes([...notes, note])
    setIsModalOpen(false)
  }

  return (
    <div className="home">
      <button type="button" onClick={() => setIsModalOpen(true)}>
        Create New Note
      </button>
      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addNote}
      />
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          onArchive={archiveNote}
          onDelete={deleteNote}
        />
      ))}
    </div>
  )
}

export default Home
