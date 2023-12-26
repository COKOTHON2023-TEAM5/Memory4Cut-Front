import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './GroupGenerator.css';
import photoForNav from './imgSrc/photoForNav.png';
import fourCutForBody from './imgSrc/fourCutForBody.png';
const GroupGenerator = () => {
    const[text, setText] = useState("");
    const goPage = useNavigate();
    function submit(){
        // 정보 저장 후 페이지 이동
    }
    return <div className="GroupGenerator">
        <div className="nav">
            <h1 style={{fontFamily: "Gowun Batang"}}>추억네컷</h1>
            <img src={photoForNav}/>
        </div>
        <div className="body_big" style={{display: "flex"}}>
            <div className="body_left">
                <div className="GroupName">
                    <h3 style={{fontFamily: "Gowun Batang"}}>그룹명:</h3>
                    <input placeHolder="그룹 이름 입력" text={text} onChange={(e) => {setText(e.target.value);}} id="nameInput"></input>
                </div>
                <div className="InvitationCode">
                    <h3 style={{fontFamily: "Gowun Batang"}}>초대코드:</h3>
                    {/* 초대코드 랜덤 쓰레딩 */}
                    <h3 style={{fontFamily: "Gowun Batang"}}>Unknown</h3>
                </div>
                <button style={{fontFamily: "Gowun Batang"}}>확인</button>
            </div>
            <div className="bodyRight" style={{display: "flex", marginLeft: "300px"}}>
                    <img src={fourCutForBody}/>
            </div>
        </div>
    </div>
}
export default GroupGenerator;