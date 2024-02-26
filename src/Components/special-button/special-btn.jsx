import './special-button.css'

function SpecialButton({value1,value2,name,logo,color,bgColor}){
    return (
        <div className="summary__item" style={{backgroundColor:bgColor}}>
            
            <div className="summary__item-label" style={{color:color}}>
                <img src={logo} alt=""/>
                <span class="summary__item-title">{name}</span>
            </div>
        
            <div class="summary__item-value">
              <span class="summary__item-score">{value1}</span>
              <span class="summary__item-total"> / {value2}</span>
            </div>

        </div>
    )
}

export default SpecialButton;