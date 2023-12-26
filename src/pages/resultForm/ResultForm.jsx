import '../../App.css';
import fourCutForResult from './imgSrc/fourCutForResult.png';
import photoForNav from '../../imgSrc/photoForNav.png';
import { useNavigate } from 'react-router';
const ResultForm = () => {
    const goPage = useNavigate();
    return <div className="ResultForm">
        <div className="nav">
            <h1 style={{fontFamily: "Gowun Batang"}}>추억네컷</h1>
            <img src={photoForNav}/>
        </div>
        <div className='bodyClass'>
            <div className='bodyLeft'>
                <img src={fourCutForResult} style={{
                    width: "400px",
                    marginTop: "20px",
                    marginLeft: "120px"
                }}/>
            </div>
            <div className='bodyRight' style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginLeft: "250px"
            }}>
                <h1>추억이 더 아름다워지는 공간,</h1>
                <div>
                    <h1 style={{display: "flex", flexDirection: "row", alignItems: "center"}}><h1 style={{color: "red", fontSize: "40px"}}>'추억네컷'</h1>으로 특별한 순간을 공유하세요.</h1>
                </div>
                <button style={{backgroundColor: "#C7D3FF", border: "2px solid #C7D3FF"}} onClick={() => {
                    goPage("/");
                }}>메인화면으로 돌아가기</button>
            </div>
        </div>
    </div>
}
export default ResultForm;