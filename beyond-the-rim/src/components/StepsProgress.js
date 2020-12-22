import './StepsProgress.css'

function StepsProgress({ amount, current }) {
    const steps = [...Array(amount).keys()].map((element) => {
        let backgroundClass = "current";
        if (element < current) {
            backgroundClass = "finished";
        } else if (element > current) {
            backgroundClass = "new";
        }

        return (
            <div key={element} class={"drill-step " + backgroundClass }></div>
        )
    });

    return (
        <article className="StepsProgress" class="steps">{steps}</article>
    );
}

export default StepsProgress;