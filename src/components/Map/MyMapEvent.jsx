import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Map.scss';
import './EventMap.scss';
import './marker.scss';
import $ from 'jquery';
import MyMarker from './Mymarker';
import mapEvent from './../../image/map_morning.png';


class MyMapEvent extends Component {
    state = {}

   handleClick(){
    //    console.log($('.myEventMap'));
       $('.myEventMap').hide()
       $('.outside').show()
   }

    render() {
        return (
            <div>
                <div className='d-flex eventMap hide'>

                    <div className='test '>
                        <img className='mapTag' src={mapEvent} />
                        <img className='toOutside' onClick={this.handleClick} src="https://media.discordapp.net/attachments/677538517949218820/948481978636861450/Group_2868.png" alt="" />
                        <div className='bla'>
                            <img className='downLine' src="https://media.discordapp.net/attachments/677538517949218820/943164269241970731/downLine.png" alt="" />
                            <img className='upLine' src="https://media.discordapp.net/attachments/677538517949218820/943164269502021653/upLine.png" alt="" />
                            <div className='backGreen'></div>
                        </div>
                        <p></p>
                    </div>
                    <div className='container d-flex flex-wrap birdDiv'>
                        <div className='d-flex justify-content-between '>
                            <img className='talk ' src="https://media.discordapp.net/attachments/677538517949218820/942958807192072222/bird.png" alt="" />
                        </div>
                        
                        <div className='box'>

                            <img className='mapSetting' src="https://cdn.discordapp.com/attachments/677538517949218820/942962524377194546/Component_31_3.png" />

                            <div>
                                <MyMarker className='mar' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
    


    
}







export default MyMapEvent;