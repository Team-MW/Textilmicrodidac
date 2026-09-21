export function FabricMesh() {
  return (
    <svg
      className="drape"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ink-fall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3b00" stopOpacity="0.7" />
          <stop offset="40%" stopColor="#ff3b00" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="cloth" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#f3f5f7" stopOpacity="0.18" />
          <stop offset="45%" stopColor="#f3f5f7" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ff3b00" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="sleeve" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f5f7" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#f3f5f7" stopOpacity="0.02" />
        </linearGradient>
        <filter id="soft">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      {/* Oversized garment body */}
      <path
        d="M780 70
           C880 50 1020 55 1120 90
           C1180 115 1240 170 1285 250
           C1340 355 1365 500 1340 640
           C1315 780 1220 860 1080 885
           C940 910 780 900 660 850
           C540 800 470 700 450 560
           C430 400 470 250 560 150
           C630 85 700 78 780 70 Z"
        fill="url(#cloth)"
      />

      {/* Left sleeve flare */}
      <path
        d="M560 150
           C480 180 380 260 320 360
           C280 430 270 500 300 540
           C340 500 400 430 470 360
           C510 300 540 220 560 150 Z"
        fill="url(#sleeve)"
      />

      {/* Right sleeve flare */}
      <path
        d="M1120 90
           C1220 100 1340 160 1420 260
           C1470 330 1490 410 1460 470
           C1400 430 1320 350 1240 280
           C1190 230 1150 160 1120 90 Z"
        fill="url(#sleeve)"
      />

      {/* Contour */}
      <path
        d="M780 70
           C880 50 1020 55 1120 90
           C1220 100 1340 160 1420 260
           C1470 330 1490 410 1460 470
           M1120 90
           C1180 115 1240 170 1285 250
           C1340 355 1365 500 1340 640
           C1315 780 1220 860 1080 885
           C940 910 780 900 660 850
           C540 800 470 700 450 560
           C430 400 470 250 560 150
           C480 180 380 260 320 360
           C280 430 270 500 300 540"
        fill="none"
        stroke="url(#ink-fall)"
        strokeWidth="2.2"
        opacity="0.9"
      />

      {/* Fabric folds */}
      <path
        d="M640 200 C720 300 760 430 770 580 C780 720 740 820 700 860"
        fill="none"
        stroke="#f3f5f7"
        strokeOpacity="0.2"
        strokeWidth="1.6"
      />
      <path
        d="M980 160 C1040 300 1080 450 1060 620 C1040 760 980 840 920 875"
        fill="none"
        stroke="#f3f5f7"
        strokeOpacity="0.14"
        strokeWidth="1.6"
      />
      <path
        d="M820 120 C860 260 890 420 900 580"
        fill="none"
        stroke="#ff3b00"
        strokeOpacity="0.45"
        strokeWidth="2.2"
      />
      <path
        d="M1080 220 C1120 360 1140 500 1120 650"
        fill="none"
        stroke="#00d4ff"
        strokeOpacity="0.25"
        strokeWidth="1.4"
      />

      {/* Neckline */}
      <path
        d="M820 95 C880 130 980 130 1040 95"
        fill="none"
        stroke="#f3f5f7"
        strokeOpacity="0.35"
        strokeWidth="1.8"
      />

      {/* Registration marks */}
      <g opacity="0.55" stroke="#f3f5f7" strokeWidth="1.2" fill="none">
        <circle cx="1280" cy="180" r="20" />
        <circle cx="1280" cy="180" r="4" fill="#ff3b00" stroke="none" />
        <path d="M1260 180h40M1280 160v40" />
      </g>
      <g opacity="0.4" stroke="#f3f5f7" strokeWidth="1.2" fill="none">
        <circle cx="520" cy="700" r="16" />
        <path d="M504 700h32M520 684v32" />
      </g>
    </svg>
  );
}
