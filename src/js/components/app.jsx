import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Enter from './enter';
import Question from './question';
import Result from './result';

class App extends Component {
  constructor() {
    super();

    this.onImageLoad = this.onImageLoad.bind(this);
    this.onImageAnimationEnd = this.onImageAnimationEnd.bind(this);
  }

  onImageLoad() {
    this.setState({
      isImageLoaded: true,
    });
  }

  onImageAnimationEnd() {
    this.setState({
      isImageAnimationEnd: true,
    });
  }

  render(props, state) {
    const getEnter = () => {
      if (window.innerWidth < 640) {
        return <Enter />;
      } else {
        return [
          window.innerWidth >= 1025 ? <img style={ state.isImageLoaded ? { animation: 'hands 1.5s' } : {} } src="https://leonardo.osnova.io/e6c7d2d4-ebec-e945-761b-6bcf295ad3da/" alt="" class="pochtoy-hands pochtoy-hands--l" /> : null,
          <img style={ state.isImageLoaded ? { animation: 'hands 1.5s' } : {} } onLoad={this.onImageLoad} onAnimationEnd={this.onImageAnimationEnd} src="https://leonardo.osnova.io/e6c7d2d4-ebec-e945-761b-6bcf295ad3da/" alt="" class="pochtoy-hands pochtoy-hands--r" />,
          state.isImageAnimationEnd ? <Enter /> : null
        ]
      }
    };

    const getBody = (status) => {
      switch (status) {
        case 'START': return <Question />;
        case 'RESULT': return <Result />;
        default: return getEnter();
      }
    };

    return (
      <div className={`pochtoy${props.test.params.isFeed ? ' is-feed' : ''}`}>
        <a href="https://www.pochtoy.com/" target="_blank" className="pochtoy__logo">
          <img src="https://leonardo.osnova.io/abb1ef97-1e09-1f34-11c9-b220c483ede9/"
               srcSet="https://leonardo.osnova.io/1346cc38-ba1c-d42e-5a73-fdb4f1de2e07/ 2x" alt="" />
        </a>
        <div className={`pochtoy__inner${props.test.status === 'RESULT' ? ' pochtoy__inner--result' : ''}`}>
          {getBody(props.test.status)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    test: store.testState
  };
};

export default connect(mapStateToProps)(App);