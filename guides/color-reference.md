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
  <td>YlGn</td><td style="background: rgb(255, 255, 229);">▮</td>
  <td style="background: rgb(247, 252, 185);">▮</td>
  <td style="background: rgb(217, 240, 163);">▮</td>
  <td style="background: rgb(173, 221, 142);">▮</td>
  <td style="background: rgb(120, 198, 121);">▮</td>
  <td style="background: rgb(65, 171, 93);">▮</td>
  <td style="background: rgb(35, 132, 67);">▮</td>
  <td style="background: rgb(0, 104, 55);">▮</td>
  <td style="background: rgb(0, 69, 41);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>YlGnBu</td><td style="background: rgb(255, 255, 217);">▮</td>
  <td style="background: rgb(237, 248, 177);">▮</td>
  <td style="background: rgb(199, 233, 180);">▮</td>
  <td style="background: rgb(127, 205, 187);">▮</td>
  <td style="background: rgb(65, 182, 196);">▮</td>
  <td style="background: rgb(29, 145, 192);">▮</td>
  <td style="background: rgb(34, 94, 168);">▮</td>
  <td style="background: rgb(37, 52, 148);">▮</td>
  <td style="background: rgb(8, 29, 88);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>GnBu</td><td style="background: rgb(247, 252, 240);">▮</td>
  <td style="background: rgb(224, 243, 219);">▮</td>
  <td style="background: rgb(204, 235, 197);">▮</td>
  <td style="background: rgb(168, 221, 181);">▮</td>
  <td style="background: rgb(123, 204, 196);">▮</td>
  <td style="background: rgb(78, 179, 211);">▮</td>
  <td style="background: rgb(43, 140, 190);">▮</td>
  <td style="background: rgb(8, 104, 172);">▮</td>
  <td style="background: rgb(8, 64, 129);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>BuGn</td><td style="background: rgb(247, 252, 253);">▮</td>
  <td style="background: rgb(229, 245, 249);">▮</td>
  <td style="background: rgb(204, 236, 230);">▮</td>
  <td style="background: rgb(153, 216, 201);">▮</td>
  <td style="background: rgb(102, 194, 164);">▮</td>
  <td style="background: rgb(65, 174, 118);">▮</td>
  <td style="background: rgb(35, 139, 69);">▮</td>
  <td style="background: rgb(0, 109, 44);">▮</td>
  <td style="background: rgb(0, 68, 27);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>PuBuGn</td><td style="background: rgb(255, 247, 251);">▮</td>
  <td style="background: rgb(236, 226, 240);">▮</td>
  <td style="background: rgb(208, 209, 230);">▮</td>
  <td style="background: rgb(166, 189, 219);">▮</td>
  <td style="background: rgb(103, 169, 207);">▮</td>
  <td style="background: rgb(54, 144, 192);">▮</td>
  <td style="background: rgb(2, 129, 138);">▮</td>
  <td style="background: rgb(1, 108, 89);">▮</td>
  <td style="background: rgb(1, 70, 54);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>PuBu</td><td style="background: rgb(255, 247, 251);">▮</td>
  <td style="background: rgb(236, 231, 242);">▮</td>
  <td style="background: rgb(208, 209, 230);">▮</td>
  <td style="background: rgb(166, 189, 219);">▮</td>
  <td style="background: rgb(116, 169, 207);">▮</td>
  <td style="background: rgb(54, 144, 192);">▮</td>
  <td style="background: rgb(5, 112, 176);">▮</td>
  <td style="background: rgb(4, 90, 141);">▮</td>
  <td style="background: rgb(2, 56, 88);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>BuPu</td><td style="background: rgb(247, 252, 253);">▮</td>
  <td style="background: rgb(224, 236, 244);">▮</td>
  <td style="background: rgb(191, 211, 230);">▮</td>
  <td style="background: rgb(158, 188, 218);">▮</td>
  <td style="background: rgb(140, 150, 198);">▮</td>
  <td style="background: rgb(140, 107, 177);">▮</td>
  <td style="background: rgb(136, 65, 157);">▮</td>
  <td style="background: rgb(129, 15, 124);">▮</td>
  <td style="background: rgb(77, 0, 75);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>RdPu</td><td style="background: rgb(255, 247, 243);">▮</td>
  <td style="background: rgb(253, 224, 221);">▮</td>
  <td style="background: rgb(252, 197, 192);">▮</td>
  <td style="background: rgb(250, 159, 181);">▮</td>
  <td style="background: rgb(247, 104, 161);">▮</td>
  <td style="background: rgb(221, 52, 151);">▮</td>
  <td style="background: rgb(174, 1, 126);">▮</td>
  <td style="background: rgb(122, 1, 119);">▮</td>
  <td style="background: rgb(73, 0, 106);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>PuRd</td><td style="background: rgb(247, 244, 249);">▮</td>
  <td style="background: rgb(231, 225, 239);">▮</td>
  <td style="background: rgb(212, 185, 218);">▮</td>
  <td style="background: rgb(201, 148, 199);">▮</td>
  <td style="background: rgb(223, 101, 176);">▮</td>
  <td style="background: rgb(231, 41, 138);">▮</td>
  <td style="background: rgb(206, 18, 86);">▮</td>
  <td style="background: rgb(152, 0, 67);">▮</td>
  <td style="background: rgb(103, 0, 31);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>OrRd</td><td style="background: rgb(255, 247, 236);">▮</td>
  <td style="background: rgb(254, 232, 200);">▮</td>
  <td style="background: rgb(253, 212, 158);">▮</td>
  <td style="background: rgb(253, 187, 132);">▮</td>
  <td style="background: rgb(252, 141, 89);">▮</td>
  <td style="background: rgb(239, 101, 72);">▮</td>
  <td style="background: rgb(215, 48, 31);">▮</td>
  <td style="background: rgb(179, 0, 0);">▮</td>
  <td style="background: rgb(127, 0, 0);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>YlOrRd</td><td style="background: rgb(255, 255, 204);">▮</td>
  <td style="background: rgb(255, 237, 160);">▮</td>
  <td style="background: rgb(254, 217, 118);">▮</td>
  <td style="background: rgb(254, 178, 76);">▮</td>
  <td style="background: rgb(253, 141, 60);">▮</td>
  <td style="background: rgb(252, 78, 42);">▮</td>
  <td style="background: rgb(227, 26, 28);">▮</td>
  <td style="background: rgb(189, 0, 38);">▮</td>
  <td style="background: rgb(128, 0, 38);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>YlOrBr</td><td style="background: rgb(255, 255, 229);">▮</td>
  <td style="background: rgb(255, 247, 188);">▮</td>
  <td style="background: rgb(254, 227, 145);">▮</td>
  <td style="background: rgb(254, 196, 79);">▮</td>
  <td style="background: rgb(254, 153, 41);">▮</td>
  <td style="background: rgb(236, 112, 20);">▮</td>
  <td style="background: rgb(204, 76, 2);">▮</td>
  <td style="background: rgb(153, 52, 4);">▮</td>
  <td style="background: rgb(102, 37, 6);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>Purples</td><td style="background: rgb(252, 251, 253);">▮</td>
  <td style="background: rgb(239, 237, 245);">▮</td>
  <td style="background: rgb(218, 218, 235);">▮</td>
  <td style="background: rgb(188, 189, 220);">▮</td>
  <td style="background: rgb(158, 154, 200);">▮</td>
  <td style="background: rgb(128, 125, 186);">▮</td>
  <td style="background: rgb(106, 81, 163);">▮</td>
  <td style="background: rgb(84, 39, 143);">▮</td>
  <td style="background: rgb(63, 0, 125);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>Blues</td><td style="background: rgb(247, 251, 255);">▮</td>
  <td style="background: rgb(222, 235, 247);">▮</td>
  <td style="background: rgb(198, 219, 239);">▮</td>
  <td style="background: rgb(158, 202, 225);">▮</td>
  <td style="background: rgb(107, 174, 214);">▮</td>
  <td style="background: rgb(66, 146, 198);">▮</td>
  <td style="background: rgb(33, 113, 181);">▮</td>
  <td style="background: rgb(8, 81, 156);">▮</td>
  <td style="background: rgb(8, 48, 107);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>Greens</td><td style="background: rgb(247, 252, 245);">▮</td>
  <td style="background: rgb(229, 245, 224);">▮</td>
  <td style="background: rgb(199, 233, 192);">▮</td>
  <td style="background: rgb(161, 217, 155);">▮</td>
  <td style="background: rgb(116, 196, 118);">▮</td>
  <td style="background: rgb(65, 171, 93);">▮</td>
  <td style="background: rgb(35, 139, 69);">▮</td>
  <td style="background: rgb(0, 109, 44);">▮</td>
  <td style="background: rgb(0, 68, 27);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>Oranges</td><td style="background: rgb(255, 245, 235);">▮</td>
  <td style="background: rgb(254, 230, 206);">▮</td>
  <td style="background: rgb(253, 208, 162);">▮</td>
  <td style="background: rgb(253, 174, 107);">▮</td>
  <td style="background: rgb(253, 141, 60);">▮</td>
  <td style="background: rgb(241, 105, 19);">▮</td>
  <td style="background: rgb(217, 72, 1);">▮</td>
  <td style="background: rgb(166, 54, 3);">▮</td>
  <td style="background: rgb(127, 39, 4);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>Reds</td><td style="background: rgb(255, 245, 240);">▮</td>
  <td style="background: rgb(254, 224, 210);">▮</td>
  <td style="background: rgb(252, 187, 161);">▮</td>
  <td style="background: rgb(252, 146, 114);">▮</td>
  <td style="background: rgb(251, 106, 74);">▮</td>
  <td style="background: rgb(239, 59, 44);">▮</td>
  <td style="background: rgb(203, 24, 29);">▮</td>
  <td style="background: rgb(165, 15, 21);">▮</td>
  <td style="background: rgb(103, 0, 13);">▮</td>
  </tr>
      <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>Greys</td><td style="background: rgb(255, 255, 255);">▮</td>
  <td style="background: rgb(240, 240, 240);">▮</td>
  <td style="background: rgb(217, 217, 217);">▮</td>
  <td style="background: rgb(189, 189, 189);">▮</td>
  <td style="background: rgb(150, 150, 150);">▮</td>
  <td style="background: rgb(115, 115, 115);">▮</td>
  <td style="background: rgb(82, 82, 82);">▮</td>
  <td style="background: rgb(37, 37, 37);">▮</td>
  <td style="background: rgb(0, 0, 0);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>PuOr</td><td style="background: rgb(127, 59, 8);">▮</td>
  <td style="background: rgb(179, 88, 6);">▮</td>
  <td style="background: rgb(224, 130, 20);">▮</td>
  <td style="background: rgb(253, 184, 99);">▮</td>
  <td style="background: rgb(254, 224, 182);">▮</td>
  <td style="background: rgb(247, 247, 247);">▮</td>
  <td style="background: rgb(216, 218, 235);">▮</td>
  <td style="background: rgb(178, 171, 210);">▮</td>
  <td style="background: rgb(128, 115, 172);">▮</td>
  <td style="background: rgb(84, 39, 136);">▮</td>
  <td style="background: rgb(45, 0, 75);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>BrBG</td><td style="background: rgb(84, 48, 5);">▮</td>
  <td style="background: rgb(140, 81, 10);">▮</td>
  <td style="background: rgb(191, 129, 45);">▮</td>
  <td style="background: rgb(223, 194, 125);">▮</td>
  <td style="background: rgb(246, 232, 195);">▮</td>
  <td style="background: rgb(245, 245, 245);">▮</td>
  <td style="background: rgb(199, 234, 229);">▮</td>
  <td style="background: rgb(128, 205, 193);">▮</td>
  <td style="background: rgb(53, 151, 143);">▮</td>
  <td style="background: rgb(1, 102, 94);">▮</td>
  <td style="background: rgb(0, 60, 48);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>PRGn</td><td style="background: rgb(64, 0, 75);">▮</td>
  <td style="background: rgb(118, 42, 131);">▮</td>
  <td style="background: rgb(153, 112, 171);">▮</td>
  <td style="background: rgb(194, 165, 207);">▮</td>
  <td style="background: rgb(231, 212, 232);">▮</td>
  <td style="background: rgb(247, 247, 247);">▮</td>
  <td style="background: rgb(217, 240, 211);">▮</td>
  <td style="background: rgb(166, 219, 160);">▮</td>
  <td style="background: rgb(90, 174, 97);">▮</td>
  <td style="background: rgb(27, 120, 55);">▮</td>
  <td style="background: rgb(0, 68, 27);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>PiYG</td><td style="background: rgb(142, 1, 82);">▮</td>
  <td style="background: rgb(197, 27, 125);">▮</td>
  <td style="background: rgb(222, 119, 174);">▮</td>
  <td style="background: rgb(241, 182, 218);">▮</td>
  <td style="background: rgb(253, 224, 239);">▮</td>
  <td style="background: rgb(247, 247, 247);">▮</td>
  <td style="background: rgb(230, 245, 208);">▮</td>
  <td style="background: rgb(184, 225, 134);">▮</td>
  <td style="background: rgb(127, 188, 65);">▮</td>
  <td style="background: rgb(77, 146, 33);">▮</td>
  <td style="background: rgb(39, 100, 25);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>RdBu</td><td style="background: rgb(103, 0, 31);">▮</td>
  <td style="background: rgb(178, 24, 43);">▮</td>
  <td style="background: rgb(214, 96, 77);">▮</td>
  <td style="background: rgb(244, 165, 130);">▮</td>
  <td style="background: rgb(253, 219, 199);">▮</td>
  <td style="background: rgb(247, 247, 247);">▮</td>
  <td style="background: rgb(209, 229, 240);">▮</td>
  <td style="background: rgb(146, 197, 222);">▮</td>
  <td style="background: rgb(67, 147, 195);">▮</td>
  <td style="background: rgb(33, 102, 172);">▮</td>
  <td style="background: rgb(5, 48, 97);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>RdGy</td><td style="background: rgb(103, 0, 31);">▮</td>
  <td style="background: rgb(178, 24, 43);">▮</td>
  <td style="background: rgb(214, 96, 77);">▮</td>
  <td style="background: rgb(244, 165, 130);">▮</td>
  <td style="background: rgb(253, 219, 199);">▮</td>
  <td style="background: rgb(255, 255, 255);">▮</td>
  <td style="background: rgb(224, 224, 224);">▮</td>
  <td style="background: rgb(186, 186, 186);">▮</td>
  <td style="background: rgb(135, 135, 135);">▮</td>
  <td style="background: rgb(77, 77, 77);">▮</td>
  <td style="background: rgb(26, 26, 26);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>RdYlBu</td><td style="background: rgb(165, 0, 38);">▮</td>
  <td style="background: rgb(215, 48, 39);">▮</td>
  <td style="background: rgb(244, 109, 67);">▮</td>
  <td style="background: rgb(253, 174, 97);">▮</td>
  <td style="background: rgb(254, 224, 144);">▮</td>
  <td style="background: rgb(255, 255, 191);">▮</td>
  <td style="background: rgb(224, 243, 248);">▮</td>
  <td style="background: rgb(171, 217, 233);">▮</td>
  <td style="background: rgb(116, 173, 209);">▮</td>
  <td style="background: rgb(69, 117, 180);">▮</td>
  <td style="background: rgb(49, 54, 149);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>Spectral</td><td style="background: rgb(158, 1, 66);">▮</td>
  <td style="background: rgb(213, 62, 79);">▮</td>
  <td style="background: rgb(244, 109, 67);">▮</td>
  <td style="background: rgb(253, 174, 97);">▮</td>
  <td style="background: rgb(254, 224, 139);">▮</td>
  <td style="background: rgb(255, 255, 191);">▮</td>
  <td style="background: rgb(230, 245, 152);">▮</td>
  <td style="background: rgb(171, 221, 164);">▮</td>
  <td style="background: rgb(102, 194, 165);">▮</td>
  <td style="background: rgb(50, 136, 189);">▮</td>
  <td style="background: rgb(94, 79, 162);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
  <tr>
  <td>RdYlGn</td><td style="background: rgb(165, 0, 38);">▮</td>
  <td style="background: rgb(215, 48, 39);">▮</td>
  <td style="background: rgb(244, 109, 67);">▮</td>
  <td style="background: rgb(253, 174, 97);">▮</td>
  <td style="background: rgb(254, 224, 139);">▮</td>
  <td style="background: rgb(255, 255, 191);">▮</td>
  <td style="background: rgb(217, 239, 139);">▮</td>
  <td style="background: rgb(166, 217, 106);">▮</td>
  <td style="background: rgb(102, 189, 99);">▮</td>
  <td style="background: rgb(26, 152, 80);">▮</td>
  <td style="background: rgb(0, 104, 55);">▮</td>
  </tr>
  <tr class="spacer"><td>▮</td></tr>
    <tr>
      <td>nautical</td>
      <td style="background: #003250;">▮</td>
      <td style="background: #5893ac;">▮</td>
      <td style="background: #bbd2e0;">▮</td>
      <td style="background: #f2f2f5;">▮</td>
      <td style="background: #a7a7a7;">▮</td>
      <td style="background: #787878;">▮</td>
    </tr>
    <tr class="spacer"><td>▮</td></tr>
    <tr>
      <td>deepsea</td>
      <td style="background: #005F98;">▮</td>
      <td style="background: #296F98;">▮</td>
      <td style="background: #3C779A;">▮</td>
      <td style="background: #60849A;">▮</td>
      <td style="background: #788D9A;">▮</td>
    </tr>
    <tr class="spacer"><td>▮</td></tr>
    <tr>
      <td>heat</td>
      <td style="background: #000000;">▮</td>
      <td style="background: #4D0600;">▮</td>
      <td style="background: #9C0200;">▮</td>
      <td style="background: #FF6100;">▮</td>
      <td style="background: #FFF60B;">▮</td>
      <td style="background: #FFFFFF;">▮</td>
    </tr>
    <tr class="spacer"><td>▮</td></tr>
    <tr>
      <td>flamingo</td>
      <td style="background: #CC66A4;">▮</td>
      <td style="background: #CE8DAD;">▮</td>
      <td style="background: #D4AFBD;">▮</td>
      <td style="background: #DECED2;">▮</td>
      <td style="background: #EDE9E9;">▮</td>
      <td style="background: #FFFFFF;">▮</td>
    </tr>
    <tr class="spacer"><td>▮</td></tr>
    <tr>
      <td>coffee</td>
      <td style="background: #684F19;">▮</td>
      <td style="background: #86723D;">▮</td>
      <td style="background: #A49561;">▮</td>
      <td style="background: #C3B984;">▮</td>
      <td style="background: #E1DCA8;">▮</td>
      <td style="background: #FFFFCC;">▮</td>
    </tr>
    <tr class="spacer"><td>▮</td></tr>
    <tr>
      <td>stoplight</td>
      <td style="background: #62B944;">▮</td>
      <td style="background: #FDBE0F;">▮</td>
      <td style="background: #E02D28;">▮</td>
    </tr>
  </tbody>
