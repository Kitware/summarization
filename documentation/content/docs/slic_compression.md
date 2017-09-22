title: Volume compression
---

We used a SLIC based compression scheme which stands for Simple Linear Iterative Clustering which allow us to define a set of linear function for a failry small number of clusters. 
Then we've implemented a __decoder__ in VTK.js which rebuild the volume values based on those clusters functions.
Those SLIC based dataset can then be loaded inside a viewer like [ArcticViewer](https://kitware.github.io/arctic-viewer/) that is illustrated below.

![VolumeRendering](./images/slic-volume.jpg)

A Live visualization of that dataset can be seen below:

<div class='volume-viewer' style='position: relative; width: 100%; height: 600px; border-radius: 5px; overflow: hidden;'></div>
<script type="text/javascript" src="/summarization/docs/three.js"></script>
<script type="text/javascript" src="/summarization/docs/viewer.js"></script>
<script type="text/javascript">
    ArcticViewer.load('/summarization/data/oscillator-slic/index.json', document.querySelector('.volume-viewer'));
</script>
