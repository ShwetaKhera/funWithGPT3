import '../../App.css';

import { FixedSizeList } from 'react-window';
import listItem from './listItem';

function ResponseComponent(props) {
    let output = props.output;
    return (
        <div>
            <FixedSizeList
                itemData={output}
                height={780}
                itemSize={100}
                itemCount={output.length}
                overscanCount={5}
            >
                {listItem}
            </FixedSizeList>
        </div>

    );
}

export default ResponseComponent;