import "./summary.css";
import SpecialButton from "../Special-Button/special-btn";
import Button from "../Button/button.jsx";

function Summary(){

    const buttonData = [
        {
          value1: 80,
          value2: 100,
          name: "Reaction",
          logo: 'https://valperdev.github.io/results-summary-component/assets/images/icon-reaction.svg',
          color: "#ff5757",
          bgColor: "#ffeeee",
        },
        {
          value1: 92,
          value2: 100,
          name: "Memory",
          logo: ' https://valperdev.github.io/results-summary-component/assets/images/icon-memory.svg',
          color: "#ffb01f",
          bgColor: "#fff7e8",
        },
        {
          value1: 61,
          value2: 100,
          name: "Verbal",
          logo: ' https://valperdev.github.io/results-summary-component/assets/images/icon-verbal.svg',
          color: "#00BD91",
          bgColor: "#e5f8f3",
        },
        {
          value1: 72,
          value2: 100,
          name: "Visual",
          logo: ' https://valperdev.github.io/results-summary-component/assets/images/icon-visual.svg',
          color: "#1125d4",
          bgColor: "#e7e9fa",
        },
      ];

      const SpecialButtons = buttonData.map((item) => (
        <SpecialButton
          value1={item.value1}
          value2={item.value2}
          name={item.name}
          logo={item.logo}
          color={item.color}
          bgColor={item.bgColor}
        />
      ));
    
    return (
        <div className="summary__container">

            <span class="summary__title">Summary</span>

            {SpecialButtons}

            <Button className="button"
            button_value={"Continue"}
            background_color={"#303b5a"}
            text_color={"#FFFFFF"}
            />
            
        </div>
    )
}

export default Summary;
