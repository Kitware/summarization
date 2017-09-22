title: CDF extract and PDF visualization 
---

We developed an parallel algorithm to compute a CDF of a given dataset in an efficient manner.
Then we've exported the CDF in a format that can easily be visualized on the Web inside a viewer like [ArcticViewer](https://kitware.github.io/arctic-viewer/) that is illustrated below with a [sample dataset](/summarization/data/oscillator-cdf.tgz).

![CDF](./images/cdf-pdf.jpg)

A Live visualization of that dataset can be seen below:

<div class='volume-viewer' style='position: relative; width: 100%; height: 600px; border-radius: 5px; overflow: hidden;'></div>
<script type="text/javascript" src="/summarization/docs/three.js"></script>
<script type="text/javascript" src="/summarization/docs/viewer.js"></script>
<script type="text/javascript">
    ArcticViewer.load('/summarization/data/oscillator-cdf/index.json', document.querySelector('.volume-viewer'));
</script>
