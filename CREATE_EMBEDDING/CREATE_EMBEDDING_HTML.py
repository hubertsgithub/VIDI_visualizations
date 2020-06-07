import deepzoom
import PIL.Image
import os
import shutil
import argparse
import glob

##########
# https://stackoverflow.com/questions/579310/formatting-long-numbers-as-strings-in-python
def human_format(num):
    num = float('{:.3g}'.format(num))
    magnitude = 0
    while abs(num) >= 1000:
        magnitude += 1
        num /= 1000.0
    return '{}{}'.format('{:f}'.format(num).rstrip('0').rstrip('.'), ['', 'K', 'M', 'B', 'T'][magnitude])
##########



overwrite = True

################################################################################
input_dir = "/home/hubert/projects/VIDI/detection/model_0009999.pth_vis_conf0.5"
###############################################################################

md_file = os.path.basename(input_dir)+".md"
md_file_lines = []
md_file_lines.extend(
    [
    '---\n',
    'layout: default\n',
    '---\n'
    ]
)



for INPUT_IMAGE in glob.glob(os.path.join(input_dir, "*")):

    height = None
    width = None
    # INPUT_IMAGE = "/home/hubert/projects/VIDI/detection/model_0009999.pth_vis_conf0.5/00052501.jpg"
    OUTPUT_DIR = os.path.abspath("../files_detection/{}/{}_embedding".format(os.path.basename(input_dir), os.path.basename(INPUT_IMAGE)))

    if height is None or width is None:
        width, height = PIL.Image.open(INPUT_IMAGE).size

    print("==== Writing output to: ====")
    print(OUTPUT_DIR)
    print("overwrite: {}".format(overwrite))
    print("dir exists: {}".format(os.path.exists(OUTPUT_DIR)))
    print("============================")
    if os.path.exists(OUTPUT_DIR):
        if not overwrite:
            raise Exception("Set overwrite to True to overwrite existing directory!")
        else:
            shutil.rmtree(OUTPUT_DIR)
    os.makedirs(OUTPUT_DIR)

    ### Create DeepZoom Tiles. ###
    PIL.Image.MAX_IMAGE_PIXELS = 13151043584
    creator = deepzoom.ImageCreator(tile_size=256, tile_overlap=1, tile_format="jpg",
                                    image_quality=0.8, resize_filter="bilinear")
    creator.create(INPUT_IMAGE, os.path.join(OUTPUT_DIR, os.path.basename(INPUT_IMAGE)+".dzi"))

    ### Create Embedding HTML. ###
    embedding_html_template = open("embedding_template.html", "r")
    lines = []
    template_repl = {"<<TSNE_FILES_PATH>>": os.path.basename(INPUT_IMAGE)+"_files/",
                    "<<HEIGHT>>": height,
                    "<<WIDTH>>": width,
                    }
    template_repl = {k:str(v) for k,v in template_repl.items()}

    for line in embedding_html_template:
        for key in template_repl:
            line = line.replace(key, template_repl[key])
        # print(line)
        lines.append(line)

    outfp = open(os.path.join(OUTPUT_DIR, "embedding.html"), "w+")
    outfp.write("".join(lines))
    outfp.close()
    md_file_lines.append(
    "[{}](./{}_embedding/embedding.html) <br>\n".format(os.path.basename(INPUT_IMAGE), os.path.basename(INPUT_IMAGE)))




print("=====")
md_file_path = os.path.abspath("../files_detection/{}/{}".format(os.path.basename(input_dir), md_file))
print("Writing md file to {}".format(md_file_path))
with open(md_file_path, 'w+') as fp:
    fp.writelines(md_file_lines)

