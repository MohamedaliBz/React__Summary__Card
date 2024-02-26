import './button.css';

function Button({button_value,background_color,text_color}) {

    return (
        <button className="summary__button" style={{backgroundColor:background_color , color:text_color}}>
            {button_value}
        </button>
    );
}

export default Button;