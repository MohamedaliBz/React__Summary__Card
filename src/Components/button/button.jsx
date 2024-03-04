import './button.css';

// button_value,background_color,text_color
// we can assign default values for parameters ellli bech n3addiwouhom 

function Button(props) {

    const style={
        backgroundColor:props?.background_color, 
        color:props?.text_color
    }

    return (
        <button className="summary__button" style={style}>
            {props?.button_value}
        </button>
    );
}

export default Button;