import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import store from '../store';
import { Transition } from 'react-transition-group';
import * as Analytics from '../lib/analytics';
// import Data from '../data';
// import Svg from '../svg';

const defaultStyle = {
  transition: `opacity 200ms linear`,
  opacity: 0,
};

const transitionStyles = {
  entered:  { opacity: 1 },
  exited:   { opacity: 0 },
};

class Enter extends Component {
  constructor() {
    super();

    this.start = this.start.bind(this);
  }

  componentDidMount() {
    this.setState({
      didMount: true,
    });
  }

  start() {
    Analytics.sendEvent('Start');

    store.dispatch({
      type: 'TEST_STATUS',
      status: 'START',
    });
  }

  render(props, state) {
    return (
      <Transition in={state.didMount} timeout={100}>
        { state => (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }} className="pochtoy-enter">
            <div className="pochtoy-enter__title">На что вы готовы ради скидки?</div>
            <div className="pochtoy-enter__text">
              <p>Скоро «Чёрная пятница» — время, когда люди уничтожают магазины и друг друга ради скидок под <span style="color: #FF3939; font-weight: 700;">90%</span>. Пора узнать, на что вы готовы пойти ради наживы и сможете ли сохранить человеколюбие.</p>
              <p>Выберите скидку, ради которой вы готовы совершить неприглядный поступок или пострадать. Всё абсолютно анонимно, так что можно не стесняться.</p>
            </div>
            <div className="pochtoy-enter__btn">
              <button className="pochtoy-btn" onClick={this.start}>Начать</button>
            </div>
          </div>
        ) }
      </Transition>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    test: store.testState
  };
};

export default connect(mapStateToProps)(Enter);