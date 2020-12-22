import './MainMenu.css'
import { useHistory } from "react-router-dom";
import { useState } from 'react';

function MainMenu() {
    const [phase, setPhase] = useState("Phase1");
    const [week, setWeek] = useState("Week1");

    let history = useHistory();

    const startWorkout = () => {
        history.push(`/${phase}/${week}`)
    }

    const phases = ["Phase 1", "Phase 2", "Phase 3", "Phase 4"]
        .map((text) => <option value={text.split(' ').join('')}>{text}</option>);
    
    const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"]
        .map((text) => <option value={text.split(' ').join('')}>{text}</option>);

    return (
        <>
            <h1 class="main-title" >Beyond The Rim</h1>
            <h1 class="main-subtitle">By Nathanael Morton</h1>
            <article>
                <select value={phase} onChange={(e) => setPhase(e.target.value)}>
                {phases}
                </select>
                <select value={week} onChange={(e) => setWeek(e.target.value)}>
                    {weeks}
                </select>
                <button class="done" onClick={startWorkout}>
                    Start
                </button>
            </article>
            <footer>
                Developed by Amit Keinan
            </footer>
        </>
    );
}

export default MainMenu;