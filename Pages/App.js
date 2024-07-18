import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Archived from './pages/Archived'
import Trash from './pages/Trash'
import './App.css'

const App = () => {
  const [notes, setNotes] = useState([])
  const [archivedNotes, setArchivedNotes] = useState([])
  const [trashedNotes, setTrashedNotes] = useState([])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
    const savedArchivedNotes =
      JSON.parse(localStorage.getItem('archivedNotes')) || []
    const savedTrashedNotes =
      JSON.parse(localStorage.getItem('trashedNotes')) || []
    setNotes(savedNotes)
    setArchivedNotes(savedArchivedNotes)
    setTrashedNotes(savedTrashedNotes)
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes))
  }, [archivedNotes])

  useEffect(() => {
    localStorage.setItem('trashedNotes', JSON.stringify(trashedNotes))
  }, [trashedNotes])

  const archiveNote = noteId => {
    const noteToArchive = notes.find(note => note.id === noteId)
    setNotes(notes.filter(note => note.id !== noteId))
    setArchivedNotes([...archivedNotes, noteToArchive])
  }

  const deleteNote = noteId => {
    const noteToDelete = notes.find(note => note.id === noteId)
    setNotes(notes.filter(note => note.id !== noteId))
    setTrashedNotes([...trashedNotes, noteToDelete])
  }

  const permanentlyDeleteNote = (noteId, source) => {
    if (source === 'archived') {
      setArchivedNotes(archivedNotes.filter(note => note.id !== noteId))
    } else if (source === 'trashed') {
      setTrashedNotes(trashedNotes.filter(note => note.id !== noteId))
    }
  }

  return (
    <Router>
      <div className="app">
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/archived">Archived</Link>
          <Link to="/trash">Trash</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home
              notes={notes}
              setNotes={setNotes}
              archiveNote={archiveNote}
              deleteNote={deleteNote}
            />
          </Route>
          <Route path="/archived">
            <Archived
              archivedNotes={archivedNotes}
              permanentlyDeleteNote={permanentlyDeleteNote}
            />
          </Route>
          <Route path="/trash">
            <Trash
              trashedNotes={trashedNotes}
              permanentlyDeleteNote={permanentlyDeleteNote}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
