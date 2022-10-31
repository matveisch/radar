import React from "react";
import './stats-info.css'

const StatsInfo = () => {
    return(<div id="statsParent">
        <div id="stats-bg">
            </div>
            <div id="stats-container">
        <div id="firstChild" className="flexBox">
            <p className="light-paragraph stat-text">Количество просмотров рекламы за сутки</p>
            <p className="H4 stat-num">981</p>
        </div>
        <div id="secondChild" className="flexBox">
            <p className="light-paragraph stat-text">Проходимость каналов за неделю</p>
            <p className="H4 stat-num">16k</p>
        </div>
        <div id="thirdChild" className="flexBox">
            <p className="light-paragraph stat-text">Привлечено трафика нашим клиентам</p>
            <p className="H4 stat-num">586</p>
        </div>
        <div id="fourthChild" className="flexBox">
            <p className="light-paragraph stat-text">Создано рекламных публикаций нашей командой</p>
            <p className="H4 stat-num">88k</p>
        </div>
        
        </div>
        </div>)
}
export default StatsInfo;