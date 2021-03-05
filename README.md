# Simple Color Picker
This is a full stack app that displays a collection of colors from different color groups along with the corresponding hexadecimal color code. You can paginate through a random sorting of colors, generate and dispay a random color, filter by color group, and select specific colors to view it in more detail. 

## Tools Used
- React
- React Router
- PostgreSQL
- Express

## TODOs and Future Development
- [ ] Highlight what page is currently being viewed in the color group and all color pagination (maybe also disable click for pagination number of current page)
- [ ] Scroll to top when paginating - https://reactrouter.com/web/guides/scroll-restoration
- [ ] Figure out why pagination isn't working when the URL page number is manually edited - https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
- [ ] Add loader icons and don't render Pagination or color clear button until colors are rendered
- [ ] When color detail is viewed, show similiar darker and lighter hues/tints/shades
- [ ] Add a button to the color cards that allows the hex code to be copied to clipboard
- [ ] When a specific color group is viewed, sort the colors in more of a gradient-like fashion from dark to light or vice versa (the colors are displayed randomly right now)
- [ ] Add search functionality so that you can search by color group or perhaps hex code (the problem with searching by code is that you're not storing all possible color codes)
- [ ] Add GraphQL API
- [ ] Cache results from my APIs
- [ ] Move CSS to Styled-Components or CSS modules
- [ ] Convert hex codes to additional color units like rgb
- [ ] Programmtically generate all hex codes from scratch
- [ ] Add more colors