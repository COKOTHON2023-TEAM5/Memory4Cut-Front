import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import copyImg from './imgSrc/copy.png';
import './GroupGenerator.css';
import photoForNav from './imgSrc/photoForNav.png';
import fourCutForBody from './imgSrc/fourCutForBody.png';
import CompleteGeneration from "./CompleteGeneration";
import axios from "axios";
const GroupGenerator = () => {
    const[text, setText] = useState("");
    const goPage = useNavigate();
    const[isComplete, setIsComplete] = useState(false);
    const handleCopyClick = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            alert('초대코드가 복사되었습니다.');
          })
          .catch((error) => {
            console.error('복사 실패:', error);
          });
      };
    function submit(){
        if(text != "" && text.length < 10) {
            axios.post('https://www.cokothon-team5.p-e.kr/group', {
                "group_name": text,
                "invite_code": data
            })
            .then(function (response) {
                console.log(response);
              })
            .catch(function (error) {
                console.log(error);
            });
            setIsComplete(true);
        }
    }
    const[data, setData] = useState();
    useEffect(() => {
        // Axios를 사용하여 백엔드 API 호출
        axios.get('https://www.cokothon-team5.p-e.kr/group/code')
          .then(response => {
            // 성공적으로 데이터를 받아온 경우 상태 업데이트
            setData(response.data.data.invite_code);
          })
          .catch(error => {
            // 오류가 발생한 경우 오류 로그 출력
            // console.error('Error fetching data:', error);
          })
          .finally(() => {
            // 로딩 상태를 false로 변경
            // setLoading(false);
          });
      }, []);
    return <div className="GroupGenerator">
        <div className="nav">
            <h1 style={{fontFamily: "Gowun Batang"}}>추억네컷</h1>
            <img src={photoForNav}/>
        </div>
        {(isComplete)?
        <CompleteGeneration groupName={text} groupCode={document.getElementById("code").innerText} handleCopyClick={handleCopyClick} goPage={goPage}/>
        :
        <div className="body_big" style={{display: "flex"}}>
            <div className="body_left">
                <div className="GroupName">
                    <h3 style={{fontFamily: "Gowun Batang"}}>그룹명:</h3>
                    <input placeHolder="그룹 이름 입력" text={text} onChange={(e) => {setText(e.target.value);}} id="nameInput" style={{backgroundColor: "#D9D9D9", outline: "none", borderWidth: "0 0 0"}}></input>
                </div>
                <div className="InvitationCode">
                    <h3 style={{fontFamily: "Gowun Batang"}}>초대코드:</h3>
                    {/* 초대코드 랜덤 쓰레딩 */}
                    <h3 style={{fontFamily: "Gowun Batang", backgroundColor: "#D9D9D9", marginLeft: "20px"}} id="code">{data}</h3>
                    <div className="hoverImg">
                        <img src={copyImg} style={{
                            marginLeft: "10px",
                            height: "35px",
                            marginTop: "10px"
                        }} className="copyImg" onClick={() => handleCopyClick("초대코드: "+ document.getElementById("code").innerText)}/>
                    </div>
                </div>
                <button style={{fontFamily: "Gowun Batang"}} onClick={submit}>확인</button>
            </div>
            <div className="bodyRight" style={{display: "flex", marginLeft: "300px"}}>
                    <img src={fourCutForBody}/>
            </div>
        </div>
        }
    </div>
}
export default GroupGenerator;