import { useState } from "react";
import { useNavigate } from "react-router-dom";
const GroupGenerator = () => {
    const[text, setText] = useState("");
    const goPage = useNavigate();
    function submit(){
        // 정보 저장 후 페이지 이동
    }
    return <div className="GroupGenerator">
        <h1>그룹 생성</h1>
        <div className="GroupName">
            <h3>그룹명:</h3>
            <input placeHolder="그룹 이름 입력" text={text} onChange={(e) => {setText(e.target.value);}} id="nameInput"></input>
        </div>
        <div className="InvitaionCode">
            <h3>초대코드:</h3>
            <input placeHolder="초대코드를 입력해주세요." id="invitationCodeInput"></input>
        </div>
        <button>확인</button>
    </div>
}
export default GroupGenerator;