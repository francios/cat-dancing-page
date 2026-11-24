export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>
          <span aria-hidden="true">🐱</span> 춤추는 고양이
        </h1>
        <p className="subtitle">고양이를 누르면 춤을 멈추거나 다시 시작해요</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>
          단축키: <kbd>Space</kbd> 재생/정지 · <kbd>1</kbd>–<kbd>5</kbd> 춤 선택
        </p>
      </footer>
    </div>
  )
}
