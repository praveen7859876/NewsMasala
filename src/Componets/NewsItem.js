import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let  {title, discription,srcUrl,newsUrl} = this.props;
    return (
        <div className=" mx-3">  
        <div className="card"  >
                <img src={!srcUrl?"https://www.livemint.com/lm-img/img/2024/02/05/1600x900/RBI_MPC_2024_1707119157717_1707119157909.jpg":srcUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription} </p>
                    <a href={newsUrl} rel="noreferrer" target="_blank"className="btn btn-sm btn-primary">Read me</a>
                </div>
                </div>
      </div>
    )
  }
}

export default NewsItem;
