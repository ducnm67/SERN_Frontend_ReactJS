import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeFooter extends Component {
    
    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2024 Nguyễn Minh Đức. 
                    <br></br> More information, please visit my Github.
                    <a target="_blank" href='https://github.com/ducnm67/SERN_Frontend_ReactJS'> 
                    &#8594; Click here &#8592;
                    </a>
                </p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
