import './index.css'

const SearchHistory = props => {
  const {searchHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchHistory

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item-container">
      <p className="time-text">{timeAccessed}</p>
      <div className="des-content">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="domain-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>

      <button onClick={onDelete} type="button" className="delete-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchHistory
