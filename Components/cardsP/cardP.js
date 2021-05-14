

const CardP = ({ title, desc, imgURL, children }) => {

  return (
    <div className="card">
      <div className="overflow">
        <img className="Image"  src={imgURL} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div>
        <p class="card-text">
          {desc}
        </p>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CardP