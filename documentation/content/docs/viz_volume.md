title: Volume reduction
---

We can generate a reduced 3D image that can be loaded inside a viewer like [ArcticViewer](https://kitware.github.io/arctic-viewer/) that is illustrated below with a [sample dataset](/summarization/data/oscillator-volume.tgz).

![VolumeRendering](./images/image-volume.jpg)

A Live visualization of that dataset can be seen below:

<div class='volume-viewer' style='position: relative; width: 100%; height: 600px; border-radius: 5px; overflow: hidden;'></div>
<script type="text/javascript" src="/summarization/docs/three.js"></script>
<script type="text/javascript" src="/summarization/docs/viewer.js"></script>
<script type="text/javascript">
    ArcticViewer.load('/summarization/data/oscillator-volume/index.json', document.querySelector('.volume-viewer'));
</script>
