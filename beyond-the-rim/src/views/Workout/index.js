import './Workout.css';
import drillsJSON from '../../assets/drills.json';
import Drill from '../../components/Drill';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

function Workout() {
    const { phase, week } = useParams();
    let history = useHistory();
    console.log(drillsJSON)
    const drills = drillsJSON[phase][week];
    const [drillIndex, setDrillIndex] = useState(0);
    const currentDrill = drills[drillIndex];
    
    const swithDrill = (inc) => {
        setDrillIndex(drillIndex => drillIndex + inc);
    }
    
    const finishWorkout = () => {
        history.push("/finish")
    }    

    return (
        <div className="Workout" id="workout">
        <Drill
            drill={currentDrill}
            last={drills.length === drillIndex + 1}
            nextDrill={() => drills.length !== drillIndex + 1 ?
                        swithDrill(1) :
                        finishWorkout()}
        ></Drill>
        
        <footer>
            <Footer
            switchDrill={swithDrill}
            finish={finishWorkout}
            drillsAmount={drills.length}
            current={drillIndex}
            nextDrillName={drillIndex + 1 < drills.length ?
                    `Next: ${drills[drillIndex + 1].name}` :
                    'Final exercise' }
            ></Footer>
        </footer>
        </div>
    );
}

export default Workout;
