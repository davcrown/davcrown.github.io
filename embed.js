// Click-to-load dashboard embeds: each .lazy-embed shows a screenshot until the visitor
// clicks its launch button, so page views don't wake the shinyapps.io server.
document.querySelectorAll('.lazy-embed').forEach(function (embed) {
    var launch = embed.querySelector('.embed-launch');
    if (!launch) return;
    launch.addEventListener('click', function () {
        var loading = embed.querySelector('.embed-loading');
        var frame = document.createElement('iframe');
        frame.src = embed.dataset.src;
        frame.title = embed.dataset.title;
        frame.loading = 'lazy';
        frame.addEventListener('load', function () {
            loading.hidden = true;
            embed.classList.add('is-loaded');
        });
        embed.querySelector('.embed-preview').hidden = true;
        loading.hidden = false;
        embed.classList.add('is-live');
        embed.appendChild(frame);
    });
});
