 import React, { Component } from 'react'
 import Newsitem from './NewsItem';
 import Spinner from './Spinner';
 import PropTypes from 'prop-types';
 export class News extends Component {
        static defaultProps = {
             country:'in',
             pageSize:5,
            category:'general',
              
        }
        static propTypes={
            country:PropTypes.string,
            pageSize:PropTypes.number,
            category:PropTypes.string,
        }
    

    constructor(){
        super();
         this.state ={
             articles:[],
             loading:false,
             page:1

       }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=742cc67afbcd46998f1335afa4ab5a03&page=1&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData=await data.json()
        console.log(parseData);
        this.setState({articles:parseData.articles,
            totalResults:parseData.totalResults,
            loading:false
        })    

    }

    handlePrevOnClick= async()=>{
        console.log("enterd");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=742cc67afbcd46998f1335afa4ab5a03&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData=await data.json()
        console.log(parseData);
        this.setState({
            page:this.state.page-1,
            articles:parseData.articles,
            loading:false
        })


    }

    handleNextOnClick = async () =>  {
             if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize))){

             
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=742cc67afbcd46998f1335afa4ab5a03&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
            this.setState({loading:true});
            let data=await fetch(url);
            let parseData=await data.json()
          
            this.setState({
                page:this.state.page+1,
                articles:parseData.articles,
                loading:false
            })
   }
        }
     
    
  
 

 
   render() {
    
     return (
       <div className="container my-3">
          <center><h2>News masala - Top headLines</h2></center>
          {this.state.loading&&<Spinner/>}
           <div className="row">
            {!this.state.loading&&this.state.articles.map((element)=>{

             return <div className="col-md-4"key={element.url}>
                <Newsitem   title={element.title} discription={element.description} srcUrl={element.urlToImage} newsUrl={element.url} />
                </div> })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevOnClick} className="btn btn-dark">&larr;Previous</button>
                <button disabled={ this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark"  onClick={this.handleNextOnClick} >Next&rarr;</button>
                </div>
       </div>
     )
   }
 } 
 
 export default News;
 
