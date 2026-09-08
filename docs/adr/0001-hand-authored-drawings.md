# Hand-authored Drawings over converted Illustrator art

There is a folder of 59 finished Illustrator illustrations (`~/Downloads/People template`, the source art for a retired Construct 3 game) that this site does not use. It looks like an oversight; it isn't. Those drawings use Illustrator blend modes for shading, so converting them to SVG produces `feImage`/`feBlend` filter chains rather than flat paths. `bodystand.ai` becomes 148KB across 57 filters and 358 anonymous groups, with no named parts to hang the Part/Token model on, and `feImage` renders unreliably in Safari.

We instead carried over `jeffrey-interactive` from the previous site (`react-personal`), which was hand-authored with twenty already-named paths and is therefore already the Part model we want. Simple props from the game folder that *do* convert cleanly (`star`, `tv`, `signpost`, `Arrow`, `platform`) are used as Props.

## Consequences

Reversing this means re-exporting from Illustrator with blend modes expanded and hand-naming every path, perhaps an hour of design work plus the renaming. That path stays open if we ever want a richer figure or the game's walk cycle; it is a deliberate deferral, not a closed door.
