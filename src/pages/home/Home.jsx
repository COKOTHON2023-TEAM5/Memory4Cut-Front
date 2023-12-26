import { useNavigate } from "react-router-dom";
const Home = () => {
    const goPage = useNavigate();
    return <div className="Home">
        <button id="JoinGroupButton" onClick={() => {
            goPage("/JoinGroup");
        }}>그룹 참여하기</button>
        <button id="GroupGeneratorButton" onClick={() => {
            goPage("/GroupGenerator");
        }}>그룹 생성하기</button>
    </div>
}
export default Home;