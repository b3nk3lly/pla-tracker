import { useState } from "react";
import Location from "../../enums/Location";

interface Props {
	onClick: (location: Location, isClicked: boolean) => void;
}

function Fieldlands(props: Props) {
	let [clicked, setClicked] = useState(true);

	const handleClick = () => {
		props.onClick(Location.OBSIDIAN_FIELDLANDS, !clicked);
		setClicked(!clicked);
	};

	return (
		<path
			onClick={() => handleClick()}
			style={{ fill: "green", opacity: clicked ? 0.5 : 0.2 }}
			d="M 248.296 417.318 C 242.171 420.381 237.553 426.449 231.963 429.244 C 229.721 430.365 225.811 433.771 224.704 435.985 C 223.379 438.635 219.778 440.723 219.778 444.281 C 217.007 445.944 217.597 450.563 216.667 453.355 C 215.357 457.285 215.027 470.64 217.704 473.318 C 218.485 474.099 217.721 476.965 218.482 477.725 C 219.222 478.466 220.297 480.889 220.297 481.873 C 220.284 489.154 227.435 500.679 231.445 504.688 C 232.296 505.539 233.825 508.577 234.815 508.577 C 234.227 508.213 235.36 509.924 235.454 510.111 C 235.728 510.66 236.538 512.247 237.246 512.601 C 237.89 512.922 238.541 514.095 239.039 514.593 C 240.467 516.021 242.144 517.697 243.421 518.975 C 243.564 519.117 244.502 520.369 244.716 520.369 C 246.128 520.372 249.092 519.476 250.294 518.875 C 250.913 518.566 252.263 518.776 252.983 518.776 C 255.141 518.776 257.299 518.776 259.457 518.776 C 261.398 518.769 265.236 517.482 267.026 518.377 C 268.452 519.09 270.843 521.266 272.405 521.266 C 273.415 522.276 275.114 522.969 276.289 523.556 C 277.151 523.987 277.405 524.772 278.082 525.449 C 279.768 527.134 282.265 529.216 282.265 531.823 C 282.386 531.641 282.165 532.696 282.165 533.068 C 282.165 534.005 281.966 535.022 281.966 536.056 C 281.966 538.753 282.322 540.097 283.759 541.534 C 284.233 542.008 284.328 543.128 285.153 543.128 C 284.841 543.411 286.161 543.194 286.564 543.194 C 287.682 543.194 288.783 543.294 289.851 543.294 C 289.849 544.062 290.636 544.875 291.146 545.385 C 291.471 545.71 291.48 546.317 291.743 546.58 C 292.901 547.738 295.353 548.895 296.424 549.967 C 296.715 550.257 298.715 551.083 298.715 551.261 C 302.395 551.279 308.13 552.682 311.264 554.249 C 311.689 554.462 315.248 554.793 315.248 555.046 C 316.377 555.048 317.828 557.731 318.834 558.233 C 321.838 559.735 323.258 563.397 324.611 566.102 C 324.811 566.502 325.806 567.787 325.806 567.994 C 325.532 568.61 326.923 568.304 327.167 568.791 C 327.846 570.149 331.36 569.698 332.346 570.683 C 332.922 571.259 334.258 571.54 335.135 571.978 C 337.678 573.25 341.294 575.663 344.298 575.663 C 342.655 574.277 365.271 574.407 368.511 572.788 C 372.3 570.894 377.892 573.687 381.932 572.341 C 392.941 568.671 407.606 573.326 418.616 569.656 C 422.168 568.472 426.901 570.435 430.248 568.762 C 433.975 566.898 443.828 568.314 448.142 568.314 C 450.789 568.314 457.025 566.525 455.748 566.525 C 455.52 566.569 457.428 569.246 457.65 569.469 C 458.558 570.377 459.661 569.503 460.806 570.075 C 462.11 570.727 464 571.046 465.782 571.046 C 473.022 571.064 474.761 578.086 482.41 578.086 C 483.145 578.075 485.812 578.806 486.799 579.299 C 487.633 579.716 489.022 579.629 489.955 579.785 C 492.561 580.219 496.023 581.605 497.601 583.183 C 500.069 583.187 502.109 586.355 503.548 587.795 C 506.337 590.584 507.98 593.684 510.709 596.412 C 511.762 597.466 513.302 599.325 514.471 599.325 C 514.621 599.911 521.458 598.423 522.472 599.437 C 524.592 601.556 529.987 601.335 532.054 603.402 C 532.836 604.184 535.132 603.342 535.853 604.063 C 537.107 605.316 540.14 605.376 541.636 606.871 C 542.545 607.78 543.075 608.971 543.949 609.845 C 544.16 610.057 545.766 611.818 545.766 611.827 C 554.34 609.997 562.403 598.094 567.273 593.224 C 571.246 589.251 569.677 581.931 573.428 578.18 C 576.035 575.572 577.054 571.134 579.582 568.606 C 580.099 568.089 582.66 567.308 582.66 566.554 C 582.659 559.542 588.855 561.726 592.233 558.348 C 593.257 557.325 596.337 548.26 596.337 547.065 C 597.71 546.375 597.426 543.753 598.388 542.79 C 599.015 542.164 601.522 543.417 602.149 542.79 C 603.206 541.734 615.565 539.029 616.51 539.029 C 616.976 540.193 616.51 536.522 616.51 535.268 C 616.51 534.286 617.171 529.479 617.878 528.772 C 621.317 525.333 620.178 517.582 624.374 513.385 C 628.455 509.305 634.632 497.363 634.632 491.16 C 634.632 489.253 635.548 482.844 634.29 481.586 C 632.328 479.623 626.768 474.514 626.768 470.986 C 620.612 464.836 622.702 456.699 618.904 449.103 C 617.362 446.02 619.666 441.052 618.22 438.161 C 616.974 435.67 613.775 430.168 613.775 428.587 C 613.775 428.631 611.346 427.43 611.039 427.277 C 609.5 426.507 607.969 426.084 606.252 425.225 C 601.312 422.755 596.561 420.208 590.866 417.361 C 583.925 413.89 572.333 408.744 567.615 404.026 C 564.15 400.56 564.035 393.516 559.751 391.375 C 558.299 390.649 557.139 386.93 555.647 386.93 C 555.229 384.833 548.001 385.779 546.587 384.365 C 543.067 380.845 532.072 375.133 526.755 375.133 C 515.246 375.141 499.244 374.606 492.563 381.288 C 486.353 381.287 471.23 386.436 468.172 389.494 C 467.196 390.47 463.385 390.871 463.385 392.229 C 462.774 390.398 455.268 391.546 452.785 391.546 C 441.105 387.16 432.832 394.057 424.861 398.042 C 422.233 399.357 415.971 403.309 415.971 406.248 C 411.548 407.725 411.906 419.204 408.791 422.319 C 403.909 427.201 403.1 435.191 398.191 440.099 C 394.271 444.02 385.254 443.86 378.018 443.86 C 376.155 442.194 372.38 443.291 370.329 442.266 C 367.089 440.646 363.333 439.271 360.115 437.662 C 358.497 436.853 357.555 434.353 355.655 434.353 C 352.386 431.086 345.807 431.188 339.831 431.188 C 339.211 431.19 336.767 432.094 336.378 432.483 C 335.751 433.11 334.096 432.401 333.357 432.771 C 331.755 433.572 325.921 433.649 324.15 433.059 C 321.021 432.016 317.845 431.446 314.511 430.613 C 312.472 430.103 310.346 428.599 308.469 428.599 C 308.536 428.399 306.469 428.455 306.072 428.455 C 304.393 428.455 302.715 428.455 301.036 428.455 C 297.985 428.455 294.497 428.481 291.829 427.592 C 290.664 427.204 288.61 427.825 287.801 427.017 C 287.172 426.387 285.205 427.297 284.636 426.729 C 282.863 424.956 278.215 426.206 276.292 424.283 C 274.963 422.954 272.63 422.203 271.113 420.687 C 268.292 417.866 263.172 414.788 258.454 414.788 C 258.083 414.511 256.277 415.133 255.816 415.364 C 254.335 416.105 251.333 415.532 250.35 416.515 C 250.247 416.618 248.047 416.655 248.048 416.659 C 248.085 416.891 248.531 417.318 248.296 417.318 Z"
		/>
	);
}

export default Fieldlands;
