// Create your style.
const styles = {
  marketCard: {
    width: '18%',
    margin: '0 2% 8px 0',
    padding: 0,
    border: '1px solid black',
    borderRadius: '5px',
    '& span': {
      display: 'block',
      textAlign: 'center'
    }
  },
  producer: {
    extend: 'marketCard',
    backgroundColor: 'lightblue'
  },
  grain: {
    extend: 'producer'
  },
  cog: {
    extend: 'producer'
  },
  cattle: {
    extend: 'producer'
  },
  coffee: {
    extend: 'marketCard',
    backgroundColor: 'lightcoral'
  },
  shop: {
    extend: 'marketCard',
    backgroundColor: 'lightgreen'
  },
  bread: {
    extend: 'shop'
  },
  factory: {
    extend: 'shop'
  },
  fruit: {
    extend: 'shop'
  }
}

export default styles
