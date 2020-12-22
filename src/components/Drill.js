import TimeProgess from './TimeProgress'
import Reps from './Repetitions'
import './Drill.css'
function Drill({drill, nextDrill}) {
    return (
        <article className="Drill">
            <h1 id="title" > {drill.name} </h1>
            { drill.time ?
                <TimeProgess id={drill.id} fullTime={drill.amount} next={nextDrill}></TimeProgess> :
                <Reps id={drill.id} reps={drill.amount}></Reps>
            }

            { !drill.time &&
                <button class="done" onClick={nextDrill}>done</button>
            }
        </article>
    )
}

export default Drill;