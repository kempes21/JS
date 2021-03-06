.row + .row {
	border-top: 1px solid #e1e1e1;
	padding-top: 2.5em; /* 40 */
	margin-top: 2.5em; /* 40 */
}
.gap {
	height: 125em; /* 2000 */
}


/* AD STYLING */

.adsense {
	width: 970px;
	height: 90px;
	background-color: #fff;
	display: block;
	margin: 0 auto;
}
.adsense:before { display: none !important; }
.adsense ins	{ width: 100%; height: 100%; display: block; }

.adsense {
	position: relative;
}
	.adsense__loading {
		width: 100%;
		height: 100%;
		background-color: rgba( 255, 255, 255, .9 );
		display: table;
		position: absolute;
		top: 0;
		left: 0;
	}
	.adsense--loaded .adsense__loading { display: none; }

		.adsense__loading span {
			text-align: center;
			vertical-align: middle;
			display: table-cell;
		}

@media screen and ( max-width: 64em ) /* <= 1024 */
{
	.adsense { width: 728px; height: 90px; }
	.adsense:before	{ content: '1024'; }			
}

@media screen and ( max-width: 50em ) /* <= 800 */
{
	.adsense { width: 468px; height: 60px; }
	.adsense:before	{ content: '800'; }
}

@media screen and ( max-width: 33.75em ) /* <= 540 */
{
	.adsense { width: 336px; height: 280px; }
	.adsense:before	{ content: '540'; }
}

@media screen and ( max-width: 26.25em ) /* <= 420 */
{
	.adsense { width: 250px; height: 250px; }
	.adsense:before	{ content: '420'; }
}