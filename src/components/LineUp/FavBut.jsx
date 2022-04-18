import React, { Component } from 'react';

class FavB extends Component {
    state = {
        band:this.props.id
    };
    
    

    
    render() {
        return <span className="col-1 pr-0">
            {this.state.bandId.map((item) => 
            <FontAwesomeIcon key={item.id} icon={farHeart} className='heart' onClick={this.addMyFav} />)}
            
            {this.state.bandId.map((item) => 
            <FontAwesomeIcon key={item.pair} icon={faHeart} className='loved' onClick={this.cancelMyfav} />)}
            {/* <FontAwesomeIcon icon={farHeart} className='heart' onClick={this.addMyFav} />
            <FontAwesomeIcon icon={faHeart} className='loved' onClick={this.cancelMyfav} /> */}
        </span>
    }
    addMyFav = () => {
        $('#heart').on('click', function () {
            $(this).addClass('addLoved');
            $('span').closest('.loved').css('visibility', 'visible');
        })
    }
    cancelMyfav = () => {
        $('#loved').on('click', function () {

            $(this).css('visibility', 'hidden');
            $('.heart').removeClass('addLoved');
        })
    }
}

export default FavB ;