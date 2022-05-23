import '../../App.css';
import TextareaAutosize from '@mui/base/TextareaAutosize';

function InputComponent(props) {
    return (
        <TextareaAutosize
            aria-label="maximum height"
            placeholder="Enter a text to get started! It does not have to be perfect.. Just any words should do :)"
            value={props.input}
            name="input"
            onChange={props.handleChange}
            style={{ width: '100%', height: '80vh', border:"none "}}
        />
    );
}

export default InputComponent;