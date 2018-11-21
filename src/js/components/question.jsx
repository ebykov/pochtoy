import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import store from '../store';
import { TransitionGroup, Transition } from 'react-transition-group';
import request from '../lib/request';
import * as Analytics from '../lib/analytics';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const craneDefaultStyles = {};

let transitionCraneStyles = {};

const transitionClawLStyles = {
  entered:  {
    transition: 'transform 100ms linear',
    transform: 'rotate(-30deg) translate3d(0,0,0)'
  }
};

const transitionClawRStyles = {
  entered:  {
    transition: 'transform 100ms linear',
    transform: 'rotate(22deg) translate3d(0,0,0)'
  }
};

const transitionLotStyles = {
  entered:  {
    transition: 'transform 1s linear',
    transform: 'translate3d(0, -500px, 0)'
  }
};

const options = [{
    value: 80,
    label: '80%'
  }, {
    value: 60,
    label: '60%'
  }, {
    value: 40,
    label: '40%'
  }, {
    value: 20,
    label: '20%'
  }, {
    value: 10,
    label: '10%',
  }, {
    value: 0,
    label: 'Нет',
  }];

function getOffsetY(el) {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}

const Option = (props, state) => {
  return (
    <div className="pochtoy-options__item">
      <div className={`pochtoy-option${props.isActive ? ' is-active' : ''}`} onClick={e => props.onClick(e, props.item.value)}>
        <div className="pochtoy-option__btn" />
        <div className="pochtoy-option__label">{props.item.label}</div>
      </div>
    </div>
  );
};

const OptionList = (props, state) => {
  const getOptions = () => {
    return props.items.map((item, i) => {
      let isActive = props.activeValue === item.value;
      return <Option key={i} item={item} isActive={isActive} onClick={props.onClick} />;
    });
  };

  return (
    <div className="pochtoy-options">
      {getOptions()}
    </div>
  );
};

