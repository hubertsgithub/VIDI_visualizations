Based on Sean Bell's viewer at: http://www.cs.cornell.edu/~sbell/siggraph2015-embedding.html

'''
There are a few pieces that I glued together:
 - Project with tSNE — Barnes-hut variant with standard params
 - I manually pasted images onto a canvas, snapping to grid locations
 - I saved it to a massive PNG/JPG
 - Create tiles using deepzoom open source code
 - Upload tiles to S3 (or some other image hosting, eg local python web server)
 - View in browser — you could just modify my html to point to your new URL
'''

Use conda activate VIDI

deepzoom: install via https://github.com/openzoom/deepzoom.py
- for python3, change "import StringIO" to "from io import StringIO"
- change "safe_open" to "str" for non url
- some other changes necessary.
- use python2 if don't want to modify package.
- Actually just use the modified deepzoom.py that I've moved here.

Run python deepzoom_tiles.py
Use the output .dzi file to modify tileSources in embedding.html.