</table>      
</div>

### Qualitative

Qualitative color palettes are best when you are trying to show data with discrete values that don't have an inherent order.

<table class="table">
  <tbody>
    <tr>
      <td>bujumbra</td>
      <td>
        <span style="color: #BE420E;">▮</td>
        <span style="color: #BE6D0E;">▮</td>
        <span style="color: #6B4F2E;">▮</td>
        <span style="color: #CCA066;">▮</td>
        <span style="color: #E0D752;">▮</td>
        <span style="color: #A5BE0E;">▮</td>
        <span style="color: #4197E3;">▮</td>
      </td>
    </tr>
    <tr>
      <td>neon</td>
      <td>
        <span style="color: #9FDE00;">▮</td>
        <span style="color: #E7000C;">▮</td>
        <span style="color: #EC008C;">▮</td>
        <span style="color: #FF7404;">▮</td>
        <span style="color: #FFBE2A;">▮</td>
        <span style="color: #8FB9E1;">▮</td>
        <span style="color: #D5EAFF;">▮</td>
        <span style="color: #F6F4F4;">▮</td>
      </td>
    </tr>
    <tr>
      <td>neon2</td>
      <td>
        <span style="color: #00B9FC;">▮</td>
        <span style="color: #FEE300;">▮</td>
        <span style="color: #8EDC0C;">▮</td>
        <span style="color: #F69010;">▮</td>
        <span style="color: #FD0100;">▮</td>
        <span style="color: #F33389;">▮</td>
        <span style="color: #0B080F;">▮</td>
      </td>
    </tr>
    <tr>
      <td>olympic</td>
      <td>
        <span style="color: #007AC3;">▮</td>
        <span style="color: #FDBE0F;">▮</td>
        <span style="color: #4CC9E9;">▮</td>
        <span style="color: #E02D28;">▮</td>
        <span style="color: #62B944;">▮</td>
      </td>
    </tr>
    <tr>
      <td>Accent</td>
      <td>
        <span style="color: rgb(127, 201, 127);">▮</td>
        <span style="color: rgb(190, 174, 212);">▮</td>
        <span style="color: rgb(253, 192, 134);">▮</td>
        <span style="color: rgb(255, 255, 153);">▮</td>
        <span style="color: rgb(56, 108, 176);">▮</td>
        <span style="color: rgb(240, 2, 127);">▮</td>
        <span style="color: rgb(191, 91, 23);">▮</td>
        <span style="color: rgb(102, 102, 102);">▮</td>
      </td>
    </tr>
    <tr>
      <td>Dark2</td>
      <span style="color: rgb(27, 158, 119);">▮</td>
      <span style="color: rgb(217, 95, 2);">▮</td>
      <span style="color: rgb(117, 112, 179);">▮</td>
      <span style="color: rgb(231, 41, 138);">▮</td>
      <span style="color: rgb(102, 166, 30);">▮</td>
      <span style="color: rgb(230, 171, 2);">▮</td>
      <span style="color: rgb(166, 118, 29);">▮</td>
      <span style="color: rgb(102, 102, 102);">▮</td>
    </tr>
    <tr>
    <td>Paired</td>
    <td>
    <span style="color: rgb(166, 206, 227);">▮</td>
    <span style="color: rgb(31, 120, 180);">▮</td>
    <span style="color: rgb(178, 223, 138);">▮</td>
    <span style="color: rgb(51, 160, 44);">▮</td>
    <span style="color: rgb(251, 154, 153);">▮</td>
    <span style="color: rgb(227, 26, 28);">▮</td>
    <span style="color: rgb(253, 191, 111);">▮</td>
    <span style="color: rgb(255, 127, 0);">▮</td>
    <span style="color: rgb(202, 178, 214);">▮</td>
    <span style="color: rgb(106, 61, 154);">▮</td>
    <span style="color: rgb(255, 255, 153);">▮</td>
    <span style="color: rgb(177, 89, 40);">▮</td>
    </td>
    </tr>
    <tr>
    <td>Pastel1</td>
    <td>
    <span style="color: rgb(251, 180, 174);">▮</td>
    <span style="color: rgb(179, 205, 227);">▮</td>
    <span style="color: rgb(204, 235, 197);">▮</td>
    <span style="color: rgb(222, 203, 228);">▮</td>
    <span style="color: rgb(254, 217, 166);">▮</td>
    <span style="color: rgb(255, 255, 204);">▮</td>
    <span style="color: rgb(229, 216, 189);">▮</td>
    <span style="color: rgb(253, 218, 236);">▮</td>
    <span style="color: rgb(242, 242, 242);">▮</td>
    </td>
    </tr>
    <tr>
    <td>Pastel2</td>
    <span style="color: rgb(179, 226, 205);">▮</td>
    <span style="color: rgb(253, 205, 172);">▮</td>
    <span style="color: rgb(203, 213, 232);">▮</td>
    <span style="color: rgb(244, 202, 228);">▮</td>
    <span style="color: rgb(230, 245, 201);">▮</td>
    <span style="color: rgb(255, 242, 174);">▮</td>
    <span style="color: rgb(241, 226, 204);">▮</td>
    <span style="color: rgb(204, 204, 204);">▮</td>
    </tr>
    <tr>
    <td>Set1</td>
    <td>
    <span style="color: rgb(228, 26, 28);">▮</td>
    <span style="color: rgb(55, 126, 184);">▮</td>
    <span style="color: rgb(77, 175, 74);">▮</td>
    <span style="color: rgb(152, 78, 163);">▮</td>
    <span style="color: rgb(255, 127, 0);">▮</td>
    <span style="color: rgb(255, 255, 51);">▮</td>
    <span style="color: rgb(166, 86, 40);">▮</td>
    <span style="color: rgb(247, 129, 191);">▮</td>
    <span style="color: rgb(153, 153, 153);">▮</td>
    </td>
    </tr>
    <tr class="spacer"><td>▮</td></tr>
    <tr>
    <td>Set2</td>
    <td>
    <span style="color: rgb(102, 194, 165);">▮</td>
    <span style="color: rgb(252, 141, 98);">▮</td>
    <span style="color: rgb(141, 160, 203);">▮</td>
    <span style="color: rgb(231, 138, 195);">▮</td>
    <span style="color: rgb(166, 216, 84);">▮</td>
    <span style="color: rgb(255, 217, 47);">▮</td>
    <span style="color: rgb(229, 196, 148);">▮</td>
    <span style="color: rgb(179, 179, 179);">▮</td>
    </td>
    </tr>
    <tr class="spacer"><td>▮</td></tr>
    <tr>
    <td>Set3</td>
    <td>
    <span style="color: rgb(141, 211, 199);">▮</span>
    <span style="color: rgb(255, 255, 179);">▮</span>
    <span style="color: rgb(190, 186, 218);">▮</span>
    <span style="color: rgb(251, 128, 114);">▮</span>
    <span style="color: rgb(128, 177, 211);">▮</span>
    <span style="color: rgb(253, 180, 98);">▮</span>
    <span style="color: rgb(179, 222, 105);">▮</span>
    <span style="color: rgb(252, 205, 229);">▮</span>
    <span style="color: rgb(217, 217, 217);">▮</span>
    <span style="color: rgb(188, 128, 189);">▮</span>
    <span style="color: rgb(204, 235, 197);">▮</span>
    <span style="color: rgb(255, 237, 111);">▮</span>
    </td>
    </tr>
  </tbody>
