#md# The word clouds generated by WordCloud.jl are always with a mask, but we can imitate the no-mask-style through the following steps:
#md# * set a lower density
#md# * set the background color as the mask color
#md# * gathering style placement
#md# * generating with repositioning off
using WordCloud
wc = wordcloud(
    processtext(open(pkgdir(WordCloud) * "/res/Donald Trump's Inaugural Address.txt"), maxweight=1, minweight=0),
    density=0.3,
    maskshape=box,
    cornerradius=0,
    masksize=(1200, 900),
    backgroundcolor=:maskcolor,
    angles=rand((0, (0, 90))),
    state=identity,
)
#md# place words in the center of the background to prevent encountering the mask boundary
placewords!(wc, style=:gathering, reorder=WordCloud.shuffle, level=6, rt=1) # a proper level is important, and so is luck
paint(wc, "nomask-placewords.svg")
#md# ![](nomask-placewords.svg)
#md# prevent repositioning words to the surrounding blank space
generate!(wc, reposition=false)
paint(wc, "nomask.svg")
wc
#eval# runexample(:nomask)
#md# ![](nomask.svg)
