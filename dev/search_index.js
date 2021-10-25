var documenterSearchIndex = {"docs":
[{"location":"#WordCloud.jl-Documentation","page":"Index","title":"WordCloud.jl Documentation","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"","category":"page"},{"location":"","page":"Index","title":"Index","text":"CurrentModule = WordCloud\nDocTestSetup = quote\n    using WordCloud\nend","category":"page"},{"location":"#Adding-WordCloud.jl","page":"Index","title":"Adding WordCloud.jl","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"using Pkg\nPkg.add(\"WordCloud\")","category":"page"},{"location":"#Documentation","page":"Index","title":"Documentation","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"Modules = [WordCloud]","category":"page"},{"location":"#WordCloud.WordCloud","page":"Index","title":"WordCloud.WordCloud","text":"The WordCloud package is a flexible, fast and exact word cloud generator in julia.\n\nusing WordCloud\nwc = wordcloud(\"It's easy to generate word clouds\") |> generate!\npaint(wc, \"wordcloud.svg\")\n\nHave a look at the repository: https://github.com/guo-yong-zhi/WordCloud.jl\n\n\n\n\n\n","category":"module"},{"location":"#WordCloud.fit!-Tuple{Any, Vararg{Any, N} where N}","page":"Index","title":"WordCloud.fit!","text":"Positional Args\n\nwc: the wordcloud to fit\nnepoch: training epoch nums\n\nKeyword Args\n\npatient: number of epochs before teleporting\nteleporting: a Bool value to turn on/off teleport, a Float number p between 0~1 indicating the teleporting ratio (Minimum p), a Int number n equivalent to i -> i >= n, a Function index::Int -> doteleport::Boll, or a white list collision.\ntrainer: appoint a training engine\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.generate!-Tuple{WordCloud.WC, Vararg{Any, N} where N}","page":"Index","title":"WordCloud.generate!","text":"Positional Args\n\nwc: the wordcloud to fit\nnepoch: training epoch nums\n\nKeyword Args\n\nretry: shrink & retrain times, defaults to 3, set to 1 to disable shrinking\npatient: number of epochs before teleporting\nteleport: a Bool value to turn on/off teleport, a Float number p between 0~1 indicating the teleporting ratio (Minimum p), a Int number n equivalent to i -> i >= n, a Function index::Int -> doteleport::Boll, or a white list collision.\ntrainer: appoint a training engine\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.getangles","page":"Index","title":"WordCloud.getangles","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index and ignored to return all.\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.getcolors","page":"Index","title":"WordCloud.getcolors","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index and ignored to return all.\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.getfonts","page":"Index","title":"WordCloud.getfonts","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index and ignored to return all.\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.getfontsizes","page":"Index","title":"WordCloud.getfontsizes","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index and ignored to return all.\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.getimages","page":"Index","title":"WordCloud.getimages","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index and ignored to return all.\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.getpositions","page":"Index","title":"WordCloud.getpositions","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index and ignored to return all. Keyword argment type can be getshift or getcenter.\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.getsvgimages","page":"Index","title":"WordCloud.getsvgimages","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index and ignored to return all.\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.getweights","page":"Index","title":"WordCloud.getweights","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index and ignored to return all.\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.getwords","page":"Index","title":"WordCloud.getwords","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index and ignored to return all.\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.ignore-Tuple{Any, WordCloud.WC, AbstractArray{Bool, N} where N}","page":"Index","title":"WordCloud.ignore","text":"ignore some words as if they don't exist, then execute the function. It's the opposite of keep.\n\nignore(fun, wc, ws::String) #ignore a word\nignore(fun, wc, ws::Set{String}) #ignore all words in ws\nignore(fun, wc, ws::Vector{String}) #ignore all words in ws\nignore(fun, wc, inds::Union{Integer, Vector{Integer}})\nignore(fun, wc::WC, mask::AbstractArray{Bool}) #ignore words. length(mask)==length(wc)\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.initwords!-Tuple{Any, Integer}","page":"Index","title":"WordCloud.initwords!","text":"Initialize word's images and other resources with specified style\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.keep-Tuple{Any, WordCloud.WC, AbstractArray{Bool, N} where N}","page":"Index","title":"WordCloud.keep","text":"keep some words and ignore the others, then execute the function. It's the opposite of ignore.\n\nkeep(fun, wc, ws::String) #keep a word\nkeep(fun, wc, ws::Set{String}) #kepp all words in ws\nkeep(fun, wc, ws::Vector{String}) #keep all words in ws\nkeep(fun, wc, inds::Union{Integer, Vector{Integer}})\nkeep(fun, wc::WC, mask::AbstractArray{Bool}) #keep words. length(mask)==length(wc)\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.loadmask-Tuple{AbstractMatrix{var\"#s75\"} where var\"#s75\"<:(ColorTypes.TransparentColor{C, T, 4} where {C<:ColorTypes.AbstractRGB, T}), Vararg{Any, N} where N}","page":"Index","title":"WordCloud.loadmask","text":"load a img as mask, recolor, or resize, etc\n\nexamples\n\nloadmask(open(\"res/heart.jpg\"), 256, 256) #resize to 256*256  \nloadmask(\"res/heart.jpg\", ratio=0.3) #scale 0.3  \nloadmask(\"res/heart.jpg\", color=\"red\", ratio=2) #set forecolor  \nloadmask(\"res/heart.jpg\", transparent=rgba->maximum(rgba[1:3])*(rgba[4]/255)>128) #set transparent with a Function \nloadmask(\"res/heart.jpg\", color=\"red\", transparent=(1,1,1)) #set forecolor and transparent  \nloadmask(\"res/heart.svg\") #other arguments are not supported\n\npadding: an Integer or a tuple of two Integers   About orther keyword arguments like outline, linecolor, smoothness, see function outline.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.paint-Tuple{WordCloud.WC, Vararg{Any, N} where N}","page":"Index","title":"WordCloud.paint","text":"examples\n\npaint(wc::WC)\npaint(wc::WC, background=false) #no background\npaint(wc::WC, background=outline(wc.mask)) #use a new background\npaint(wc::WC, ratio=0.5) #resize the result\npaint(wc::WC, \"result.png\", ratio=0.5) #save as png file, other bitmap formats may also work\npaint(wc::WC, \"result.svg\") #save as svg file\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.paintsvg-Tuple{WordCloud.WC}","page":"Index","title":"WordCloud.paintsvg","text":"like paint but export svg\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.pin-Tuple{Any, WordCloud.WC, AbstractArray{Bool, N} where N}","page":"Index","title":"WordCloud.pin","text":"pin some words as if they were part of the background, then execute the function.\n\npin(fun, wc, ws::String) #pin a word\npin(fun, wc, ws::Set{String}) #pin all words in ws\npin(fun, wc, ws::Vector{String}) #pin all words in ws\npin(fun, wc, inds::Union{Integer, Vector{Integer}})\npin(fun, wc::WC, mask::AbstractArray{Bool}) #pin words. length(mask)==length(wc)\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.placewords!-Tuple{WordCloud.WC}","page":"Index","title":"WordCloud.placewords!","text":"placewords!(wc)\nplacewords!(wc, style=:uniform)\nplacewords!(wc, style=:gathering)\nplacewords!(wc, style=:gathering, level=5) #level controls the intensity of gathering, typically between 4 and 6, defaults to 5.\nplacewords!(wc, style=:gathering, level=6, rt=0) #rt=0, rectangle; rt=1, ellipse; rt=2, rhombus. defaults to 1.  \n\nThere is also a bool keyword argument centerlargestword, which can be set to center the largest word. When you have set style=:gathering, you should disable teleporting in generate! at the same time, especially for big words. e.g. generate!(wc, teleporting=0.7). The keyword argument reorder is a function to reorder the words, which affects the order of placement. Like reverse, WordCloud.shuffle.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.recolor!-Tuple{Any, Vararg{Any, N} where N}","page":"Index","title":"WordCloud.recolor!","text":"recolor the words in wc in different styles with the background picture. The styles supported are :average, :main, :clipping, :blending, and :reset (to undo all effects of others). e.g.  \n\nrecolor!(wc, style=:average)\nrecolor!(wc, style=:mian)\nrecolor!(wc, style=:clipping, background=blur(getmask(wc))) # background is optional\nrecolor!(wc, style=:blending, alpha=0.3) # background and alpha are optional\nrecolor!(wc, style=:reset)\n\nThe effects of :average, :main and :clipping are only determined by the background. But the effect of :blending is also affected by the previous word color. Therefore, :blending can also be used in combination with others The results of clipping and blending can not be exported as SVG files, use PNG instead. \n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.rescale!-Tuple{WordCloud.WC, Real}","page":"Index","title":"WordCloud.rescale!","text":"rescale!(wc::WC, ratio::Real) Rescale all words's size. set ratio<1 to shrink, set ratio>1 to expand.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.runexample","page":"Index","title":"WordCloud.runexample","text":"Available values: [:alice, :animation, :benchmark, :compare, :compare2, :custom, :fromweb, :gathering, :highdensity, :juliadoc, :lettermask, :logo, :nomask, :outline, :pattern, :qianziwen, :random, :recolor, :semantic, :中文]\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.setangles!-Tuple{WordCloud.WC, Any, Union{Number, AbstractVector{var\"#s116\"} where var\"#s116\"<:Number}}","page":"Index","title":"WordCloud.setangles!","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index, the 3rd arg is the value to assign.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.setcolors!-Tuple{WordCloud.WC, Any, Any}","page":"Index","title":"WordCloud.setcolors!","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index, the 3rd arg is the value to assign.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.setfonts!-Tuple{WordCloud.WC, Any, Union{AbstractString, AbstractVector{var\"#s116\"} where var\"#s116\"<:AbstractString}}","page":"Index","title":"WordCloud.setfonts!","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index, the 3rd arg is the value to assign.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.setfontsizes!-Tuple{WordCloud.WC, Any, Union{Number, AbstractVector{var\"#s116\"} where var\"#s116\"<:Number}}","page":"Index","title":"WordCloud.setfontsizes!","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index, the 3rd arg is the value to assign.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.setimages!-Tuple{WordCloud.WC, Any, AbstractMatrix{T} where T}","page":"Index","title":"WordCloud.setimages!","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index, the 3rd arg is the value to assign.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.setpositions!-Tuple{WordCloud.WC, Any, Any}","page":"Index","title":"WordCloud.setpositions!","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index, the 3rd arg is the value to assign. Keyword argment type can be setshift! or setcenter!.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.setsvgimages!-Tuple{WordCloud.WC, Any, Any}","page":"Index","title":"WordCloud.setsvgimages!","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index, the 3rd arg is the value to assign.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.setweights!-Tuple{WordCloud.WC, Any, Union{Number, AbstractVector{var\"#s116\"} where var\"#s116\"<:Number}}","page":"Index","title":"WordCloud.setweights!","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index, the 3rd arg is the value to assign.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.setwords!-Tuple{WordCloud.WC, Any, Union{AbstractString, AbstractVector{var\"#s116\"} where var\"#s116\"<:AbstractString}}","page":"Index","title":"WordCloud.setwords!","text":"The 1st arg is a wordcloud, the 2nd arg can be a word string(list) or a standard supported index, the 3rd arg is the value to assign.\n\n\n\n\n\n","category":"method"},{"location":"#WordCloud.showexample","page":"Index","title":"WordCloud.showexample","text":"Available values: [:alice, :animation, :benchmark, :compare, :compare2, :custom, :fromweb, :gathering, :highdensity, :juliadoc, :lettermask, :logo, :nomask, :outline, :pattern, :qianziwen, :random, :recolor, :semantic, :中文]\n\n\n\n\n\n","category":"function"},{"location":"#WordCloud.wordcloud-Tuple{Tuple}","page":"Index","title":"WordCloud.wordcloud","text":"Positional Arguments\n\nPositional arguments are used to specify words and weights, and can be in different forms, such as Tuple or Dict, etc.\n\nwords::AbstractVector{<:AbstractString}, weights::AbstractVector{<:Real}\nwords_weights::Tuple\ncounter::AbstractDict\ncounter::AbstractVector{<:Pair}\n\nOptional Keyword Arguments\n\nstyle keyword arguments\n\ncolors = \"black\" #all same color  \ncolors = (\"black\", (0.5,0.5,0.7), \"yellow\", \"#ff0000\", 0.2) #choose entries randomly  \ncolors = [\"black\", (0.5,0.5,0.7), \"yellow\", \"red\", (0.5,0.5,0.7), 0.2, ......] #use entries sequentially in cycle  \ncolors = :seaborn_dark #using a preset scheme. see WordCloud.colorschemes for all supported Symbols. and WordCloud.displayschemes() may be helpful.\nangles = 0 #all same angle  \nangles = (0, 90, 45) #choose entries randomly  \nangles = 0:180 #choose entries randomly  \nangles = [0, 22, 4, 1, 100, 10, ......] #use entries sequentially in cycle  \ndensity = 0.55 #default 0.5  \nspacing = 1  #minimum spacing between words\n\nmask keyword arguments\n\nmask = loadmask(\"res/heart.jpg\", 256, 256) #see doc of loadmask  \nmask = loadmask(\"res/heart.jpg\", color=\"red\", ratio=2) #see doc of loadmask  \nmask = shape(ellipse, 800, 600, color=\"white\", backgroundcolor=(0,0,0,0)) #see doc of shape\nmaskshape: box, ellipse, or squircle.  See shape. Take effect only when the mask argument is not given.\nmasksize: Can be a tuple (width, height), tuple (width, height, cornerradius) (for box only) or just a single number as a side length hint. \nbackgroundsize: See shape. Take effect only when the mask argument is not given.\nmaskcolor: like \"black\", \"#ff0000\", (0.5,0.5,0.7), 0.2, or :default, :original (keep it unchanged), :auto (auto recolor the mask).\nbackgroundcolor: like \"black\", \"#ff0000\", (0.5,0.5,0.7), 0.2, or :default, :original, :maskcolor, :auto (random choose between :original and :maskcolor)\noutline, linecolor, smoothness: See function shape and outline. \ntransparent = (1,0,0) #set the transparent color in mask  \ntransparent = nothing #no transparent color  \ntransparent = c->(c[1]+c[2]+c[3])/3*(c[4]/255)>128) #set transparent with a Function. c is a (r,g,b,a) Tuple.\n\n–-NOTE Some arguments depend on whether or not the mask is given or the type of the mask given.\n\nother keyword arguments\n\nThe keyword argument state is a function. It will be called after the wordcloud object constructed. This will set the object to a specific state.\n\nstate = placewords! #default setting, will initialize word's position\nstate = generate! #get result directly\nstate = initwords! #only initialize resources, such as rendering word images\nstate = identity #do nothing\n\n–-NOTE\n\nAfter getting the wordcloud object, these steps are needed to get the result picture: initwords! -> placewords! -> generate! -> paint\nYou can skip placewords! and/or initwords!, and the default action will be performed\n\n\n\n\n\n","category":"method"},{"location":"#Gallery","page":"Index","title":"Gallery","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"WordCloud-Gallery","category":"page"},{"location":"#Index","page":"Index","title":"Index","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"","category":"page"}]
}
