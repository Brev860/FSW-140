import React, {Component} from 'react'
import axios from 'axios'


class Data extends Component {
   state = {
       series:[]
   }
   
   componentDidMount(){
       axios.get('/seasons')
       .then(res => {
           this.setState({series: res.data})
         console.log(res.data[0].title)
       })
       .catch(err => console.log(err))
       
   }

 

    render(){

        const episodeData1 = this.state.series.map((show) => (
            <div className='list'>
               <li key={show.title}>
                {show.episode} : {show.title}
               </li>
            </div>
         
        
        ))
       
        return(
            <div>
                <h1 className='header'>Bob Ross Episode list</h1>
                  <ul>
                      {episodeData1}
                  </ul>
            </div>
        )
    }
}
   




export default Data