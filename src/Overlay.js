export function Overlay() {
  return (
    <>
      <div className="char" style={{ top: 40, left: 40 }}>
        C
      </div>
      <div className="char" style={{ top: 40, left: '22vw' }}>
        N
      </div>
      <div className="char" style={{ top: '10vw', left: '16vw' }}>
        D
      </div>
      <div className="char" style={{ bottom: 40, left: '40vw' }}>
        R
      </div>
      <div className="char" style={{ bottom: 40, left: '50vw' }}>
        V
      </div>
      <div className="char" style={{ bottom: 40, left: '60vw' }}>
        S
      </div>
      <div style={{ position: 'absolute', top: 40, right: 160, fontSize: '15px', textAlign: 'right' }}>
        A DEV
        <br />
        COLLECTIVE
      </div>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '15px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        —
        <br />
        1/10/23
      </div>
      <div style={{ position: 'absolute', bottom: 120, left: 120, fontSize: '18px' }}>
        Runtime caustics and soft shadows,
        <br />
        for more realism on the web.
        <br />
        <br />
      </div>
    </>
  )
}
