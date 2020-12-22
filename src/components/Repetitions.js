import "./Repetitions.css"

function Repetitions({reps}) {
    return (
        <article className="Repetitions">
            <h3 id="time" > {reps} reps </h3>
        </article>
    );
}

export default Repetitions;