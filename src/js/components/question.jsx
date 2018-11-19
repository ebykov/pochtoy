import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import store from '../store';
import * as Analytics from '../lib/analytics';
import Svg from '../svg';

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
    value: 0,
    label: 'Ни за что',
    isActive: true
  }];

const Option = (props, state) => {
  return (
    <div className={`pochtoy-q__option${props.item.value === 0 ? ' pochtoy-q__option--full' : ''}`}>
      <div className={`pochtoy-option${props.isActive ? ' is-active' : ''}`} onClick={e => props.onClick(props.item.value)}>
        <div className="pochtoy-option__btn" />
        <div className="pochtoy-option__label">{props.item.label}</div>
      </div>
    </div>
  );
};

class OptionList extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState({
      activeValue: value
    });

    this.props.onClick(value);
  }

  render(props, state) {
    const getOptions = () => {
      return props.items.map((item, i) => {
        let isActive = state.activeValue !== undefined ? state.activeValue === item.value : props.activeValue === item.value;
        return <Option key={i} item={item} isActive={isActive} onClick={this.onClick} />;
      });
    };

    return (
      <div className="pochtoy-q__options">
        {getOptions()}
      </div>
    );
  }
}

class Question extends Component {
  constructor() {
    super();

    this.state.answerValue = 0;

    this.answer = this.answer.bind(this);
    this.next = this.next.bind(this);
    this.result = this.result.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  answer(value) {
    this.setState({
      answerValue: value
    })
  }

  next() {
    Analytics.sendEvent('Next');

    this.setState({
      promoIsClose: false
    });

    store.dispatch({
      type: 'TEST_ANSWER',
      answer: this.state.answerValue
    });

    store.dispatch({
      type: 'TEST_NEXT',
    });
  }

  result() {
    Analytics.sendEvent('Result');

    store.dispatch({
      type: 'TEST_ANSWER',
      answer: this.state.answerValue
    });

    store.dispatch({
      type: 'TEST_STATUS',
      status: 'RESULT',
    });
  }

  render(props, state) {
    const getNotice = () => {
      const value = state.answerValue === undefined ? 0 : state.answerValue;
      const results = props.test.results[props.test.activeIndex];
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

      return Math.round(current/total*100) + '% пользователей выбрали такую же скидку';
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
      if (!props.test.question.promo || state.promoIsClose) {
        return null;
      }

      return (
        <div className="pochtoy-q__promo">
          <div className="pochtoy-q__promo-close" onClick={ e => this.setState({
            promoIsClose: true,
          }) } />
          <div className="pochtoy-q__promo-text" dangerouslySetInnerHTML={{ __html: props.test.question.promo }} />
        </div>
      );
    };

    return (
      <div className="pochtoy-q">
        {getPromo()}
        <div className="pochtoy-q__body">
          <div className="pochtoy-q__title">{props.test.question.act}</div>
          <div className="pochtoy-q__subtitle">{props.test.question.product}</div>
          <div className="pochtoy-q__lot">
            <div className="pochtoy-crane">
              <img src="https://leonardo.osnova.io/863cbbd9-c53c-b751-7dc2-c99e38736d3d/" alt="" className="pochtoy-crane__main"/>
            </div>
            <div className="pochtoy-lot">
              <div className="pochtoy-lot__body">
                <img src="https://leonardo.osnova.io/95f70e1c-448f-f99d-a983-c1453af530f7/" alt="" className="pochtoy-lot__img"/>
              </div>
              <div className="pochtoy-lot__bottom">{getPrice()}</div>
            </div>
            <div className="pochtoy-q__notice">{getNotice()}</div>
          </div>
          <OptionList items={options} activeValue={state.answerValue} onClick={this.answer} />
          <div className="pochtoy-q__btn">
            { props.test.activeIndex < props.test.questionsCount - 1 ?
                <button className="pochtoy-btn" onClick={this.next}>Далее</button>
              :
                <button className="pochtoy-btn" onClick={this.result}>Результат</button>
            }
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