</table>      

Here's an example of how to use a named color scale:

```scss
element {
  color: scale("net worth", bujumbra);
}
```

## Inverting a color scale

Any color scale can be inverted by adding `-inverted` to the name. For example:

<table class="table">
  <tbody>
    <tr>
      <td>heat</td>
      <td>
      <span style="color: #000000;">▮</span>
      <span style="color: #4D0600;">▮</span>
      <span style="color: #9C0200;">▮</span>
      <span style="color: #FF6100;">▮</span>
      <span style="color: #FFF60B;">▮</span>
      <span style="color: #FFFFFF;">▮</span>
      </td>
    </tr>
    <tr class="spacer"><td>▮</td></tr>
    <tr>
      <td>heat-inverted</td>
      <td>
      <span style="color: #FFFFFF;">▮</span>
      <span style="color: #FFF60B;">▮</span>
      <span style="color: #FF6100;">▮</span>
      <span style="color: #9C0200;">▮</span>
      <span style="color: #4D0600;">▮</span>
      <span style="color: #000000;">▮</span>
      </td>
    </tr>
  </tbody>
</table>      

## Defining your own color palette

You can define your own color palette for elements by using a comma separated list of color values.

```scss
@settings {
  element-color: categorize("community", #5BC1AE, #009CDB, #F6882B, #8E278F)
}
```

For [flags](/guides/flags.md), the code is slightly different: 

```scss
@settings {
  element-flag: "Tags" with #5BC1AE, #009CDB, #F6882B, #8E278F;
}
```

## Setting explicit stops for color values in categorize()

It's also possible to specify which value should receive a certain color for elements.

```scss
@settings {
  element-color: categorize("element type", #5BC1AE "Person", #009CDB "Organization", #F6882B "Region")
}
```

For [flags](/guides/flags.md), the code is slightly different: 

```scss
@settings {
  element-flag: "Tags" with #5BC1AE "Person", #009CDB "Organization", #F6882B "Region;
}
```
