import "./summary.css";
import SpecialButton from "../Special-Button/special-btn.jsx";
import Button from "../Button/button.jsx";
function Summary(){
    
    return (
        <div className="summary__container">

            <span class="summary__title">Summary</span>
            <SpecialButton 
                value1={80} value2={100} 
                name={"Reaction"} 
                logo={'https://valperdev.github.io/results-summary-component/assets/images/icon-reaction.svg'} 
                color={"#ff5757"} 
                bgColor={"#ffeeee"}/>

            <SpecialButton 
                value1={92} value2={100} 
                name={"Memory"}
                logo={'	https://valperdev.github.io/results-summary-component/assets/images/icon-memory.svg'} 
                color={"#ffb01f"} 
                bgColor={"#fff7e8"}/>

            <SpecialButton 
                value1={61} value2={100} 
                name={"Verbal"}
                logo={'	https://valperdev.github.io/results-summary-component/assets/images/icon-verbal.svg'} 
                color={"#00BD91"} 
                bgColor={"#e5f8f3"}/>

            <SpecialButton 
                value1={72} value2={100} 
                name={"Visual"}
                logo={'	https://valperdev.github.io/results-summary-component/assets/images/icon-visual.svg'} 
                color={"#1125d4"} 
                bgColor={"#e7e9fa"}/>
            
            <Button className="button"
            button_value={"Continue"}
            background_color={"#303b5a"}
            text_color={"#FFFFFF"}
            />
            


        </div>
    )
}

export default Summary;
