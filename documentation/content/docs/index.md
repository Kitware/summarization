title: Image compositing
---

We can generate an image composite that can dynamically reconstruct using a viewer like [ArcticViewer](https://kitware.github.io/arctic-viewer/) that is illustrated below with a [sample dataset](/summarization/data/oscillator-composite.tgz).

![CompositeContours](./images/image-composite.jpg)

A Live visualization of that dataset can be seen below:

<div class='composite-viewer' style='position: relative; width: 100%; height: 600px; border-radius: 5px; overflow: hidden;'></div>
<script type="text/javascript" src="/summarization/docs/three.js"></script>
<script type="text/javascript" src="/summarization/docs/viewer.js"></script>
<script type="text/javascript">
    ArcticViewer.load('/summarization/data/oscillator-composite/index.json', document.querySelector('.composite-viewer'));
</script>
