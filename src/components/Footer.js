import StepsProgress from './StepsProgress';


function Footer({ switchDrill, finish, drillsAmount, current, nextDrillName }) {
    return (
        <>
            <p class="next">
                {nextDrillName}
            </p>

            { current !== 0 &&
            <button class="link-button left" onClick={() => switchDrill(-1)}>accidentally skipped?</button>
            }

            { drillsAmount !== current + 1 &&
            <button class="link-button right" onClick={() => drillsAmount !== current + 1 ?
                        switchDrill(1) :
                        finish()}>skip</button>
            }

            <StepsProgress current={current} amount={drillsAmount}></StepsProgress>
        </>
    );
}

export default Footer;