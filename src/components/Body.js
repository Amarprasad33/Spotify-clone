import React from "react";
import '../styles/Body.css';
import Header from "./Header"; 

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img className="discover" src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/y80PWIWdmuDnnZC-Yme5UDhA-meqL1Wjw3MU8wOKmS6FY63mB5Tyf-jjLbCh0-0rMzFOeyKaxNl20_hC53N-Xyz9gWrEM1ZisSCzsMEfHHBqwqedkZik6CpKotdSltctpbNw9Gjaf_1PrxXwlwzMKyUDKG4eRNFNiz6Rc2Q26LvVd6ymwfCXWTRNlSVqbSxzLH9Wj3aETBWXF2vAMPwe5EXLif3XKtyn9XpyZ75vkF6OdbgBYS-kM3vHaJTkcCaTdqrNP2a7GK-DtLrFYF87MxI-KfkECUCZCFJw4iPQYMgHP4QjvJ8JMHOoR1jhkqtIzVSoLnE21G7f19z5ukvOgwxCF2Rktw2M2jVb2wqQbHpeutwwxoGyN9513_f9eeGsyNxofi0zPmbli2Qv-NMRIKHIO2Iycd_A-oPA0TLgfX4=/MzE6ODM6MzBUMTMtMjEtMg==" alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description....</p>
                </div>
            </div>
        </div>
    );
}

export default Body;
