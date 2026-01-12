interface CapybaraProps {
  mood?: "happy" | "thinking" | "excited" | "sleepy" | "proud"
  size?: number
  className?: string
}

export function Capybara({ mood = "happy", size = 120, className = "" }: CapybaraProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Body */}
      <ellipse cx="60" cy="75" rx="35" ry="28" fill="#C4A484" />

      {/* Head */}
      <ellipse cx="60" cy="45" rx="28" ry="24" fill="#D4B896" />

      {/* Snout */}
      <ellipse cx="60" cy="55" rx="18" ry="12" fill="#E8D5B7" />

      {/* Nose */}
      <ellipse cx="60" cy="52" rx="6" ry="4" fill="#8B6F47" />

      {/* Nostrils */}
      <circle cx="57" cy="52" r="1.5" fill="#6B5235" />
      <circle cx="63" cy="52" r="1.5" fill="#6B5235" />

      {/* Eyes - change based on mood */}
      {mood === "sleepy" ? (
        <>
          <path d="M48 42 Q52 44 56 42" stroke="#5D4E37" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M64 42 Q68 44 72 42" stroke="#5D4E37" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </>
      ) : mood === "excited" ? (
        <>
          <ellipse cx="50" cy="40" rx="5" ry="6" fill="#5D4E37" />
          <ellipse cx="70" cy="40" rx="5" ry="6" fill="#5D4E37" />
          <circle cx="51" cy="38" r="2" fill="white" />
          <circle cx="71" cy="38" r="2" fill="white" />
          {/* Sparkles */}
          <path d="M82 30 L84 34 L88 32 L84 36 L86 40 L82 37 L78 40 L80 36 L76 32 L80 34 Z" fill="#FFD700" />
          <path d="M32 28 L34 32 L38 30 L34 34 L36 38 L32 35 L28 38 L30 34 L26 30 L30 32 Z" fill="#FFD700" />
        </>
      ) : (
        <>
          <ellipse cx="50" cy="40" rx="4" ry="5" fill="#5D4E37" />
          <ellipse cx="70" cy="40" rx="4" ry="5" fill="#5D4E37" />
          <circle cx="51" cy="39" r="1.5" fill="white" />
          <circle cx="71" cy="39" r="1.5" fill="white" />
        </>
      )}

      {/* Eyebrows for thinking */}
      {mood === "thinking" && (
        <>
          <path d="M46 34 Q50 32 54 34" stroke="#5D4E37" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M66 32 Q70 34 74 32" stroke="#5D4E37" strokeWidth="2" strokeLinecap="round" fill="none" />
        </>
      )}

      {/* Ears */}
      <ellipse cx="38" cy="28" rx="6" ry="8" fill="#C4A484" />
      <ellipse cx="82" cy="28" rx="6" ry="8" fill="#C4A484" />
      <ellipse cx="38" cy="28" rx="3" ry="5" fill="#E8D5B7" />
      <ellipse cx="82" cy="28" rx="3" ry="5" fill="#E8D5B7" />

      {/* Cheeks / blush */}
      <ellipse cx="40" cy="48" rx="5" ry="3" fill="#FFCCCB" opacity="0.6" />
      <ellipse cx="80" cy="48" rx="5" ry="3" fill="#FFCCCB" opacity="0.6" />

      {/* Mouth - change based on mood */}
      {mood === "happy" && (
        <path d="M54 58 Q60 63 66 58" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" fill="none" />
      )}
      {mood === "excited" && (
        <>
          <ellipse cx="60" cy="60" rx="6" ry="4" fill="#8B6F47" />
          <ellipse cx="60" cy="59" rx="4" ry="2" fill="#FF9999" />
        </>
      )}
      {mood === "thinking" && <circle cx="66" cy="60" r="3" fill="#8B6F47" />}
      {mood === "sleepy" && (
        <path d="M55 58 Q60 60 65 58" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" fill="none" />
      )}
      {mood === "proud" && (
        <path d="M52 57 Q60 65 68 57" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      )}

      {/* Feet */}
      <ellipse cx="42" cy="98" rx="10" ry="6" fill="#B89B7A" />
      <ellipse cx="78" cy="98" rx="10" ry="6" fill="#B89B7A" />

      {/* Thinking bubble for thinking mood */}
      {mood === "thinking" && (
        <>
          <circle cx="92" cy="22" r="3" fill="#E8E8E8" />
          <circle cx="98" cy="14" r="5" fill="#E8E8E8" />
          <circle cx="108" cy="8" r="8" fill="#E8E8E8" />
          <text x="104" y="12" fontSize="8" fill="#888" textAnchor="middle">
            ?
          </text>
        </>
      )}

      {/* Crown/star for proud mood */}
      {mood === "proud" && (
        <path
          d="M60 8 L63 18 L73 18 L65 24 L68 34 L60 28 L52 34 L55 24 L47 18 L57 18 Z"
          fill="#FFD700"
          stroke="#E6C200"
          strokeWidth="1"
        />
      )}

      {/* Z's for sleepy mood */}
      {mood === "sleepy" && (
        <>
          <text x="85" y="25" fontSize="12" fill="#888" fontWeight="bold">
            z
          </text>
          <text x="92" y="18" fontSize="10" fill="#AAA" fontWeight="bold">
            z
          </text>
          <text x="97" y="12" fontSize="8" fill="#CCC" fontWeight="bold">
            z
          </text>
        </>
      )}
    </svg>
  )
}
