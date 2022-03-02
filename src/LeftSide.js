const LeftSide = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div className='app-sidebar'>
      <div className='app-sidebar-header'>
        <h1>Notelly</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className='app-sidebar-notes'>
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className='sidebar-note-title'>
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className='note-meta'>
              Updated on{" "}
              {new Date(note.lastModified).toLocaleDateString("fr-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
