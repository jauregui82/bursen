import PropTypes from "prop-types";
import { palett } from "../../../../styles/theme";

/**
 * @param {string} action - Action for button.
 * @param {string} children - Text button.
 * @param {('btnRed'|'btnWhite')} type - if btnRed button is color red, else btnWhite is color white
 * @param {boolean} disabled - True o false disabled button
 */
const CustomButton = ({ action, children, type, disabled }) =>{

    return(
        <>
            <button
                className={type ?? "btnRed"}
                onClick={() => action && [action()]}
                disabled={disabled}
                type={type}
            >
                {children}
            </button>
            <style jsx>
                {`
                    button {
                        border: none;
                        outline: none;
                        height: 56px;
                        width: 260px;
                        left: 0px;
                        top: 0px;
                        border-radius: 4px;
                        font-family: "Helvetica Neue"

                    }
                    button:active {
                        border: solid 1px ${palett.white};
                        position:relative;
                        top:1px;
                    }
                    .btnRed {
                        background-color: ${palett.primary.main};
                        color: ${palett.white};
                    }
                    .btnRed:hover {
                        background-color: ${palett.primary.light};
                    }
                    .btnWhite {
                        background-color: ${palett.white};
                        color: ${palett.text.btn.dark};
                    }
                    .btnWhite:hover {
                        background-color: #f5f5f5;
                    }
                `}
            </style>
        </>
    )
}
CustomButton.propTypes = {
    action: PropTypes.func,
    children: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf([
        "primary",
        "btnWhite"
      ])
  };

export default CustomButton;