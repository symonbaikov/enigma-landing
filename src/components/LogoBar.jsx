export default function LogoBar() {
  return (
    <section className="logo-bar">
      <div className="container-wide">
        <div className="col-eye section-eyebrow" style={{textAlign: 'center'}}>TRUSTED BY DATA-DRIVEN TEAMS</div>
        <div className="logo-row">
          {['Stratamesh', 'Voltaic', 'Coreframe', 'Halcyon', 'Northwind', 'Quantle'].map(n =>
            <div className="logo-cell" key={n}>{n}</div>
          )}
        </div>
      </div>
    </section>
  );
}
