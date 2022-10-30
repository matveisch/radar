import React from "react";
import './stats-info.css'

const StatsInfo = () => {
    return(<div id="statsParent">
            <div id="stats-container">
        <div id="firstChild" className="flexBox">
            <p className="light-paragraph stat-text">Просмотров в телеграме</p>
            <p className="H4">981</p>
        </div>
        <div id="secondChild" className="flexBox">
            <p className="light-paragraph stat-text">Новых подписчиков в инстаграм</p>
            <p className="H4">16k</p>
        </div>
        <div id="thirdChild" className="flexBox">
            <p className="light-paragraph stat-text">Создано публикаций нашей командой</p>
            <p className="H4">586</p>
        </div>
        <div id="fourthChild" className="flexBox">
            <p className="light-paragraph stat-text">Количество просмотров реклам</p>
            <p className="H4">88k</p>
        </div>
        </div>
        </div>)
}
export default StatsInfo;