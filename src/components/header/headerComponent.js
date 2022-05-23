import '../../App.css';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { engine_list } from '../../api/parameters';


const getMenuItems = () => {
    return engine_list.map((item, index) => {
        return (
            <MenuItem value={item}>{item}</MenuItem>
        );
    })
}
function HeaderComponent(props) {
    const engine = props.engine;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: "white"}}>
                <Toolbar style={{display: "flex", justifyContent:"space-between"}}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 0, color: "#6495ed" }}>
                        Fun With AI
                    </Typography>

                    <FormControl sx={{ m: 1, minWidth: 250}}>
                        <InputLabel id="demo-simple-select-helper-label">Engine</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={engine}
                            label="Engine"
                            name="engine"
                            onChange={props.handleChange}
                        >
                            {getMenuItems()}
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderComponent;