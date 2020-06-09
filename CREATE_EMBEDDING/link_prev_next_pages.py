import dominate
import argparse
import glob
import os

argparser = argparse.ArgumentParser()
argparser.add_argument("--input_dir", required=True)#, default="../files_detection/model_0099999.pth_vis_conf0.5_imagelvl_priors")
args = argparser.parse_args()


input_dirs = sorted(glob.glob(os.path.join(args.input_dir, "*embedding")))

for i, inp in enumerate(input_dirs):
    filename = os.path.join(inp, "embedding.html")
    lines = []
    for line in open(filename):
        lines.append(line)
        if "<title>Embedding Visualizer</title>" in line:
            css = """
	<style>
		a {
		  text-decoration: none;
		  display: inline-block;
		  padding: 8px 16px;
		}

		a:hover {
		  background-color: #ddd;
		  color: black;
		}

		.previous {
		  background-color: #f1f1f1;
		  color: black;
		}

		.next {
		  background-color: #4CAF50;
		  color: white;
		}

		.round {
		  border-radius: 50%;
		}
	</style>
	"""
            lines.append(css)
        if "<body>" in line:
            prev_ = '    <a href="../{}/embedding.html" class="previous">&laquo; Previous</a>\n'.format(os.path.basename(input_dirs[i-1]))
            next_ = '    <a href="../{}/embedding.html" class="next">Next &raquo;</a>\n'.format(os.path.basename(input_dirs[(i+1)%len(input_dirs)]))
            home_ = '    <a href="../../../detection.html" class="next">Home</a>\n'.format(os.path.basename(args.input_dir),
                                                                                       os.path.basename(args.input_dir))
            lines.append(home_)
            lines.append(prev_)
            lines.append(next_)
        # if "Home" in line:
            # lines[-1] = lines[-1].replace("detection.md", "detection.html")


    with open(filename, "w+") as fp:
        fp.writelines(lines)
