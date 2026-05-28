import { useState } from "react"
import { ProgressiveBlur } from "../progressive-blur"
import { ImageInfo } from "./ImageInfo"

export const ImageOnBlur = ({ imgSrc }: { imgSrc: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-full relative rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imgSrc} alt="Photo of me" className="w-full block rounded-xl" />
      {isHovered && (
        <ProgressiveBlur
          direction="bottom"
          blurLayers={10}
          blurIntensity={0.6}
          className="absolute inset-0"
        >
          <ImageInfo />
        </ProgressiveBlur>
      )}
    </div>
  )
}