class Question extends Component {
  constructor() {
    super();

    this.craneOffsetY = 0;

    this.setValue = this.setValue.bind(this);
    this.continue = this.continue.bind(this);
    this.next = this.next.bind(this);
    this.result = this.result.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth < 640) {
      let containerOffsetY = getOffsetY(this.props.test.params.container);
      let lotWrapOffsetY = getOffsetY(this.lotWrap);
      this.craneOffsetY = (lotWrapOffsetY + this.crane.offsetHeight - containerOffsetY);
      craneDefaultStyles.transform = `translate3d(0, ${-this.craneOffsetY}px, 0)`;
    } else {
      this.craneOffsetY = this.crane.offsetHeight;
      craneDefaultStyles.transform = `translate3d(0, ${-this.craneOffsetY}px, 0)`;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.showPromo) {
      craneDefaultStyles.transform = `translate3d(0, ${-1000}px, 0)`;
    } else {
      craneDefaultStyles.transform = `translate3d(0, ${-this.craneOffsetY}px, 0)`;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.promo) {
      window.scroll({
        top: getOffsetY(this.promo) + this.promo.offsetHeight / 2 - window.innerHeight / 2,
        behavior: 'smooth'
      });
    }
  }

  setValue(e, value) {
    if (this.answered) {
      return;
    }

    Analytics.sendEvent(`Option - ${value}`);

    this.setState({
      answerValue: value
    });
  }

  continue(type = '') {
    if (this.state.answerValue === undefined) {
      return;
    }

    if (type === 'promo') {
      Analytics.sendEvent('Next From Promo');
    } else if (type === 'usual') {
      Analytics.sendEvent('Next');
    }

    this.answered = true;

    if (this.state.answerValue && !this.state.grabbing) {
      window.scroll({
        top: this.props.test.params.container.offsetTop,
        behavior: 'smooth'
      });

      let craneOffsetY = getOffsetY(this.crane);
      let lotOffsetY = getOffsetY(this.lot);
      let betweenY = lotOffsetY - (craneOffsetY + this.crane.offsetHeight + this.craneOffsetY);
      let offsetY = lotOffsetY + this.lot.offsetHeight;

      transitionCraneStyles = {
        entering: {
          transition: `transform 200ms linear`,
          transform: `translate3d(0, ${betweenY}px, 0)`
        },
        entered: {
          transition: `transform 1s 200ms linear`,
          transform: `translate3d(0, ${-offsetY + betweenY}px, 0)`,
        }
      };

      transitionLotStyles.entered.transform = `translate3d(0, ${-offsetY}px, 0)`;
      this.setState({
        grabbing: true
      });

      return;
    } else if (!this.state.showPromo && this.props.test.question.promo) {
      this.setState({
        showPromo: true
      });

      return;
    } else {
      this.answered = false;

      window.scroll({
        top: this.props.test.params.container.offsetTop,
        behavior: 'smooth'
      });
    }

    store.dispatch({
      type: 'TEST_ANSWER',
      answer: this.state.answerValue
    });

    if (this.props.test.activeIndex < this.props.test.questionsCount - 1) {
      this.next();
    } else {
      this.result();
    }

    this.setState({
      answerValue: undefined,
      showPromo: false,
      grabbing: false,
      lotImageStyles: {
        opacity: 0,
      }
    });
  }

  next() {
    store.dispatch({
      type: 'TEST_NEXT',
    });
  }

  result() {
    Analytics.sendEvent('Result');

    store.dispatch({
      type: 'TEST_STATUS',
      status: 'RESULT',
    });
  }

  render(props, state) {
    const getNotice = () => {
      if (state.answerValue === undefined) {
        return null;
      }

      const value = state.answerValue;
      const results = props.test.results[props.test.activeIndex];
      let userPercent = 0;

      if (results) {
        let total = 0;
        let current = 0;

        for (let k in results) {
          if (results.hasOwnProperty(k)) {
            total += results[k];

            if (parseInt(k) === parseInt(value)) {
              current = results[k];
            }
          }
        }

        userPercent = Math.round(current/total*100);
      }

      return `${userPercent}% пользователей ${state.answerValue ? 'выбрали такую же скидку' : 'решили так же'}`;
    };

    const getPrice = () => {
      if (state.answerValue) {
        const newPrice = Math.round(props.test.question.price * (1 - state.answerValue / 100));
        return ([
          <div className="pochtoy-lot__price pochtoy-lot__price--old">{props.test.question.price}</div>,
          <div className="pochtoy-lot__price pochtoy-lot__price--new">{newPrice}</div>
        ])
      }

      return <div className="pochtoy-lot__price">{props.test.question.price}</div>;
    };

    const getPromo = () => {
      if (!state.showPromo) {
        return null;
      }

      return (
        <div className="pochtoy-q__promo">
          <div className="pochtoy-q__promo-inner" ref={el => this.promo = el}>
            <div className="pochtoy-q__promo-text" dangerouslySetInnerHTML={{ __html: props.test.question.promo }} />
            <button className="pochtoy-q__promo-btn" onClick={e => this.continue('promo')}>Далее</button>
          </div>
        </div>
      );
    };

    return (
      <div className="pochtoy-q">
        {getPromo()}
        <div className="pochtoy-q__pager">{`${props.test.activeIndex + 1}/${props.test.questionsCount}`}</div>
        <div className="pochtoy-q__inner">
          <div className="pochtoy-q__body">
            <div className="pochtoy-q__label">Что мне надо сделать:</div>
            <div className="pochtoy-q__title">{props.test.question.act}</div>
            <div className="pochtoy-q__label">За это я получу:</div>
            <div className="pochtoy-q__subtitle">{props.test.question.lot}</div>
            <div className="pochtoy-q__lot">
              <div className="pochtoy-lot" ref={el => this.lotWrap = el}>
                <div className="pochtoy-lot__body">
                  <Transition in={state.grabbing} timeout={200}>
                    {state => (
                      <div className="pochtoy-crane pochtoy-crane--back" style={{ ...craneDefaultStyles, ...transitionCraneStyles[state] }}>
                        <img src="https://leonardo.osnova.io/e7cd2921-57c5-c8e1-93c5-5561828d474c/" alt="" className="pochtoy-crane__claw pochtoy-crane__claw--b"/>
                      </div>
                    )}
                  </Transition>
                  <Transition in={state.grabbing} timeout={200}>
                    {state => (
                      <div className="pochtoy-crane" style={{ ...craneDefaultStyles, ...transitionCraneStyles[state] }} ref={el => this.crane = el}>
                        <img src="https://leonardo.osnova.io/adb3f56f-25d1-1e95-70c6-362f42c3a129/" alt="" className="pochtoy-crane__grabber"/>
                        <img style={transitionClawLStyles[state]} src="https://leonardo.osnova.io/9586ee7f-571f-d238-75f7-4b34070a3a62/" alt="" className="pochtoy-crane__claw pochtoy-crane__claw--l" />
                        <img style={transitionClawRStyles[state]} src="https://leonardo.osnova.io/f433ab26-fa16-ad9e-7a31-396a74236d93/" alt="" className="pochtoy-crane__claw pochtoy-crane__claw--r" />
                      </div>
                    )}
                  </Transition>
                  <Transition in={state.grabbing} timeout={400}>
                    {status => (
                      <img onLoad={() => {
                        this.setState({
                          lotImageStyles: {
                            opacity: 1,
                          }
                        });
                      }} onTransitionEnd={this.continue} style={{ ...transitionLotStyles[status], ...state.lotImageStyles }} src={props.test.question.img} ref={el => this.lot = el} alt="" className={`pochtoy-lot__img pochtoy-lot__img--${props.test.activeIndex + 1}`}/>
                    )}
                  </Transition>
                </div>
                <div className="pochtoy-lot__bottom">{getPrice()}</div>
              </div>
              <div className="pochtoy-q__notice">{getNotice()}</div>
            </div>
            <div className="pochtoy-q__label pochtoy-q__label--options">При условии, что скидка будет:</div>
            <div className="pochtoy-q__options">
              <OptionList items={options} activeValue={state.answerValue} onClick={this.setValue} />
            </div>
            <div className="pochtoy-q__btn">
              <button className={`pochtoy-btn${state.answerValue === undefined ? ' is-disabled' : ''}`} onClick={e => this.continue('usual')}>{props.test.activeIndex < props.test.questionsCount - 1 ? 'Согласен' : 'Результат'}</button>
            </div>
          </div>
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

export default connect(mapStateToProps)(Question);