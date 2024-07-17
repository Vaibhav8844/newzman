import React from 'react'

export function NewsItem(props){
    let { title, description, imageUrl ,url,date} = props;
    return (
      <div className="card overflow-hidden" style={{ width: "18rem" }}>
        <img className="card-img-top" src={imageUrl} alt='.' />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} rel='noreferrer' target='_blank' className="btn btn-sm btn-primary">Read More</a>
          <button type="button" className="btn btn-info btn-sm mx-2 text-white">{date.slice(0,10)}</button>
        </div>
      </div>
    )
}
