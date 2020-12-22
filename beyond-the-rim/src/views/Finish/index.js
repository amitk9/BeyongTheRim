import { useHistory } from "react-router-dom";

function Finish() {
    let history = useHistory();

    const returnToMain = () => {
        history.push("/chooseWorkout")
    }

    return (
        <>
            <h1 class="main-title" >Congrats!</h1>
            <h1 class="main-subtitle">You made it through another day :)</h1>
            <footer>
                <button class="done" onClick={returnToMain}>
                    Back to main menu
                </button>
            </footer>
        </>
    );
}

export default Finish;