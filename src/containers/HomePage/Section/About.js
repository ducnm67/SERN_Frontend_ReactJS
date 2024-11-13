import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    
    render() {
        return (
            <div className='section-share section-about'>
                <div className="section-about-header"> 
                    Truyền thông nói về chúng tôi
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe 
                            width="100%" 
                            height="400px" 
                            src="https://www.youtube.com/embed/abPmZCZZrFA" 
                            title="SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL MUSIC VIDEO" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            Hình như trong lòng anh đã không còn hình bóng ai ngoài em đâu <br></br>
                            Hằng đêm anh nằm thao thức suy tư, chẳng nhớ ai ngoài em đâu <br></br>
                            Vậy nên không cần nói nữa, yêu mà đòi nói trong vài ba câu? <br></br>
                            Cứ cố quá đâm ra lại hâm <br></br>
                            Uhm, đau hết cả đầu! <br></br>
                            Ðợi chờ em trước nhà từ sáng đến trưa, chiều, tối mắc màn đây luôn <br></br>
                            Ngược nắng hay là ngược gió, miễn anh thấy em tươi vui không buồn <br></br>
                            Chỉ cần có thấy thế thôi, mây xanh chan hoà <br></br>
                            Thấy thế thôi, vui hơn có quà <br></br>
                            Và bước kế tiếp anh lại gần hơn chút đó nha <br></br>
                            Rồi ngày ấy cuối cùng đã tìm đến, ta nào đâu hay <br></br>
                            Anh sẽ không để vụt mất đi cơ duyên ông trời trao tay <br></br>
                            Còn đắn đo băn khoăn gì nữa? Tiếp cận em ngay <br></br>
                            Cố gắng sao không để em nghi ngờ dù một giây lúc này <br></br>
                            Ðược đứng bên em, anh hạnh phúc, tim loạn nhịp tung bay <br></br>
                            Chắc chắn anh thề anh sẽ không bao giờ quên ngày hôm nay <br></br>
                            Chính em, chính em, tương tư mình em thôi <br></br>
                            .......... <br></br>
                        </p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
