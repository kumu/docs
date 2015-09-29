# Property Reference
Beneath perspectives, Kumu uses a powerful CSS-based language to control the appearance of your maps.

If you're familiar with CSS, the advanced perspective editor will quickly
become your best friend.  The perspective builder only exposes a small set
of the available properties.  Being able to write perspectives by hand is
the only way to harness the full power of Kumu.

**Note:** We've adopted standard CSS properties and values wherever possible, straying where
conventional values were irrelevant or misleading (eg `display: map` vs `display: block`),
and adding properties specific to Kumu (such as `bullseye-color`).

All values are unitless.

## Catalog of Supported Properties

The table belows lists all of the properties recognized by Kumu. Hover over the information icon at the far right to see additional details and available values for each property. Scroll to the bottom for a list of available @settings properties.

<table class="property-table table table-striped">
  <tbody><tr>
    <th class="text-left">Property</th>
    <th class="text-center">Elements</th>
    <th class="text-center">Connections</th>
    <th class="text-center">Loops</th>
    <th class="text-center"></th>
  </tr>
  <tr data-property="arrow-color">
    <td>arrow-color</td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Override the arrow color for a connection.
<code>color</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="arrow-visibility">
    <td>arrow-visibility</td>


    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls arrow visibility for directed connections.
<code>visible|hidden</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="border-color">
    <td>border-color</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls border color for elements.
<code>color</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="border-width">
    <td>border-width</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls border width for elements.
<code>number</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="bullseye-visibility">
    <td>bullseye-visibility</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls the bullseye visibility for elements.
<code>visible|hidden</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="bullseye-size">
    <td>bullseye-size</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls the bullseye size for elements.
<code>0..1</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="bullseye-color">
    <td>bullseye-color</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls the bullseye color for elements.
<code>color</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="bullseye-opacity">
    <td>bullseye-opacity</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls the bullseye opacity for elements.
<code>0..1</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="color">
    <td>color</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls color of elements and connections
<code>color</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="curvature">
    <td>curvature</td>


    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls the curvature of connections.
<code>0..1</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="delay-visibility">
    <td>delay-visibility</td>


    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls delay visibility for delayed connections.
<code>visible|hidden</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="display">
    <td>display</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls general inclusion.
Hidden objects will be fully removed from the map (see visibility).
<code>map|none</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="visibility">
    <td>visibility</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls general visibility.
Hidden objects will still affect the layout.
<code>visible|hidden</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="font-family">
    <td>font-family</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls general label font family.
<code>'Helvetica Neue', sans-serif</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="font-size">
    <td>font-size</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls general label font size.
<code>number</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="font-style">
    <td>font-style</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls general label style.
<code>normal|italic</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="font-weight">
    <td>font-weight</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls general label font weight.
<code>normal|bold</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="image-url">
    <td>image-url</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls source of element image
<code>url(http://...)</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="image-size">
    <td>image-size</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls element image size
<code>cover|contain</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="image-visibility">
    <td>image-visibility</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls element image visibility
<code>visible|hidden</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="label-visibility">
    <td>label-visibility</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls label visibility for all types.
<code>visible|hidden</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="length">
    <td>length</td>


    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls connection resting length
<code>number</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="margin">
    <td>margin</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls amount of space between the border of an element
and its connections.
<code>number|none</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="opacity">
    <td>opacity</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls general element and connection opacity.
<code>0..1</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="padding">
    <td>padding</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls amount of space between the border of an element
and its core (image / bullseye).
<code>number</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="size">
    <td>size</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls the base element and and connection size.
<code>number</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="scale">
    <td>scale</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls element and connection scale (multiple of base size).
<code>number</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="shadow-visibility">
    <td>shadow-visibility</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls element shadow visibility
<code>visible|hidden</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="shadow-size">
    <td>shadow-size</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls element shadow size.
<code>1..5</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="shadow-color">
    <td>shadow-color</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls element shadow color.
<code>color</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="shadow-opacity">
    <td>shadow-opacity</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls element shadow opacity.
<code>0..1</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="strength">
    <td>strength</td>


    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls connection strength.
<code>0..1</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="style">
    <td>style</td>


    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls connection style.
<code>solid|dashed</code>
" data-original-title="" title=""></i></td>
  </tr>

  <tr data-property="text-align">
    <td>text-align</td>


    <td><i class="fa fa-check"></i></td>



    <td><i class="fa fa-cancel"></i></td>



    <td><i class="fa fa-cancel"></i></td>


    <td><i class="fa fa-info-circle" data-toggle="popover" data-placement="left" data-content="Controls alignment of element labels.
<code>bottom|right</code>
" data-original-title="" title=""></i></td>
  </tr>

</tbody></table>

### @settings Supported Properties

@settings properties are best grouped into a number of categories based on what they can control.

* To be completed
