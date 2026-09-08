# Personal Site

Jeffrey Gaggino's personal site: a single scrolling page introducing who he is and the work he's done.

## Language

**Section**:
One vertical band of the single page, with its own heading and copy. The page is a fixed, ordered list of Sections; there is no routing between them.
_Avoid_: Page, route, view, screen

**Drawing**:
A hand-drawn illustration of Jeffrey or his work, rendered as inline SVG and composed of individually named Parts.
_Avoid_: Illustration, graphic, background, image, interactive

**Part**:
One named, separately-coloured piece of a Drawing, such as the hair, the shirt, or the left eye. A Part carries its own geometry and names the Token that colours it.
_Avoid_: Path, layer, shape, element

**Prop**:
A small piece of supporting art placed alongside a Drawing, carrying a single flat colour and no Parts. Props decorate; only Drawings depict Jeffrey or his work.
_Avoid_: Icon, asset, decoration, sprite

**Token**:
A named semantic colour a Part refers to, such as `ink` or `skin`. Tokens are the vocabulary Parts are coloured in; they never name a literal colour.
_Avoid_: Variable, colour, custom property, CSS var

**Palette**:
The full set of Tokens resolved to actual colours for one Theme. Swapping the Palette recolours every Drawing at once.
_Avoid_: Colour scheme, theme colours

**Theme**:
Which Palette is in effect: `light` or `dark`, defaulting to `dark`. A Theme changes only colour; it never changes what a Drawing depicts or which Parts it has.
_Avoid_: Mode, dark mode, colour scheme, theme preference
