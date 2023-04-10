import { useState } from "react";
function Highlands() {
	let [clicked, setClicked] = useState(true);

	return (
		<path
			onClick={() => setClicked(!clicked)}
			style={{ fill: "purple", opacity: clicked ? 0.5 : 0.2 }}
			d="M 514.689 374.23 C 508.076 374.23 501.214 375.888 494.581 374.23 C 492.271 373.653 488.785 373.957 487.217 372.389 C 481.502 366.518 473.592 365.247 467.648 359.304 C 460.568 352.223 456.099 338.45 456.099 326.579 C 455.474 324.862 455.999 314.901 457.767 314.901 C 460.143 312.96 464.405 314.032 467.015 312.727 C 468.302 312.084 470.563 311.692 472.044 311.692 C 472.444 311.692 474.303 311.947 474.558 311.692 C 475.536 310.713 478.641 311.011 479.735 309.917 C 480.598 309.053 482.156 308.975 482.988 308.142 C 485.304 305.826 487.721 302.502 487.721 298.38 C 487.724 297.081 488.343 292.494 487.573 291.725 C 485.396 289.547 484.12 287.532 481.214 284.626 C 479.522 282.934 476.423 282.497 474.706 280.78 C 472.731 278.804 468.556 276.004 466.275 274.864 C 462.275 272.864 456.07 268.265 456.07 263.771 C 456.416 263.109 456.063 261.437 456.514 260.986 C 458.014 259.486 459.282 257.625 460.655 256.253 C 461.171 255.737 462.708 255.974 463.17 255.513 C 465.478 253.206 470.135 252.77 472.931 251.372 C 474.173 250.751 476.742 251.259 477.664 250.337 C 479.492 248.509 483.733 249 485.503 247.231 C 485.743 246.99 487.13 247.051 487.13 246.639 C 486.78 246.809 488.109 245.944 488.589 245.704 C 489.518 245.24 490.978 244.253 491.671 243.561 C 494.577 240.655 499.074 239.608 500.916 235.923 C 501.452 234.85 502.831 233.74 503.997 232.574 C 506.142 230.429 507.667 226.652 511.099 224.937 C 512.398 224.287 513.957 224.311 515.118 223.731 C 516.074 223.253 521.318 222.427 522.353 223.463 C 522.84 223.949 523.717 224.022 524.229 224.535 C 525.545 225.85 527.019 228.554 529.455 228.554 C 528.241 227.255 532.091 225.136 532.76 224.468 C 534.59 222.637 538.512 223.404 540.129 221.788 C 540.759 221.158 543.11 221.888 543.747 221.252 C 544.829 220.17 548.722 221.77 549.91 220.582 C 550.178 220.314 551.25 220.85 551.518 220.582 C 552.415 219.685 556.743 220.305 556.743 219.376 C 557.313 219.163 556.671 217.4 556.922 216.897 C 557.493 215.756 557.553 213.721 558.396 212.878 C 560.013 211.261 564.759 209.394 567.641 209.394 C 567.388 209.394 570.853 209.394 572.129 209.394 C 575.373 209.394 578.844 209.26 582.178 209.26 C 592.317 209.26 602.455 209.26 612.593 209.26 C 617.35 207.386 621.507 213.689 623.875 216.057 C 628.764 216.054 634.584 215.436 638.584 217.436 C 641.471 218.879 646.128 216.956 648.927 218.355 C 650.451 219.117 655.396 217.698 656.512 218.815 C 658.071 220.374 666.078 223.411 667.774 223.411 C 667.54 221.895 670.429 226.603 671.527 227.702 C 672.337 228.511 672.188 230.66 672.906 231.379 C 675.11 233.583 676.739 237.05 678.882 239.194 C 679.954 240.266 679.955 242.871 681.64 242.871 C 681.231 242.871 681.618 248.135 682.33 248.847 C 682.656 249.173 682.33 251.552 682.33 252.064 C 682.33 255.53 682.789 258.484 682.789 261.488 C 682.789 274.832 682.56 288.483 682.56 301.479 C 682.701 301.156 682.772 302.694 682.884 302.917 C 683.331 303.813 683.215 304.789 684.289 305.326 C 685.434 305.898 686.869 305.738 688.051 306.329 C 688.914 306.76 689.88 307.022 690.81 307.332 C 691.587 307.591 692.494 307.761 693.118 308.386 C 693.094 308.501 694.004 308.757 694.236 308.873 C 694.947 309.228 696.615 309.446 697.276 310.108 C 697.886 310.718 699.684 310.616 700.315 311.247 C 701.936 312.869 703.968 315.116 706.11 316.187 C 706.575 316.42 710.29 318.146 710.29 318.562 C 711.546 320.436 715.205 320.381 716.339 322.647 C 716.841 323.652 718.562 324.68 719.569 325.687 C 719.973 326.092 721.599 326.423 721.849 326.922 C 722.472 328.169 726.182 329.136 727.453 329.772 C 728.759 330.425 729.452 331.769 730.778 332.432 C 733.973 334.029 737.077 336.422 740.753 336.422 C 741.044 336.475 740.855 338.038 740.96 338.353 C 741.239 339.19 742.071 342.973 741.233 343.811 C 740.35 344.694 738.7 345.343 737.777 346.266 C 737.014 347.029 736.857 348.278 736.049 349.086 C 735.779 349.356 735.048 349.762 735.048 350.269 C 731.848 350.906 728.987 353.784 727.044 355.726 C 726.491 356.279 724.861 357.059 724.861 357.545 C 724.643 356.82 723.924 359.145 723.727 359.539 C 722.455 362.084 724.401 365.871 723.125 368.423 C 721.849 370.975 723.483 374.633 722.222 377.156 C 720.907 379.786 720.482 383.73 719.511 386.642 C 718.587 389.414 716.491 392.524 714.693 394.321 C 714.161 394.854 713.419 396.209 712.886 395.676 C 712.71 395.5 713.187 395.095 713.187 395.074 C 709.135 401.665 701.326 405.754 696.069 411.011 C 694.982 412.098 688.278 413.288 688.278 414.439 C 687.503 412.892 677.965 407.3 674.877 410.388 C 672.357 412.908 666.657 412.687 664.282 415.063 C 660.754 418.59 656.66 419.809 651.816 422.23 C 649.664 423.307 646.571 421.736 644.337 422.853 C 638.503 425.771 627.285 424.723 619.718 424.723 C 617.074 424.723 611.124 425.88 608.811 424.723 C 606.003 423.32 599.425 419.426 597.903 419.426 C 596.36 417.895 593.84 417.867 592.573 416.6 C 588.14 412.168 579.886 410.915 575.567 406.597 C 574.422 405.452 572.047 405.328 570.816 404.096 C 569.811 403.091 568.266 400.922 567.19 399.845 C 566.89 399.545 566.895 398.13 566.689 397.719 C 565.578 395.496 565.002 391.529 563.313 389.841 C 561.651 388.18 561.074 386.477 559.312 384.715 C 558.839 384.242 556.311 383.023 556.311 382.589 C 554.424 380.351 548.771 383.069 546.868 381.166 C 545.506 379.803 542.695 379.237 541.259 377.801 C 538.29 374.833 534.143 372.192 529.199 372.192 C 528.355 371.769 525.831 372.054 525.273 372.612 C 524.922 372.963 523.66 372.402 523.309 372.752 C 522.676 373.385 521.873 372.84 521.206 373.173 C 519.888 373.832 515.554 374.23 514.689 374.23 Z"
		/>
	);
}

export default Highlands;
