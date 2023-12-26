import copyImg from './imgSrc/copy.png';
const CompleteGeneration = ({groupName, groupCode, handleCopyClick, goPage}) => {
    return <div className="CompleteGeneration">
        <h1 style={{marginTop: "150px", fontSize: "34px"}}>그룹이 생성되었습니다.</h1>
        <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{backgroundColor: "#D9D9D9", fontSize: "60px", width: "600px", textAlign: "center"}}>{groupName} {groupCode}</h1>
            <div className="hoverImg">
                <img src={copyImg} style={{
                    marginLeft: "10px",
                    height: "35px",
                    marginTop: "10px"
                }} onClick={() => handleCopyClick("초대코드: "+ groupCode)}/>
            </div>
        </div>
        <button style={{
                backgroundColor: "#D9D9D9"
            }} onClick={() => {
                goPage("/Mission");
            }}>확인
        </button>
    </div>
}
export default CompleteGeneration;