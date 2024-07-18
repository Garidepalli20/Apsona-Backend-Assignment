import Note from '../components/Note'
import '../styles/Trash.css'

const Trash = ({trashedNotes, permanentlyDeleteNote}) => (
  <div className="trash">
    {trashedNotes.map(note => (
      <div key={note.id} className="note">
        <Note note={note} />
        <button
          type="button"
          onClick={() => permanentlyDeleteNote(note.id, 'trashed')}
        >
          Delete Permanently
        </button>
      </div>
    ))}
  </div>
)

export default Trash
