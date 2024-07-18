import Note from './Note'

const NoteList = ({
  notes,
  onArchive,
  onDelete,
  onRestore,
  onPermanentDelete,
  isTrash,
}) => (
  <div className="note-list">
    {notes.map((note, index) => (
      <Note
        key={note.id || note.text + index}
        note={note}
        onArchive={() => onArchive(index)}
        onDelete={() => onDelete(index)}
        onRestore={() => onRestore(index)}
        onPermanentDelete={() => onPermanentDelete(index)}
        isTrash={isTrash}
      />
    ))}
  </div>
)

export default NoteList
