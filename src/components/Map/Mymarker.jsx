import React, { Component , useState} from 'react';
import './marker.scss'
import $ from 'jquery';

class MyMarker extends Component {
    state = {
        class: [
            { id: 1, class: 'markerSetting camp1Marker',talk:'STAGE 1' },
            { id: 2, class: 'markerSetting camp2Marker',talk:'營區 A'},
            { id: 3, class: 'markerSetting camp3Marker',talk:'STAGE 2' },
            { id: 4, class: 'markerSetting camp4Marker',talk:'STAGE 3' },
            { id: 5, class: 'markerSetting camp5Marker',talk:'營區 C' },
            { id: 6, class: 'markerSetting camp6Marker' ,talk:'營區 B'},
            { id: 7, class: 'markerSetting camp7Marker',talk:'活動市集' },

        ]

    }
    render() {
        return (
            <div className='theMarkerCon'>
                {this.state.class.map((e, index) =>
                    <img key={e.id} className={e.class} id={e.id}
                     onMouseOver={this.mouseOn} text={e.talk}
                    src='https://cdn.discordapp.com/attachments/677538517949218820/943021444948971520/Component_28_14.png' />
                )
                }
            </div>
        );
    }

    mouseOn = (e) => {
        const text= this.state.class.find((item)=>{ return item.id ===  Number(e.target.id)})
        // console.log(text.talk);
        // console.log(document.getElementsByTagName("p"));
        $('p').text(`${text.talk}`)
        // console.dir(e.target)
        // console.log(e.target.text)
        // console.log(e.target.src)

        // $('p').text(this.state.talk)


    }

}

export default MyMarker;