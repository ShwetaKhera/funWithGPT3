import React from 'react';

import './App.css';

import FooterComponent from "./components/footer/footerComponent";
import HeaderComponent from './components/header/headerComponent';
import InputComponent from './components/input/inputComponent';
import ResponseComponent from './components/response/responseComponent';


import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { frequency_penalty, max_tokens, n, presence_penalty, temperature, top_p } from './api/parameters';
import Item from './components/extra/gridItem';
import { url_endpoint_completion, url_openai } from './api/url';
import { postData } from './api/api_call';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: [],
      loading: false,
      engine: "text-curie-001"
    };

    this.handleChange = this.handleChange.bind(this);
    this.postGPTData = this.postGPTData.bind(this);
  }

  postGPTData = () => {
    const url = url_openai + this.state.engine + url_endpoint_completion
    const data = {
      prompt: this.state.input,
      temperature: temperature,
      max_tokens: max_tokens,
      top_p: top_p,
      frequency_penalty: frequency_penalty,
      presence_penalty: presence_penalty,
      n: n
    }

    this.setState({ loading: true });
    postData(url,data).then(res => res.json())
      .then(res => {
        this.handleGPTResponse(res);
      })
      .catch(err => {
        console.log(err)
    });
  }

  handleGPTResponse = (res) => {
    const out = {
      input: this.state.input,
      output: res.choices[0].text,
    };
    this.setState({
      input: "",
      loading: false,
      output: [out,
        ...this.state.output]
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let { input, output, loading, engine } = this.state;
    return (
      <div className="App">
        <HeaderComponent handleChange={this.handleChange} engine={engine} />

        <Grid container spacing={1} margin={1}>
          <Grid item xs={5}>
          <Item><InputComponent input={input} handleChange={this.handleChange}/></Item>
          </Grid>

          <Grid item xs={1}>
            <Button
              centerRipple
              style={{ top: '40%',color: "#6495ed" }}
              onClick={this.postGPTData}>
              AbraCadabra
            </Button>
          </Grid>
          <Grid item xs={5.8}>
            <Item><ResponseComponent output={output} loading={loading} /></Item>
          </Grid>
        </Grid>
        <FooterComponent />
      </div>
    )
  }
}

export default App;
