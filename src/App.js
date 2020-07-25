import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Greetings to='world' />
      <Description description='This is task 1 for ReactJS GMP' />
      <StaticLink
        href='https://reactjs.org/docs/getting-started.html'
        name='React JS Docs'
      />
    </div>
  );
}

class Greetings extends React.Component {
  render() {
    return React.createElement('h1', null, `Hello ${this.props.to}`);
  }
}

class Description extends React.PureComponent {
  render() {
    return <div className='description'>{this.props.description}</div>;
  }
}

const StaticLink = (props) => (
  <a className='static-link' href={props.href}>
    {props.name}
  </a>
);

export default App;
