import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import './Mymodal.scss';
import 'bootstrap/dist/css/bootstrap.css';



function MyModal() {
    const [goStart, setGoStart] = useState(false)
    const start = () => {
        console.log(goStart)
        setGoStart(!goStart)

    }

    function clsoeMe() {
        console.log('closeMe Start ! boolen:', goStart)
        setGoStart(!goStart)
    }
    

    return (
        <div>
            <button id="myBtn urBtnSetting" className="btn solidButton" onClick={start}>Health and safety rules. Review</button>


            <div id="myModal urModal-Head" className="modal urModal" style={{ display: goStart ? 'block' : 'none' }}>

                <div className="modal-content urModal-content">
                    <div className="modal-header">
                        <h2 className="myTitle" style={{height:"25px"}}>『COVID-19』公眾集會規範</h2>
                        <span className="close clsBtn" onClick={clsoeMe}>&times;</span>


                    </div>
                    <div className="modal-body urModal-body">
                        <div style={{height:"70px"}} />
                        <p>大型活動如經風險評估後仍決定辦理，應遵守相關規定如下：</p>
                        <p>開放會場，經分流後仍有超過1,000人之大型集會活動，且活動舉辦時間為111年8月20日前者，請遵守「『COVID-19』公眾集會規範」</p>
                        <p>防疫措施如下：</p>
                        <p>A.室內、外活動全程配戴口罩，除補充水分外，禁止飲食。</p>
                        <p>B.務必落實實聯制。</p>
                        <p>C.於入口處進行量體溫及加強手部消毒(建議攜帶乾洗手)。</p>
                        <p>D.相關防疫措施，視疫情狀況進行滾動式調整。</p>
                    </div>
                    <div className="modal-footer urModal-footer" style={{height:"70px"}}>
                        {/* <h3>Modal Footer</h3> */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MyModal;