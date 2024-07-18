import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import '../styles/NoteModal.css'

const NoteModal = ({isOpen, onClose, onSave}) => {
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])
  const [color, setColor] = useState('#ffffff')

  const handleSave = () => {
    const newNote = {
      id: uuidv4(),
      content,
      tags,
      color,
    }
    onSave(newNote)
  }

  const handleTagChange = e => {
    const tagsArray = e.target.value.split(',').map(tag => tag.trim())
    setTags(tagsArray)
  }

  if (!isOpen) return null

  return (
    <div className="note-modal">
      <div className="modal-content">
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Note content"
        />
        <input
          type="text"
          value={tags.join(', ')}
          onChange={handleTagChange}
          placeholder="Tags (comma separated)"
        />
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <div className="modal-buttons">
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteModal
