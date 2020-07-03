import glob
import os

segmentation_md = open("./segmentation_md_lines.txt", "w+")

lines = []
for cat in sorted(glob.glob("./files_segmentation/segmentation_vis/*")):
    cat_basename = os.path.basename(cat)
    lines.append(f"#### {cat_basename.title()} <br>")

    for img in glob.glob(os.path.join(cat, "*")):
        lines.append(f"![]({img}) <br>")

segmentation_md.write("\n".join(lines))

