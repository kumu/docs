# Color Reference

Below are details on the different color palettes and scales that Kumu supports. Use these with the [Color by](/guides/decorate.md#color-by) tool in the Basic Editor, or use them in the [Advanced Editor](/guides/decorate.md#decorate-in-the-advanced-editor) with the `categorize()` and `scale()` functions.

## Named color scales
Kumu has built-in support for a number of named color scales, including all [ColorBrewer](http://bl.ocks.org/mbostock/5577023) scales.

### Sequential and diverging
Both sequential and diverging color palettes are great when you are trying to show quantitative data or data that has a meaningful order.

<div class="color-scale">
<table class="table">
  <tbody>
  <tr>
  <td>YlGn</td><td style="background: rgb(255, 255, 229);">&nbsp;</td>
  <td style="background: rgb(247, 252, 185);">&nbsp;</td>
  <td style="background: rgb(217, 240, 163);">&nbsp;</td>
  <td style="background: rgb(173, 221, 142);">&nbsp;</td>
  <td style="background: rgb(120, 198, 121);">&nbsp;</td>
  <td style="background: rgb(65, 171, 93);">&nbsp;</td>
  <td style="background: rgb(35, 132, 67);">&nbsp;</td>
  <td style="background: rgb(0, 104, 55);">&nbsp;</td>
  <td style="background: rgb(0, 69, 41);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>YlGnBu</td><td style="background: rgb(255, 255, 217);">&nbsp;</td>
  <td style="background: rgb(237, 248, 177);">&nbsp;</td>
  <td style="background: rgb(199, 233, 180);">&nbsp;</td>
  <td style="background: rgb(127, 205, 187);">&nbsp;</td>
  <td style="background: rgb(65, 182, 196);">&nbsp;</td>
  <td style="background: rgb(29, 145, 192);">&nbsp;</td>
  <td style="background: rgb(34, 94, 168);">&nbsp;</td>
  <td style="background: rgb(37, 52, 148);">&nbsp;</td>
  <td style="background: rgb(8, 29, 88);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>GnBu</td><td style="background: rgb(247, 252, 240);">&nbsp;</td>
  <td style="background: rgb(224, 243, 219);">&nbsp;</td>
  <td style="background: rgb(204, 235, 197);">&nbsp;</td>
  <td style="background: rgb(168, 221, 181);">&nbsp;</td>
  <td style="background: rgb(123, 204, 196);">&nbsp;</td>
  <td style="background: rgb(78, 179, 211);">&nbsp;</td>
  <td style="background: rgb(43, 140, 190);">&nbsp;</td>
  <td style="background: rgb(8, 104, 172);">&nbsp;</td>
  <td style="background: rgb(8, 64, 129);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>BuGn</td><td style="background: rgb(247, 252, 253);">&nbsp;</td>
  <td style="background: rgb(229, 245, 249);">&nbsp;</td>
  <td style="background: rgb(204, 236, 230);">&nbsp;</td>
  <td style="background: rgb(153, 216, 201);">&nbsp;</td>
  <td style="background: rgb(102, 194, 164);">&nbsp;</td>
  <td style="background: rgb(65, 174, 118);">&nbsp;</td>
  <td style="background: rgb(35, 139, 69);">&nbsp;</td>
  <td style="background: rgb(0, 109, 44);">&nbsp;</td>
  <td style="background: rgb(0, 68, 27);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>PuBuGn</td><td style="background: rgb(255, 247, 251);">&nbsp;</td>
  <td style="background: rgb(236, 226, 240);">&nbsp;</td>
  <td style="background: rgb(208, 209, 230);">&nbsp;</td>
  <td style="background: rgb(166, 189, 219);">&nbsp;</td>
  <td style="background: rgb(103, 169, 207);">&nbsp;</td>
  <td style="background: rgb(54, 144, 192);">&nbsp;</td>
  <td style="background: rgb(2, 129, 138);">&nbsp;</td>
  <td style="background: rgb(1, 108, 89);">&nbsp;</td>
  <td style="background: rgb(1, 70, 54);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>PuBu</td><td style="background: rgb(255, 247, 251);">&nbsp;</td>
  <td style="background: rgb(236, 231, 242);">&nbsp;</td>
  <td style="background: rgb(208, 209, 230);">&nbsp;</td>
  <td style="background: rgb(166, 189, 219);">&nbsp;</td>
  <td style="background: rgb(116, 169, 207);">&nbsp;</td>
  <td style="background: rgb(54, 144, 192);">&nbsp;</td>
  <td style="background: rgb(5, 112, 176);">&nbsp;</td>
  <td style="background: rgb(4, 90, 141);">&nbsp;</td>
  <td style="background: rgb(2, 56, 88);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>BuPu</td><td style="background: rgb(247, 252, 253);">&nbsp;</td>
  <td style="background: rgb(224, 236, 244);">&nbsp;</td>
  <td style="background: rgb(191, 211, 230);">&nbsp;</td>
  <td style="background: rgb(158, 188, 218);">&nbsp;</td>
  <td style="background: rgb(140, 150, 198);">&nbsp;</td>
  <td style="background: rgb(140, 107, 177);">&nbsp;</td>
  <td style="background: rgb(136, 65, 157);">&nbsp;</td>
  <td style="background: rgb(129, 15, 124);">&nbsp;</td>
  <td style="background: rgb(77, 0, 75);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>RdPu</td><td style="background: rgb(255, 247, 243);">&nbsp;</td>
  <td style="background: rgb(253, 224, 221);">&nbsp;</td>
  <td style="background: rgb(252, 197, 192);">&nbsp;</td>
  <td style="background: rgb(250, 159, 181);">&nbsp;</td>
  <td style="background: rgb(247, 104, 161);">&nbsp;</td>
  <td style="background: rgb(221, 52, 151);">&nbsp;</td>
  <td style="background: rgb(174, 1, 126);">&nbsp;</td>
  <td style="background: rgb(122, 1, 119);">&nbsp;</td>
  <td style="background: rgb(73, 0, 106);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>PuRd</td><td style="background: rgb(247, 244, 249);">&nbsp;</td>
  <td style="background: rgb(231, 225, 239);">&nbsp;</td>
  <td style="background: rgb(212, 185, 218);">&nbsp;</td>
  <td style="background: rgb(201, 148, 199);">&nbsp;</td>
  <td style="background: rgb(223, 101, 176);">&nbsp;</td>
  <td style="background: rgb(231, 41, 138);">&nbsp;</td>
  <td style="background: rgb(206, 18, 86);">&nbsp;</td>
  <td style="background: rgb(152, 0, 67);">&nbsp;</td>
  <td style="background: rgb(103, 0, 31);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>OrRd</td><td style="background: rgb(255, 247, 236);">&nbsp;</td>
  <td style="background: rgb(254, 232, 200);">&nbsp;</td>
  <td style="background: rgb(253, 212, 158);">&nbsp;</td>
  <td style="background: rgb(253, 187, 132);">&nbsp;</td>
  <td style="background: rgb(252, 141, 89);">&nbsp;</td>
  <td style="background: rgb(239, 101, 72);">&nbsp;</td>
  <td style="background: rgb(215, 48, 31);">&nbsp;</td>
  <td style="background: rgb(179, 0, 0);">&nbsp;</td>
  <td style="background: rgb(127, 0, 0);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>YlOrRd</td><td style="background: rgb(255, 255, 204);">&nbsp;</td>
  <td style="background: rgb(255, 237, 160);">&nbsp;</td>
  <td style="background: rgb(254, 217, 118);">&nbsp;</td>
  <td style="background: rgb(254, 178, 76);">&nbsp;</td>
  <td style="background: rgb(253, 141, 60);">&nbsp;</td>
  <td style="background: rgb(252, 78, 42);">&nbsp;</td>
  <td style="background: rgb(227, 26, 28);">&nbsp;</td>
  <td style="background: rgb(189, 0, 38);">&nbsp;</td>
  <td style="background: rgb(128, 0, 38);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>YlOrBr</td><td style="background: rgb(255, 255, 229);">&nbsp;</td>
  <td style="background: rgb(255, 247, 188);">&nbsp;</td>
  <td style="background: rgb(254, 227, 145);">&nbsp;</td>
  <td style="background: rgb(254, 196, 79);">&nbsp;</td>
  <td style="background: rgb(254, 153, 41);">&nbsp;</td>
  <td style="background: rgb(236, 112, 20);">&nbsp;</td>
  <td style="background: rgb(204, 76, 2);">&nbsp;</td>
  <td style="background: rgb(153, 52, 4);">&nbsp;</td>
  <td style="background: rgb(102, 37, 6);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>Purples</td><td style="background: rgb(252, 251, 253);">&nbsp;</td>
  <td style="background: rgb(239, 237, 245);">&nbsp;</td>
  <td style="background: rgb(218, 218, 235);">&nbsp;</td>
  <td style="background: rgb(188, 189, 220);">&nbsp;</td>
  <td style="background: rgb(158, 154, 200);">&nbsp;</td>
  <td style="background: rgb(128, 125, 186);">&nbsp;</td>
  <td style="background: rgb(106, 81, 163);">&nbsp;</td>
  <td style="background: rgb(84, 39, 143);">&nbsp;</td>
  <td style="background: rgb(63, 0, 125);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>Blues</td><td style="background: rgb(247, 251, 255);">&nbsp;</td>
  <td style="background: rgb(222, 235, 247);">&nbsp;</td>
  <td style="background: rgb(198, 219, 239);">&nbsp;</td>
  <td style="background: rgb(158, 202, 225);">&nbsp;</td>
  <td style="background: rgb(107, 174, 214);">&nbsp;</td>
  <td style="background: rgb(66, 146, 198);">&nbsp;</td>
  <td style="background: rgb(33, 113, 181);">&nbsp;</td>
  <td style="background: rgb(8, 81, 156);">&nbsp;</td>
  <td style="background: rgb(8, 48, 107);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>Greens</td><td style="background: rgb(247, 252, 245);">&nbsp;</td>
  <td style="background: rgb(229, 245, 224);">&nbsp;</td>
  <td style="background: rgb(199, 233, 192);">&nbsp;</td>
  <td style="background: rgb(161, 217, 155);">&nbsp;</td>
  <td style="background: rgb(116, 196, 118);">&nbsp;</td>
  <td style="background: rgb(65, 171, 93);">&nbsp;</td>
  <td style="background: rgb(35, 139, 69);">&nbsp;</td>
  <td style="background: rgb(0, 109, 44);">&nbsp;</td>
  <td style="background: rgb(0, 68, 27);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>Oranges</td><td style="background: rgb(255, 245, 235);">&nbsp;</td>
  <td style="background: rgb(254, 230, 206);">&nbsp;</td>
  <td style="background: rgb(253, 208, 162);">&nbsp;</td>
  <td style="background: rgb(253, 174, 107);">&nbsp;</td>
  <td style="background: rgb(253, 141, 60);">&nbsp;</td>
  <td style="background: rgb(241, 105, 19);">&nbsp;</td>
  <td style="background: rgb(217, 72, 1);">&nbsp;</td>
  <td style="background: rgb(166, 54, 3);">&nbsp;</td>
  <td style="background: rgb(127, 39, 4);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>Reds</td><td style="background: rgb(255, 245, 240);">&nbsp;</td>
  <td style="background: rgb(254, 224, 210);">&nbsp;</td>
  <td style="background: rgb(252, 187, 161);">&nbsp;</td>
  <td style="background: rgb(252, 146, 114);">&nbsp;</td>
  <td style="background: rgb(251, 106, 74);">&nbsp;</td>
  <td style="background: rgb(239, 59, 44);">&nbsp;</td>
  <td style="background: rgb(203, 24, 29);">&nbsp;</td>
  <td style="background: rgb(165, 15, 21);">&nbsp;</td>
  <td style="background: rgb(103, 0, 13);">&nbsp;</td>
  </tr>
      <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>Greys</td><td style="background: rgb(255, 255, 255);">&nbsp;</td>
  <td style="background: rgb(240, 240, 240);">&nbsp;</td>
  <td style="background: rgb(217, 217, 217);">&nbsp;</td>
  <td style="background: rgb(189, 189, 189);">&nbsp;</td>
  <td style="background: rgb(150, 150, 150);">&nbsp;</td>
  <td style="background: rgb(115, 115, 115);">&nbsp;</td>
  <td style="background: rgb(82, 82, 82);">&nbsp;</td>
  <td style="background: rgb(37, 37, 37);">&nbsp;</td>
  <td style="background: rgb(0, 0, 0);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>PuOr</td><td style="background: rgb(127, 59, 8);">&nbsp;</td>
  <td style="background: rgb(179, 88, 6);">&nbsp;</td>
  <td style="background: rgb(224, 130, 20);">&nbsp;</td>
  <td style="background: rgb(253, 184, 99);">&nbsp;</td>
  <td style="background: rgb(254, 224, 182);">&nbsp;</td>
  <td style="background: rgb(247, 247, 247);">&nbsp;</td>
  <td style="background: rgb(216, 218, 235);">&nbsp;</td>
  <td style="background: rgb(178, 171, 210);">&nbsp;</td>
  <td style="background: rgb(128, 115, 172);">&nbsp;</td>
  <td style="background: rgb(84, 39, 136);">&nbsp;</td>
  <td style="background: rgb(45, 0, 75);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>BrBG</td><td style="background: rgb(84, 48, 5);">&nbsp;</td>
  <td style="background: rgb(140, 81, 10);">&nbsp;</td>
  <td style="background: rgb(191, 129, 45);">&nbsp;</td>
  <td style="background: rgb(223, 194, 125);">&nbsp;</td>
  <td style="background: rgb(246, 232, 195);">&nbsp;</td>
  <td style="background: rgb(245, 245, 245);">&nbsp;</td>
  <td style="background: rgb(199, 234, 229);">&nbsp;</td>
  <td style="background: rgb(128, 205, 193);">&nbsp;</td>
  <td style="background: rgb(53, 151, 143);">&nbsp;</td>
  <td style="background: rgb(1, 102, 94);">&nbsp;</td>
  <td style="background: rgb(0, 60, 48);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>PRGn</td><td style="background: rgb(64, 0, 75);">&nbsp;</td>
  <td style="background: rgb(118, 42, 131);">&nbsp;</td>
  <td style="background: rgb(153, 112, 171);">&nbsp;</td>
  <td style="background: rgb(194, 165, 207);">&nbsp;</td>
  <td style="background: rgb(231, 212, 232);">&nbsp;</td>
  <td style="background: rgb(247, 247, 247);">&nbsp;</td>
  <td style="background: rgb(217, 240, 211);">&nbsp;</td>
  <td style="background: rgb(166, 219, 160);">&nbsp;</td>
  <td style="background: rgb(90, 174, 97);">&nbsp;</td>
  <td style="background: rgb(27, 120, 55);">&nbsp;</td>
  <td style="background: rgb(0, 68, 27);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>PiYG</td><td style="background: rgb(142, 1, 82);">&nbsp;</td>
  <td style="background: rgb(197, 27, 125);">&nbsp;</td>
  <td style="background: rgb(222, 119, 174);">&nbsp;</td>
  <td style="background: rgb(241, 182, 218);">&nbsp;</td>
  <td style="background: rgb(253, 224, 239);">&nbsp;</td>
  <td style="background: rgb(247, 247, 247);">&nbsp;</td>
  <td style="background: rgb(230, 245, 208);">&nbsp;</td>
  <td style="background: rgb(184, 225, 134);">&nbsp;</td>
  <td style="background: rgb(127, 188, 65);">&nbsp;</td>
  <td style="background: rgb(77, 146, 33);">&nbsp;</td>
  <td style="background: rgb(39, 100, 25);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>RdBu</td><td style="background: rgb(103, 0, 31);">&nbsp;</td>
  <td style="background: rgb(178, 24, 43);">&nbsp;</td>
  <td style="background: rgb(214, 96, 77);">&nbsp;</td>
  <td style="background: rgb(244, 165, 130);">&nbsp;</td>
  <td style="background: rgb(253, 219, 199);">&nbsp;</td>
  <td style="background: rgb(247, 247, 247);">&nbsp;</td>
  <td style="background: rgb(209, 229, 240);">&nbsp;</td>
  <td style="background: rgb(146, 197, 222);">&nbsp;</td>
  <td style="background: rgb(67, 147, 195);">&nbsp;</td>
  <td style="background: rgb(33, 102, 172);">&nbsp;</td>
  <td style="background: rgb(5, 48, 97);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>RdGy</td><td style="background: rgb(103, 0, 31);">&nbsp;</td>
  <td style="background: rgb(178, 24, 43);">&nbsp;</td>
  <td style="background: rgb(214, 96, 77);">&nbsp;</td>
  <td style="background: rgb(244, 165, 130);">&nbsp;</td>
  <td style="background: rgb(253, 219, 199);">&nbsp;</td>
  <td style="background: rgb(255, 255, 255);">&nbsp;</td>
  <td style="background: rgb(224, 224, 224);">&nbsp;</td>
  <td style="background: rgb(186, 186, 186);">&nbsp;</td>
  <td style="background: rgb(135, 135, 135);">&nbsp;</td>
  <td style="background: rgb(77, 77, 77);">&nbsp;</td>
  <td style="background: rgb(26, 26, 26);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>RdYlBu</td><td style="background: rgb(165, 0, 38);">&nbsp;</td>
  <td style="background: rgb(215, 48, 39);">&nbsp;</td>
  <td style="background: rgb(244, 109, 67);">&nbsp;</td>
  <td style="background: rgb(253, 174, 97);">&nbsp;</td>
  <td style="background: rgb(254, 224, 144);">&nbsp;</td>
  <td style="background: rgb(255, 255, 191);">&nbsp;</td>
  <td style="background: rgb(224, 243, 248);">&nbsp;</td>
  <td style="background: rgb(171, 217, 233);">&nbsp;</td>
  <td style="background: rgb(116, 173, 209);">&nbsp;</td>
  <td style="background: rgb(69, 117, 180);">&nbsp;</td>
  <td style="background: rgb(49, 54, 149);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>Spectral</td><td style="background: rgb(158, 1, 66);">&nbsp;</td>
  <td style="background: rgb(213, 62, 79);">&nbsp;</td>
  <td style="background: rgb(244, 109, 67);">&nbsp;</td>
  <td style="background: rgb(253, 174, 97);">&nbsp;</td>
  <td style="background: rgb(254, 224, 139);">&nbsp;</td>
  <td style="background: rgb(255, 255, 191);">&nbsp;</td>
  <td style="background: rgb(230, 245, 152);">&nbsp;</td>
  <td style="background: rgb(171, 221, 164);">&nbsp;</td>
  <td style="background: rgb(102, 194, 165);">&nbsp;</td>
  <td style="background: rgb(50, 136, 189);">&nbsp;</td>
  <td style="background: rgb(94, 79, 162);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
  <tr>
  <td>RdYlGn</td><td style="background: rgb(165, 0, 38);">&nbsp;</td>
  <td style="background: rgb(215, 48, 39);">&nbsp;</td>
  <td style="background: rgb(244, 109, 67);">&nbsp;</td>
  <td style="background: rgb(253, 174, 97);">&nbsp;</td>
  <td style="background: rgb(254, 224, 139);">&nbsp;</td>
  <td style="background: rgb(255, 255, 191);">&nbsp;</td>
  <td style="background: rgb(217, 239, 139);">&nbsp;</td>
  <td style="background: rgb(166, 217, 106);">&nbsp;</td>
  <td style="background: rgb(102, 189, 99);">&nbsp;</td>
  <td style="background: rgb(26, 152, 80);">&nbsp;</td>
  <td style="background: rgb(0, 104, 55);">&nbsp;</td>
  </tr>
  <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>nautical</td>
      <td style="background: #003250;">&nbsp;</td>
      <td style="background: #5893ac;">&nbsp;</td>
      <td style="background: #bbd2e0;">&nbsp;</td>
      <td style="background: #f2f2f5;">&nbsp;</td>
      <td style="background: #a7a7a7;">&nbsp;</td>
      <td style="background: #787878;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>deepsea</td>
      <td style="background: #005F98;">&nbsp;</td>
      <td style="background: #296F98;">&nbsp;</td>
      <td style="background: #3C779A;">&nbsp;</td>
      <td style="background: #60849A;">&nbsp;</td>
      <td style="background: #788D9A;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>heat</td>
      <td style="background: #000000;">&nbsp;</td>
      <td style="background: #4D0600;">&nbsp;</td>
      <td style="background: #9C0200;">&nbsp;</td>
      <td style="background: #FF6100;">&nbsp;</td>
      <td style="background: #FFF60B;">&nbsp;</td>
      <td style="background: #FFFFFF;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>babygirl</td>
      <td style="background: #CC66A4;">&nbsp;</td>
      <td style="background: #CE8DAD;">&nbsp;</td>
      <td style="background: #D4AFBD;">&nbsp;</td>
      <td style="background: #DECED2;">&nbsp;</td>
      <td style="background: #EDE9E9;">&nbsp;</td>
      <td style="background: #FFFFFF;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>coffee</td>
      <td style="background: #684F19;">&nbsp;</td>
      <td style="background: #86723D;">&nbsp;</td>
      <td style="background: #A49561;">&nbsp;</td>
      <td style="background: #C3B984;">&nbsp;</td>
      <td style="background: #E1DCA8;">&nbsp;</td>
      <td style="background: #FFFFCC;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>stoplight</td>
      <td style="background: #62B944;">&nbsp;</td>
      <td style="background: #FDBE0F;">&nbsp;</td>
      <td style="background: #E02D28;">&nbsp;</td>
    </tr>
  </tbody>
</table>      
</div>

### Qualitative

Qualitative color palettes are best when you are trying to show data with discrete values that don't have an inherent order.

<div class="color-scale">
<table class="table">
  <tbody>
    <tr>
      <td>bujumbra</td>
      <td style="background: #BE420E;">&nbsp;</td>
      <td style="background: #BE6D0E;">&nbsp;</td>
      <td style="background: #6B4F2E;">&nbsp;</td>
      <td style="background: #CCA066;">&nbsp;</td>
      <td style="background: #E0D752;">&nbsp;</td>
      <td style="background: #A5BE0E;">&nbsp;</td>
      <td style="background: #4197E3;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>neon</td>
      <td style="background: #9FDE00;">&nbsp;</td>
      <td style="background: #E7000C;">&nbsp;</td>
      <td style="background: #EC008C;">&nbsp;</td>
      <td style="background: #FF7404;">&nbsp;</td>
      <td style="background: #FFBE2A;">&nbsp;</td>
      <td style="background: #8FB9E1;">&nbsp;</td>
      <td style="background: #D5EAFF;">&nbsp;</td>
      <td style="background: #F6F4F4;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>neon2</td>
      <td style="background: #00B9FC;">&nbsp;</td>
      <td style="background: #FEE300;">&nbsp;</td>
      <td style="background: #8EDC0C;">&nbsp;</td>
      <td style="background: #F69010;">&nbsp;</td>
      <td style="background: #FD0100;">&nbsp;</td>
      <td style="background: #F33389;">&nbsp;</td>
      <td style="background: #0B080F;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>olympic</td>
      <td style="background: #007AC3;">&nbsp;</td>
      <td style="background: #FDBE0F;">&nbsp;</td>
      <td style="background: #4CC9E9;">&nbsp;</td>
      <td style="background: #E02D28;">&nbsp;</td>
      <td style="background: #62B944;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
    <td>Accent</td><td style="background: rgb(127, 201, 127);">&nbsp;</td>
    <td style="background: rgb(190, 174, 212);">&nbsp;</td>
    <td style="background: rgb(253, 192, 134);">&nbsp;</td>
    <td style="background: rgb(255, 255, 153);">&nbsp;</td>
    <td style="background: rgb(56, 108, 176);">&nbsp;</td>
    <td style="background: rgb(240, 2, 127);">&nbsp;</td>
    <td style="background: rgb(191, 91, 23);">&nbsp;</td>
    <td style="background: rgb(102, 102, 102);">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
    <td>Dark2</td><td style="background: rgb(27, 158, 119);">&nbsp;</td>
    <td style="background: rgb(217, 95, 2);">&nbsp;</td>
    <td style="background: rgb(117, 112, 179);">&nbsp;</td>
    <td style="background: rgb(231, 41, 138);">&nbsp;</td>
    <td style="background: rgb(102, 166, 30);">&nbsp;</td>
    <td style="background: rgb(230, 171, 2);">&nbsp;</td>
    <td style="background: rgb(166, 118, 29);">&nbsp;</td>
    <td style="background: rgb(102, 102, 102);">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
    <td>Paired</td><td style="background: rgb(166, 206, 227);">&nbsp;</td>
    <td style="background: rgb(31, 120, 180);">&nbsp;</td>
    <td style="background: rgb(178, 223, 138);">&nbsp;</td>
    <td style="background: rgb(51, 160, 44);">&nbsp;</td>
    <td style="background: rgb(251, 154, 153);">&nbsp;</td>
    <td style="background: rgb(227, 26, 28);">&nbsp;</td>
    <td style="background: rgb(253, 191, 111);">&nbsp;</td>
    <td style="background: rgb(255, 127, 0);">&nbsp;</td>
    <td style="background: rgb(202, 178, 214);">&nbsp;</td>
    <td style="background: rgb(106, 61, 154);">&nbsp;</td>
    <td style="background: rgb(255, 255, 153);">&nbsp;</td>
    <td style="background: rgb(177, 89, 40);">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
    <td>Pastel1</td><td style="background: rgb(251, 180, 174);">&nbsp;</td>
    <td style="background: rgb(179, 205, 227);">&nbsp;</td>
    <td style="background: rgb(204, 235, 197);">&nbsp;</td>
    <td style="background: rgb(222, 203, 228);">&nbsp;</td>
    <td style="background: rgb(254, 217, 166);">&nbsp;</td>
    <td style="background: rgb(255, 255, 204);">&nbsp;</td>
    <td style="background: rgb(229, 216, 189);">&nbsp;</td>
    <td style="background: rgb(253, 218, 236);">&nbsp;</td>
    <td style="background: rgb(242, 242, 242);">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
    <td>Pastel2</td><td style="background: rgb(179, 226, 205);">&nbsp;</td>
    <td style="background: rgb(253, 205, 172);">&nbsp;</td>
    <td style="background: rgb(203, 213, 232);">&nbsp;</td>
    <td style="background: rgb(244, 202, 228);">&nbsp;</td>
    <td style="background: rgb(230, 245, 201);">&nbsp;</td>
    <td style="background: rgb(255, 242, 174);">&nbsp;</td>
    <td style="background: rgb(241, 226, 204);">&nbsp;</td>
    <td style="background: rgb(204, 204, 204);">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
    <td>Set1</td><td style="background: rgb(228, 26, 28);">&nbsp;</td>
    <td style="background: rgb(55, 126, 184);">&nbsp;</td>
    <td style="background: rgb(77, 175, 74);">&nbsp;</td>
    <td style="background: rgb(152, 78, 163);">&nbsp;</td>
    <td style="background: rgb(255, 127, 0);">&nbsp;</td>
    <td style="background: rgb(255, 255, 51);">&nbsp;</td>
    <td style="background: rgb(166, 86, 40);">&nbsp;</td>
    <td style="background: rgb(247, 129, 191);">&nbsp;</td>
    <td style="background: rgb(153, 153, 153);">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
    <td>Set2</td><td style="background: rgb(102, 194, 165);">&nbsp;</td>
    <td style="background: rgb(252, 141, 98);">&nbsp;</td>
    <td style="background: rgb(141, 160, 203);">&nbsp;</td>
    <td style="background: rgb(231, 138, 195);">&nbsp;</td>
    <td style="background: rgb(166, 216, 84);">&nbsp;</td>
    <td style="background: rgb(255, 217, 47);">&nbsp;</td>
    <td style="background: rgb(229, 196, 148);">&nbsp;</td>
    <td style="background: rgb(179, 179, 179);">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
    <td>Set3</td><td style="background: rgb(141, 211, 199);">&nbsp;</td>
    <td style="background: rgb(255, 255, 179);">&nbsp;</td>
    <td style="background: rgb(190, 186, 218);">&nbsp;</td>
    <td style="background: rgb(251, 128, 114);">&nbsp;</td>
    <td style="background: rgb(128, 177, 211);">&nbsp;</td>
    <td style="background: rgb(253, 180, 98);">&nbsp;</td>
    <td style="background: rgb(179, 222, 105);">&nbsp;</td>
    <td style="background: rgb(252, 205, 229);">&nbsp;</td>
    <td style="background: rgb(217, 217, 217);">&nbsp;</td>
    <td style="background: rgb(188, 128, 189);">&nbsp;</td>
    <td style="background: rgb(204, 235, 197);">&nbsp;</td>
    <td style="background: rgb(255, 237, 111);">&nbsp;</td>
    </tr>
  </tbody>
</table>      
</div>

<br />
Here's an example of how to use a named color scale:

```
element {
  color: scale("net worth", bujumbra);
}
```

## Inverting a color scale

Any color scale can be inverted by adding `-inverted` to the name. For example:

<div class="color-scale">
<table class="table">
  <tbody>
    <tr>
      <td>heat</td>
      <td style="background: #000000;">&nbsp;</td>
      <td style="background: #4D0600;">&nbsp;</td>
      <td style="background: #9C0200;">&nbsp;</td>
      <td style="background: #FF6100;">&nbsp;</td>
      <td style="background: #FFF60B;">&nbsp;</td>
      <td style="background: #FFFFFF;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>heat-inverted</td>
      <td style="background: #FFFFFF;">&nbsp;</td>
      <td style="background: #FFF60B;">&nbsp;</td>
      <td style="background: #FF6100;">&nbsp;</td>
      <td style="background: #9C0200;">&nbsp;</td>
      <td style="background: #4D0600;">&nbsp;</td>
      <td style="background: #000000;">&nbsp;</td>
    </tr>
  </tbody>
</table>      
</div>

## Defining your own color palette

You can define your own color palette by using a comma separated list of color values.

```
@settings {
  element-color: categorize("community", #5BC1AE, #009CDB, #F6882B, #8E278F)
}
```

## Setting explicit stops for color values in categorize()

It's also possible to specify which value should receive a certain color within `categorize()`.

```
@settings {
  element-color: categorize("element type", #5BC1AE "Person", #009CDB "Organization", #F6882B "Region")
}
```
