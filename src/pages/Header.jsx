function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="logo.png"
          height="150"
          width="150"
          alt="Bakery && Developers"
        />
      </div>
      <div className="btn-box">
        <button className="btn btn-toolbar">עוגות</button>
        <button className="btn btn-toolbar">עוגיות</button>
        <button className="btn btn-toolbar">לחמים</button>
      </div>

      <div>
        <button className="btn btn-toolbar">לסל הקניות</button>
      </div>
    </header>
  );
}

export default Header;
