export default function AnimationControls({ isAnimating, onToggle }) {
  return (
    <div className="animation-controls">
      <button
        className={`control-button ${isAnimating ? 'active' : ''}`}
        onClick={onToggle}
      >
        {isAnimating ? '정지' : '시작'}
      </button>
    </div>
  )
}
