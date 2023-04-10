import { useState } from "react";
import Location from "../../enums/Location";

interface Props {
	onClick: (location: Location, isClicked: boolean) => void;
}

function Icelands(props: Props) {
	let [clicked, setClicked] = useState(true);

	const handleClick = () => {
		props.onClick(Location.ALABASTER_ICELANDS, !clicked);
		setClicked(!clicked);
	};

	return (
		<path
			onClick={() => handleClick()}
			style={{ fill: "lightblue", opacity: clicked ? 0.5 : 0.2 }}
			d="M 393.315 234.796 C 397.244 237.416 406.022 237.06 408.606 239.645 C 409.805 240.844 415.504 239.178 417.185 240.018 C 419.074 240.963 422.381 239.073 424.271 240.018 C 428.645 242.205 445.289 241.466 449.633 240.018 C 454.86 238.275 463.815 240.018 469.4 240.018 C 470.411 240.018 475.097 240.661 475.74 240.018 C 478.072 237.686 484.078 238.647 487.302 237.034 C 494.927 233.222 501.923 232.111 507.443 226.591 C 511.593 222.441 521.131 224.091 524.972 220.251 C 527.023 218.199 534.483 221.556 536.534 219.505 C 538.557 217.481 544.798 219.819 546.604 218.013 C 550.434 214.182 559.084 213.738 562.642 210.181 C 564.05 208.772 570.093 210.561 571.593 209.062 C 576.405 204.25 593.616 210.918 600.311 207.57 C 604.979 205.236 616.982 207.57 622.316 207.57 C 630.825 207.57 648.331 209.9 653.272 204.959 C 654.169 204.062 657.687 205.549 658.867 204.959 C 662.09 203.347 667.705 202.834 670.056 200.483 C 670.614 199.926 670.3 198.001 670.802 197.5 C 671.548 196.754 674.159 197.873 674.904 197.127 C 675.692 196.339 677.142 191.376 677.142 190.413 C 674.355 188.741 674.159 184.791 674.159 181.835 C 677.5 181.836 681.245 177.595 681.245 179.97 C 677.132 178.6 672.988 170.273 669.31 170.273 C 663.622 169.136 661.003 160.847 657.748 157.592 C 657.419 157.263 655.137 155.789 655.137 155.355 C 653.904 154.383 649.37 154.684 649.547 154.684 C 648.438 154.682 647.734 153.053 646.783 152.578 C 643.955 151.164 640.385 147.809 639.15 145.34 C 638.846 144.732 636.386 143.54 636.386 142.971 C 634.598 141.18 633.027 139.61 631.254 137.838 C 630.491 137.075 629.148 136.573 629.148 135.337 C 629.187 135.629 628.885 134.811 628.753 134.548 C 628.576 134.193 628.17 133.175 627.964 132.969 C 626.529 131.533 624.853 129.99 623.357 128.494 C 623.032 128.168 621.633 128.158 621.252 127.967 C 619.417 127.05 617.039 126.716 615.066 125.73 C 614.471 125.433 613.244 125.883 612.829 125.467 C 612.708 125.346 610.309 125.091 610.065 125.335 C 609.559 125.841 608.086 128.757 607.433 128.757 C 606.185 127.512 605.865 125.479 604.669 124.282 C 602.632 122.245 600.333 120.868 598.483 119.018 C 595.771 116.306 593.751 113.233 591.508 110.99 C 590.599 110.08 585.776 111.122 584.665 111.122 C 583.649 111.122 579.602 109.078 578.479 110.2 C 577.434 111.246 576.537 112.537 575.321 113.754 C 574.977 114.098 574.531 114.534 574.531 115.202 C 572.202 112.87 568.523 112.221 566.371 110.069 C 565.426 109.123 564.435 108.528 563.608 107.7 C 563.432 107.524 562.16 107.752 562.16 107.832 C 561.308 107.829 558.473 104.537 558.212 104.015 C 557.958 103.507 556.632 103.19 556.632 102.699 C 555.101 101.932 554.541 99.942 552.947 99.145 C 551.389 98.366 550.418 96.616 549.131 95.329 C 546.701 92.9 543.955 90.154 541.629 87.827 C 540.501 86.699 539.825 84.087 539.129 82.695 C 536.772 77.981 531.328 74.272 525.705 74.272 C 523.939 72.971 523.375 70.34 521.998 68.963 C 516.999 63.967 511.986 58.03 506.994 53.039 C 505.756 51.8 505.01 49.87 503.836 48.696 C 499.116 43.977 492.126 40.012 487.385 35.272 C 485.611 33.499 484.158 30.434 481.726 29.218 C 480.962 28.836 479.83 28.244 479.225 27.639 C 478.111 27.286 474.148 28.243 473.413 27.507 C 471.049 25.144 465.747 24.053 463.41 21.716 C 462.915 21.221 461.634 21.486 461.042 21.19 C 459.455 20.397 457.585 19.839 456.567 18.821 C 455.858 18.112 453.724 18.347 453.145 17.768 C 453.024 17.648 450.37 17.648 450.25 17.768 C 449.411 18.607 443.937 19.547 442.222 18.689 C 439.828 17.492 436.791 17.553 434.325 16.321 C 433.495 15.906 432.118 16.599 431.298 16.189 C 430.589 15.834 428.114 15.346 427.218 15.794 C 425.802 16.503 424.429 17.847 423.007 18.558 C 419.781 20.171 416.796 21.873 414.716 23.954 C 414.326 24.343 413.136 24.114 413.136 24.875 C 411.608 24.346 410.05 24.48 408.443 24.48 C 398.153 24.48 396.465 30.666 391.07 36.062 C 389.007 38.125 384.551 38.37 382.516 40.405 C 381.559 41.361 382.008 43.677 381.2 44.484 C 379.969 45.716 378.872 47.865 377.646 49.091 C 376.464 50.273 373.504 49.812 372.382 50.933 C 372.246 51.07 371.942 51.591 371.724 51.591 C 371.325 52.127 369.124 50.495 368.5 50.495 C 364.795 50.483 364.157 53.594 364.157 56.812 C 364.156 57.826 366.549 61.046 367.447 61.944 C 367.77 62.267 369.29 63.136 369.29 63.524 C 369.275 68.611 363.431 70.566 361.13 72.868 C 360.238 73.759 359.966 75.479 358.893 76.553 C 358.315 77.13 356.787 78.345 356.787 79.053 C 354.89 79.229 354.761 80.978 354.023 82.453 C 352.447 85.606 352.643 89.493 350.338 91.797 C 349.877 92.259 349.51 94.561 349.022 94.561 C 349.672 95.427 348.844 97.322 349.548 98.027 C 350.517 98.995 352.427 99.589 353.365 100.527 C 354.192 101.354 356.337 102.145 357.313 102.633 C 357.588 102.77 358.629 102.579 358.629 102.896 C 358.633 106.581 365.463 107.624 367.579 109.74 C 368.065 110.226 370.342 110.87 370.342 111.319 C 370.098 114.49 371.107 117.292 369.684 120.137 C 369.558 120.389 368.073 122.737 368.237 122.901 C 370.343 125.007 371.617 128.955 375.212 128.955 C 377.819 128.301 379.066 130.139 381.003 130.139 C 379.222 131.028 379.385 133.224 378.371 134.745 C 375.858 138.513 373.434 143.134 378.239 145.537 C 379.032 145.934 379.642 147.511 380.345 147.511 C 380.343 148.881 382.854 149.556 383.24 150.714 C 384.145 153.428 387.448 155.839 388.636 158.215 C 391.045 163.034 392.321 168.415 392.321 174.403 C 392.114 176.193 391.291 178.788 390.676 180.632 C 390.187 182.098 390.454 186.243 391.071 187.476 C 392.211 189.757 391.86 194.703 391.86 197.478 C 391.86 197.608 390.439 198.446 390.149 198.662 C 388.684 199.762 386.426 201.24 385.675 202.742 C 383.085 207.921 378.568 211.75 378.568 218.798 C 378.568 220.842 381.783 221.487 382.779 222.483 C 385.465 225.168 389.582 226.786 392.255 229.459 C 393.383 230.586 393.795 234.796 393.315 234.796 Z"
		/>
	);
}

export default Icelands;
