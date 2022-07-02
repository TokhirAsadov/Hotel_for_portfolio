import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/686023.webp?k=315b82bac9991c71d6f14f8618e68a9b6d3f45b61b9ceb335523918d0e086dbf&o="
          alt="picture" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Tashkent</h1>
          <h2>687 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/916707.webp?k=92d3c6a6f59fe96b7044218defba0d9e1b9b376b424121dbb29db63a45c62d24&o="
          alt="picture" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Samarkand</h1>
          <h2>285 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/948982.webp?k=df876b79aa087808adf33387dfdad56350813a328ca436dbad74fb9fa597bc16&o="
          alt="picture" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Bukhara</h1>
          <h2>282 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;