// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    style={{
      opacity: 1
    }}
    {...props}
  >
  <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
    <path d="M3394 7180 c-515 -30 -1044 -185 -1500 -440 -706 -395 -1249 -1006
    -1564 -1759 -55 -133 -61 -150 -114 -321 -170 -552 -198 -1163 -79 -1750 54
    -269 155 -566 284 -839 33 -68 59 -135 59 -148 0 -13 6 -23 14 -23 8 0 44 -48
    80 -108 643 -1068 1795 -1722 3031 -1722 536 0 1048 117 1525 346 319 154 570
    322 845 565 639 564 1068 1400 1160 2264 20 178 22 507 6 685 -80 869 -450
    1651 -1062 2245 -290 281 -560 472 -920 650 -429 211 -861 325 -1349 355 -179
    11 -219 11 -416 0z m636 -135 c317 -43 548 -103 835 -216 897 -352 1620 -1091
    1959 -2001 86 -233 157 -528 192 -803 25 -195 25 -626 0 -810 -111 -825 -452
    -1503 -1043 -2076 -547 -531 -1267 -861 -2048 -939 -156 -16 -505 -14 -670 4
    -558 59 -1068 244 -1539 556 -183 121 -317 230 -490 399 -262 257 -449 500
    -616 799 l-62 113 6 92 c4 51 11 119 16 152 51 332 86 500 146 705 32 108 125
    350 134 350 4 0 23 -17 42 -37 79 -87 293 -269 402 -343 98 -66 274 -148 431
    -200 l160 -54 -42 -9 c-32 -6 -43 -13 -43 -27 0 -25 19 -28 225 -29 626 -4
    954 -60 1094 -187 44 -39 81 -100 81 -131 0 -59 -83 -117 -235 -166 -188 -61
    -383 -91 -849 -128 -76 -6 -146 -12 -155 -14 -99 -18 -299 -22 -357 -6 -54 14
    -118 57 -196 130 -63 58 -108 78 -108 47 0 -14 117 -122 188 -174 89 -64 190
    -79 379 -55 60 7 162 17 228 23 66 6 145 12 175 15 30 2 89 7 130 10 93 8 298
    33 364 46 74 14 77 10 11 -12 -86 -30 -92 -44 -42 -93 34 -35 122 -66 727
    -260 465 -148 467 -149 524 -144 28 3 121 30 206 61 85 31 351 126 590 211
    586 208 841 302 925 340 81 37 139 96 154 153 17 68 280 1266 308 1407 l28
    138 -28 24 c-34 29 -43 29 -132 4 -39 -12 -158 -43 -265 -71 -107 -28 -341
    -91 -520 -141 -179 -49 -421 -116 -539 -149 -340 -94 -382 -112 -416 -179 -7
    -14 -39 -161 -71 -328 -32 -166 -60 -299 -62 -294 -1 5 -23 5 -50 1 -449 -80
    -465 -85 -558 -171 -35 -34 -66 -59 -68 -57 -2 2 -21 39 -44 81 -51 98 -78
    169 -87 234 l-6 51 49 37 c27 20 77 71 112 115 70 89 42 78 280 106 69 8 164
    16 212 16 95 2 112 7 102 32 -9 24 -110 22 -331 -4 -96 -11 -179 -19 -184 -17
    -5 2 14 39 42 83 28 44 67 109 85 145 l34 65 -25 8 c-15 5 -27 7 -28 6 -1 -2
    -17 -33 -36 -69 -87 -165 -284 -423 -367 -481 -202 -139 -722 -131 -1212 17
    -365 111 -748 307 -1036 529 l-88 68 5 41 c20 140 143 492 244 693 l76 151 96
    6 c53 3 141 8 196 11 55 3 137 8 183 11 45 3 82 2 82 -3 2 -29 14 -97 26 -148
    58 -230 236 -368 454 -352 142 11 266 64 357 154 78 75 104 139 111 268 2 57
    8 108 11 113 3 6 56 13 117 17 l110 7 17 -83 c18 -91 74 -215 129 -287 111
    -145 351 -190 546 -102 44 21 69 27 76 20 5 -5 21 -10 34 -10 22 0 23 3 17 40
    -5 29 -1 58 17 107 19 57 23 88 23 193 0 166 -21 215 -85 195 -11 -3 -54 -7
    -96 -7 l-76 -1 -30 39 c-48 60 -142 149 -227 213 -84 65 -87 69 -165 256 -141
    339 -266 472 -365 390 -30 -26 -135 -221 -181 -337 -14 -37 -28 -58 -39 -59
    -9 0 -56 0 -106 1 -49 0 -136 -6 -192 -15 -163 -24 -169 -23 -201 31 -41 70
    -165 233 -233 307 -54 60 -65 67 -98 67 -43 0 -58 -13 -91 -80 -40 -78 -111
    -281 -136 -390 -24 -99 -29 -110 -93 -195 -89 -119 -151 -209 -186 -270 -16
    -27 -29 -51 -30 -53 -1 -1 -46 -9 -99 -17 -106 -16 -164 -41 -194 -82 -24 -34
    -33 -80 -21 -111 13 -34 49 -12 49 29 0 63 93 119 196 119 32 0 29 -11 -41
    -145 -65 -123 -134 -303 -180 -472 -30 -108 -40 -132 -69 -160 -35 -35 -80
    -138 -91 -211 -3 -23 -20 -72 -37 -109 -96 -212 -202 -619 -248 -958 -7 -49
    -14 -97 -16 -105 -1 -8 -3 -28 -4 -45 l-1 -30 -19 36 c-53 100 -147 370 -194
    554 -31 125 -70 336 -88 480 -20 168 -17 657 5 813 78 541 256 1020 542 1452
    583 881 1528 1446 2575 1539 148 14 571 5 710 -14z m-1085 -1613 c39 -24 127
    -151 169 -244 18 -40 54 -131 81 -201 l49 -128 66 -46 c64 -46 217 -183 234
    -211 5 -9 4 -17 -4 -22 -7 -4 -107 -9 -223 -9 -115 -1 -237 -4 -271 -6 -33 -2
    -144 -7 -246 -10 -102 -3 -219 -8 -260 -10 -41 -2 -131 -7 -200 -10 -69 -3
    -177 -8 -240 -11 -63 -2 -144 -7 -180 -9 -36 -2 -135 -7 -220 -11 -85 -3 -202
    -9 -260 -14 -58 -4 -107 -6 -109 -4 -2 2 1 16 8 30 12 26 151 235 220 331 27
    37 42 72 51 115 6 35 44 152 83 261 67 186 72 197 96 197 19 0 40 -17 77 -58
    74 -84 180 -225 215 -288 51 -89 42 -87 274 -59 186 22 327 11 561 -46 72 -18
    139 -29 149 -26 14 6 17 15 13 52 -8 62 -68 221 -99 258 -23 28 -29 30 -51 20
    -25 -11 -85 -114 -108 -185 -13 -42 -19 -44 -86 -27 -53 14 -56 -1 38 196 94
    198 109 213 173 175z m42 -303 c31 -82 41 -129 26 -129 -5 0 -41 7 -81 17 -73
    17 -74 17 -68 46 10 47 67 158 79 154 7 -2 26 -42 44 -88z m3153 -1254 c10
    -12 8 -32 -9 -102 -22 -93 -108 -485 -240 -1091 -100 -460 -64 -413 -406 -540
    -556 -207 -1464 -526 -1472 -518 -16 16 -24 -30 212 1188 64 331 109 537 120
    554 30 47 12 41 1130 348 347 96 635 174 641 175 6 0 17 -6 24 -14z m-5179
    -392 c320 -275 779 -502 1254 -622 224 -56 337 -73 540 -78 104 -3 181 -9 170
    -13 -94 -34 -587 -48 -775 -22 -403 57 -685 169 -950 377 -206 162 -330 290
    -330 341 0 24 19 64 31 64 3 0 30 -21 60 -47z m2349 -666 c0 -33 41 -150 80
    -227 44 -88 83 -144 148 -212 38 -40 50 -59 41 -63 -11 -4 -449 -138 -526
    -161 -10 -3 10 9 45 26 81 41 127 85 142 137 11 36 11 49 -4 86 -38 101 -153
    191 -288 226 -45 12 -111 29 -146 37 -35 9 -61 18 -59 20 2 2 55 11 118 19
    155 20 260 49 349 95 88 46 100 48 100 17z m830 -223 c-11 -60 -24 -111 -28
    -115 -4 -3 -110 -36 -235 -74 l-228 -68 -64 63 -64 63 17 30 c28 49 108 105
    180 127 37 11 148 34 247 50 99 17 181 33 184 36 12 12 10 -13 -9 -112z m-34
    -181 c-5 -17 -81 -400 -126 -637 -12 -60 -18 -122 -15 -138 10 -45 36 -52
    -676 178 -478 154 -509 165 -528 187 -9 12 -8 16 6 20 10 2 149 45 308 95 160
    49 450 138 645 197 195 58 360 108 365 110 21 7 26 4 21 -12z"/>
    <path d="M3058 4188 c-3 -7 -1 -28 4 -46 5 -18 8 -43 6 -55 -3 -22 -3 -22 -28
    4 -14 14 -33 35 -42 47 -30 37 -45 27 -53 -35 -9 -70 -13 -83 -31 -83 -26 0
    -47 47 -40 92 7 53 -5 78 -31 62 -14 -9 -18 -24 -17 -66 1 -63 18 -103 55
    -131 35 -25 60 -16 93 33 26 40 27 40 56 25 16 -8 35 -15 43 -15 24 0 47 35
    47 71 0 57 -50 135 -62 97z"/>
    <path d="M1830 5256 c-30 -79 -64 -302 -55 -358 8 -47 5 -47 164 2 117 37 141
    51 122 73 -7 9 -18 14 -25 11 -7 -3 -27 23 -50 63 -20 37 -53 91 -73 118 -28
    37 -36 58 -34 83 2 27 -1 32 -18 32 -13 0 -25 -9 -31 -24z m84 -180 c17 -28
    37 -63 44 -78 11 -26 9 -29 -17 -43 -16 -8 -48 -17 -71 -21 l-43 -7 6 79 c6
    87 21 139 38 128 6 -3 25 -29 43 -58z"/>
  </g>
  </svg>
)

export default Logo
