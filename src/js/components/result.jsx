import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import store from '../store';
// import { Transition } from 'react-transition-group';
// import * as Analytics from '../lib/analytics';
import * as Share from '../lib/share';

class Result extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    Share.make(this.shareMoral, {
      url: this.props.test.params.share.url + '/moral/' + 68,
      title: this.props.test.params.share.title,
      twitter: this.props.test.params.share.title
    });

    Share.make(this.shareAmoral, {
      url: this.props.test.params.share.url + '/amoral/' + 32,
      title: this.props.test.params.share.title,
      twitter: this.props.test.params.share.title
    });
  }

  render(props, state) {
    console.log(props.test.answers);
    const getResult = () => {
      const userResults = props.test.results;
      const answers = props.test.answers;
      let result = 0;

      userResults.forEach((item, i) => {
        let total = 0;
        let amoral = 0;
        for (let k in item) {
          if (item.hasOwnProperty(k)) {
            total += item[k];
            if (parseInt(answers[i]) <= parseInt(k)) {
              amoral += item[k];
            }
          }
        }
        result += Math.round(amoral/total*100);
      });

      return Math.round(result/props.test.questionsCount);
    };

    const result = getResult();

    return (
      <div className="pochtoy-result">
        <div className="pochtoy-result__main">
          <div className="pochtoy-result__block">
            <div className="pochtoy-result__title">Я этичнее {result}%<br/>пользователей TJ</div>
            <div className="pochtoy-result__share pochtoy-result__share--dark" ref={el => this.shareMoral = el} />
            <img src="https://leonardo.osnova.io/f0862130-b772-cf33-cf69-7e4dbc2a8465/" alt="" className="pochtoy-result__img"/>
          </div>
          <div className="pochtoy-result__block pochtoy-result__block--a">
            <div className="pochtoy-result__title pochtoy-result__title--a">Я аморальнее {100-result}%<br/>пользователей TJ</div>
            <div className="pochtoy-result__share" ref={el => this.shareAmoral = el} />
            <img src="https://leonardo.osnova.io/230588fc-b0b6-6d8a-fafa-1d86a6977980/" alt="" className="pochtoy-result__img pochtoy-result__img--a"/>
          </div>
        </div>
        <div className="pochtoy-result__bottom">
          <div className="pochtoy-result__text">
            <p>Решать моральные дилеммы не нужно, если заказывать товары из-за рубежа, сидя дома — в США скидки на «Чёрную пятницу» достигают 80%.</p>
            <p>С помощью <a href="https://pochtoy.com" target="_blank">Pochtoy.com</a> можно закупиться во время потребительского безумия: сервис предоставляет американский почтовый адрес для заказов в интернет-магазинах США и собирает все покупки в одну посылку, которая приходит получателю.</p>
          </div>
          <a href="https://pochtoy.com" target="_blank" className="pochtoy-result__btn">Подробности</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    test: store.testState
  };
}

export default connect(mapStateToProps)(Result);