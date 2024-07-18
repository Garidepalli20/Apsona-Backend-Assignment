
import '../styles/Note.css'

const Note = ({note, onArchive, onDelete}) => (
  <div className="note" style={{backgroundColor: note.color}}>
    <p>{note.content}</p>
    <div className="note-tags">
      {note.tags.map(tag => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
    <div className="note-buttons">
      {onArchive && (
        <button type="button" onClick={() => onArchive(note.id)}>
          Archive
        </button>
      )}
      <button type="button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  </div>
)

export default Note
