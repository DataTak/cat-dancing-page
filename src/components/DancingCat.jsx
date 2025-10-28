import '../styles/animations.css'
import catSvg from '../assets/images/cat.svg'

export default function DancingCat({ isAnimating }) {
  return (
    <div className="dancing-cat-container">
      <img
        src={catSvg}
        alt="춤추는 고양이"
        className={`dancing-cat ${isAnimating ? 'animate' : ''}`}
      />
    </div>
  )
}
