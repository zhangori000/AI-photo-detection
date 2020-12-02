import React, { Component } from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import Toggle from './components/Toggle/Toggle';
import Particles from 'react-particles-js';
import ApparelRecognition from './components/ApparelRecognition/ApparelRecognition';
import Clarifai from 'clarifai';
import Scroll from './components/Scroll/Scroll'
import './App.css';




const app = new Clarifai.App({
 apiKey: '0854377063994e44b875026a7f6ba9b9'
});

const particleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      general_output: [],
      modelID: {
        'general': Clarifai.GENERAL_MODEL, 
        'apparel': Clarifai.APPAREL_MODEL,
        'travel': Clarifai.TRAVEL_MODEL
      },
      currentID: 'apparel'
    }
  }

  calculateResponse = (data) => {
    console.log(data)
    return data;
  }

  setResponse = (data) => {
    this.setState({general_output: data})
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({imageURL: this.state.input});
    //https://docs.clarifai.com/api-guide/predict/images
    app.models.initModel({id: this.state.modelID[this.state.currentID]})
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts'] // for just the data 
        this.setResponse(this.calculateResponse(concepts));
        console.log(concepts);
      }).catch(err => console.log(err))
    
  }
  onToggleSubmit = (toggleData) => {
    console.log(toggleData);
    this.setState({currentID: toggleData});
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        <Navigation />
        <Logo />
        <Toggle 
          onToggleSubmit={this.onToggleSubmit}
        />
        <Scroll>
          <Rank 
            apparelItems={this.state.general_output}
          />
        </Scroll>
        
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />

        <ApparelRecognition imageURL={this.state.imageURL}/>
      </div>
    );
  }
  
}

export default App;
