import Note from '../components/Note'
import '../styles/Archived.css'

const Archived = ({archivedNotes, permanentlyDeleteNote}) => (
  <div className="archived">
    {archivedNotes.map(note => (
      <div key={note.id} className="note">
        <Note note={note} />
        <button
          type="button"
          onClick={() => permanentlyDeleteNote(note.id, 'archived')}
        >
          Delete Permanently
        </button>
      </div>
    ))}
  </div>
)

export default Archived
