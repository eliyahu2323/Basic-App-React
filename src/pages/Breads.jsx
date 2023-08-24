function Bread() {
  return (
    <>
      <section className="heading">
        <h1>לחמי מחמצת</h1>

        <section className="product-box">
          <div>
            <h1>זיתי קלמטה וערמונים</h1>
            <img
              src="bread.jpg"
              height="180"
              width="170"
              alt="Bakery && Developers"
            />
            <button className="btn btn-toolbar">הוספה לסל</button>
          </div>
          <div>
            <h1>זיתי קלמטה</h1>
            <img
              src="logo.png"
              height="150"
              width="150"
              alt="Bakery && Developers"
            />
            <button className="btn btn-toolbar">הוספה לסל</button>
          </div>
          <div>
            <h1>ערמונים </h1>
            <img
              src="logo.png"
              height="150"
              width="150"
              alt="Bakery && Developers"
            />
            <button className="btn btn-toolbar">הוספה לסל</button>
          </div>
          <div>
            <h1>בצל מטוגן </h1>
            <img
              src="logo.png"
              height="150"
              width="150"
              alt="Bakery && Developers"
            />
            <button className="btn btn-toolbar">הוספה לסל</button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Bread;
